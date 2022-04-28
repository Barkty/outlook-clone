let CACHE_NAME = 'pwa-outlook-clone';
let urlsToCache = [
    '/',
    '/signup',
    '/signup/create_password',
    '/set_name',
    '/set_name/set_birthday',
    '/set_name/set_birthday/puzzle',
    '/login',
    '/login/set_password',
    '/login/set_password/secure',
    '/mail/0/inbox'
]

//Install a service worker
self.addEventListener('install', event => {
    //Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache)
        })
    )
})

//cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            //Cache hit - return response
            if (response) {
                return response
            }
            return fetch(event.request)
        })
    )
})

//Update a service worker

self.addEventListener('activate', event => {
    var cacheWhiteList = ['pwa-outlook-clone']
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})