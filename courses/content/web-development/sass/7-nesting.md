---
date: 2017-10-10T22:46:04-04:00
title: "Nesting"
seo_title: "Nesting | Sass | GOUP"
subheader:
     greeting: Sass - Style a Website
     description: This course covers the basics of styling a website using Sass. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use nesting in Sass.
author: GOUP
image: nesting.png
video: zGJDLINQx2Q
url: /web-development/sass/nesting/
weight: 7
---

## Code

{{< code lang="css" >}}
main {
     background-color: blue;
     p {
          color: red;
     }
     article {
          background-color: yellow;
          p{
               color: green;
          }
     }
}
{{< /code >}}