---
date: 2017-10-22T11:23:34-04:00
title: "Accessing Html Elements"
seo_title: "Accessing Html Elements | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers accessing html elements in Javascript.
author: GOUP
image: accessing-html-elements.png
video: pxBT4QgNhh4
url: /web-development/javascript/accessing-html-elements/
weight: 13
---

## Code

{{< code lang="html" file="index.html">}}
<h1 id="myHeader" giraffe="Giraffe Attr">GOUP</h1>
<script src="script.js"></script>
{{< /code >}}

{{< code lang="js" file="script.js">}}
var header = document.getElementById("myHeader");
header.style="color:blue; background-color:red;"
document.write( header.getAttribute("giraffe") );
header.innerHTML = "Elephant Academy";
{{< /code >}}