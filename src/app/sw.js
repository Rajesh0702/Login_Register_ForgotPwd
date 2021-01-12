self.addEventListener("install", (event) => {
  function onInstall() {
    return caches.open("static").then((cache) => cache.addAll());
  }

  event.waitUntil(onInstall(event));
});
self.addEventListener("fetch", function (event) {});
