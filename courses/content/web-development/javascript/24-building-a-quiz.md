---
date: 2017-10-22T11:23:35-04:00
title: "Building A Quiz"
seo_title: "Building A Quiz | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers building a quiz in Javascript.
author: GOUP
image: building-a-quiz.png
video: LQGTb112N_c
url: /web-development/javascript/building-a-quiz/
weight: 24
---

## Code

{{< code lang="js" >}}
var questions = [
     {
           prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
           answer: "a"
     },
     {
          prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
          answer: "c"
     },
     {
          prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
          answer: "a"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);


{{< /code >}}