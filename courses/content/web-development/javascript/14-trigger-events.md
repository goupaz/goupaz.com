---
date: 2017-10-22T11:23:34-04:00
title: "Trigger Events"
seo_title: "Trigger Events | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers trigger events in Javascript.
author: GOUP
image: trigger-events.png
video: jrI0WFCCLWY
url: /web-development/javascript/trigger-events/
weight: 14
---

## Code

### Inline Event Listeners

{{< code lang="html" file="index.html">}}
<h1 id="myHeader" onclick="handleClick(this)">GOUP</h1>
<script src="script.js"></script>
{{< /code >}}

{{< code lang="js" file="script.js">}}
function handleClick(element){
     alert("Clicked " + element.id);
}
{{< /code >}}

### Programatic Event Listeners

{{< code lang="html" file="index.html">}}
<h1 id="myHeader">GOUP</h1>
<script src="script.js"></script>
{{< /code >}}

{{< code lang="js" file="script.js">}}
var header = document.getElementById("myHeader");

header.addEventListener("click", function(){
     alert("You clicked " + header.id);
});
{{< /code >}}