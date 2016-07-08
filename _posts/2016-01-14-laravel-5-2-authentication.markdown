---
layout: post
title:  "Laravel 5.2 Authentication Routing"
date:   2016-01-14 14:02:11
categories: laravel
---

In Laravel [5.1](https://laravel.com/docs/5.1/authentication), the authentication [route must be set manually](https://laravel.com/docs/5.1/authentication#included-routing).

In Laravel [5.2](https://laravel.com/docs/5.2/authentication), the authentication can be done by issuing [php artisan make:auth](https://laravel.com/docs/5.2/authentication#included-routing), it will automatically add route::auth() into your route.php.

In 5.1, the authentication functions are getLogin, postLogin, and getLogout, but in (5.2)[https://github.com/laravel/framework/blob/5.2/src/Illuminate/Routing/Router.php#L346], the functions are showLoginForm(), login(), and logout(). 

I thought it was good to point out that in case if you need to add more functionalities for your application's login process.
