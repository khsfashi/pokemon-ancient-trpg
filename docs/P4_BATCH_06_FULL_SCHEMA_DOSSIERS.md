# P4 Batch 06 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 06 audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_06_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`

## 1. Review boundary

All eight Batch 06 species use the frozen P4 dossier schema and `p4-six-axis-v1` with no manual stat exception.

For reviewability the eight complete records are stored one species per document rather than as one very large fenced-YAML document. This is only document granularity: the dossier schema, manifest semantics and batch promotion rules are unchanged.

```text
nidoran_f_and_nidoran_m_are_distinct_species == true
generic_reproduction_system_created == false
generic_family_morale_attribute_created == false
generic_parenting_system_created == false
kangaskhan_active_entity_count == 1
kangaskhan_visible_companion_slot_cost == 1
kangaskhan_child_is_dependent_associated_state == true
ordinary_kangaskhan_child_independent_action == false
mega_kangaskhan_semantics_imported == false
tauros_protector_is_explicit_individual_state == true
generic_elite_affix_created == false
player_level_scaling_created == false
modern_transmission_infrastructure_backfilled == false
hazard_severity_capped_by_species_stats == false
```

## 2. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #029 | Nidoran♀ / 니드런♀ | `docs/P4_BATCH_06_DOSSIER_029_NIDORAN_F.md` |
| #030 | Nidorina / 니드리나 | `docs/P4_BATCH_06_DOSSIER_030_NIDORINA.md` |
| #031 | Nidoqueen / 니드퀸 | `docs/P4_BATCH_06_DOSSIER_031_NIDOQUEEN.md` |
| #032 | Nidoran♂ / 니드런♂ | `docs/P4_BATCH_06_DOSSIER_032_NIDORAN_M.md` |
| #033 | Nidorino / 니드리노 | `docs/P4_BATCH_06_DOSSIER_033_NIDORINO.md` |
| #034 | Nidoking / 니드킹 | `docs/P4_BATCH_06_DOSSIER_034_NIDOKING.md` |
| #115 | Kangaskhan / 캥카 | `docs/P4_BATCH_06_DOSSIER_115_KANGASKHAN.md` |
| #128 | Tauros / 켄타로스 | `docs/P4_BATCH_06_DOSSIER_128_TAUROS.md` |

Every document contains the shared required sections:

```text
identity
provenance
canonical_source_data
species_stat_profile
capabilities_and_hazards
ancient_strength
ancient_ecology
human_perception_and_culture
identification_and_knowledge
threat_and_encounter
individual_variation
companionship
mechanical_hooks
hunting_materials_and_resources
technology_and_craft
emergency_consumable_hooks
narrative_and_event_hooks
presentation_and_p6_followups
cross_species_links
open_questions_and_gates
```

## 3. Batch-specific invariants

### Paired Nidoran families

#029 and #032 remain separate National Dex species and separate evolution chains. Modern level metadata remains source context, not kill-XP; Moon Stone remains a family-specific physical relationship under D-032 and does not create a generic evolution command.

### Nidorina / Nidoqueen social ecology

`family_present`, `separated_from_family`, `young_present` and `young_threatened` are bounded species-local encounter states. They may change warning signs, approach permissions, pursuit or escalation. They do not change the fixed species stat profile and do not introduce universal family morale or parenting systems.

### Kangaskhan encounter unit

Ordinary Kangaskhan is one active species entity and costs one visible companion slot. Its child is a real dependent associated organism/state that may be `in_pouch` or `nearby_outside_pouch`; threat to the child may change maternal behavior. The child is not inventory, equipment, a hidden free companion, a separate mandatory species profile or an ordinary second combat actor. Mega Kangaskhan's explicit parent-and-child attack semantics remain a later-form boundary and are not imported.

### Tauros protector individual

Tauros herd protectors use D-031 individual identity/history. `tauros-herd-protector-prototype` demonstrates the representation with battle scars, protector role and persistent event history while leaving all stat deltas at zero by default. Later content may author explicit nonzero deltas only for a justified individual; there is no player scaling or generic elite affix.

### Hazards and serious lethality

The source-review-required records are all represented:

```text
nidoran-f-poison-barb-contact
nidoran-f-enraged-horn-toxin
nidorina-family-safe-barbs
nidorina-separation-nervousness
nidoqueen-hard-scale-tackle
nidoqueen-young-defense-escalation
nidoran-m-sound-vigilance
nidorino-hostile-presence-challenge
nidoking-destructive-tail-rampage
kangaskhan-child-protection
tauros-furious-charge
tauros-herd-protector-intervention
```

Poison, collision, rampage and charge consequence remains under the hazard and D-020 serious-lethality contracts. Species axes govern permission and resolution where relevant but do not cap hazard severity or directly become flat damage.

## 4. Completion state

```text
full_schema_dossier_count == 8
dossier_status_complete_count == 8
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

No Batch 06 dossier introduces a blocking Human Design Gate. The batch is ready for completion audit and atomic manifest promotion.
