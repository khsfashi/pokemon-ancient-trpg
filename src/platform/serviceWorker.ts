export async function registerAppServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!('serviceWorker' in navigator)) return null;

  // Keep the stable root script URL and let the browser's native lifecycle decide when a
  // waiting worker may activate. No application code sends SKIP_WAITING during an active run.
  return navigator.serviceWorker.register('/sw.js', {
    scope: '/',
    updateViaCache: 'none',
  });
}
