---
layout: post 
title: Laravel and Sass
---

In Laravel 5.2, if you want to use the bootstrap scss as the base design with customization without touching the original code for bootstrap, create a file call app.scss, do the customization at the beginning and add include the bootstrap's scss in the end.

{% highlight sass %}
// Your customization here.
$font-family-sans-serif: Arial;

// include the clean bootstrap here.
@import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap";
{% endhighlight %}

It is because in bootstrap, it uses the ``` !default ``` for its variables. It means [if the variable has already been assigned to, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one.](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_).

Therefore, it keep your styling clean, put the @import in the end instead.  
