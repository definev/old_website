'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "881324b3407d8e9d6abc7132090f3ecc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "2fad0109d24de64ada036234e1552a5b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a12632f7c9a5c265b252185c4efcb2a",
".git/logs/refs/heads/master": "0a12632f7c9a5c265b252185c4efcb2a",
".git/logs/refs/remotes/origin/master": "b29412e1fcad3695616bf8cc371979ee",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/25/3fe97e30d709646c1fa1dd04d3434b84a7f4fb": "6d5ffce484b215bf9eada06245f59d67",
".git/objects/27/b55b427da3485ce8483dd218cb141594304dab": "99c19007052a73f23a6161afb5531931",
".git/objects/2a/833684cd37e6cf8b303fb79e8b67b106939561": "6b4c76866d4b84379966a49a7374dc0e",
".git/objects/4e/40aed045344479179d9f967b1875e8187bca2f": "636025a622f9b6c3375753be4144fd01",
".git/objects/59/2d4f50e0715f0fed3a54fe6547dcb86ebb2d88": "c6f7384b55a1a70e2c0bed13a76384e5",
".git/objects/5c/79f54f79dfcf8d041b39639bb7e6ddc7f381a0": "467c7d4810147d57b9b3de3ae33bcf75",
".git/objects/64/79c16290602e1d462a2181b475ca5d9680c09f": "a0bde79ee48c5579cbfb6e8d4f6dbe6f",
".git/objects/69/447ebdbdc7ad3cfd16e4ed187e934b024e37d6": "2ac3b8454ff0a2f1b59c07864d36f692",
".git/objects/7a/72f453cd4a1fd7175f1d93dd420291223bb49e": "e3cb79fa03d8c29ae05a96317ee0c060",
".git/objects/7e/41de30da6240331a700e1b57475de46beba0cc": "df80cdc2a9ebe3963bbe7be230de6fba",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/8d/df64d5d233e319b41dc8b1720ba93e5513f3f1": "f374aa5cdfe35b2bff6476983d937197",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/6c32b4914acc3f2bb563d5953d6544b00afc76": "6eb5ba089bb76904e6d2dadee45da5c6",
".git/objects/9a/c56a7b0d2ed80a7867e1a3878636afb46c73c3": "004ad85acd9d633a921ec35b8bcba384",
".git/objects/9d/3f26078ab7cfe59de10c16b34239b15912d059": "6f2e97e9c3f3a42ab6e56c5974ab5266",
".git/objects/ad/089078e9c80a80c14a1837affd1dd66e6c7ad2": "418850ac4cd288fc6501551b3c998643",
".git/objects/c7/accc16f7c2be99fd8935a3eb262597449be20c": "249cd67626b05d4793388b01eec64d4b",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e8/bef16bf5fcfd3735426813180d3173b9c4ad38": "9ce7fdee835bc563a57a3cb1f48bb503",
".git/objects/eb/d95deecd3dcf69568d59d4c2d579081c42e452": "4c02ad9bf5c0f6990155ae6f9820f7e3",
".git/objects/f6/2b96a3acf1c13b64b48bce53aad5358890a95c": "3c084987a006957817fb3ef276dd4b9e",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "e6c01231c7b23a89fb58eaeb96eed02d",
".git/refs/remotes/origin/master": "e6c01231c7b23a89fb58eaeb96eed02d",
"assets/AssetManifest.json": "06d2ffa19e1ebaae60326f92c25dbd22",
"assets/assets%255CCabin_Sketch%255CCabinSketch-Regular.ttf": "dc97f34ade1b590e1688b6803b1a1f03",
"assets/assets%255CFredericka_the_Great%255CFrederickatheGreat-Regular.ttf": "9122299e476671f970e1670bd7b900c8",
"assets/assets%255CMonoton%255CMonoton-Regular.ttf": "411051cb61bcda5517943601e8734cea",
"assets/FontManifest.json": "436ec757fbe1e99d36fe54b3ee147fb6",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "d4eb4865b05c4278415f3f4e00dc9406",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"fabicon.png": "00fc7e521b38aa2f862b4af6990b9ed8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "54b594d92ddcc32ac306fa1d05074d7c",
"/": "54b594d92ddcc32ac306fa1d05074d7c",
"main.dart.js": "680019dfcfd27c9f19667c295fb3a5d8",
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
