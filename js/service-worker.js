// Choose a different app prefix name
var APP_PREFIX = 'brcdgms_';
var VERSION = 'version_04';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('precache-v1').then((cache) => {
      var lst = [
        '/BrcdGms/index.html',
        '/BrcdGms/style.css',
        '/BrcdGms/audio/cute-level-up-2-189851.mp3',
        '/BrcdGms/audio/menu-buttom-190020_cut.mp3',
        '/BrcdGms/audio/shush-90127.mp3',
        '/BrcdGms/js/quagga.min.js',
        '/BrcdGms/favicon.ico'
        // other assets you want to cache
      ];

      for (let i = 0; i < 150; i++) {
        lst.push(`/BrcdGms/img/${String(i).padStart(3, '0')}.png`);
        lst.push(`/BrcdGms/img/${String(i).padStart(3, '0')}_mask.png`);
      }
      return cache.addAll(lst);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});