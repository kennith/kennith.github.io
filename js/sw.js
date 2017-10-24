importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/css/app.css",
    "revision": "451116b7d5d30d1c84bca68ffa1afc4e"
  },
  {
    "url": "/img/github.svg",
    "revision": "ea8bb7f4b65e7f8b2438d45463270d82"
  },
  {
    "url": "/img/medium.svg",
    "revision": "e3de124f5d20c146941e05935c72020c"
  },
  {
    "url": "/img/twitter.svg",
    "revision": "93a9fd6aa377d5fe5cb299c3927b8a15"
  },
  {
    "url": "/index.html",
    "revision": "91dd51cedc73b1fbe9b84ab8df467df0"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
