---
date: 2017-11-01T00:12:45-04:00
title: "Initialize Method"
seo_title: "Initialize Method | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers initialize method in Ruby.
author: GOUP
image: initialize-method.png
video: Js2eKsgHrFo
url: /programming-languages/ruby/initialize-method/
weight: 30
---

## Code

{{< code lang="rb" >}}
class Book
     attr_accessor :title, :author
     def initialize(title, author)
          @title = title
          @author = author
     end
end

book1 = Book.new("Harry Potter", "JK Rowling")
# book1.title = "Half-Blood Prince"

puts book1.title
{{< /code >}}