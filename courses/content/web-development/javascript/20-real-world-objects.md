---
date: 2017-10-22T11:23:35-04:00
title: "Real World Objects"
seo_title: "Real World Objects | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers real world objects in Javascript.
author: GOUP
image: real-world-objects.png
video: u4b0sL8jRbU
url: /web-development/javascript/real-world-objects/
weight: 20
---

## Code

{{< code lang="js" >}}
var myMovie = {
     title: "The Social Network",
     releaseYear: "2010",
     duration: 2.0,
     actors: [
          {
               name: "Jessie Eisenberg",
               birthday: new Date("October 5, 1983"),
               hometown: "New York, New York"
          },
          {
               name: "Roonie Mara",
               birthday: new Date("April 17, 1985"),
               hometown: "Bedford New York"
          }
     ]
};
{{< /code >}}