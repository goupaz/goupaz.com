---
date: 2017-11-01T00:12:45-04:00
title: "Object Methods"
seo_title: "Object Methods | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers object methods in Ruby.
author: GOUP
image: object-methods.png
video: _RuW7zIdVWI
url: /programming-languages/ruby/object-methods/
weight: 31
---

## Code

{{< code lang="rb" >}}
class Student
     attr_accessor :name, :major, :gpa
     def initialize(name, major, gpa)
          @name = title
          @major = author
          @gpa = gpa
     end

     def has_honors()
          if self.gpa >= 3.5
               return true
          end
          return false
     end
end
{{< /code >}}