// sw.js
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 今回はキャッシュ戦略を複雑にせず、ネットワーク優先で動作させます
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});