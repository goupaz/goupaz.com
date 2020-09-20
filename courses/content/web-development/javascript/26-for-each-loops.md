---
date: 2017-10-22T11:23:35-04:00
title: "For Each Loops"
seo_title: "For Each Loops | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers for each loops in Javascript.
author: GOUP
image: for-each-loops.png
video: Au7JCqkVq9M
url: /web-development/javascript/for-each-loops/
weight: 26
---

## Code

{{< code lang="js" >}}
var luckyNums = [4, 8, 15, 16, 23, 42];
luckyNums.forEach(function(luckyNum){
     document.write(luckyNum + "<br>");
});
{{< /code >}}