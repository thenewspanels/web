                        importScripts("/web/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/web/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/web/404.html","revision":"3fbce76aba4124c881eae145be9a4d7b"},{"url":"/web/1/index.html","revision":"3701e75d72cb7dfcc1f9b65cef0ebfaa"},{"url":"/web/index.html","revision":"2ba66260f86198ae3c161ca8b005704f"},{"url":"/web/comics/us-ice-deportation/index.html","revision":"68784a468c81ebd7a28d225ce9495cfd"},{"url":"/web/about/index.html","revision":"9f2038fb842cee8d031b941182a586f3"},{"url":"/web/about/contact/index.html","revision":"4ea002aecdc58e12d3fad51d146dd079"},{"url":"/web/about/privacy/index.html","revision":"2177271b5cc1070145be2b7d46036fbb"},{"url":"/web/service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"/web/sw-register.js","revision":"2ea338a40d30a8852dc6231c5fcf970f"},{"url":"/web/css/styles.css","revision":"848db7ddabff52fb29f807ff65722a5d"},{"url":"/web/images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"/web/images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"/web/images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
