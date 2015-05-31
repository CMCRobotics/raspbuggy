---
layout: post
title: "A fully working programming environment for Lego Mindstorms NXT"
date: "2015-05-31 22:55"
author: bcopy
categories: [lego mindstorm,nxt-python,drivar,web IDE]
comments: true
published: true
---

Finally, the programming environment is fully working for Lego Mindstorms NXT !
<img src="${r '/images/2015-05-31-webide.jpg'}">

<!--more-->
The web-based programming environment supports : 

* On-the-fly Python code generation (any change in the Blockly programming area is immediately reflected in Python)
* A script preview panel (to see what the generated script looks like before execution)
* Script execution monitoring (to know whether your script is still running)
* Asynchronous console output (so that your program can provide debug outputs during execution)
* and a very pleasant Bootstrap 3 based web user interface, as you can judge from the included screenshots.

The generated script will currently only work for the Drivar Lego Mindstorms NXT layer, but it will be
very easily adapted to work with the Pimoroni Explorer HAT, or even a custom adapter board if we happen to come up with one.

<img src="${r '/images/2015-05-31-webide-1.jpg'}">




