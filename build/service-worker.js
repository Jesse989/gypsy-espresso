"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","21deafc10ada305e1f58f818ca53eba0"],["static/css/main.bdefde23.css","9618a61990c830d5398cf0194ee629d9"],["static/js/main.3a880ce1.js","e345dbc5e813028c96923058b4b3d76e"],["static/media/GreatVibes-Regular.5bf06596.ttf","5bf06596a053153248631d74f9fc4e28"],["static/media/about-coffee-banner.c332cb3d.png","c332cb3dd34d2e97be341a34d8c8cb24"],["static/media/bali.c870477e.jpg","c870477e3b85c9361caca900458c0840"],["static/media/costa_rica.b2880475.jpg","b28804750a7c83856b021ef89f0663e2"],["static/media/default-header.29b14d45.jpg","29b14d453d0178ddafa25616c0a274fc"],["static/media/energy_waves.9c5c451f.jpg","9c5c451fe2fb7fadba6981e94352fa95"],["static/media/ethiopia.c9fa47b5.jpg","c9fa47b56e7244997d5c3c880885ed3c"],["static/media/finalcomp.2c977955.png","2c97795512b6c4502fb631b2eae5f020"],["static/media/happy_camper.f173ccae.jpg","f173ccae061a100e1b7b62ab4c0ad7e9"],["static/media/loco_leon_300.85a9c8c4.jpg","85a9c8c4feb6cb70a0a1f5bbcd382519"],["static/media/mexico.e1853e15.jpg","e1853e15c0c79112281b5f2eab6b2325"],["static/media/mom_with_coffee.48d6ec08.png","48d6ec08008f549ebb323223d29f4bb2"],["static/media/reggae_vibes.61950405.jpg","619504057b33142b2f021b7db626eb28"],["static/media/small_face.a4f9b032.png","a4f9b032ce6125b4b40f52b867dfd902"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});