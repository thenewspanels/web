                        importScripts("https://preview.thenewspanels.com/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "https://preview.thenewspanels.com/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"https://preview.thenewspanels.com/404.html","revision":"73708f596f5c7122004c3c3a9889de0d"},{"url":"https://preview.thenewspanels.com/1/index.html","revision":"2296b5ca45fb64b44cbc10589557ab5c"},{"url":"https://preview.thenewspanels.com/index.html","revision":"b14f98e41f842bf955b7512bf69c60da"},{"url":"https://preview.thenewspanels.com/comics/000007/index.html","revision":"42d4e8bd8abc24a21f2129c56cf6e7e5"},{"url":"https://preview.thenewspanels.com/comics/000005/index.html","revision":"76223bf2f8ceac5b6449a9e862919f47"},{"url":"https://preview.thenewspanels.com/comics/000002/index.html","revision":"a8bd7c30f34716c023d44459ac1b5854"},{"url":"https://preview.thenewspanels.com/comics/000006/index.html","revision":"8eaf9fdf59543624b0924c7035e22baa"},{"url":"https://preview.thenewspanels.com/comics/000001/index.html","revision":"43ff868a8151538783c6e20589bc8701"},{"url":"https://preview.thenewspanels.com/comics/000003/index.html","revision":"8961925544437ed3a65b8ca71b3f0837"},{"url":"https://preview.thenewspanels.com/comics/000004/index.html","revision":"0a77c16060c1e9df2447bd42967a3c92"},{"url":"https://preview.thenewspanels.com/about/index.html","revision":"60570689d9ca6593d79994bc2efa49ac"},{"url":"https://preview.thenewspanels.com/about/contact/index.html","revision":"3193980a82756b7503ac39c7fea1dc9c"},{"url":"https://preview.thenewspanels.com/about/privacy/index.html","revision":"bae7db9cd15cc9238109317034b950b4"},{"url":"https://preview.thenewspanels.com/service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"https://preview.thenewspanels.com/sw-register.js","revision":"001d64aa57ce4399fc4136a4150cef18"},{"url":"https://preview.thenewspanels.com/css/styles.css","revision":"e0c57d004a79553397566f13ce8bb053"},{"url":"https://preview.thenewspanels.com/images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"https://preview.thenewspanels.com/images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"https://preview.thenewspanels.com/images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
