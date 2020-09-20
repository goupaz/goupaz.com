---
date: 2017-10-10T22:46:04-04:00
title: "Mixins"
seo_title: "Mixins | Sass | GOUP"
subheader:
     greeting: Sass - Style a Website
     description: This course covers the basics of styling a website using Sass. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use mixins in Sass.
author: GOUP
image: mixins.png
video: RqJKIyd1JYE
url: /web-development/sass/mixins/
weight: 9
---

## Code

{{< code lang="css" >}}
@mixin fancy-border($size: 1px, $color: black) {
     border: $size dashed $color;
     border-radius: 5px;
}

header {
     @include fancy-border(10px, blue);
     background-color: yellow;
}
{{< /code >}}