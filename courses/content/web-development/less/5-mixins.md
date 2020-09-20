---
date: 2017-10-10T22:41:26-04:00
title: "Mixins"
seo_title: "Mixins | Less | GOUP"
subheader:
     greeting: Less - Style a Website
     description: This course covers the basics of styling a website using Less. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use mixins in Less.
author: GOUP
image: mixins.png
video: 09NGUbqzkX4
url: /web-development/less/mixins/
weight: 5
---

## Code

{{< code lang="css" >}}
.fancy-border(@size: 1px, @color: black) {
     border: @size dashed @color;
}

.fancier-border {
     .fancy-border(10px, blue);
     background-color: yellow;
     border-radius: 5px;
}
{{< /code >}}