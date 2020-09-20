---
date: 2017-10-22T11:23:34-04:00
title: "Building A Calculator"
seo_title: "Building A Calculator | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers building a calculator in Javascript.
author: GOUP
image: building-a-calculator.png
video: opz_-qeDi2E
url: /web-development/javascript/building-a-calculator/
weight: 10
---

## Code

{{< code lang="js" >}}
var num1 = window.prompt("Num1: ");
var num2 = window.prompt("Num2: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

alert(num1 + num2);
{{< /code >}}