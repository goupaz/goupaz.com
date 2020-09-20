---
date: 2017-11-01T00:12:42-04:00
title: "Arrays"
seo_title: "Arrays | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers arrays in Ruby.
author: GOUP
image: arrays.png
video: SP3Vf2KcYeU
url: /programming-languages/ruby/arrays/
weight: 13
code:
    a: |+
          lucky_numbers = [4, 8, "fifteen", 16, 23, 42.0]
          #       indexes  0  1       2      3   4   5
    b: |+
          lucky_numbers[0] = 90
          puts lucky_numbers[0]
          puts lucky_numbers[1]
          puts lucky_numbers.length
---

{{% programming-language-articles/arrays lang="Ruby" code-lang="rb" %}}


## Video Code

{{< code lang="rb" >}}
lucky_numbers = [4, 8, "fifteen", 16, 23, 42.0]
#       indexes  0  1       2      3   4   5

lucky_numbers[0] = 90
puts lucky_numbers[0]
puts lucky_numbers[1]
puts lucky_numbers[-1]

puts "\n\n"
puts lucky_numbers[2,3]
puts "\n\n"
puts lucky_numbers[2..4]
puts "\n\n"

puts lucky_numbers.length
{{< /code >}}