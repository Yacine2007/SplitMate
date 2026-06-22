// sw.js
const CACHE_NAME = 'splitmate-v1';
const urlsToCache = ['./'];  // الصفحة الرئيسية (عدل المسار إذا لزم)

// تثبيت الـ Service Worker وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// استراتيجية الشبكة أولاً مع الرجوع إلى الكاش
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
