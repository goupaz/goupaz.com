---
date: 2017-10-22T11:23:34-04:00
title: "Building A Messaging App"
seo_title: "Building A Messaging App | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers building a messaging app in Javascript.
author: GOUP
image: building-a-messaging-app.png
video: ZOOrhOJQ4q0
url: /web-development/javascript/building-a-messaging-app/
weight: 15
---

## Code

{{< code lang="html" file="index.html">}}
<ul id="messages"></ul>
<input id="textbox" type="text">
<button id="button">Send</button>
<script src="script.js"></script>
{{< /code >}}

{{< code lang="js" file="script.js">}}
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});
{{< /code >}}