---
date: 2017-10-10T22:41:26-04:00
title: "Mixin Guards"
seo_title: "Mixin Guards | Less | GOUP"
subheader:
     greeting: Less - Style a Website
     description: This course covers the basics of styling a website using Less. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use mixin guards in Less.
author: GOUP
image: mixin-guards.png
video: cC_v7ytYH6M
url: /web-development/less/mixin-guards/
weight: 6
---

## Code

{{< code lang="css" >}}
.p-style(@size) when (@size <= 20) {
     font-size: @size;
     color: red
}

.p-style(@size) when (@size > 20) {
     font-size: @size;
     color: blue
}

p{
     .p-style(30px); 
}
{{< /code >}}