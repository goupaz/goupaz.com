---
date: 2017-10-10T22:35:49-04:00
title: "Animations"
seo_title: "Animations | CSS | GOUP"
subheader:
     greeting: CSS - Style a Website
     description: This course covers the basics of styling a website using CSS. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to use animations in CSS.
author: GOUP
image: animations.png
video: 89dMYqpFcYs
url: /web-development/css/animations/
weight: 14
---

## Code

{{< code lang="css" >}}
@keyframes change-color {
     from {background-color: salmon;}
     to {background-color: lightblue;}
}

@keyframes change-color1 {
     0% {background—color: red;}
     15% {background—color: orange; top:10px; left:10px;}
     30% {background—color: yellow; top:20px; left:20px;}
     45% {background—color: green; top:30px; left:30px;}
     70% {background—color: blue; top:40px; left:40px;}
     100% {background—color: purple; top:50px; left:50;}
}

.box-animation{
     animation-name: change-color;
     animation-duration: 2s;
     animation-delay: 2s;
     animation-iteration-count: 2;
}
{{< /code >}}