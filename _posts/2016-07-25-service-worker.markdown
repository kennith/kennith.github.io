---
layout: post 
title: "Service Worker"
---
I recently started to implement service worker to make the web app runs faster and offline. One of the projects is a landing page for personal use called [hello](https://github.com/kennith/hello). It's goal is to replace the blank page I have used when I open up the browser or open another tab. It has been my default "home page" since a decade ago.

Service worker currently works on Chrome, Firefox, and Opera. 

Creating a service worker is very simple using the [SW-Precache](https://github.com/GoogleChrome/sw-precache). The hard part is implementing it. 

I build hello using assistance tools such as gulp, bower, and brower-sync. The structure is pretty standard with app folder as the pages to serve, the asset folder to store all the css and js, and use gulp watch to automatically compile them into a single file and store into the app folder. 

Using SW-Precache to generate the service-worker.js pretty simple. First, ```gulp install --save-dev sw-precache```, add a gulp task into your gulpfile.js, and run the gulp task to generate the service-worker.js

Of course, no one's project environment are the same, so you need to do some tweaking. In my project, I ran into the following problem.

## Conflict with browser-sync(?) (Hint: Of course not)

After I added the service-worker.js into the app, I saw service worker was running perfectly from the Chrome dev tool. I continue to tweak the css and html and I found the site was not reloading with browser-sync. Why? It's because service-worker is working! The service worker prefered to serve the cache first. Each time I make any changes, I need to build the service-worker.js to tell service worker that the project has new content or design. 

My solution was excluding the service worker in the developing stage. Only include the service worker in the build stage. 

## Customize the service worker generator

Now I finished the first iteration of hello, it's time to publish and serve it with GitHub pages. 

I went to https://kennith.github.io/hello, it's there!

Let me try using it offline, oops. Unreachable. It meant service worker was not working. Well, it's expected because it's computer code. Sometimes if it works locally, but it does not always work on the server. I opened the devtool and found all the messages highlighted in red with code 404 error. 

It is because when I ran locally, the path is http://localhost:3000, but when ran on GitHub, the path is https://kennith.github.io/hello. The difference is the folder after the URL. 

When I generate the service worker, I told it to cache all the html, js, css in the root folder and its sub folder. When service worker tried to cache the files, it looked for the html, js, and css in https://kennith.github.io/ instead of https://kennith.github.io/hello. 

SW Precache is ready for this situation. In the generate service worker task, add the [replacePrefix](https://github.com/GoogleChrome/sw-precache#replaceprefix-string) in the swPrecache.write() function in gulpfile. 

It's definitely a plus to have service worker in your web application. As the major brower vendors are closer to reach standard, I believe service worker will play an important role in the future. 
