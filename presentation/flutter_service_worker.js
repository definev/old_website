'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "df079a9ed6184024a8b82967767ca645",
"assets/assets/flare/Teddy.flr": "8f695d1f858872f1bae5996ad362dd17",
"assets/assets/icons/github_icon.svg": "058a5b6f0e4bed8f73f20c466c1f705d",
"assets/assets/icons/medium_icon.svg": "bdcbd30555552c7a62da205d06c16627",
"assets/assets/icons/twitter_icon.svg": "e55b26ee2a06e18048fe2dff0b094594",
"assets/assets/icons/youtube_icon.svg": "6563534907c27b8b2994e058802ab0ef",
"assets/assets/images/about_me.jpg": "347d6377ca0f78ed9adf2851243eeb38",
"assets/assets/images/apps/alibaba.png": "241a35dcbd2df3f270d4690901733029",
"assets/assets/images/apps/ebay.png": "47ca4a1517afa7fa691e0041f4024eb4",
"assets/assets/images/apps/google_ads.png": "bcd77a2a6f92eeb5942dc826b602f969",
"assets/assets/images/apps/google_assistant.png": "05fbec9280fdb8f7219a3d2da26d8768",
"assets/assets/images/apps/hamilton.png": "aecebde932a031ea8b3ad5f08dc5de43",
"assets/assets/images/apps/insight_timer.png": "90c5961e1812081b90bce0764405eb48",
"assets/assets/images/apps/nubank.png": "c985c7a31b59ee796339ed01efe45754",
"assets/assets/images/apps/philips.png": "b1354168038e60c705261c9d011239bd",
"assets/assets/images/apps/realtor.png": "0738cca2aeb443187e1f45b44943ed9c",
"assets/assets/images/apps/reflectly.png": "5ad5f5e02c151743bc4bb4af22cf8642",
"assets/assets/images/apps/stadia.png": "0380df815e03faf3c5d2891f67a14f3a",
"assets/assets/images/apps/the_new_york_times.png": "69b9febe3f0b46f7641a5220db6af92c",
"assets/assets/images/awesome_flutter.png": "b0e0acb668d05a02e81784b692f07b21",
"assets/assets/images/community/flutteristas.jpeg": "72db17f7b62a3f12de7773f90c272713",
"assets/assets/images/community/flutter_community.png": "363f33f2614c1f0727bb3b8dbc8cc977",
"assets/assets/images/community/pub_dev.png": "34c322f78d696365a21fc4e3e2f3f929",
"assets/assets/images/dart_dev_tools.gif": "674961dbd13522a8b2b80b422716a2d4",
"assets/assets/images/drawbacks_of_flutter.png": "93f0460eb5c15cf85939c6f872b30d01",
"assets/assets/images/flutter_for_toaster/apple_tv.gif": "deae583ece60b9bb6c0f372ec774cd81",
"assets/assets/images/flutter_for_toaster/raspberry_pi.jpeg": "d5ef9c15aabe5dadf5316f304718935e",
"assets/assets/images/flutter_for_toaster/toyota.png": "ca2cc54b26872006e806553c9024d25a",
"assets/assets/images/flutter_is_the_future.png": "ce4c4a0d1dc4db14df64c3f7741453f3",
"assets/assets/images/flutter_vs_rn/google_trends.png": "f66a4a1ec8dd09c4d27b3712a7741e73",
"assets/assets/images/flutter_vs_rn/has_flutter_passed_rn.png": "d5d00aa0bcd7dc21856ae5f2ee5651e6",
"assets/assets/images/flutter_vs_rn/rn_architecture.png": "d5ee30c545e6082e49c07a0881dc2dbb",
"assets/assets/images/flutter_web_architecture.png": "e2f8b5d258336295361c9050e7b7aee9",
"assets/assets/images/google_logo.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/assets/images/meme.jpg": "7b24de1705fee3cab2395179f5734c5e",
"assets/assets/images/transition_to_flutter.png": "1a593976c7549bb42aa2574cf050f724",
"assets/assets/images/ubuntu_flutter_installer.jpeg": "ff182da574a1c8bac9e58e99410b7d7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3cd6d45804f354830c0e75456785b717",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ec53d87df6cd16c74cbcf960fa6b37de",
"/": "ec53d87df6cd16c74cbcf960fa6b37de",
"main.dart.js": "d0f1dbf4802e45dec6a30dce56195b9d",
"manifest.json": "2b276b7dec9594cb3347934de826abf5",
"version.json": "9ec883738268c5782ed149e3f5c150f2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        contentCache = await caches.open(CACHE_NAME);
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
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

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
