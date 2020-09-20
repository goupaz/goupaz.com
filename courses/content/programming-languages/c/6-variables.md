---
date: 2017-11-01T00:17:34-04:00
title: "Variables"
seo_title: "Variables | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers variables in C.
author: GOUP
image: variables.png
video: 17DnxMHEtMU
url: /programming-languages/c/variables/
weight: 6
code:
    a: |+
          printf("There once was a man named George");
          printf("He was 70 years old");
          printf("He really liked the name George");
          printf("But didn't like being 70");
    b: |+
          char characterName[] = "George";
          int characterAge = 70;

          printf("There once was a man named %s", characterName);
          printf("He was %d years old", characterAge);
          printf("He really liked the name %s", characterName);
          printf("But didn't like being %d", characterAge);
    c: |+
          char characterName[] = "George";
          int characterAge = 70;

          printf("There once was a man named %s", characterName);
          printf("He was %d years old", characterAge);

          characterAge = 80;

          printf("He really liked the name %s", characterName);
          printf("But didn't like being %d", characterAge);
    d: |+
          Names are case-sensitive and may begin with:
              letters, _
          After, may include
              letters, numbers, _
          Convention says
              Start with a lowercase word, then additional words are capitalized
              ex. myFirstVariable
---

{{% programming-language-articles/variables lang="C" code-lang="c" %}}
