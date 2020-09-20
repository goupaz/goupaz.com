---
date: 2017-10-10T22:46:04-04:00
title: "Variables"
seo_title: "Variables | Sass | GOUP"
subheader:
     greeting: Sass - Style a Website
     description: This course covers the basics of styling a website using Sass. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use variables in Sass.
author: GOUP
image: variables.png
video: 5sbqj4jAG8c
url: /web-development/sass/variables/
weight: 6
---

## Code

{{< code lang="css" >}}
$theme-color: blue;

header{
     color: $theme-color;
}

footer {
     color: $theme-color;
}

button {
     background-color: $theme-color;
}
{{< /code >}}