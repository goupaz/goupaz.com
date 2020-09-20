---
date: 2017-11-07T01:21:25-05:00
title: "Variables"
seo_title: "Variables | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers variables in C++.
author: GOUP
image: variables.png
video: K8Rqul0V8_U
url: /programming-languages/c++/variables/
weight: 6
code:
    a: |+
          cout << "There once was a man named George";
          cout << "He was 70 years old";
          cout << "He really liked the name George";
          cout << "But didn't like being 70";
    b: |+
          string characterName = "George";
          int characterAge = 70;

          cout << "There once was a man named " << characterName << endl;
          cout << "He was " << characterAge << " years old" << endl;
          cout << "He really liked the name " << characterName << endl;
          cout << "But didn't like being " << characterAge << endl;
    c: |+
          string characterName = "George";
          int characterAge = 70;

          cout << "There once was a man named " << characterName << endl;
          cout << "He was " << characterAge << " years old" << endl;

          characterAge = 80;

          cout << "He really liked the name " << characterName << endl;
          cout << "But didn't like being " << characterAge << endl;
    d: |+
          Names are case-sensitive and may begin with:
              letters, _
          After, may include
              letters, numbers, _
          Convention says
              Start with a lowercase word, then additional words are capitalized
              ex. myFirstVariable
---

{{% programming-language-articles/variables lang="C++" code-lang="cpp" %}}
