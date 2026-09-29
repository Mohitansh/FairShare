self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.useCache?.then || caches.open('fairshare-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './1790677543176.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
