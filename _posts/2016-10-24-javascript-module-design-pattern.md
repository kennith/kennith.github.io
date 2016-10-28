---
layout: post 
title: "JavaScript Module Design Pattern"
---
<!-- Talks about how much I like about this design pattern. -->
<!-- https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript -->

One of the design patterns in JavaScript I really like to use is the Module Design Pattern. 

The basic format of Module Design Pattern goes like this:

```javascript
var myModule = (function() {
	return {

	};
})();
```

The Module Design pattern gives an object to include a private and public functions and the functions assigned in the ```return``` automatically assigned to the ```moduleDesign```

This design helps to organize the JavaScript in a bigger application as the functions will not overlap each other. 

For example:

```javascript
var airplane = (function() {
	// private variables and functions
	var seatCount = 0;

	function privateCount() {
		return seatCount;
	};

	return {
		// public functions
		publicCount: function() {
			return seatCount;
		}
	}
})(); // The closing () automatically load the public functions to the module.
```
