'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6126e0e574a7f251e39125fe97bfa759",
"assets/assets/background.png": "2691676117b6dcda43e9d4c8d8cd299d",
"assets/assets/Bungee/Bungee-Regular.ttf": "259d4afad7edca07e727ef80f5bbce07",
"assets/assets/Bungee/BungeeInline-Regular.ttf": "2a13391023ce8787887331530cac35a7",
"assets/assets/us.png": "131b0d5d1d001e148a225b9f17ffd450",
"assets/assets/vn.png": "dfbc0861b4cfa2d5e46a23c651cc7fb3",
"assets/FontManifest.json": "a28bb22f511934ef4d362e657cc7c9b9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "050c85cd5fb319758033a2cf4f45dc47",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "f8992cf15b8422a33d46ca88c8fe00f1",
"icons/Icon-192.png": "0a99e8e46e429cded211e2522e8af761",
"icons/Icon-512.png": "cc3e638b201de644e1fde57e86cce932",
"index.html": "01999ab7e4cb394254c9a076cd7c9330",
"/": "01999ab7e4cb394254c9a076cd7c9330",
"main.dart.js": "8778148a3a6937800cf39c6944bb35e0",
"manifest.json": "f2249af907813f7f5653c5dfbac4f596"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
