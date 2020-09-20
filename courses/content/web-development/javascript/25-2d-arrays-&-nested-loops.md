---
date: 2017-10-22T11:23:35-04:00
title: "2d Arrays & Nested Loops"
seo_title: "2d Arrays & Nested Loops | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers 2d arrays & nested loops in Javascript.
author: GOUP
image: 2d-arrays-&-nested-loops.png
video: 6m6QWuhLGZc
url: /web-development/javascript/2d-arrays-nested-loops/
weight: 25
---

## Code

{{< code lang="js" >}}
numberGrid = [ [1, 2], [3, 4] ];

numberGrid[0][1] = 99;
document.write(numberGrid[0][0] + "<br>");
document.write(numberGrid[0][1] + "<br>");

for(var i = 0; i < numberGrid.length; i++){
     for(var j = 0; j < numberGrid[i].length; j++){
          document.write(numberGrid[i][j] + ", ");
     }
     document.write("<br>");
}
{{< /code >}}