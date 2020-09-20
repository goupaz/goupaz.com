---
date: 2017-10-10T22:41:26-04:00
title: "Variables"
seo_title: "Variables | Less | GOUP"
subheader:
     greeting: Less - Style a Website
     description: This course covers the basics of styling a website using Less. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use variables in Less.
author: GOUP
image: variables.png
video: 8hmHxmDWO4k
url: /web-development/less/variables/
weight: 4
---

## Code

{{< code lang="css" >}}
@theme-color: blue;

header{
     color: @theme-color;
}

footer {
     color: @theme-color;
}

button {
     background-color: @theme-color;
}
{{< /code >}}