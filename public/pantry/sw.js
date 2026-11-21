// Pantry offline cache.
// Network first, so a new version shows up as soon as you are online;
// when there is no internet the last saved copy of each file is used.
// Your recipes are not here: they live in the app's own storage on the phone.
const CACHE = 'pantry-app';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  // Ask the server every time (cheap when nothing changed), so a new version
  // isn't hidden behind the browser's own 10-minute cache.
  const fresh = new Request(request.url, { cache: 'no-cache', credentials: 'same-origin' });

  event.respondWith(
    fetch(fresh)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: true }).then((cached) => cached || Response.error()),
      ),
  );
});
