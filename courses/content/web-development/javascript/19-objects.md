---
date: 2017-10-22T11:23:35-04:00
title: "Objects"
seo_title: "Objects | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers objects in Javascript.
author: GOUP
image: objects.png
video: EBjQytpLt0o
url: /web-development/javascript/objects/
weight: 19
---

## Code

{{< code lang="js" >}}
var student = {
     name: "Jim",
     major: "Business",
     age: 19,
     gpa: 2.5
};

student.name = "Andy"
document.write( student.name + "<br>" );
document.write( student.major + "<br>" );
document.write( student.gpa + "<br>" );
{{< /code >}}