                        importScripts("/web/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/web/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/web/404.html","revision":"49210f8bc03d08ba2a8f405dd63ec375"},{"url":"/web/1/index.html","revision":"9e54307b54db5a556cbd3f7b6485ad5a"},{"url":"/web/index.html","revision":"2ba66260f86198ae3c161ca8b005704f"},{"url":"/web/comics/us-ice-deportation/index.html","revision":"5dd5ae65878bc126a0dc46cb421de6a6"},{"url":"/web/about/index.html","revision":"1c7e8a47ba9a3f9bd44cdef727693c11"},{"url":"/web/about/contact/index.html","revision":"9a6d6a4149f67b4e9926b860a493bce5"},{"url":"/web/about/privacy/index.html","revision":"86d847f25aed80ce44cf306bed12be65"},{"url":"/web/service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"/web/sw-register.js","revision":"79b94f9a725cdc461c9682e12b37275a"},{"url":"/web/css/styles.css","revision":"c25c1f0b4016ae3f5c272347b14609a6"},{"url":"/web/images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"/web/images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"/web/images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
