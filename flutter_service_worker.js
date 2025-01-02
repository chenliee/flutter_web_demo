'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9f71c8774bd1d7278390a25785f03778",
"index.html": "7db756d978d8a0292f2d3103442d5bb3",
"/": "7db756d978d8a0292f2d3103442d5bb3",
"main.dart.js": "942744fc1c0500344a639c8f6ba3882b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "0012ad09ef6802946874a34ec9d893a9",
"icons/Icon-192.png": "4466d7398d6a9ad51c7b0d71820487d9",
"icons/Icon-maskable-192.png": "4466d7398d6a9ad51c7b0d71820487d9",
"icons/Icon-maskable-512.png": "060beb3a44f7db1fdbcf8061ca4ee5a3",
"icons/Icon-512.png": "060beb3a44f7db1fdbcf8061ca4ee5a3",
"manifest.json": "4fd71885984f7fde1e9d4da0f1b1eb39",
"assets/AssetManifest.json": "248a45f53eb80b842b1463768ed63bfe",
"assets/NOTICES": "cc075ef52aab388acfa48fe85bc709e3",
"assets/env": "0d91721181df2b3ee493b9e16066a1cf",
"assets/FontManifest.json": "5e695e15a46be9f5dc4df97bc4c7c4e5",
"assets/AssetManifest.bin.json": "cfdd235ec0406d868f089f3e7c73c611",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bf1835b47d053e2d2bcf5489a6aff6f4",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/payment/assets/images/upop.svg": "9e1224866534814214b744326036a60f",
"assets/packages/payment/assets/images/mpay.svg": "a61be15533fadb72e7354b47d4a7f139",
"assets/packages/payment/assets/images/wxpay.svg": "a0a41979dc666df165532fe67c8b1a63",
"assets/packages/payment/assets/images/simpay.png": "d7758dd62673fc7b7b21f3a23a2c3b6e",
"assets/packages/payment/assets/images/pos.png": "cf4368b37ee24c8bace59327f1dc2445",
"assets/packages/payment/assets/images/image_error.png": "f977d5eb716aa864808916a80ef7f76b",
"assets/packages/payment/assets/images/icbc.svg": "ba16c80065d3f444dca3910622f382f5",
"assets/packages/payment/assets/images/alipay.svg": "638da9792386b52820cb39b0e508cef9",
"assets/packages/payment/assets/images/balance.svg": "afce88a2dd48c93b6e5a5511e02f292f",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5c95f3838f7bceeb184409a368f0cd93",
"assets/fonts/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/fonts/NotoSansTC-Bold.otf": "503ece9832c8660172b2e9bf6d864028",
"assets/fonts/NotoSansTC-Light.otf": "ffdd19a3f9db8c71b26f926be3eed02a",
"assets/fonts/NotoSansTC-Medium.otf": "3cf084f9bb05158d53e7c239899aaccc",
"assets/fonts/MaterialIcons-Regular.otf": "0b47dbe588fd1416fabff7b6d4d788a3",
"assets/fonts/NotoSansTC-Black.otf": "80ea41b950b6a39c5985f0ff268205a7",
"assets/assets/svg/tab_shop.svg": "01f58c70574fb49daf7c4610591d71ae",
"assets/assets/svg/tab_home.svg": "519465e18e42ba6760ccb23bfa05b526",
"assets/assets/svg/student_album.svg": "48a36c8f62af1f89d3b73d3f86a7968c",
"assets/assets/svg/tab_study_selected.svg": "29f66836caf8f2c015a76f530dee6f00",
"assets/assets/svg/tab_member.svg": "818081ab16b7afe3fcae73b288b7a00d",
"assets/assets/svg/new_recommend.svg": "7fea39fdbef8ed8bb62f7b7671c27393",
"assets/assets/svg/tab_shop_selected.svg": "6b52606efe0f8d51fdb577730f9b53d2",
"assets/assets/svg/tab_member_selected.svg": "11ccaabea21ffff0c0a8298f6e07a959",
"assets/assets/svg/icon_facebook.svg": "d1043fd5f3c99f7636f6838bdd051616",
"assets/assets/svg/coupon.svg": "698fa689799a74352988b2545003a7c1",
"assets/assets/svg/tab_home_selected.svg": "83f4bc6ec42594d172b3c96ea3d28403",
"assets/assets/svg/tab_study.svg": "201c7aed80cf4808e3c85144256379b2",
"assets/assets/svg/living.svg": "214503c48af05d0a4daa59f0f2305b9f",
"assets/assets/svg/online_service.svg": "5531a9fb5418a75b5777d2b39d3cd0ea",
"assets/assets/svg/welfare.svg": "ae80fae820044429a0a9191eba41c66b",
"assets/assets/svg/tuition.svg": "52ce5639a7b05826e5ffa7586dab558a",
"assets/assets/svg/course.svg": "1073038ffd7844dd477ee408fe0c0b13",
"assets/assets/svg/know_macau.svg": "e161323e1032bbef44571f3f45cb7a2c",
"assets/assets/svg/menu.svg": "40fa9242aa97591abbd2bbd725a68a29",
"assets/assets/svg/icon_wechat.svg": "e01f97fbaefdbfacab79b9062c180256",
"assets/assets/images/home/discount_class.png": "28499c3a18d6cdeeed1b14c1ba163cf1",
"assets/assets/images/home/new_recommend.png": "282916a5e2de46a75d0b047477456f8e",
"assets/assets/images/home/raffle_icon.png": "b1f308bca90fe8f1197cef2cc1f72e66",
"assets/assets/images/home/raffle_course.png": "6f794adf4b4f76859d4602c939fa2877",
"assets/assets/images/home/student_album.png": "68938c922e81898f4f8c7054c0165d53",
"assets/assets/images/home/30_score.png": "26db75a58f00d0048db9944c90b96493",
"assets/assets/images/home/first_gift.png": "1c663525928fc0e184c1c51fd4f4ab51",
"assets/assets/images/home/know_macau_detail_bg.png": "8f3eb3c2ca7fb2056fa6f72b5400b55d",
"assets/assets/images/home/course_bg.png": "b84ae88b0916af9cbd54c6c2dbc0a1d7",
"assets/assets/images/home/know_macau.png": "f85a97147af05fc25d7adf948f86008b",
"assets/assets/images/home/course.png": "5a512935ee513d73cc8df590a3465fbb",
"assets/assets/images/home/welfare.png": "da75a603a0c79090437e8f1820cfe36e",
"assets/assets/images/home/tuition.png": "18fb4eb56f14aaaee8c099a1d8d500f0",
"assets/assets/images/home/raffle_tuition.png": "76521db937ac2a3ad9c752d44e843977",
"assets/assets/images/home/living.png": "8cd8e8788d8013bfbd7656bba4ff8901",
"assets/assets/images/home/online_service.png": "f16483178d44cd07a3cc08103d98e3cb",
"assets/assets/images/home/raffle_bg6.png": "0b3d0fdc7350afb41c7cb747e4533a95",
"assets/assets/images/home/raffle_bg4.png": "9c0a08eea60b4efbacb72015ea263d22",
"assets/assets/images/home/raffle_bg.png": "a620c09226096398c4ae11b07d2305fb",
"assets/assets/images/home/raffle.png": "ab1a358a6b54a1b0cf8ec819b0eba610",
"assets/assets/images/home/raffle_bg5.png": "5052ff695ed5ceaaa1874df6d0c800d3",
"assets/assets/images/home/raffle_bg1.png": "31f2d76a7a6dad9bb8776d5fb8f04efe",
"assets/assets/images/home/raffle_bg2.png": "9947fd8902ee77b6d29ed4935826c216",
"assets/assets/images/home/raffle_bg3.png": "cdcfbda4e966e5a619872747ff4d1035",
"assets/assets/images/study/crown.png": "dd749385b3da17be1b226f085e1e8df2",
"assets/assets/images/network_error.png": "d94097cec395de5ba047968ca8c14969",
"assets/assets/images/load_error.png": "3be79d81f7b6ffe5c57bc352f8122cc2",
"assets/assets/images/empty.png": "cb38b3e825c10f099f5b057dbe8b4653",
"assets/assets/images/shop/shopping_cart.png": "2ab7d4727287d62c876acccb3f57f23f",
"assets/assets/images/shop/team.png": "84ea9574b5832f7cc76f8680874c1a54",
"assets/assets/images/shop/category.png": "c2647eb6639c3e258e50d2e7f2e71bcf",
"assets/assets/images/shop/home_active.png": "172a15d83ddc56e23e79e758f1bf4358",
"assets/assets/images/shop/cart.png": "53c249d39e6195ac6426e4d0a122c43c",
"assets/assets/images/shop/newgood_top.png": "1b7ce09c301ff009926e61f71bbd488c",
"assets/assets/images/shop/team_active.png": "9806df30329fbc5b672993d55e92de3e",
"assets/assets/images/shop/seckill_logo.png": "4b5876b836c115f71c703a3a84f86364",
"assets/assets/images/shop/seckill_top.png": "a3cada06f8b11eb479fa891459c905ed",
"assets/assets/images/shop/h_delivery.png": "1d90dc70823abb70977b1e0f9be92678",
"assets/assets/images/shop/home.png": "eade53f5df68eaffca8a770b4c505cdf",
"assets/assets/images/shop/person.png": "41dd0f10da4d8f7f1f5b709d5c92c7f1",
"assets/assets/images/shop/cart_active.png": "30d1cd26f16816dc039269eef8c932ac",
"assets/assets/images/shop/h_self.png": "6603c6ea6c50b86d143a3e36db083e8e",
"assets/assets/images/shop/seckill_bg.png": "fdb7043cf594088ae4bc8a70fb1f3ab4",
"assets/assets/images/shop/shop_bg2.png": "a39687ca148d76d1792dfc37433c00c6",
"assets/assets/images/shop/seckill_button.png": "d5abc7d05a767adc16ed734191f4113c",
"assets/assets/images/shop/shop_bg1.png": "e188567b793e8bdb19b3b749825dbcfa",
"assets/assets/images/shop/edit.png": "d21a5a7606efa3e705a94054f4cab05a",
"assets/assets/images/shop/shop_bg.png": "216068788ab6baa0e3594eaf4ead1f46",
"assets/assets/images/shop/coupon.png": "b59f2d87b8ece45b2d3c6cb42f9b860a",
"assets/assets/images/shop/person_active.png": "73ae89dac3968e402d9058a02c65d855",
"assets/assets/images/shop/category_active.png": "0f7343857a0b8a6f1e61ee354aaa0069",
"assets/assets/images/error_page.png": "52e9ee4e206cff57e500987021830776",
"assets/assets/images/logo.png": "365c99512e016675f03d5ed9b23ffadc",
"assets/assets/images/image_error.png": "f977d5eb716aa864808916a80ef7f76b",
"assets/assets/images/me/study_center.png": "61dc26185c0ba0056af97b437fd9aece",
"assets/assets/images/me/survey.png": "7385785cab37b8aac15638063702db79",
"assets/assets/images/me/macauabacus.png": "9626e9361cb60a345fde6e0390efbaa0",
"assets/assets/images/me/elite.png": "21d33dc793919b8572be7fde7d7bc425",
"assets/assets/images/me/excellent_qrcode.png": "531d469906afb8064101508588695e3e",
"assets/assets/images/me/leave_apply.png": "fdf320df82e70d12fe55a130bf3abfa3",
"assets/assets/images/me/macauscholar_qrcode.png": "e2a606a9939eb161bc8c83e8ef1540cc",
"assets/assets/images/me/RETURNS_STATEMENT.png": "a5d9c13d5e9847f5ca228f04b55fad84",
"assets/assets/images/me/my_course.png": "4a7c82bc638b32834b7fdbb64201ff25",
"assets/assets/images/me/logout.png": "e21e18f70a612c0647488c06cdf85ae6",
"assets/assets/images/me/MANAGEMENT_STATEMENT.png": "c32dcc27b59f30e82a947061a427e7b8",
"assets/assets/images/me/att_record.png": "8d572aac62800706d5983774d8d874b8",
"assets/assets/images/me/berkshire_qrcode.png": "7a20e3c849167633fb914f3780e55b48",
"assets/assets/images/me/littleseeds_education.png": "07ecc12749018a66c2e7795d1d213d80",
"assets/assets/images/me/littleseeds_tuition.png": "944534b607b56caf19130b69b6bdb521",
"assets/assets/images/me/SERVICE_AGREEMENT.png": "79089c939eccd5e7fa050c96d3f527b4",
"assets/assets/images/me/little_tui_qrcode.png": "e8b2d9dc7864ca49f07293f0050fb47d",
"assets/assets/images/me/littleseeds.png": "8c5cdfc78bde9b124a306ffe51a09a4b",
"assets/assets/images/me/elite_qrcode.png": "7a7034bb75eb7c7a37cc72180c7fa879",
"assets/assets/images/me/little_edu_qrcode.png": "bb70714764d054867d4c7a3176ba8e1a",
"assets/assets/images/me/PRIVACY_STATEMENT.png": "95a352ebbe7139b59c71576ef78bd9ac",
"assets/assets/images/me/switch_account.png": "f66804251888a7a5090d0838f9fa4ec9",
"assets/assets/images/me/USAGE_STATEMENT.png": "dd6cb108f729c8483919498357cca5b6",
"assets/assets/images/me/notify.png": "db89e3da05f7d8f8e8c002c3c6957f94",
"assets/assets/images/me/excellent.png": "074b2630c514f2475d4996610bb3fab6",
"assets/assets/images/me/my_fav.png": "41138644c92e19a4ce60f079d4240045",
"assets/assets/images/me/badge_bg1.png": "edbf971f2311c08edf79c26c746a093e",
"assets/assets/images/me/contact_us.png": "a50c81736c6a21ddf3884ea727324f21",
"assets/assets/images/me/badge_bg2.png": "bea05f29668acd9931ac14ad48c96625",
"assets/assets/images/me/badge_bg3.png": "6a268727a45dcbdbc7d83950497e60f0",
"assets/assets/images/me/wechat.png": "f36855c3d427777ec819b7f735dc02ef",
"assets/assets/images/me/coupon.png": "bf5cd91c635b2df5f69909bf49e920b0",
"assets/assets/images/me/badge.png": "e86bd5efe05d6f2ec8c937fd149d4152",
"assets/assets/images/me/setting.png": "374e35726ea7003a001df1a57575813f",
"assets/assets/images/me/my_order.png": "6ac893d9de0cf15017d9347f38c3d91d",
"assets/assets/images/me/berkshire.png": "7ff3a6f3181b9e43b9f8ece105f7d2b7",
"assets/assets/images/me/macauabacus_qrcode.png": "ef51c97194b0dbf77deeb6d5c3761e3b",
"assets/assets/images/me/badge_bg.png": "9f9b2b2f710ae340834b15395b07a3a8",
"assets/assets/images/sold_out.png": "f3b6093f05ead6ad941a284e2f2b1934",
"assets/assets/images/app_logo.png": "4466d7398d6a9ad51c7b0d71820487d9",
"assets/assets/images/server_error.png": "bddf82d931ea6be48e780ffa6a8eaeff",
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
