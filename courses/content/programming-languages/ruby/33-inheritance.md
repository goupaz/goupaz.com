---
date: 2017-11-01T00:12:45-04:00
title: "Inheritance"
seo_title: "Inheritance | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers inheritance in Ruby.
author: GOUP
image: inheritance.png
video: Zkk7whVb3f4
url: /programming-languages/ruby/inheritance/
weight: 33
---

## Code

{{< code lang="rb" >}}
class Chef
     def make_chicken()
          puts "The chef makes chicken"
     end

     def make_salad()
          puts "The chef makes salad"
     end

     def make_special_dish()
          puts "The chef makes a special dish"
     end
end

class ItalianChef < Chef
     def make_pasta()
          puts "The chef makes pasta"
     end

     def make_special_dish()
          puts "The chef makes chicken parm"
     end
end

my_chef = Chef.new()
my_chef.make_chicken()

my_italian_chef = ItalianChef.new()
my_italian_chef.make_chicken()
{{< /code >}}