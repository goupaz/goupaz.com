---
date: 2017-09-07T20:24:17-04:00
title: "Conditionals"
seo_title: "Conditionals | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use conditionals in Hugo -  Static Site Generator.
author: GOUP
image: conditionals.png
video: juSnHsCX9RU
url: /static-site-generators/hugo/conditionals/
weight: 19
---

Conditionals are a common tool used in programming to help the computer make decisions. In our case we can use conditionals to tell hugo when we want it to do certain things. Conditionals are realized in the form of if statements. If statements are pieces of code that we use to tell hugo what we want it to do in certain situations.

A good example of a conditional is when you go to an amusement park. Generally on big rollercoasters there is a height requirement. There's usually a sign that reads You may only ride if you are over 48” tall. This is a conditional statement, it's saying if you’re tall then you may ride, otherwise you may not. We can use simple conditional statements like this to make our hugo templates smarter.
## Using Conditionals in Go Template
Go template (the logic engine for hugo) provides us with an easy way to implement conditionals using if-else blocks.
### If, else
An if else block by saying if some condition is true do this, otherwise do this. If statements in hugo are structured as follows

{{< code >}}
{{ if condition }}
{{ else if condition }}
{{ else }}
{{ end }}
{{< /code >}}

You can have any number of else if’s but you must always end a conditional with the {{ end }} tag. That’s super important. The condition for a if statement must be a boolean value. You can also pass in a variable as a condition and if the variable has a value then it will return true, but if the variable is null it will return false.

The most common type of condition is to compare two values or variables. Conditionals are formatted as follows

{{< code >}}
{{ op arg1 arg2 }}
{{< /code >}}

Op stands for operator, unlike most other logic languages, here we put the comparison operator before the two arguments. The operators are:

Eq - equal
Lt - less than
Le - less than or equal to
Gt - greater than
Ge - greater than or equal to

Arg1 and arg2 stand for arguments. You can only compare two arguments in a conditional and they must be the same data type.

You can negate a conditional by using the not keyword. Not should come before the conditional statement, the use of parenthesis here is important.
{{< code >}}
{{ if not (op arg1 arg2 ) }}
{{end}}
{{< /code >}}
## And, or
Often times you’ll have complex logic in your website and you’ll need to check multiple conditions in the same statement. You can use and/or logic to do this. An And is true when both conditions are true, an Or is true when at least one condition is true.

And and or statements make conditionals more complex and allow you to cover more possibilities. But beware, complex and/or logic can be hard to read and understand, especially the way go template does it.

{{< code >}}
{{ if and (conditional1) (conditional2) }}
{{ if or (conditional1) (conditional2) }}
{{< /code >}}

You can also get more fancy by nesting and/or statements

{{< code >}}
{{ if or ( and (conditional1) (conditional2) ) (conditional2) }}
{{< /code >}}