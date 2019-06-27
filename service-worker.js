                        importScripts("/web/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/web/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/web//404.html","revision":"f5fa091cd78762723669a56d755aa0c5"},{"url":"/web//1/index.html","revision":"c81953d29b58254699c340dcc0c18cc0"},{"url":"/web//index.html","revision":"8dd6f481215fc78e64fdbcebffa7e91e"},{"url":"/web//comics/us-ice-deportation/index.html","revision":"8edcef30c7b3d6bc9e32cb5441504fb1"},{"url":"/web//about/index.html","revision":"07b434b391c723b6582da4ed3d411663"},{"url":"/web//about/contact/index.html","revision":"ac5a663645ad281e804bd9cb97c289cb"},{"url":"/web//about/privacy/index.html","revision":"3c0f64daedcda5ff8d4dac233f4ff397"},{"url":"/web//service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"/web//sw-register.js","revision":"5dcdd678cccf172b707370d87c362443"},{"url":"/web//css/styles.css","revision":"848db7ddabff52fb29f807ff65722a5d"},{"url":"/web//images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"/web//images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"/web//images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
