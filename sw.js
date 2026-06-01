// ==========================================
// 📦 PWA SERVICE WORKER (sw.js)
// ==========================================

const CACHE_NAME = 'nammadabus-v2';

// Assets to cache immediately for offline stability
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// 🛠️ 1. INSTALL EVENT: Pre-cache core UI assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing system...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Pre-caching critical application shell');
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => self.skipWaiting()) // Force activation right away
    );
});

// ⚡ 2. ACTIVATE EVENT: Clear out obsolete caches from older versions
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating system elements...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Evicting legacy cache store:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Immediately take control of all open browser tabs
    );
});

// 🔄 3. FETCH EVENT: Cache-first fallback strategy
self.addEventListener('fetch', (event) => {
    // Avoid intercepting external location APIs or tracking links if added later
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Return immediate cached asset to keep application fast
                return cachedResponse;
            }

            // Fallback to live server request if asset isn't local yet
            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // Dynamically clone and store newly discovered assets
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            }).catch(() => {
                // Optional: Handle offline failures or edge exceptions here safely
                console.log('[Service Worker] Resource network request failed while offline.');
            });
        })
    );
});
