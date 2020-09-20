---
date: 2017-10-10T22:46:05-04:00
title: "If Statements"
seo_title: "If Statements | Sass | GOUP"
subheader:
     greeting: Sass - Style a Website
     description: This course covers the basics of styling a website using Sass. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use if statements in Sass.
author: GOUP
image: if-statements.png
video: Vm50HFOcKTQ
url: /web-development/sass/if-statements/
weight: 12
---

## Code

{{< code lang="css" >}}
@mixin text-style($size) {
     font-size: $size;
@if $size > 20px {
     color: blue;
} @elseif $size = 20px {
     color: red;
} @else {
     color:green;
}

header {
     @include text-style(21px);
}
{{< /code >}}