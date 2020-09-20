---
date: 2017-10-22T11:23:34-04:00
title: "Variables"
seo_title: "Variables | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers variables in Javascript.
author: GOUP
image: variables.png
video: YptrAq5O-jQ
url: /web-development/javascript/variables/
weight: 6
code:
    a: |+
          document.write("There once was a man named George <br/>");
          document.write("He was 70 years old <br/>");
          document.write("He really liked the name George <br/>");
          document.write("But didn't like being 70 <br/>");
    b: |+
          characterName = "George"
          characterAge = 70

          document.write("There once was a man named " + characterName + "<br/>");
          document.write("He was " + characterAge + " years old <br/>");
          document.write("He really liked the name " + characterName + "<br/>");
          document.write("But didn't like being " + characterAge + "<br/>");
    c: |+
          characterName = "George"
          characterAge = 70

          document.write("There once was a man named " + characterName + "<br/>");
          document.write("He was " + characterAge + " years old <br/>");

          characterAge = 80;

          document.write("He really liked the name " + characterName + "<br/>");
          document.write("But didn't like being " + characterAge + "<br/>");
    d: |+
          Names are case-sensitive and may begin with:
              letters, $, _
          After, may include
              letters, numbers, $, _
          Convention says
              Start with a lowercase word, then additional words are capitalized
              ex. myFirstVariable
---

{{% programming-language-articles/variables lang="JavaScript" code-lang="js" %}}


## Video Code

{{< code lang="js" >}}
var name = "Mike";                 // String w/ double quotes
var occupation = 'programmer';     // String w/ single quotes

var age = 20;                      // Integer
var gpa = 2.5;                     // Floating point number

var isTall;                        // boolean true/false
isTall = true;

name = "John";

document.write("Your name is " + name);
{{< /code >}}