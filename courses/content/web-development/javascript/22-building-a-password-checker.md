---
date: 2017-10-22T11:23:35-04:00
title: "Building A Password Checker"
seo_title: "Building A Password Checker | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers building a password checker in Javascript.
author: GOUP
image: building-a-password-checker.png
video: w6nQmCetNuQ
url: /web-development/javascript/building-a-password-checker/
weight: 22
---

## Code

{{< code lang="js" >}}
var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while(response != password && !error){
     if(entryCount < entryLimit){
          response = window.prompt("Enter Password");
          entryCount++;
     } else {
          error = true;
     }
}

if(error){
     alert("Too many entries");
} else {
     alert("Success");
}
{{< /code >}}