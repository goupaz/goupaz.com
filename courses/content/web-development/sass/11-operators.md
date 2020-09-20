---
date: 2017-10-10T22:46:04-04:00
title: "Operators"
seo_title: "Operators | Sass | GOUP"
subheader:
     greeting: Sass - Style a Website
     description: This course covers the basics of styling a website using Sass. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use operators in Sass.
author: GOUP
image: operators.png
video: TyBThFwGaaA
url: /web-development/sass/operators/
weight: 11
---

## Code

{{< code lang="css" >}}
$base-size: 20px;
$base-color: red;

p{
     font-size: $base-size;
     color: $base-color;
}

button {
     font-size: $base-size * 2;
     background-color: $base-color + 200;
}
{{< /code >}}