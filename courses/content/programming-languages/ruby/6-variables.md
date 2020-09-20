---
date: 2017-11-01T00:12:41-04:00
title: "Variables"
seo_title: "Variables | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers variables in Ruby.
author: GOUP
image: variables.png
video: 4mWc6Q9shcQ
url: /programming-languages/ruby/variables/
weight: 6
code:
    a: |+
          puts "There once was a man named George"
          puts "He was 70 years old"
          puts "He really liked the name George"
          puts "But didn't like being 70"
    b: |+
          character_name = "George"
          character_age = 70

          puts "There once was a man named " + character_name
          puts "He was " + character_age + " years old"
          puts "He really liked the name " + character_name
          puts "But didn't like being " + character_age
    c: |+
          character_name = "George"
          character_age = 70

          puts "There once was a man named " + character_name
          puts "He was " + character_age + " years old"

          character_age = 80

          puts "He really liked the name " + character_name
          puts "But didn't like being " + character_age
    d: |+
          Names are case-sensitive and may begin with:
              letters, _
          After, may include
              letters, numbers, _
          Convention says
              Start with a lowercase word, then additional words are lowercase separated
              by an underscore
              ex. my_first_variable
---

{{% programming-language-articles/variables lang="Ruby" code-lang="ruby" %}}
