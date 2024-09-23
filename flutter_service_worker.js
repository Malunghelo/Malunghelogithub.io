'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"account-tree.png": "4fd58a451b32c6d1df371484832980cd",
"assets/AssetManifest.bin": "5d51ffa5cd288b7f6784c37bcafa7a42",
"assets/AssetManifest.bin.json": "533dbfa6b99317365d5dc3ad3e1e32ec",
"assets/AssetManifest.json": "415cda1108287929a5d98017c96003ce",
"assets/assets/fonts/AkayaTelivigala-Regular.ttf": "31533526895b179fa322a2856bbd4185",
"assets/assets/icons/account-tree.png": "4fd58a451b32c6d1df371484832980cd",
"assets/assets/icons/app.png": "2e45873297d4ad1c4fdbf8dafccc77a6",
"assets/assets/icons/Application.jpg": "07ba80a40bee6df60312922951d01d5f",
"assets/assets/icons/copyright.png": "f6582e4260160e12d067a9e6a9d13f92",
"assets/assets/icons/DISCOUNT.jpg": "e6dae46faa7169591d6de0db9f10c9cd",
"assets/assets/icons/eye.png": "0dab6a30fb9b6c4c47ee235507394170",
"assets/assets/icons/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/icons/fund.png": "9ad112653968f757c43c0982bb20f15a",
"assets/assets/icons/g09.jpg": "7a4fe1baf4cfe441aacaa40ad29f2379",
"assets/assets/icons/g10.jpg": "ba49a52b24ba2342f1ca522124860c55",
"assets/assets/icons/g11.jpg": "2ac2d24d377651e5e2cf3fbe477fd813",
"assets/assets/icons/g12.jpg": "edb77deec09eac16bfcc389f92867cff",
"assets/assets/icons/id-card.png": "616fa1cfc0657c9ecd6fcd7d7e65031e",
"assets/assets/icons/mAbove.jpg": "c4d145368fca6fea4a9a6725b3db4020",
"assets/assets/icons/mUnder50.jpg": "da6b5e18138651d2a996ee9501bc035d",
"assets/assets/icons/mUpgrade.jpg": "ec7782e3587aecfa39c72788ecb4fc98",
"assets/assets/icons/mUpgrading.jpg": "529791043f8569f8da6f8281a2f7cd1d",
"assets/assets/icons/NOVAR%2520Membership.jpg": "128c33b336bfcb7c1be40423ce6ed508",
"assets/assets/icons/pAbove50.jpg": "da6b5e18138651d2a996ee9501bc035d",
"assets/assets/icons/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/icons/results.png": "169c2752233e0ce3cfca5b69e861875f",
"assets/assets/icons/school.png": "ce94b028d98866227fe5294c72a5eb31",
"assets/assets/icons/scott-graham.jpg": "cae0db84f5164a19fee90cd8cd6fb157",
"assets/assets/icons/StudentPortLogo1.png": "c1e513275b6364c347e5831a7b913bde",
"assets/assets/icons/twitter.png": "a8f692e1d74ae65793b6d212794bc0c2",
"assets/assets/icons/university.png": "513a513b4c98fb128caccd8a66958719",
"assets/assets/icons/visible.png": "06ceb9a9e7a32cae8e661a825d24fcc4",
"assets/assets/icons/whatsapp.png": "64955b289c3856ad31744d47419f6be2",
"assets/assets/lottie/form.json": "82cda7ceb0db7d3b4052a4aac0c39eb3",
"assets/assets/lottie/notfound.json": "bc8df5c8268dc2a4b8b33644bdb9bc0b",
"assets/FontManifest.json": "0c7f17aeba8789b94b888e22851f8be6",
"assets/fonts/MaterialIcons-Regular.otf": "d69a7dae6e751a88c45d398c777cc596",
"assets/NOTICES": "3482e20091f3ab060b27cf9e3557dc36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_paystack/assets/images/american_express.png": "fac1ed63030230003fa52ee8f98aa8dc",
"assets/packages/flutter_paystack/assets/images/dinners_club.png": "24450426cbb1e5b657356b6cca621956",
"assets/packages/flutter_paystack/assets/images/discover.png": "c3a58509fe14ba54b0ca0ff29ee5619d",
"assets/packages/flutter_paystack/assets/images/dob.png": "33734b76a856e9b07934793d83a14cae",
"assets/packages/flutter_paystack/assets/images/jcb.png": "82658437070a16f35238c2f989a00c2a",
"assets/packages/flutter_paystack/assets/images/mastercard.png": "6aecef820a950ef57140f79e07da916a",
"assets/packages/flutter_paystack/assets/images/otp.png": "99aa2d23b63c65db7565622ce17ef3e9",
"assets/packages/flutter_paystack/assets/images/paystack.png": "0b8db920412edd7d8b40e7e7e01ac439",
"assets/packages/flutter_paystack/assets/images/paystack_icon.png": "5b143d4fa4eb48496adc052b89849025",
"assets/packages/flutter_paystack/assets/images/successful.png": "bd7cfa16ecd2b480ca4875fbf8d6f9e2",
"assets/packages/flutter_paystack/assets/images/verve.png": "d9e7f9a5b6987ec61b7c2d0bd7db1271",
"assets/packages/flutter_paystack/assets/images/visa.png": "a8b02279da904c1f40e041b20cbaf49c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b8264deefcf977e32d5a0162341ba4f",
"/": "3b8264deefcf977e32d5a0162341ba4f",
"main.dart.js": "4f51ea443d58579dab382cff1178db3a",
"manifest.json": "d46d0a294f3600f2aa1889979eed4406",
"paystack_interop.js": "390f3102969d7e7f360d30e242a46a9c",
"version.json": "a181d91a23948aa1c23d849e44817e8e"};
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
