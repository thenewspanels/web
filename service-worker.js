                        importScripts("https://preview.thenewspanels.com/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "https://preview.thenewspanels.com/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"https://preview.thenewspanels.com/404.html","revision":"73708f596f5c7122004c3c3a9889de0d"},{"url":"https://preview.thenewspanels.com/1/index.html","revision":"f7924b620acb9e03f08e2bfa188e97b3"},{"url":"https://preview.thenewspanels.com/index.html","revision":"2b46a71744f90bc9dc58145e9f2c7fa9"},{"url":"https://preview.thenewspanels.com/comics/000007/index.html","revision":"0bc8f1becfca3e01bbfbedad6444b210"},{"url":"https://preview.thenewspanels.com/comics/000005/index.html","revision":"52cba347b30ad56b8e845bf414962a30"},{"url":"https://preview.thenewspanels.com/comics/000002/index.html","revision":"9d867079479dea98ee5b4df31d206c2f"},{"url":"https://preview.thenewspanels.com/comics/000006/index.html","revision":"528d8eb966f3187b08a11bef15fabf38"},{"url":"https://preview.thenewspanels.com/comics/000001/index.html","revision":"c99a83480b468a6d9c929383bd9024df"},{"url":"https://preview.thenewspanels.com/comics/000003/index.html","revision":"9591eb64dad0dc4d0b7b12c90b0d98b0"},{"url":"https://preview.thenewspanels.com/comics/000004/index.html","revision":"715eb2df28f34719c7922f17c17fab64"},{"url":"https://preview.thenewspanels.com/about/index.html","revision":"60570689d9ca6593d79994bc2efa49ac"},{"url":"https://preview.thenewspanels.com/about/contact/index.html","revision":"3193980a82756b7503ac39c7fea1dc9c"},{"url":"https://preview.thenewspanels.com/about/privacy/index.html","revision":"bae7db9cd15cc9238109317034b950b4"},{"url":"https://preview.thenewspanels.com/service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"https://preview.thenewspanels.com/sw-register.js","revision":"4f2729a8396cc6b6c679e0d3d957dad6"},{"url":"https://preview.thenewspanels.com/css/styles.css","revision":"e0c57d004a79553397566f13ce8bb053"},{"url":"https://preview.thenewspanels.com/images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"https://preview.thenewspanels.com/images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"https://preview.thenewspanels.com/images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
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
