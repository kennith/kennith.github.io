---
layout: post 
title: "Sublime Text Context Menu"
---

[Sublime Text](https://www.sublimetext.com/) is my favorite editor. Unless something [else](https://atom.io) reaches the level of great that Sublime Text offers, I am sticking with Sublime Text. 

The modularity of Sublime Text and the community around it is what makes it great. My favorite theme is [Material Theme](https://github.com/equinusocio/material-theme) and one of my favorite plug in after the most [obvious](https://packagecontrol.io) one is [SublimeLinter](http://www.sublimelinter.com/en/latest/). 

However, these two favorites took away something that makes Sublime Text great. 

Simple Interface.

Both [Material Theme](https://github.com/equinusocio/material-theme/blob/develop/Context.sublime-menu) and [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter3/blob/master/Context.sublime-menu.template) adds new text on the right click menu. It might be useful for some, but I don't find them needed to be on the right click menu. 

One way to disable unwanted items from the right click menu is to remove the Context.sublime-menu in the package. However, if you like most people, you install the theme and plug in through Package Control. Package Control packs the themes and plug in into a zip package. Therefore, it's difficult to just remove the Context.sublime-menu from the package. 

The other way to do it is in the default user package directory, create a folder with the same name of the package. Add an empty Content.sublime-menu file into the folder and now the right click menu is back to same as previously. 
