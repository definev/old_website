'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6d85e42feff386578a4ba3c34177aabd",
"assets/assets/audio/die.ogg": "1e1df1540314352000ad998ec7130b35",
"assets/assets/audio/die.wav": "16436c886c305a4bb2f8aa04e0e00919",
"assets/assets/audio/hit.ogg": "9bbbbbf81967c88509bd9ed0bc15edfc",
"assets/assets/audio/hit.wav": "3cf321a7a65534a5abd59dc9aacae746",
"assets/assets/audio/point.ogg": "b881ed43f34017dfedd456cb5e3da40c",
"assets/assets/audio/point.wav": "e1458a87070cab0b76f245fbcacc334b",
"assets/assets/audio/swoosh.ogg": "2573310c3ac9b0ddea6ab6e07a0adfe5",
"assets/assets/audio/swoosh.wav": "db32166321ae7db58ff660306b04389a",
"assets/assets/audio/wing.ogg": "e34cb4c6c2967438f5c0dc8b11de0663",
"assets/assets/audio/wing.wav": "802e8685100ebd33c49630e01407641e",
"assets/assets/sprites/0.png": "c636bf4498a683512682b3aaf80a4e2c",
"assets/assets/sprites/1.png": "b46a47ffceba2529dbf2bbbee228add4",
"assets/assets/sprites/2.png": "78a2df62beea26aaae3a0a6ff695f7ff",
"assets/assets/sprites/3.png": "b73f7be20a8fd427e482f9984f568011",
"assets/assets/sprites/4.png": "c818536d8c23d6a08aa0dbd0fb7bc16d",
"assets/assets/sprites/5.png": "0a3490755d329e9e3658baad44971cab",
"assets/assets/sprites/6.png": "2f83f3e7822c527aef36b10a31016014",
"assets/assets/sprites/7.png": "eccba258c31f98d2e7ad4712510ba869",
"assets/assets/sprites/8.png": "d64e73185bd186379940455f31f37260",
"assets/assets/sprites/9.png": "1a44893c7f28121adb3ec6d5f0d2b2b3",
"assets/assets/sprites/background-day.png": "214a0a70e9ae043a415827cac6e18193",
"assets/assets/sprites/background-night.png": "5a027c18138ca3a11035ff2a1f66d37d",
"assets/assets/sprites/base.png": "177b44c637520dc293a834c27a9d7778",
"assets/assets/sprites/bluebird-downflap.png": "ee8f2d3e0fa616c06556aa4e810b6bcd",
"assets/assets/sprites/bluebird-midflap.png": "fcb5a4cd9af8d50c15ccf3257399b968",
"assets/assets/sprites/bluebird-upflap.png": "684493ce3b8e2b20eeec618b873ba4ab",
"assets/assets/sprites/gameover.png": "b82eea6dbb4771dd5e9cd1cd7dc39648",
"assets/assets/sprites/message.png": "72e7d3f9bb4f432a695ff01d40d33cbf",
"assets/assets/sprites/pipe-green-body.png": "600245f2f374111bae0c8f3f777b5613",
"assets/assets/sprites/pipe-green-head.png": "7f8bcc872cd332c5985536f77b51e5e0",
"assets/assets/sprites/pipe-green.png": "69acf88fa7631d5c22c5ad29a1a67c49",
"assets/assets/sprites/pipe-red.png": "80743e0a858a40242e44a52412d5d0c2",
"assets/assets/sprites/redbird-downflap.png": "e0f983f73e49657589cf3c65637447d7",
"assets/assets/sprites/redbird-midflap.png": "1bbee40e926891f951f91f1446a55049",
"assets/assets/sprites/redbird-upflap.png": "83efe8a4019704149fee5b96f5d9e60b",
"assets/assets/sprites/yellowbird-downflap.png": "61d66249a632e9969a84185df653744f",
"assets/assets/sprites/yellowbird-midflap.png": "82b392525fcd4a9f6ee0aede65d8cecc",
"assets/assets/sprites/yellowbird-upflap.png": "67f0ce149ac4d00b46ea765d618abb1a",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "b32631a49db362498dd93379eed2a3df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2502b9c734072159fcf9c7d629a20ac2",
"/": "2502b9c734072159fcf9c7d629a20ac2",
"main.dart.js": "1a8a135eda7bf2e8cc659ce8729446cd",
"manifest.json": "3ac85980d20cad8cea2fcdb5ad033c48"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"/",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(CORE);
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

