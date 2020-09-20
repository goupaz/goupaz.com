---
date: 2017-10-10T22:35:49-04:00
title: "Flexbox"
seo_title: "Flexbox | CSS | GOUP"
subheader:
     greeting: CSS - Style a Website
     description: This course covers the basics of styling a website using CSS. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use flexbox in CSS.
author: GOUP
image: flexbox.png
video: 6FedyF0F2i8
url: /web-development/css/flexbox/
weight: 13
---

## Code

{{< code lang="html" file="site.html">}}
<!-- classes 'box', 'box2' and 'container' (not shown) are used for styling the elements -->
<div class="flex-container container">
     <div class="box flex-item"><h1>1</h1></div>
     <div class="box2 flex-item"><h1>2</h1></div>
     <div class="box flex-item"><h1>3</h1></div>
     <div style="align-self:center;" class="box"><h1>4</h1></div>
     <div class="box flex-item"><h1>5</h1></div>
</div>
{{< /code >}}


{{< code lang="css" file="style.css">}}
.flex-container {
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     flex-wrap: wrap;
     align-items: center;
     align-content: space-between;
}
{{< /code >}}