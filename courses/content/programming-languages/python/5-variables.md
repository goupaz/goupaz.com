---
date: 2017-10-22T11:58:02-04:00
title: "Variables"
seo_title: "Variables | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers variables in Python.
author: GOUP
image: variables.png
video: gmiB4xQ-BKw
url: /programming-languages/python/variables/
weight: 5
code:
    a: |+
          print("There once was a man named George")
          print("He was 70 years old")
          print("He really liked the name George")
          print("But didn't like being 70")
    b: |+
          character_name = "George"
          character_age = "70"

          print("There once was a man named " + character_name)
          print("He was " + character_age + " years old")
          print("He really liked the name " + character_name)
          print("But didn't like being " + character_age)

          # You can also print variables using a ','
          print("My variable is", character_name)
    c: |+
          character_name = "George"
          character_age = "70"

          print("There once was a man named " + character_name)
          print("He was " + character_age + " years old")

          character_age = "80"

          print("He really liked the name " + character_name)
          print("But didn't like being " + character_age)
    d: |+
          Names are case-sensitive and may begin with:
            letters, $, _
          After, may include
            letters, numbers, $, _
          Convention says
            Start with a lowercase word, then additional words are separated
            by underscores
            ex. my_first_variable
---

{{% programming-language-articles/variables lang="Python" code-lang="python" %}}
