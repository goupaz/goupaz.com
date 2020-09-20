---
date: 2017-11-01T00:12:43-04:00
title: "Calculator"
seo_title: "Calculator | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers calculator in Ruby.
author: GOUP
image: calculator.png
video: wsSugkZT1cQ
url: /programming-languages/ruby/calculator/
weight: 19
---

## Code

{{< code lang="rb" >}}
puts "num1: "
num1 = gets.chomp.to_f

puts "Enter Operator: "
op = gets.chomp

puts "num2: "
num2 = gets.chomp.to_f

if op == "+"
     puts num1 + num2
elsif op == "-"
     puts num1 - num2
elsif op == "/"
     puts num1 / num2
elsif op == "*"
     puts num1 * num2
else
     puts "Invalid Operator"
end
{{< /code >}}