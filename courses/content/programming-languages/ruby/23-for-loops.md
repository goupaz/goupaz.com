---
date: 2017-11-01T00:12:44-04:00
title: "For Loops"
seo_title: "For Loops | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos and we'll teach you everything you need to know to start your programming journey!
description: This tutorial covers for loops in Ruby.
author: GOUP
image: for-loops.png
video: LqUT1K_Q7-M
url: /programming-languages/ruby/for-loops/
weight: 23
---

## Code

{{< code lang="rb" >}}
for index in 0..5
    puts index
end

5.times do |index|
    puts index
end

lucky_nums = [4, 8, 15, 16, 23, 42]
for lucky_num in lucky_nums
    puts lucky_num
end

lucky_nums.each do |lucky_num|
     puts lucky_num
end
{{< /code >}}