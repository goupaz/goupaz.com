---
date: 2017-11-01T00:12:42-04:00
title: "Creating A Calculator"
seo_title: "Creating A Calculator | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers creating a calculator in Ruby.
author: GOUP
image: creating-a-calculator.png
video: u2ezYnbVGoM
url: /programming-languages/ruby/creating-a-calculator/
weight: 11
---

## Code

{{< code lang="rb" >}}
puts "Enter first num: "
num1 = gets.chomp

puts "enter second num: "
num2 = gets.chomp

puts num1.to_f + num2.to_f
{{< /code >}}