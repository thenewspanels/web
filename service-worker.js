                        importScripts("/web/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/web/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/web/404.html","revision":"d99d3d8823f074aef7041afdf6471409"},{"url":"/web/1/index.html","revision":"8c002d9ceba22a054a1127d2b6d3b88c"},{"url":"/web/index.html","revision":"d1cb9b062b2522470408f30e31f20dab"},{"url":"/web/comics/000007/index.html","revision":"a88850c31781e02d6d13d943911bcf96"},{"url":"/web/comics/000005/index.html","revision":"c20669ead0769eb1d6914848fe8fe7d2"},{"url":"/web/comics/000002/index.html","revision":"a13e77ff5ae2f9cdbe7d813e8e755d02"},{"url":"/web/comics/000006/index.html","revision":"e79b6458d0a6bbf415c1fbb5100b3671"},{"url":"/web/comics/000001/index.html","revision":"c03f894eb49586747ffdc9edd743068e"},{"url":"/web/comics/000003/index.html","revision":"88788db3dddeaa2a435151a48cc6044f"},{"url":"/web/comics/000004/index.html","revision":"43b680e7cae9fd6cb5eda0d88a3d594a"},{"url":"/web/about/index.html","revision":"ee42f4834b11177a5d13a7e1b7010539"},{"url":"/web/about/contact/index.html","revision":"e0d6001cbeceebc9d11b855d58b2271c"},{"url":"/web/about/privacy/index.html","revision":"8e89e680c5ab15fa9a79aa5b57690fc7"},{"url":"/web/service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"/web/sw-register.js","revision":"2f71d70c1d18d956bc268f969d00452a"},{"url":"/web/css/styles.css","revision":"c25c1f0b4016ae3f5c272347b14609a6"},{"url":"/web/images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"/web/images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"/web/images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
