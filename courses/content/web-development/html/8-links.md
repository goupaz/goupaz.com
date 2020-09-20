---
date: 2017-10-09T15:35:15-04:00
title: "Links"
seo_title: "Links | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use links in HTML.
author: GOUP
image: links.png
video: pTpkvZhoZM4
url: /web-development/html/links/
weight: 8
---

In this lesson we're going to talk about links in HTML. In a lot of ways, links are the backbone of the internet. It's because of links that you're able to navigate around websites, you're able to search for things on google, and you don't have to memorize and keep track of long URLs all the time. 

A link is basically a clickable element on a website which, when clicked, navigates the user to a different page on that same website, to another website altogether, or to a file that is hosted somewhere.

{{% spotlight %}}Links are an extremely powerful an integral part of HTML, and just about any HTML element can be a link.{{% /spotlight %}}

First, let's take a look at how we might create a link to an external website. 

## Your First Link

Let's imagine you're writing a food blog and you want to make a link to your favorite restaurant, kinda like this one to {{< link href="https://www.mcdonalds.com" >}}McDonald's homepage{{< /link >}}. 

{{< code lang="html" >}}
<a href="https://www.mcdonalds.com"> McDonald's homepage</a>
{{< /code >}}

Above we have a link which points to McDonald's website. Fist notice that link tags are called `a` which stands for anchor. They are also container tags, which means they can wrap text and other html content. 

A lot of times, a link will just have text in it like in this case. But on many websites links will be disguised as buttons, navigation elements, or even images. 

By default, browsers will apply some base styling to links. Generally it will color any link text blue, and might even change the color depending on whether the link has been visited before. All of this styling can be customized, but that's a topic for my {{< link href="https://courses.goupaz.com/web-development/css" >}}CSS course{{< /link >}}. 

In addition to adding the two `<a></a>` tags, all links need an `href` attribute. Href here stands for hypertext reference, which is just a fancy way of saying "where the link points to". Depending on where you want to link to, this value will change. 

In the case of McDonald's in the example above, I put the McDonald's homepage url in the Href, but you can also put url's to other pages on your website. I'll explain these two types of links below. 

## Absolute Links

An absolute link is one which contains a fully qualified url. These types of links must include the hypertext protocol portion of the url (`http(s)://`), as well as the domain name extension (.com/.gov/.org, etc).

In other words, I couldn't just put `mcdonalds.com` like I would normally do in a web browser, you need the entire, fully qualified url or it won't work correctly. 

Absolute links like this will generally be leading users away from your website and onto another website. Therefore we need to be super specific in the url. 

## Relative links

A relative link is a link to a webpage that is on the website you are currently using. This website for example is full of relative links. Check out the logo at the top left, which links to the homepage. 

{{% spotlight %}}Relative or intra-site links are extremely common, and make up the majority of links on most websites. {{% /spotlight %}}

Because they're linking to pages on the same site, we can be more liberal with the href attribute. Instead of a fully qualified URLs, we'll just need a relative path from the location of the current HTML file, to the file it's linking to. 

To illustrate this let's imagine we have the following website structure:

```
- website/
  - pages/
    - index.html
    - about.html
  - blog/
    - post1.html
```

Given the above structure, let's say we want to include links to the about page and the first blog post on the homepage (index.html). Our links for these will look something like this:

{{< code lang="html" file="index.html" >}}
<a href="./about.html">About</a>
<a href="../blog/post1.html">Post 1</a>
{{< /code >}}

Above we've included _relative urls_ in the `href` attributes of the two links. In the case of the about page link, we start with at `./`, which points to the current directory. Then, we can simply include the name of the file (it's in the same directory as `index.html`). 

In the case of the first blog post, you'll notice that it's in a completely different folder than `index.html`. First we can use `../` which will point to the directory above `pages/` (the `website/` directory). Then we just need to specify that the page is in the `blog/` folder and that it's called `post1.html`. 

You can use the above techniques to link to any other pages on your website!

## Linking to files

So now that we've learned about absolute vs relative urls, which can go inside of the `href` attribute. I also would like to mention that we can link to other things besides `.html` pages. We can also link to files like images, pdfs, videos, or anything else that can be stored on a web server. 

You can link to non-html content that same way you link to html content, just be sure to include the correct file extension. 

The code below for example will create a link to an image I have on this website:

{{< code lang="html" >}}
<a href="https://courses.goupaz.com/databases/sql/erd-template.png">
  SQL Diagram
</a>
{{< /code >}}

Notice how in this case I've used an absolute URL. 

## Opening Links in New Tabs

The last thing I want to talk to you about related to links, is how to tell the browser that a link should be opened in a new tab as opposed to the current tab.

In a lot of cases, you'll want to link to some content on your page, but you won't want it to navigate the user away. Instead you'd like the browser to simply open it in a new tab so the user doesn't lose their place on your site.

In order to do this we'll have to add a special attribute to the link tag called `target`:

{{< code lang="html" >}}
<a 
  href="https://courses.goupaz.com/databases/sql/erd-template.png"
  target="_blank"
>
  SQL Diagram
</a>
{{< /code >}}

Adding `target="_blank"` will tell the browser that this link shouldn't navigate the user away from the current page. Instead, it will open up a new tab. Click on this link {{< link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >}}here{{< /link >}} for a demo!

Having links open in new tabs is useful in a variety of situations. I generally use it so that people can click on something and still remain on my website (generally you want to keep people on your site!).

## Final Thoughts

I don't have any evidence to back this up, but if I had to guess I would say that the `<a></a>` tags are at least the top 3 most common HTML tags on the internet. Links are everywhere!

Now that you have a better idea of how links work, you can start putting them in your website and building sites that have multiple, connected pages!