---
title: material theme 4
layout: post
---

Material Theme is my favorite Sublime Text theme. It released its version 4 recently. One of the major changes is Material Theme no longer uses its own file icon, replacing it with [zz File Icon](https://github.com/oivva/st-file-icons). 

A problem I have is the icons use in Material Theme is unstable. Sometimes it uses the zz File Icon and sometimes it uses its own icons. 

A solution to this problem is to force the icon override in the zz File Icon. 

The instruction is ```Preferences -> Package Settings -> File Icons -> Settings``` and add the force_override to true.

```
{
	"force_override": true,
}
```

Happy coding. 
