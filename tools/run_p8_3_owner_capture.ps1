param(
    [string]$GodotExe = $env:GODOT_EXE,
    [switch]$NoExplorer
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $repoRoot

function Resolve-Executable {
    param(
        [string]$Explicit,
        [string[]]$Candidates,
        [string]$Label
    )

    if ($Explicit) {
        if (Test-Path $Explicit) {
            return (Resolve-Path $Explicit).Path
        }
        $cmd = Get-Command $Explicit -ErrorAction SilentlyContinue
        if ($cmd) {
            return $cmd.Source
        }
        throw "$Label executable not found: $Explicit"
    }

    foreach ($candidate in $Candidates) {
        $cmd = Get-Command $candidate -ErrorAction SilentlyContinue
        if ($cmd) {
            return $cmd.Source
        }
    }

    throw "$Label executable not found. Install Godot 4.6.x (CI reference: 4.6.3) and either add it to PATH or rerun with -GodotExe 'C:\path\to\Godot_v4.6.3-stable_win64.exe'."
}

function Invoke-Checked {
    param(
        [string]$Label,
        [string]$Exe,
        [string[]]$Arguments
    )

    Write-Host ""
    Write-Host "==> $Label" -ForegroundColor Cyan
    & $Exe @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "$Label failed with exit code $LASTEXITCODE"
    }
}

$godot = Resolve-Executable -Explicit $GodotExe -Candidates @("godot", "godot4") -Label "Godot"

$python = $null
$pythonArgsPrefix = @()
$py = Get-Command "py" -ErrorAction SilentlyContinue
if ($py) {
    $python = $py.Source
    $pythonArgsPrefix = @("-3")
} else {
    $pythonCmd = Get-Command "python" -ErrorAction SilentlyContinue
    if ($pythonCmd) {
        $python = $pythonCmd.Source
    }
}
if (-not $python) {
    throw "Python 3 was not found. Install Python 3 or make 'py'/'python' available in PATH."
}

Write-Host "Repository : $repoRoot"
Write-Host "Godot      : $godot"
Write-Host "Python     : $python"

$captureDir = Join-Path $repoRoot "godot\captures\owner-evidence"
if (Test-Path $captureDir) {
    Remove-Item $captureDir -Recurse -Force
}

Invoke-Checked -Label "Materialize pinned P6 Beedrill #015" -Exe $python -Arguments ($pythonArgsPrefix + @("tools/materialize_p8_3_beedrill.py"))

$atlasPath = Join-Path $repoRoot "godot\local_assets\pokemon\beedrill\15.png"
$metadataPath = Join-Path $repoRoot "godot\local_assets\pokemon\beedrill\15.json"
$provenancePath = Join-Path $repoRoot "godot\local_assets\pokemon\beedrill\provenance.json"
foreach ($path in @($atlasPath, $metadataPath, $provenancePath)) {
    if (-not (Test-Path $path)) {
        throw "Materialization did not produce required local file: $path"
    }
}

Invoke-Checked -Label "Import retained and local Godot resources" -Exe $godot -Arguments @("--headless", "--path", "godot", "--import")
Invoke-Checked -Label "Run deterministic parity/save smoke" -Exe $godot -Arguments @("--headless", "--path", "godot", "--script", "res://tests/parity_smoke.gd")
Invoke-Checked -Label "Run layered visual contract smoke" -Exe $godot -Arguments @("--headless", "--path", "godot", "--script", "res://tests/visual_contract_smoke.gd")

Write-Host ""
Write-Host "==> Render real-P6 owner evidence (a Godot window may appear briefly)" -ForegroundColor Cyan
& $godot --path godot --script res://tests/owner_evidence_capture.gd
if ($LASTEXITCODE -ne 0) {
    throw "Owner evidence capture failed with exit code $LASTEXITCODE"
}

$openingPath = Join-Path $captureDir "opening.png"
$eventPath = Join-Path $captureDir "windbreak-beedrill.png"
$manifestPath = Join-Path $captureDir "manifest.json"
foreach ($path in @($openingPath, $eventPath, $manifestPath)) {
    if (-not (Test-Path $path)) {
        throw "Owner capture did not produce required evidence: $path"
    }
}

$manifest = Get-Content $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
if (-not $manifest.p6.files_present) {
    throw "Manifest says P6 files are missing. Refusing stale/invalid owner evidence."
}
if (-not $manifest.p6.rendered) {
    throw "Manifest says the real P6 Beedrill was not rendered."
}
if ([int]$manifest.p6.frame_count -lt 2) {
    throw "Manifest reports fewer than two Beedrill animation frames."
}
if (-not $manifest.owner_evidence_candidate) {
    throw "Manifest is not marked owner_evidence_candidate=true."
}

Write-Host ""
Write-Host "P8.3 real-P6 owner capture: PASS" -ForegroundColor Green
Write-Host "Frames     : $($manifest.p6.frame_count)"
Write-Host "Opening    : $openingPath"
Write-Host "Windbreak  : $eventPath"
Write-Host "Manifest   : $manifestPath"
Write-Host ""
Write-Host "Review manually:" -ForegroundColor Yellow
Write-Host "  1. Beedrill scale/placement"
Write-Host "  2. animation stability across frames"
Write-Host "  3. foreground branch/foliage occlusion over the Pokemon layer"
Write-Host "  4. opening -> event fade/input feel by running the main scene in the editor"
Write-Host "  5. whether the Godot composition materially beats the rejected DOM/PWA shell"
Write-Host ""
Write-Host "Do NOT git-add godot/local_assets or godot/captures."

if (-not $NoExplorer) {
    Start-Process explorer.exe $captureDir
}
