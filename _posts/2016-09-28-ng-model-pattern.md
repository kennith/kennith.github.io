---
layout: post 
title: "ng-model and pattern"
---

I was working on data validation with AngularJS. I use [ngModel](https://angular.io/docs/ts/latest/api/forms/index/NgModel-directive.html) to do data validation.

My validation happens to be validating against a regular expression. The ngModel check against a parameter named **pattern**. 

I added **pattern** as pattern="/^regex$/i" and it did not work. 

Is it my regular expression not correct? No, multiple regular expression web site claims the regular expression is correct.

Is it my AngularJS not working? No, it is working with validation suchs as ng-pristine or ng-dirty. 

Why? 

It is because I did not read the [documentation](https://docs.angularjs.org/api/ng/directive/ngPattern) correctly. 

The documentation clearly states that 

```
If the expression evaluates to a string, then it will be converted to a RegExp after wrapping it in ^ and $ characters. For instance, "abc" will be converted to new RegExp('^abc$').
```

No /, ^ nor $. A regular expression as a string is simply enough. 

Another rookie mistake, I again hope you learn from this. 
