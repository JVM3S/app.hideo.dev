'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "42f496de81820c747afc1e64769a44ab",
"index.html": "fd5ac33d5177815e20a91f692dcecdb7",
"/": "fd5ac33d5177815e20a91f692dcecdb7",
"main.dart.js": "1341a9b550ec691c23d8207568bfdd73",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "12b265ff2b96ee2ccafbeaad5fb54bd6",
"assets/AssetManifest.json": "5d85e3ea267026e824a7ba08d1da8cd9",
"assets/NOTICES": "efbe78b43dd1318cf17916ade378b9be",
"assets/FontManifest.json": "82f7aab36f6912829ada5024542513c3",
"assets/AssetManifest.bin.json": "be9fc809e47471555a056936b2dd90b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "54769d3db0e3786eac538450d11e16e6",
"assets/fonts/MaterialIcons-Regular.otf": "1c895b2392137f8ac1011a590fb98a7f",
"assets/assets/splash/rumutai_splash_movie.mp4": "03293fe61541775311bd5be3e1918fdf",
"assets/assets/images/volleyball.jpg": "9a7ca3f18e27bfdb831a68d58187be8f",
"assets/assets/images/rumutai_top_illust.jpg": "2f17c7e11db200339bfdaafee7368226",
"assets/assets/images/dodgeball.jpg": "a7a74142b277aae06fb8aebebfa6333d",
"assets/assets/images/omikuji.png": "ef16fc7360ae3dd44d854f44b6da5dba",
"assets/assets/images/tie_image.png": "32b0f412c3e89c7f7163f69e27356467",
"assets/assets/images/map.png": "95415bf06cde795cac7b76ea30a30222",
"assets/assets/images/nonsignpush.png": "b709103fc559cb9cf48caaa534b3c07c",
"assets/assets/images/win_image.png": "64d6a672900c174d20cdc09085d3bbac",
"assets/assets/images/frisbee_icon.png": "ecc50c0022d66d85991d522a3413d178",
"assets/assets/images/lose_image.png": "70b5fd7bd6efea0460f80cf124c780cb",
"assets/assets/images/none_image.png": "2136eb61788c78cde601558f4e4d6fd8",
"assets/assets/images/gameover.png": "787c8298cab0f683276310a046935956",
"assets/assets/images/dodgebee.jpg": "f6e7fe9296a2c5f6cfac563e6287c8be",
"assets/assets/images/cheer.png": "a4ceb677d0e40ea7dac09c4d016b47c3",
"assets/assets/images/dashboard_background.png": "2360c760ef2aa8bf29bc3b5a5f552301",
"assets/assets/images/basketball.jpg": "fa973f2c17c82faff89985c7fe3eda36",
"assets/assets/images/map_background.png": "2ded144b35235be64c09ee88a54e0d17",
"assets/assets/images/futsalball.jpg": "62bf6905e6a32e42d129e081bea57830",
"assets/assets/images/signpush.png": "89605eed63406c94316decf63b73bf0e",
"assets/assets/documents/privacy_policy.html": "129a67bb502e14688d6acec7aa68a6b9",
"assets/assets/fonts/NotoSansJP-Regular.otf": "ecfed48e463db4e31d1691c8af367730",
"assets/assets/fonts/NotoSansJP-Medium.otf": "d6c74d39a44c519ff736ac55e5d28a46",
"assets/assets/fonts/NotoSansJP-Light.otf": "137761c9e4b05edc375b06c256e9b65a",
"assets/assets/fonts/Anton-Regular.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/assets/fonts/NotoSansJP-Thin.otf": "e2b92248795c0cd02d9858aaf2a12ec2",
"assets/assets/fonts/NotoSansJP-Bold.otf": "e463c4b3a2d7fbfb917831767da8c24f",
"assets/assets/fonts/YujiSyuku-Regular.ttf": "682691341e4c7c8cc65ba1da06ad8b1a",
"assets/assets/fonts/NotoSansJP-Black.otf": "5ce4631ec833cd0011936d5653fbd144",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
