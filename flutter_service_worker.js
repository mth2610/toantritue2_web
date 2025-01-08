'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f80aed59eb3026cc56a2ed3a0e4877c9",
"version.json": "f561d988a77ab71ecab16b532eafd81a",
"index.html": "534039a6692edc951d97a54b1c3a51f2",
"/": "534039a6692edc951d97a54b1c3a51f2",
"main.dart.js": "15589aebf31b0a7500d4ed2111844051",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d3e8be9819697c196251e6e977053336",
"assets/AssetManifest.json": "117aefc2c27ba84a521815b8f1dbbce2",
"assets/NOTICES": "d3bbffcd128aa76057fe663392bba9d5",
"assets/FontManifest.json": "07e435e9de240873e75c0b16346540f4",
"assets/AssetManifest.bin.json": "8ff2e1b08c866290ffce91837b8a1296",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "95de4adb5254aff4e4c545d48718064d",
"assets/fonts/MaterialIcons-Regular.otf": "528eb37fc02149773d118df40d71747d",
"assets/assets/music/acoustic-kids-folk.mp3": "a5c5989cda11c86b29793bbb67b2809d",
"assets/assets/music/whistle-me-happy.mp3": "4e31b82335fc94e74b4065cdddb54cf2",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/music/lets-go-to-the-park-playful-cute-flute-and-piano.mp3": "9e45ab827af9b6178c1e6d8f94858335",
"assets/assets/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/images/soroban/dot.png": "2d434316d1e6df1399c992913037c071",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/smile_finger_icon.png": "2fd54dec33aa955ca8a8188b192dea86",
"assets/assets/images/progress.png": "48873c1a8a7889aff8e49a9c6830595a",
"assets/assets/images/setting_circle_container.png": "ab3ca06d4e6481049a0833d8e69f5ceb",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/square_pattern.png": "69c013a0011db4878361fd651ab4ec31",
"assets/assets/images/star_icon.png": "d4e2bd35b27f1c0b2b4b84f509b4034c",
"assets/assets/images/logo-adaptive-foreground.png": "ee957bbd1895c794e4ca6c6baebb480e",
"assets/assets/images/soroban.png": "bb9055ed410f18ef8ecf57733beaf72b",
"assets/assets/images/setting_button.png": "f2347edafa95d3e3166c583c22645df7",
"assets/assets/images/lefthand_selection_circle.png": "61c91d4ae6d06f083aad178941512c48",
"assets/assets/images/blue_bubble_button.png": "bb6e345cfaba9ca20a93302cc373b3f5",
"assets/assets/images/divide_selection.png": "fdb2ea2107ee44c862db590821d016d1",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/fingermath.png": "44a1e3f2f2b427dc13086c0cfa2fceb4",
"assets/assets/images/red_bubble_button.png": "af4509eea3dc39c4ebec8534cecffb29",
"assets/assets/images/passwordicon.png": "266a52ac80bc50c34dd1911664de89f2",
"assets/assets/images/bothhand_selection_circle.png": "143ddf0fecefca55ad9192e14d0c072c",
"assets/assets/images/usericon.png": "ab1d1c226dd8b7714c087ac1a6bd652d",
"assets/assets/images/finger_math_lefthand/60.png": "e3597506e32f6064d826bd6deac36450",
"assets/assets/images/finger_math_lefthand/70.png": "f0a83386cede1bcfa96b7437527688d7",
"assets/assets/images/finger_math_lefthand/10.png": "5fee9f5af5ad6f44d41cd9b908c16701",
"assets/assets/images/finger_math_lefthand/20.png": "1e9c76c5db04604bce2a5f6c0096b9f9",
"assets/assets/images/finger_math_lefthand/30.png": "3281a8255ad3c65a5482d150de0deffb",
"assets/assets/images/finger_math_lefthand/80.png": "f23ad7cf466ccad9380ee260c59c0162",
"assets/assets/images/finger_math_lefthand/40.png": "db0ed62999f979ceca850463638fd382",
"assets/assets/images/finger_math_lefthand/50.png": "0b9ea6946952615eb4fe429121021dbd",
"assets/assets/images/finger_math_lefthand/90.png": "26918bc1ae41d0229ec98b931e305358",
"assets/assets/images/soroban_smile_icon.png": "d9c72e66f87dc5c27e0a487d16d0b85b",
"assets/assets/images/logo.png": "0a8961fefd2088a9a007a240ac6fe539",
"assets/assets/images/bg1.png": "0d02b1988bfc30fb79d66170bc3e5300",
"assets/assets/images/tag_container.png": "57e8d49e8d085876e4741dcebdc5e880",
"assets/assets/images/righthand_selection_circle.png": "1e31687580542e5888da5a71be00a449",
"assets/assets/images/soroban_multipledivide_selection.png": "e475bf85e59ae8ba3e68bba2431bfe88",
"assets/assets/images/soroban_flashcard_selection.png": "bda04bcb583f62ef7b5a156d59fa7715",
"assets/assets/images/back_button.png": "029960254192701eb0f1b0bb3ce37f70",
"assets/assets/images/number_keyboard_button.png": "06f5d4db31bae97ca30cc2bef1a445eb",
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
"assets/assets/images/green_bubble_button.png": "55d6630a8ea82b78b7469faf6f4ada86",
"assets/assets/images/grid_bg.png": "a71684931f5d623ac783b8229825e06b",
"assets/assets/images/orange_bubble_button.png": "415b7f2c7acc930c7745197ad93af697",
"assets/assets/images/multiple_selection.png": "9d7089192368633bf0336f48d253e256",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/hexagon_container.png": "06ff5518ebc5648dab64d8ba26f9c579",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/images/selection_container.png": "ff22f98969a8c8e6a46f34d0d8e19be5",
"assets/assets/images/button.png": "84445a2f1033248e389da547623d97df",
"assets/assets/images/square_pattern2.png": "8a607590c6bc76468c93d92aab2ee681",
"assets/assets/images/soroban_plusminus_selection.png": "fb65b810c1da1c1d8d3f012fd8d0962f",
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
"assets/assets/fonts/UTM%2520Aptima.ttf": "8c38c404394cb2df6002064ae7b5ede5",
"assets/assets/fonts/iCielSoupofJustice.ttf": "ff5ea31e3f72eaeb8ef878e0b4aa6aef",
"assets/assets/fonts/VfDecorate56.ttf": "68caf02196309f5b91096bda7ee6defb",
"assets/assets/fonts/ARLRDBD.ttf": "200135e8e5aec51916af96b03c1ee8fc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
