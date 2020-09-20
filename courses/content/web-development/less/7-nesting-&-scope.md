---
date: 2017-10-10T22:41:26-04:00
title: "Nesting & Scope"
seo_title: "Nesting & Scope | Less | GOUP"
subheader:
     greeting: Less - Style a Website
     description: This course covers the basics of styling a website using Less. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use nesting & scope in Less.
author: GOUP
image: nesting-&-scope.png
video: sCeQwpRGCUQ
url: /web-development/less/nesting-scope/
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