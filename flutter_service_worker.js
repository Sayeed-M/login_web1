'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "afac174fe40b34eb95e10a7dc24adfaf",
".git/config": "4c4ad607653b8d9532acf5c3d74acfe4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "275d220e1ac47bfab30ecb119c67fb3b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90dbdb9cc35c0ef60fb90bee228f420a",
".git/logs/refs/heads/main": "e282db744083f5103332bfe85b999462",
".git/logs/refs/remotes/origin/main": "f1e938c359d353b76b5ab2847866d68a",
".git/objects/00/b9852e8b44c87c85fc09589c62e148ea941256": "a44c2db250298a30048e459abb3a4e2e",
".git/objects/08/18ec052c0ef0d8bfeed2afbf46ff263b709252": "5a17582bce8898eaf55545f14c5336b3",
".git/objects/0f/8d1b9c81769212cd2dccd5dccb6e17da5e32b0": "6c6cfa9013e5c324f9bd6aaf41cc904b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/05b608340a2b3457eaf686486c209cc9ea1ada": "14abcab50671d3c980ec652666a7aa79",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/ae3f6644879239958d1944192c8d1c860644d9": "d14eb4d32e9037337e71f906aac07f1e",
".git/objects/2c/d76e73bcc5f5c6d9dd75d21bf583e153d919d9": "a24b44e8f0dda5969888ee70d62a209c",
".git/objects/33/e4a0c64c81091484d7ca3e54615583f911efb7": "23b802a283ea96a685b61f9848888477",
".git/objects/36/4515b949d89186e7e3fde051a9ac3b6dded06e": "685b4398dcf079e1d3c51356e30bccab",
".git/objects/41/c4bbc57c749b8950d46d104b2dd1c9ff6a7bec": "398c5e5c1f7d5c7bfc4d7c49dc095dd9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/57/1d2231a30f134f2defd62db10bf28a0fa877ea": "d6e5111b6c6f8de97d1ae37647f9867a",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/75/ed3856abc03349db7bfccd7823e8ec1f1b721d": "139d7daf60730aa651fa6a7b0b2613dc",
".git/objects/79/44c09c01f1b98f25cd669d38934f8375696762": "5e25ee35c567bbcb089df05cc8a5574f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/00ad2472d3336e75bbf937506695d1f6cf0ac2": "f1fe2458d51cd392b5c92a43738cf5c0",
".git/objects/92/33a0d8155d8b85836a4522708ce0d2e9868b71": "402c7ceba2dafb0e0ab87af2c41923e8",
".git/objects/9e/9c944ecc64536b6c9d8c54ab5d2455aacca61a": "0d9ebf683a8a8ba7efa599ebf67d4e9b",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/a2/98058b8c30b2d90b65e98482999db359762f3b": "0c9da0500d41b72d808cc90ec8fb6f14",
".git/objects/a3/1d267db91957e0978df532609af5b44ab40c3b": "5e3e88a6419827785cc8846723dd2051",
".git/objects/a3/82af69ce90665cce6bf60455b66f8a2a4520d3": "a8c120812e895c552cbabebcc1d14af5",
".git/objects/b0/74adbcb601e8e7d23786ab8cb02b28cb9f2cab": "413d95fa396716f213e5dbba6b79a31c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c9c668c6ae308c984876ddc5472aae53a8acc": "16735cf53d50efa87ec6b1185b9ab8d2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/9a0906e4d0aceae5b8700d5cb43efd9b74bc18": "789442223a81e4525e8e441fa2e41cb7",
".git/objects/ea/c3436a8d26bb542fea27c1d7bd6fe8a8082da1": "20c2915622077416f9a5c28a7742491e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ebdf96dd9dc10b5a8eee458b52375bfaeca398": "0f1814c2b4219e0a527cf3b4461742bd",
".git/objects/ed/c5b9b734f4d6964238920b6594b07b79e8051c": "e13bafd2456cfaaf4c3dddad8e9079da",
".git/objects/ef/a3f3cd4b5487bfd10c08f6ad632c1745b7638b": "3f6518b3e73b6b19238d8d80ccba3553",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/d07840141ceae546deb350628a1152b2c54ad0": "3f9fd0863a9a8b71a82a1fa62b5209e3",
".git/objects/ff/ab5bdfe8bc2b0216e9d3d4e64040374deb5793": "9fa6e16076476891ab15d4faf150c4ea",
".git/refs/heads/main": "d342e53a1990b5939f7d1b36404e42d7",
".git/refs/remotes/origin/main": "d342e53a1990b5939f7d1b36404e42d7",
"assets/AssetManifest.bin": "4d2fcc5e8c68a22e26a47969028e94ae",
"assets/AssetManifest.bin.json": "8ee38c10c73c518203c02c7a96b674cd",
"assets/AssetManifest.json": "0d7fd115f4de6075e2c3bcea69283995",
"assets/assets/eye.gif": "2e44e72bf406fc5586261bcd1fd5260e",
"assets/assets/SignUp.png": "6858c60630f70dd56669faa1213401f2",
"assets/assets/undraw_Login_re_4vu2.png": "c16b0af61eaf2a9b7b5e6e26999a8b4d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a97f865220630a43d40df4591255429c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "9d9f459c4a4744a7ecd58650a539a986",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1357fed3b11d610929e05a050d06b237",
"/": "1357fed3b11d610929e05a050d06b237",
"main.dart.js": "7c8396b55104baa8a98db7487b2fcc4f",
"manifest.json": "908b60c4e944addd6d298477b2b917a0",
"version.json": "8a0dc2299f877573a995678f22e77a18"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
