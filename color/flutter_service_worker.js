'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "06d2ffa19e1ebaae60326f92c25dbd22",
"assets/assets%255CCabin_Sketch%255CCabinSketch-Regular.ttf": "dc97f34ade1b590e1688b6803b1a1f03",
"assets/assets%255CFredericka_the_Great%255CFrederickatheGreat-Regular.ttf": "9122299e476671f970e1670bd7b900c8",
"assets/assets%255CMonoton%255CMonoton-Regular.ttf": "411051cb61bcda5517943601e8734cea",
"assets/FontManifest.json": "436ec757fbe1e99d36fe54b3ee147fb6",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "dadc15f144fba8126af31b06cd9a6cc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "54b594d92ddcc32ac306fa1d05074d7c",
"/": "54b594d92ddcc32ac306fa1d05074d7c",
"main.dart.js": "d084c8bf5ba175a2daf9a9edc93709ae",
"manifest.json": "e8e4f7c22cfee02c889fbb010c872205"
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
