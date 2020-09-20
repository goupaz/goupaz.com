---
date: 2017-10-10T22:46:04-04:00
title: "Extends"
seo_title: "Extends | Sass | GOUP"
subheader:
     greeting: Sass - Style a Website
     description: This course covers the basics of styling a website using Sass. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use extends in Sass.
author: GOUP
image: extends.png
video: n8Mx6aZ0TYc
url: /web-development/sass/extends/
weight: 10
---

## Code

{{< code lang="css" >}}
.message {
     font-size: 20px;
     border: 1px solid black;
}

.warning {
     @extend .message;
     color: yellow;
}

.error {
     @extend .message;
     color: red;
}
{{< /code >}}