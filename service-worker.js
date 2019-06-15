                        importScripts("/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"//sw-register.js","revision":"28db336fc8991151c5c822bdb7e86016"},{"url":"//1/index.html","revision":"9aae025f52ecd93dc9342f09f7f13f78"},{"url":"//comics/000007/index.html","revision":"d11460b508b9f1a70489fd4db09f0b04"},{"url":"//comics/000005/index.html","revision":"ad352d2c5c10f99683ac56154a9a2711"},{"url":"//comics/000006/index.html","revision":"ad4c13b75659bfba705ad435c77af238"},{"url":"//comics/000004/index.html","revision":"beda56f2cd1f25fdb753f02c907e79a4"},{"url":"//comics/000003/index.html","revision":"07fdb00ed6d4cbf5f47aac730692ed21"},{"url":"//comics/000002/index.html","revision":"3c925510364dc7bcd532aea24172341c"},{"url":"//comics/000001/index.html","revision":"e195882bb1cbb76dbd2f16731d8e74b2"},{"url":"//service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"//404.html","revision":"f37dd0dd90e09d7ce10eb0b39209a9ff"},{"url":"//index.html","revision":"cae4ee7571ca53a5734468f21e8f0a68"},{"url":"//images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"//images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"},{"url":"//images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"//css/styles.css","revision":"e0c57d004a79553397566f13ce8bb053"},{"url":"//about/privacy/index.html","revision":"4bf9d304e75ead2b8020bf302c57557b"},{"url":"//about/index.html","revision":"2354f164fbfe21ecfd7cc6b218a357d5"},{"url":"//about/contact/index.html","revision":"522eb0786d067b0763a8995d4ecc6373"}];
            workbox.core.setCacheNameDetails({
    prefix: 'the-news-panels',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
