---
date: 2017-11-15T17:52:36-05:00
title: "Variables"
seo_title: "Variables | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers variables in PHP.
author: GOUP
image: variables.png
video: -1iErfiYpBU
url: /web-development/php/variables/
weight: 6
code:
    a: |+
          echo "There once was a man named George <br>";
          echo "He was 70 years old <br>";
          echo "He really liked the name George <br>";
          echo "But didn't like being 70 <br>";
    b: |+
          $characterName = "George";
          $characterAge = 70;

          echo "There once was a man named $characterName <br>";
          echo "He was $characterAge years old <br>";
          echo "He really liked the name $characterName <br>";
          echo "But didn't like being $characterAge <br>";
    c: |+
          $characterName = "George";
          $characterAge = 70;

          echo "There once was a man named $characterName <br>";
          echo "He was $characterAge years old <br>";

          $characterAge = 80;

          echo "He really liked the name $characterName <br>";
          echo "But didn't like being $characterAge <br>";
    d: |+
          Names are case-sensitive and must start with '$' then:
            letters, _
          After, may include
            letters, numbers, _
          Convention says
            There is no set convention, people will use camel case but also underscores
            ex. myFirstVariable
            ex. my_first_variable
---

{{% programming-language-articles/variables lang="PHP" code-lang="php" %}}
