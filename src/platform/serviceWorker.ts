export async function registerAppServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!('serviceWorker' in navigator)) return null;

  // Keep the deployed base path stable and let the browser's native lifecycle decide when a
  // waiting worker may activate. No application code sends SKIP_WAITING during an active run.
  const baseUrl = import.meta.env.BASE_URL;
  return navigator.serviceWorker.register(`${baseUrl}sw.js`, {
    scope: baseUrl,
    updateViaCache: 'none',
  });
}
