---
date: 2017-10-10T22:35:49-04:00
title: "Ids & Classes"
seo_title: "Ids & Classes | CSS | GOUP"
subheader:
     greeting: CSS - Style a Website
     description: This course covers the basics of styling a website using CSS. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use ids & classes in CSS.
author: GOUP
image: ids-&-classes.png
video: 4C_-y9dIc54
url: /web-development/css/ids-classes/
weight: 11
---

## Code

{{< code lang="html" file="site.html">}}
<h1 id="my-id">CSS Tutorial</h1>
<main class="fancy-border">
     <p class="blue-text"> Classes and ID's are awesome!</p>
</main>
{{< /code >}}

{{< code lang="css" file="style.css">}}
#my-id {
     color:blue;
}

.fancy-border {
     border: 3px dashed red;
}

.blue-text {
     color:blue;
}
{{< /code >}}