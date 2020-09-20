---
date: 2017-10-09T15:35:15-04:00
title: "Formatting A Page"
seo_title: "Formatting A Page | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use formatting a page in HTML.
author: GOUP
image: formatting-a-page.png
video: dVvifZurBcY
url: /web-development/html/formatting-a-page/
weight: 7
---

As we embark on our journey learning to build websites, early on it will help to discuss how to format a web page. 

Every webpage is different, and depending on the type of website, and the content held therein, different formats might be more appropriate than others. But regardless of the type of site, there are a few HTML elements which we can use to format things in a consistent and organized way.

To begin, let's take a look at a website which is formatted using a variety of HTML container tags. By most standards, this would be considered a well formatted website. Once you've taken a look, I'll walk you through what everything means:

{{< code lang="html" >}}
<body>
     <header>
          Header
          <nav>
               Nav
          </nav>
     </header>
     <main>
          Main
          <article>
               Article
               <section>
                    Section 1
                    <aside>
                         Aside
                    </aside>
               </section>
               <section>
                    Section 2
               </section>
          </article>
     </main>
     <footer>
          Footer
     </footer>
</body>
{{< /code >}}

As you can see, we are utilizing a lot of tags here, which, aside from the `body` tag, you might never have seen before. 

Let's break this down and see what it all means.

## Website Sections

The first three tags you might notice above are the `<header></header>`, `<main></main>` and `<footer></footer>` tags. 

These are three really useful tags, which allow you to break apart your website into three very common sections. Most websites can be broken up into a header, a body and a footer, and these tags allow us to indicate where that content is in the scope of the HTML document. 

It's important to note that these tags don't actually change the format or the styling of the content inside. Instead they act as descriptors and containers which indicate the _type_ of content inside of them. 

{{% spotlight %}}One of the best reasons to use descriptive tags like this is because it make it easier for search engines like google to understand your page. {{% /spotlight %}}

Websites which rank highly on keyword searches often use tags like this for organization. As a general rule, the more descriptive and clear the HTML on your page is, the easier it will be for search engines to understand it. 

## Header

The header section of the website is generally reserved for content that will sit at the top of a webpage.

Generally this will include a series of links to common pages on the site, and often times interactive elements like a search bar or settings menu. 

{{% spotlight %}}Often times the header will be the same for all pages on a website{{% /spotlight %}}

Inside the header tag it is often common to use the `<nav></nav>` tag, as I've done in the code above. 

### Nav

Nav here stands for navigation and it's used to describe any navigational elements on your page. In the next lesson we'll learn about links, which allow you to link to other content on your site, which are often placed inside `<nav></nav>` tags. 

An example of a header with navigation links and a website title might look like this:

{{< code lang="html" >}}
<header>
    <h1>Mike's Website</h1>
    <nav>
      <a href="./about.html">
      <a href="./contact.html">
      <a href="./blog.html">
    </nav>
</header>
{{< /code >}}

In the above example I've included three links (those `<a></a>` tags) in the header of the site _inside_ the navigation tags. This is a really good way to format something like this because it's super clear that those links are navigational elements on your site!

## Main

The main section, indicated by the `<main></main>` tags, is where all of the content on the site will live. 

If you're building a blog site for example then your blog post would go in the main section. Or if you're building an e-commerce site, the products available for sale would also live here. 

The main sections is where most of the interaction on the site will take place, and where the user's attention will be directed most of the time. Therefore when laying out a website, the main should have the most content inside of it. 

On this website for example, all of this text that you're reading, the video embedded up above, and the side bar with navigation links is all part of the main section of the website. 

Search engines will generally be looking in the main section of your website to learn what your page is about and what content is unique to this page in particular.

It's especially important to use main tags when you have a website with a lot of article or text content (much like this one).

### Article

Inside the main tag, we can use the special `<article></article>` tag to indicate if something is an article. In the case of this website, I put all of my text articles inside these tags. 

Again this is really useful for search engines because they can tell exactly where the article content is and more easily index it. 

Generally you should only have one set of article tags in the web page, unless you have a site which is displaying multiple articles. 

### Section

Inside of the `<article></article>` tags you can use the `<section></section>` tags to break the article up into various sections.

Generally a section of an article would be accompanied by a heading tag (`<h2></h2>` for example) which would give a title to the section and formally introduce it. 

I like using sections in my articles, and a lot of times i'll nest them. So I would have a section within a section, like this:

{{< code lang="html" >}}
<article>
    <h1>My Blog Post</h1>
    <section>
      <h2>How to Build a Website</h2>
      text text text ...
      <section>
        <h3>Learn HTML</h3>
        text text text
      </section>
    </section>
</article>
{{< /code >}}

You can see above how an article structure might look with nested sections and their corresponding headers. 

Whenever you're working with text content, you always want to make sure you're going out of your way to structure it with these HTML tags, otherwise your website will be prone to disorganization. 

### Aside

The last tag I want to talk about that can go in the `<main></main>` section of the site is called the ``<aside></aside>` tag. The aside tag is used for any content which is not part of the main content of your page.

This let's things like search engines know that it doesn't belong as part of the article or normal main content. 

A lot of times something like an ad or a sidebar will go into an aside. There are no hard set rules for how to use them, it's simply a container for anything that doesn't belong as part of the article, section or main. 

## Footer

The footer of the website, indicated by the `<footer></footer>` tags is similar to the header in that it generally stores links to common pages on the site and also branding information. 

Many websites will often put copyright claims here as well.

{{% spotlight %}}Of all the three high level sections: header, main and footer, the footer will most likely be the one with the least content. {{% /spotlight %}}

I personally like to put social media links here as well as some of the commons links I have in my headers. 

## A Word About SEO

Now that we've looked at some of the cool ways we can format our sites, let's talk about how this relates to SEO or Search Engine Optimization. 

Search Engine Optimization is the process of building your website in such a way that it's really easy for search engines to understand it, and hopefully rank it highly in their organic search results. People get super obsessive about SEO because it can lead to more traffic, and thus more popularity and revenue. 

We've touched on this a bit in the article so far, but formatting a site like this is a must for SEO. When you have all of your content laid out explicitly with these different tags, search engine's like google know exactly what's going on and you won't have to wonder if your content will be indexed properly. 
