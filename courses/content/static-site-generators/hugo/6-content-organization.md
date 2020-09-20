---
date: 2017-09-07T20:24:12-04:00
title: "Content Organization"
seo_title: "Content Organization | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use content organization in Hugo -  Static Site Generator.
author: GOUP
image: content-organization.png
video: 0GZxidrlaRM
url: /static-site-generators/hugo/content-organization/
weight: 6
---

Content is the cornerstone of any good website or blog. Hugo makes it easy to organize and manage large amounts of content.
## Types of content in hugo
Scalability should be the cornerstone of any good website. As your website grows and evolves you want to make sure that it’s able to accommodate a large number of pages and a rich variety of content. Hugo is very aware of the need for good content management, and has content guidelines built it to help users make their websites super scalable.

Hugo separates all content into three types, Home, List and Single.

{{< article-image src="hugo-content-types.png" alt="Hugo has 3 content types: Home, List and Single" >}}

### Home
Home content is the content that’s on the homepage. This is the landing page for the website and therefore is extremely important. Hugo separates this into it’s own category because the homepage is often different from the other pages of the website both in style and available features.
### Single
A single page is a content heavy page like a blog post or an article. It’s the meat and potatoes of a good static website.The page you’re currently reading for example, could be considered a single page.

Single pages will make up the vast majority of the content on your website, and therefore Hugo gives them their own category.
### List
List pages link to single content pages. They are generally found as the index file in a folder of files. Many websites are separated into sections, generally a section of a website will have a landing page, this is basically a page that introduces the section and links to content in the section.

Imagine you were writing a travel blog. You might have different sections of your website dedicated to different continents. Like a section for Europe, a section for Asia, etc. A list page would be a page that introduces each continent. You might have a list page for Europe which links to blog posts for all the countries you’ve visited in Europe. You would then have another list page for Asia with links to Asian countries you’ve visited.
## Creating Content in Hugo
Creating content is Hugo is a breeze. In fact, hugo does all the hard work behind the scenes to make your page integrate with the website, all you have to do is write.

In order to keep everything organized, all content pages in hugo need to be created inside the Content folder. When you make a content page in Hugo you’re only making the actual content of the page. So if you were writing a blog post, you would only put the post content inside the content file. Everything else for the webpage, like the header, footer, navigation, etc, will be placed in layouts (discussed later in the article).

The content folder starts as an empty folder in the root directory of our project, let’s start creating some files and see what happens.

\*Note that hugo accepts both html and markdown files for content. I’ll be using HTML files for this tutorial, but you can also use markdown files.
### Create home page
The homepage is created by making a file in the root directory of the content folder called \_index.html. Both the homepage and list pages must be called \_index.html. This is a special name that hugo uses to tell what files do what. To create the homepage, navigate to the root of the content folder and run the following command.

{{< code >}}
Hugo new \_index.html
{{< /code >}}

Look in your project directory and you should see a new file names \_index.html. If you open up this file you’ll notice there’s already some information inside.

That is actually TOML code, called front matter. We cover front matter in depth in a future tutorial, but for now just know that front matter is special metadata about the content page that hugo uses when it builds your site.

Place some text inside the file and run the hugo server.  

{{< code >}}
Hugo server
{{< /code >}}
Now check your browser and you should see the contents of the homepage being shown on the screen.
### Create Single page
Single pages will eventually make up the bulk of the pages on your site. Single pages can be placed anywhere and can be named anything (except \_index.html).

Creating a single page is the same as creating the homepage. You can use the same hugo new pagename command to create it. With single content it’s important to organize it correctly. Generally it’s a good idea to break up content into sections. In Hugo you can create a section by making a folder inside of the main Content folder. You can then store your single pages inside each of these subfolders.

For example, if we were creating a travel blog, we might create a section for each continent we visited. You could create a folder for Europe, Asia and North America, and create single pages for each visited country in those continents.

### Create list page
A list page is created similar to the homepage except it is usually in a subdirectory or section (this doesn’t always have to be the case, but for now let’s just go with it). The list page should also be named \_index.html and should be at the root of the subdirectory.

Using the example of the travel blog from above. We could create a list page inside each continent folder, one for Europe, Asia and North America. These pages could be used to list each single page in that folder.

## Layouts
Layouts are a staple of good static website design. They allow you to supercharge your productivity and take all the hassle out of designing and styling your website.

Imagine you were building a static website, meaning you had to write the code for each page before you uploaded it to the web server. Let’s say you wanted to include a header and a footer on every content page you create. So you write a header and a footer and physically copy it onto every single page. Then imagine you wanted to change something in the header or footer… You would have to go to each page and manually make the change. This could get tedious when you have hundreds or even thousands of pages.

Layouts solve this problem by allowing you to define templates and individual components on your website which are to be included in every page. So when you want to make a change, you make it in one place and it shows up everywhere.  

## Wrapping It Up
Layouts and Content are the foundation of building a website in Hugo. In order to get the most out of your site, make sure you practice and really get a handle on how the layouts and the content pages work together.