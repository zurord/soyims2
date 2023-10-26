'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "50627fc517e947a8805728814626b383",
"assets/AssetManifest.json": "099a5a4e9f606890f108903b40ae5af0",
"assets/assets/a.png": "32b73d266dd49c7ab46d3595c9715468",
"assets/assets/aguin.png": "017d2cda400541c1fd77e0f8752061c8",
"assets/assets/aple.png": "a3c6a7b9ba2df018e9c48c556da22c24",
"assets/assets/ass.png": "b32c44b0c75d7ff6449fa778fe3e88a8",
"assets/assets/button_nanda_fondo.xml": "c855f8cad7a3b4fc173f72578c39876f",
"assets/assets/button_selector.xml": "1c7d37bc1b69040cf3a6644594eae221",
"assets/assets/button_selector_dev4.xml": "f86bd22b96bb88a0f32b6103a9741ef5",
"assets/assets/button_selector_tara.xml": "1e0c915dc04389680d882b19d186b254",
"assets/assets/caja5.png": "3d255ccaca8fd7cde5305aab50842bcf",
"assets/assets/caja6.png": "b603a7999aa7e36e6db39b10b19f7f14",
"assets/assets/cajaa.png": "192dd8e7fd5854b6e2535dc174f0bd3b",
"assets/assets/cal2.png": "2206d966a7d2d1929af203822876be71",
"assets/assets/cal3.png": "576e9bbee178691abbe6e8b239db5ec4",
"assets/assets/cale.png": "3fc4ac950e1c745c922a236a988df76a",
"assets/assets/calen5.png": "dfa2748bb67b0b1bde324a28c9739223",
"assets/assets/calendario23.pdf": "e661d3a3b50122748add51556003f70f",
"assets/assets/can.png": "68ace74d3705fba4165f3512a63af9af",
"assets/assets/carr.png": "9a4322ae235bce8c2691bbfc06527b45",
"assets/assets/casa.png": "386d170062c8ad0c2fdce2bb586d5943",
"assets/assets/cct.pdf": "fb874b5f29380e9228fa52c25ac8f105",
"assets/assets/ChatIMS.png": "be50910b9a3869af31bb70ebc3dd279e",
"assets/assets/compa2.png": "4f7f07e2a78a39dea080110a174851e1",
"assets/assets/con1.png": "eeb3414daf6810da4df4d5dd6b06b865",
"assets/assets/Constancia.png": "10c9ebe75c8a5db093b0da19cf96b8b5",
"assets/assets/contra.png": "58985949149d55b23469e1db6f7b9640",
"assets/assets/contra1.png": "306eae62c4519f679a0dc2addcfe1951",
"assets/assets/contrato1.png": "85b46a7cec6a63a7927d732956533b5c",
"assets/assets/Convenios.pdf": "78f22b7ebddede828c04ef1a90cd36b8",
"assets/assets/Convenios.png": "f1c8dcf3b981cb49b6f3ac7d9e6a73ce",
"assets/assets/declaranet8.png": "67bc93bd0796e42e64c26eeeabde9633",
"assets/assets/dev.png": "8cff79e7e13f77ebb68327e8a310c872",
"assets/assets/dev4.png": "a775b47e241037e6a12f704361594122",
"assets/assets/eee.png": "84faf82f0a60c021a87afa1b970c8758",
"assets/assets/esta.png": "617cc391e3389cbb58df010f9aa68ef3",
"assets/assets/estatutos.pdf": "6406062b32fd0c53b3b1e0b43944588a",
"assets/assets/estatutos.png": "9fbccae62a14f86a3404c46a27204906",
"assets/assets/fle.png": "9f30bee2c752ac7a97629545df19dc4d",
"assets/assets/fondo2.xml": "3fd39db8aa328b71de51b714809dfa21",
"assets/assets/fondora.png": "9cd9e899fa2764c3b51569bc344f50ed",
"assets/assets/fondorad.png": "794d9791b4944ac90e7d6fdcd9dad495",
"assets/assets/google_logo.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/gorda.png": "c79335913569a3655af9a05d79f362f4",
"assets/assets/hora.png": "c30ed054f138a30cd922d755f4c5bb04",
"assets/assets/huawei.png": "f4981f9394b6b45981d134e98a279f32",
"assets/assets/ic_launcher_background.xml": "fe3b3d149929ff904240fcdd8da99005",
"assets/assets/ic_launcher_foreground.xml": "6fbb9993537cd8f181ab067133adcd49",
"assets/assets/img.png": "d155d4a0e864072d559b436cc15a05cd",
"assets/assets/imp.png": "39f39b03e72e9205b855245d81cda99f",
"assets/assets/imp1.png": "7c937285df2de514a5f60f7c6c4b17a3",
"assets/assets/imss.png": "42af5b6aab082c1bd2f804777a85dd68",
"assets/assets/lconceptos.pdf": "2d4aebe1b13643efea2dbc0f517246f4",
"assets/assets/lconceptos.png": "660f1f032bc11db54fa59a830e27769e",
"assets/assets/mar.png": "6be4d8ef036bf41bb16582a88fd98e44",
"assets/assets/marcas1.mp4": "a6513e42b58f596019e328571b6b2bb8",
"assets/assets/mp3intro.mp3": "8e4d80355b8d91241a290955e83183de",
"assets/assets/na.png": "f00d63451f4a150e35b61a5db1d64b5e",
"assets/assets/nan.png": "fae50543be851c3472d48fae4a001c05",
"assets/assets/nanda2.png": "db70833d231f55fb5f00d96b2f249ee1",
"assets/assets/nanda2023.pdf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/new2.png": "ae48e55f81b0a35ff908c539dfc2c4dd",
"assets/assets/normal.xml": "7019ed980fd464ac9e833995ee9148fd",
"assets/assets/permu.png": "fd3db721298bd94e5de8a9b664246a81",
"assets/assets/permuta2.png": "67bc93bd0796e42e64c26eeeabde9633",
"assets/assets/play.png": "dc1fed111477faa1459cc48c2dea2ea7",
"assets/assets/prestamo.png": "2feb7a1aab580434bb66152f394b9742",
"assets/assets/pro1.png": "6a1e58bfc9b18718d8ba76df47f812c4",
"assets/assets/promo1.png": "188e7f4b932afc5ccecf9c67406a987e",
"assets/assets/rad.png": "e15c63a592767795f388e9444875a18b",
"assets/assets/radio2.png": "3178f027309488ff0606d42923d830c4",
"assets/assets/soyims13.png": "b7f405f7236dbce171d38e2da524123c",
"assets/assets/splas1.png": "38ef0874740a373c4283c87772d672d4",
"assets/assets/splas10.png": "0881a728878ba00100437156471bf076",
"assets/assets/splas11.png": "23a4afa21b5fac3130681fe6293f8112",
"assets/assets/splas2.png": "e587b1533ea0ea1254fec8d965182afc",
"assets/assets/splas3.png": "8eed3a061c88dea0722931da7a6f313a",
"assets/assets/splas5.png": "21f588535e041818ecf2372eb56caa71",
"assets/assets/splas6.png": "fe9d89251fc2f48011750669dd253592",
"assets/assets/splas9.png": "767197b0c50f7dbc21b4b19e3a699b80",
"assets/assets/splash11.png": "05dc7387ee78609c660bbcf0f3adef97",
"assets/assets/ta1.png": "6d0a5fa0886953eac632d0c3f86b2681",
"assets/assets/ta2.png": "56596a6e49293db7d15e7cccf8f72685",
"assets/assets/ta4.png": "9b3bda5d6fdb77ec3a58f52dc8f773c6",
"assets/assets/tabulado.png": "7f2e935c6f49eeda2308dc6810027294",
"assets/assets/tabulador.pdf": "49aa1f67c5ce22656c2f2adbeaba4278",
"assets/assets/tar5.png": "78e2955af488d94ee3eade69d8a01e90",
"assets/assets/tar7.png": "36f71727fdf25f4e91af72086a973bc9",
"assets/assets/tar9.png": "3fd0b8260c638fee2e08b3baf7615b2a",
"assets/assets/tara.png": "2cc199829a9c2b7329db592d47f8cd4d",
"assets/assets/tarj.png": "00384c2320ca74a1b68131e9c5ba3885",
"assets/assets/tes1.png": "2843785ffdf53c4df9c1d16830655bee",
"assets/assets/tramite.png": "e86c9c80ab1b07fa3c4ee82d5636059e",
"assets/assets/tramites.png": "6e4b25e9aad830d442937745770871fd",
"assets/assets/tramites5.png": "97a5bb293baeb7943de4024af5492ccd",
"assets/assets/tramites6.png": "39f39b03e72e9205b855245d81cda99f",
"assets/assets/txt.pdf": "327dadd91efbcf30057abac43d3adf0b",
"assets/assets/txt2.png": "19d7d4377994c84241d5901ed2dd1376",
"assets/assets/txt6.png": "db47fb33b59361f66c0a57181dc18f22",
"assets/assets/vaca1.png": "7f3eb263e331333579846a0cd72392ba",
"assets/assets/vaca3.png": "3764703aab406ff8e27470d0aa5a6762",
"assets/assets/vacaciones2023.jpeg": "0b7ad1143531d8c40fb43641ae5e0947",
"assets/assets/webtarje.png": "7723cedc1a29696c95e26ea98c4c5c11",
"assets/assets/whatsapp_iconaa.png": "6d4d1d6f72bc39e646111afd8be7a6ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95c03f22bc1666fe74512dec57411357",
"assets/NOTICES": "82065358179e9776baa24c3ea1d2b44d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e2764abbc4f7bfa8aa80a0d66710e8aa",
"/": "e2764abbc4f7bfa8aa80a0d66710e8aa",
"main.dart.js": "0ff9c794a490b5e1991f72ff9e46f9ec",
"manifest.json": "32b226e07e4d5ebf7735d72b9dd26564",
"version.json": "6fa55fcf07875dbdc044117523825ac3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
