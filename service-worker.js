                        importScripts("/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"//404.html","revision":"559047c1d1e446fb5a6eff481a075ed7"},{"url":"//1/index.html","revision":"6745bed57e15ba42e3776d7edabb5f20"},{"url":"//index.html","revision":"cae4ee7571ca53a5734468f21e8f0a68"},{"url":"//comics/000007/index.html","revision":"d11460b508b9f1a70489fd4db09f0b04"},{"url":"//comics/000005/index.html","revision":"ad352d2c5c10f99683ac56154a9a2711"},{"url":"//comics/000002/index.html","revision":"3c925510364dc7bcd532aea24172341c"},{"url":"//comics/000006/index.html","revision":"ad4c13b75659bfba705ad435c77af238"},{"url":"//comics/000001/index.html","revision":"e195882bb1cbb76dbd2f16731d8e74b2"},{"url":"//comics/000003/index.html","revision":"07fdb00ed6d4cbf5f47aac730692ed21"},{"url":"//comics/000004/index.html","revision":"beda56f2cd1f25fdb753f02c907e79a4"},{"url":"//about/index.html","revision":"50f986825949a67dfe3e7a9f7a3bc1a3"},{"url":"//about/contact/index.html","revision":"fa30e9f47caa3e92b6a915be1bdf3a14"},{"url":"//about/privacy/index.html","revision":"a74434e0e6ae53ed7cae920689be057e"},{"url":"//service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"//sw-register.js","revision":"2ec2febb045abe3b33fc752c62cd6940"},{"url":"//css/styles.css","revision":"e0c57d004a79553397566f13ce8bb053"},{"url":"//images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"//images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"//images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
