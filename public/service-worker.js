const APP_PREFIX = 'Hernando-Reptile';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./sub-pages/volunteer.html",
    "./sub-pages/reptile-adopt.html",
    "./sub-pages/PIT-micro.html",
    "./sub-pages/meet-the-team.html",
    "./sub-pages/mammals-adopt.html",
    "./sub-pages/donation.html",
    "./sub-pages/contact.html",
    "./sub-pages/birds-adopt.html",
    "./sub-pages/adoptables.html",
    "./styles/style.css",
    "./scripts/bird.js",
    "./scripts/donation-form.js",
    "./scripts/mammal.js",
    "./scripts/microchip.js",
    "./scripts/reptile.js",
    "./scripts/script.js",
    "./scripts/volunteer.js",
    "./pdfs/Bird-Adoption-Application.pdf",
    "./pdfs/PET-ADOPTION-AGREEMENT.pdf",
    "./pdfs/VOLUNTEER-APPLICATION.pdf",
  ];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache: ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            let cacheKeeplist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX)
            });
            cacheKeeplist.push(CACHE_NAME);

            return Promise.all(
                keyList.map(function(key, i) {
                    if (cacheKeeplist.indexOf(key) === -1) {
                        console.log('deleting cache: ' + keyList[i]);
                        return caches.delete(keyList[i]);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', function(e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) {
                console.log('responding with cache : ' + e.request.url)
                return request;
            } else {
                console.log('file is not cached, fetching : ' + e.request.url)
                return fetch(e.request)
            }
        })
    )
})