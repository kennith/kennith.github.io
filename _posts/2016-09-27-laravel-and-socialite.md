---
layout: post 
title: "Laravel and Socialite"
---

I am currently working on a project using Laravel and one of the requirements is to implement the third party logon using OAuth 2.0. 

The Laravel has a package call [Socialite](https://github.com/laravel/socialite) which makes everything simple. The OAuth server I am communicating with is not one of the big Internet companies such as Google or Facebook, but the [Socialite Providers](https://socialiteproviders.github.io/) has the adapter ready to use. 

Everything is really simple, except I totally misunderstood Socialite. 

Socialite is an interface to authenticate my Laravel project with other OAuth server, but it is **not** an interface to communicate my Laravel project with the APIs provided by the OAuth server authenticated. 

What Socialite does is to authenticate my users from my project. Once the authenication succeee, I will receive an *access token*, a *refresh token*, and *expires date*, etc. I use these tokens (either access, or to get a new token from a refresh token) to access the APIs by using [Guzzle](http://docs.guzzlephp.org/en/latest/). 

I get my mistake is totally a rookie mistake, but everyone starts as a rookie sometime in their life. I just hope you can save some time by knowing exactly what to do with Socialite. 
