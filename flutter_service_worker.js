'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f7da21318c857c777bbfce4d54e940c2",
"version.json": "f561d988a77ab71ecab16b532eafd81a",
"index.html": "ae8bce7348ef2a765c39875167ef2eda",
"/": "ae8bce7348ef2a765c39875167ef2eda",
"main.dart.js": "6017263ae40aa8d40f5d63ba5668d2d4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "d75b20fd837389faddfda81586d8046e",
"icons/Icon-192.png": "1d1f4346bab77ab1e576722e91a983ba",
"icons/Icon-maskable-192.png": "1d1f4346bab77ab1e576722e91a983ba",
"icons/Icon-maskable-512.png": "7c501a3be632fe11b2d9f48766691971",
"icons/Icon-512.png": "7c501a3be632fe11b2d9f48766691971",
"manifest.json": "d3e8be9819697c196251e6e977053336",
"assets/AssetManifest.json": "84f417c72c5e9854711869022ddd05bd",
"assets/NOTICES": "f6c7da080fcf762fc99f428dacd5cbc7",
"assets/FontManifest.json": "023a3674eaf9c6a5169621055203351d",
"assets/AssetManifest.bin.json": "95aaf894530ff03d7eabaa080cf26451",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ca412b96f5a39a87b4b058ba1a375a8f",
"assets/fonts/MaterialIcons-Regular.otf": "6bef2b9120efdbb8e6fba46f4dae7623",
"assets/assets/music/acoustic-kids-folk.mp3": "a5c5989cda11c86b29793bbb67b2809d",
"assets/assets/music/whistle-me-happy.mp3": "4e31b82335fc94e74b4065cdddb54cf2",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/music/lets-go-to-the-park-playful-cute-flute-and-piano.mp3": "9e45ab827af9b6178c1e6d8f94858335",
"assets/assets/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/images/soroban/dot.png": "2d434316d1e6df1399c992913037c071",
"assets/assets/images/logo-adaptive-foreground.png": "ee957bbd1895c794e4ca6c6baebb480e",
"assets/assets/images/setting_button.png": "9efc504d9501599648079703b7ea5ce4",
"assets/assets/images/kiddimath.png": "f3dff76fecca1557b1e7591e49987259",
"assets/assets/images/fingermath.png": "44a1e3f2f2b427dc13086c0cfa2fceb4",
"assets/assets/images/finger_math_lefthand/60.png": "e3597506e32f6064d826bd6deac36450",
"assets/assets/images/finger_math_lefthand/70.png": "f0a83386cede1bcfa96b7437527688d7",
"assets/assets/images/finger_math_lefthand/10.png": "5fee9f5af5ad6f44d41cd9b908c16701",
"assets/assets/images/finger_math_lefthand/20.png": "1e9c76c5db04604bce2a5f6c0096b9f9",
"assets/assets/images/finger_math_lefthand/30.png": "3281a8255ad3c65a5482d150de0deffb",
"assets/assets/images/finger_math_lefthand/80.png": "f23ad7cf466ccad9380ee260c59c0162",
"assets/assets/images/finger_math_lefthand/40.png": "db0ed62999f979ceca850463638fd382",
"assets/assets/images/finger_math_lefthand/50.png": "0b9ea6946952615eb4fe429121021dbd",
"assets/assets/images/finger_math_lefthand/90.png": "26918bc1ae41d0229ec98b931e305358",
"assets/assets/images/logo.png": "0a8961fefd2088a9a007a240ac6fe539",
"assets/assets/images/medal.png": "e5bb5888dd0ec249b93daf45a0dcc163",
"assets/assets/images/planting_mascot_2.png": "e45a1e0b359366404e5c667443541f87",
"assets/assets/images/planting_tree.png": "db00f340330c78a8363a687b1c86e716",
"assets/assets/images/planting_mascot_1.png": "d4c8ec02feb8a40131f7b76617d7edd2",
"assets/assets/images/back_button.png": "08afb2c698ecde62f634cbd8e4d65ed0",
"assets/assets/images/finger_math_righthand/8.png": "35b8e84007318a843b641e122002eca2",
"assets/assets/images/finger_math_righthand/9.png": "7683c89cbc941435e354055acfff9891",
"assets/assets/images/finger_math_righthand/4.png": "4c25233a530fbe23059f022c3c0b6629",
"assets/assets/images/finger_math_righthand/5.png": "2fb3802142df5b9a5cb6a402f96f278c",
"assets/assets/images/finger_math_righthand/7.png": "5a09e0c62c7e17378365d77f5fc7ea79",
"assets/assets/images/finger_math_righthand/6.png": "64c93bcf6480a8a653ad4b17936c76a7",
"assets/assets/images/finger_math_righthand/2.png": "c450e431d97922d4209a6d71076e7686",
"assets/assets/images/finger_math_righthand/3.png": "c3bc98539b2614e1d7441f3ec0c01df4",
"assets/assets/images/finger_math_righthand/1.png": "b6b2d9654674641190a4d5f48f9a1861",
"assets/assets/images/finger_math_righthand/0.png": "5b72109fe2f114d6a3f998a79ea57851",
"assets/assets/images/dropdown_icon.png": "9dabd3b033a258c8cf5d641227b4566a",
"assets/assets/images/avatars/avatar5.png": "fa30f06c8d9b9e12ccba8a32663e8561",
"assets/assets/images/avatars/avatar4.png": "e7701d182310b3e0a5c35f016c8ee5ae",
"assets/assets/images/avatars/avatar6.png": "ecafa0545ee432f89f7d5d4fdb55202b",
"assets/assets/images/avatars/avatar3.png": "855e431db4319c6601fdb962e9ad874e",
"assets/assets/images/avatars/avatar2.png": "df65ea67732872c3ebefb88fbe7d2a28",
"assets/assets/images/avatars/avatar1.png": "664a0f314e0c46d8c0c23058fc44aa2b",
"assets/assets/images/harvesting_mascot.png": "01d92371a005cbe645954b510cd9355b",
"assets/assets/images/play_button.png": "bb32d89447436c1809385c9020125b95",
"assets/assets/images/badges/kiddi_fc_lh.png": "50d81d040c449cc44a68562230083fb9",
"assets/assets/images/badges/kiddi_simple_bh.png": "f884d696ccef1a77fdaca975e68b29d2",
"assets/assets/images/badges/kiddi_fc_rh.png": "4789d3a6b69b36efeabf377620f32a28",
"assets/assets/images/badges/kiddi_simple_lh.png": "7565f7fc66708fb846a29c347355001d",
"assets/assets/images/badges/kiddi_inactive.png": "314fc3fa973c0eba7375f97654acd99e",
"assets/assets/images/badges/kiddi_simple_rh.png": "9c4fb19b20a6348782adc9b39920a87e",
"assets/assets/images/badges/kiddi_fc_bh.png": "aaeb1ede51027f7e7d7e29d2b41fd004",
"assets/assets/images/harvesting_tree.png": "1ef832aa7a9dc1aaaf06f10084dd27b6",
"assets/assets/images/selection_container.png": "ff22f98969a8c8e6a46f34d0d8e19be5",
"assets/assets/images/title_tag.png": "541453764f58f1b589843a945475a1f9",
"assets/assets/sfx/kss1.mp3": "fd0664b62bb9205c1ba6868d2d185897",
"assets/assets/sfx/spsh1.mp3": "2e1354f39a5988afabb2fdd27cba63e1",
"assets/assets/sfx/excellent.mp3": "131d88482f0d7bfb4803af390bfb04b2",
"assets/assets/sfx/fwfwfwfw1.mp3": "d0f7ee0256d1f0d40d77a1264f23342b",
"assets/assets/sfx/fwfwfwfwfw1.mp3": "46355605b43594b67a39170f89141dc1",
"assets/assets/sfx/ohno.mp3": "396d258be56634136bf73d4e022963f0",
"assets/assets/sfx/sh1.mp3": "f695db540ae0ea850ecbb341a825a47b",
"assets/assets/sfx/hh1.mp3": "fab21158730b078ce90568ce2055db07",
"assets/assets/sfx/p1.mp3": "ad28c0d29ac9e8adf9a91a46bfbfac82",
"assets/assets/sfx/sh2.mp3": "e3212b9a7d1456ecda26fdc263ddd3d0",
"assets/assets/sfx/hh2.mp3": "4d39e7365b89c74db536c32dfe35580b",
"assets/assets/sfx/kch1.mp3": "a832ed0c8798b4ec95c929a5b0cabd3f",
"assets/assets/sfx/oo1.mp3": "94b9149911d0f2de8f3880c524b93683",
"assets/assets/sfx/lalala1.mp3": "b0b85bf59814b014ff48d6d79275ecfd",
"assets/assets/sfx/p2.mp3": "ab829255f1ef20fbd4340a7c9e5157ad",
"assets/assets/sfx/hash3.mp3": "38aad045fbbf951bf5e4ca882b56245e",
"assets/assets/sfx/hash2.mp3": "d26cb7676c3c0d13a78799b3ccac4103",
"assets/assets/sfx/wssh1.mp3": "cf92e8d8483097569e3278c82ac9f871",
"assets/assets/sfx/dsht1.mp3": "c99ece72f0957a9eaf52ade494465946",
"assets/assets/sfx/hash1.mp3": "f444469cd7a5a27062580ecd2b481770",
"assets/assets/sfx/wssh2.mp3": "255c455d9692c697400696cbb28511cc",
"assets/assets/sfx/README.md": "33033a0943d1325f78116fcf4b8a96ec",
"assets/assets/sfx/yay1.mp3": "8d3b940e33ccfec612d06a41ae616f71",
"assets/assets/sfx/k2.mp3": "8ec44723c33a1e41f9a96d6bbecde6b9",
"assets/assets/sfx/k1.mp3": "37ffb6f8c0435298b0a02e4e302e5b1f",
"assets/assets/sfx/haw1.mp3": "00db66b69283acb63a887136dfe7a73c",
"assets/assets/sfx/ehehee1.mp3": "52f5042736fa3f4d4198b97fe50ce7f3",
"assets/assets/sfx/pick.mp3": "307aa3a1cdcbedfb886d4f0683ac230c",
"assets/assets/sfx/ws1.mp3": "5cfa8fda1ee940e65a19391ddef4d477",
"assets/assets/sfx/negative_beeps.mp3": "9a6ebd59266412d4c124ef83f578c7cd",
"assets/assets/sfx/wehee1.mp3": "5a986231104c9f084104e5ee1c564bc4",
"assets/assets/sfx/goodjob.mp3": "5d92f0ebe36ecebc8fa53989430d0302",
"assets/assets/sfx/swishswish1.mp3": "219b0f5c2deec2eda0a9e0e941894cb6",
"assets/assets/fonts/Baloo-Regular.ttf": "7ea5a2778c1043f5a28f86b10eaa588d",
"assets/assets/fonts/SVN-Vantom.otf": "6c06365b425911d40155afe33ae5a6ac",
"assets/assets/fonts/UTM%2520Avo.ttf": "5b5fcc354ed196046001a2db207984fa",
"assets/assets/fonts/iCiel-Pacifico.otf": "e369f61a78c093012ca192389d011d6f",
"assets/assets/fonts/HLT%2520Fall%2520For%2520You.ttf": "5bfa8b09ad3fa5ef494efbf3aca9cf4d",
"assets/assets/fonts/UTM-Cookies.ttf": "87f7b04f82d7f58da0276e43e2f55ce0",
"assets/assets/fonts/Mali-SemiBold.ttf": "154697f2a2007a57bfd35667b0957fda",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/UTM%2520Aptima.ttf": "8c38c404394cb2df6002064ae7b5ede5",
"assets/assets/fonts/iCielSoupofJustice.ttf": "ff5ea31e3f72eaeb8ef878e0b4aa6aef",
"assets/assets/fonts/VfDecorate56.ttf": "68caf02196309f5b91096bda7ee6defb",
"assets/assets/fonts/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/assets/fonts/ARLRDBD.ttf": "200135e8e5aec51916af96b03c1ee8fc",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
