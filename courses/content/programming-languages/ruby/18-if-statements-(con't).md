---
date: 2017-11-01T00:12:43-04:00
title: "If Statements Cont"
seo_title: "If Statements Cont | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers if statements (con't) in Ruby.
author: GOUP
image: if-statements-(con't).png
video: VhI3a1yGNrU
url: /programming-languages/ruby/if-statements-cont/
weight: 18
---

## Code

{{< code lang="rb" >}}
is_student = false
is_smart = false

if is_student and is_smart
	puts "You are a student"
elsif is_student and !is_smart
	puts "You are not a smart student"
else
	puts "You are not a student and not smart"
end

# >, <, >=, <=, !=, ==
if 1 > 3
	puts "number comparison was true"
end

if "a" > "b"
     puts "string comparison was true"
end

{{< /code >}}