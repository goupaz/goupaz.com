---
date: 2017-10-09T15:35:15-04:00
title: "Style & Color"
seo_title: "Style & Color | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use style & color in HTML.
author: GOUP
image: style-&-color.png
video: eN72Ft-CCg4
url: /web-development/html/style-color/
weight: 6
---

In this lesson we're gonna touch on styling web pages. When we work with HTML, we're essentially defining the structure or the architecture of our website. 

Once you've defined the layout of the site however, you'll want to add styles. 

Website styling is what distinguishes one site from another. It brings personality, brand and user friendliness out of the bare HTML that we've seen so far in this course. 

As an introduction to styling, let's look at some basic ways to add color to our sites!

<hr />
One quick aside, website styling is a whole topic in itself. There is actually an entirely separate language that we can use to style sites called CSS (Cascading Style Sheet). 

This lesson will introduce some very basic styling techniques, but if you want to learn more that just the bare basics, check out my {{< link href="https://courses.goupaz.com/web-development/css" >}} CSS course {{< /link >}} (although I'd recommend finishing the HTML one first).
<hr />

## Changing Text Color

For our foray into styling we're begin by changing the color of the text on the page. HTML allows you to include a special attribute called the `style` attribute. In the `style` attribute we can define some basic styles for an element. 

{{< code lang="html" >}}
<p style="color:blue;">Some blue text</p>
{{< /code >}}

Above, we have a paragraph with blue text. Notice how we've added the `style` attribute. Inside I've defined that the color of the text should be blue. This is actually a CSS statement. CSS statement's allows us to change certain stylistic aspects of the HTML element. 

A CSS statement is structured as follows:

```
styleProperty: value; 
```

On the left side we have the style property. This is the aspect of the HTML element's style which we want to change. In the case above, `color` changes the text color. After the property, we have a colon, follow by the value and a semicolon.

In the case of color, we can simply state the name of any common color (red, blue, yellow, teal, etc), or we can use special rgb values and hex color codes. For now, if you want to play around, just stick with common color names, or check out a full list of values {{< link href="https://www.w3schools.com/cssref/css_colors.asp" >}}here{{< /link >}}.

### Background Color

Inside the style tags you can tweak more than one style. If you learn more about CSS you'll discover all sorts of style properties that you can use, for now though I'll introduce you to one more related to color: `background-color`.

Just like we can specify the text color, we can also specify the background color:

{{< code lang="html" >}}
<p style="color:blue; background-color: orange;">Some blue text w/ orange background</p>
{{< /code >}}

Notice above I've added a `background-color` to the paragraph. When you want to specify more than one style property you can simply write them one after another (remembering to use a semicolon to separate them). 

<p style="color:blue; background-color: orange;">In this case, now the paragraph will have blue text along with an orange background!</p>

## Nesting Styles

Now that we've learned some basic styling, I want to explain how these styles apply to elements within container tags. Let's look at an example of styling applied to nested elements:

{{< code lang="html" >}}
<body style="background-color:lightblue">
     <h2 style="color:green">
          Style and Colors
     </h2>

     <p style="color: red; background-color:blue">
          paragraph text
     </p>
</body>
{{< /code >}}

In the code above, we're using the same `color` and `background-color` properties, but we've applied them to a more complex HTML structure. I'll put this same HTML here in this page so you can see how it works:

<div style="background-color:lightblue">
  <p style="color:green; font-size: 20px;">
      Style and Colors
  </p>

  <p style="color: red; background-color:blue">
      paragraph text
  </p>
</div>

Take a notice of how the styling is applied above. We have the `lightblue` color in the body tag which colors the entire structure including the header. The header then has it's own green color.

The paragraph of text however, unlike the header, doesn't have that same `lightblue` color background. That's because in the paragraph, I've overridden the background color, and applied a more specific `blue` background color to the paragraph. 


{{% spotlight %}}All HTML elements will inherit the styling of their parents, unless that styling is explicitly overwritten, like in the case above.{{% /spotlight %}}

## Final Thoughts

As I said in the beginning, we're only just scratching the surface of styling websites. There's a lot more to learn. But I want you to realize the role that styling can play as we go forward in the course. 

Also be aware that, with these types of styles we can do more than change the color!
