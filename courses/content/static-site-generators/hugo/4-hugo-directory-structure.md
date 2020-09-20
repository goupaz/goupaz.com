---
date: 2017-09-07T20:24:11-04:00
title: "Creating A New Site"
seo_title: "Creating A New Site | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use hugo directory structure in Hugo -  Static Site Generator.
author: GOUP
image: hugo-directory-structure.png
video: sB0HLHjgQ7E
url: /static-site-generators/hugo/hugo-directory-structure/
weight: 4
---
Creating a new website in Hugo is simple and fast. With a couple commands you’ll be up and running and ready to start adding content.
## Preparing your workspace
Once you have everything installed and ready to go it’s time to create a new Hugo website. The first thing you want to think about is folder structure. When you’re building a website It’s important to organize your content in a simple way. So before you start, consider making a new folder just for your Hugo sites.

Image of new folder for Hugo sites
## Making a new Hugo Website
Once you have a place to put everything, it's time to make your site. A lot goes into a hugo websites, and in order for things to work properly you have to organize your folders and files in a  specific way. The easiest way to get started is to let Hugo set everything up for you. For the purposes of this tutorial, imagine we were trying to create a travel blog. We would run the following command in the command line.

{{< code lang="bash" >}}
hugo new /travel_blog
{{< //code >}}

This should automatically create a new folder called travel_blog in the current directory with everything that Hugo needs to get started.
## Hugo’s Folder Structure
Once you run the ```hugo new``` command, navigate into the new directory and check out the new folder's structure. Hugo should automatically create several folders for you which you’ll eventually use to store different types of files and content.

In this tutorial we’ll briefly walk through what each folder is used for. But throughout this Hugo course we’ll go in depth with each one.

Image of the folder structure
### Archetypes
The archetypes folder will most likely be the one you use least. It will store any archetype files you decide to make for your project. An Archetype is just a complicated word that means something which is repeated. In this case it refers to content front matter, which is just information that we store about a particular page on the website. If we were writing a blog post, the archetype might specify that we have to provide the title of the post, the author's name, and a description of the content.
### Content
The content folder is where we’ll store all of the content on our website (big surprise) that means any blog posts, articles, or really any web content you write will go in here. If we were writing a travel blog, we could put a blog post about visiting the Eiffel Tower here.
### Data
The data folder is essentially a database for your static website. it’s a place where you can store data that needs to be used on the website. Generally the data folder will contain a bunch of files with lists of information inside them. In the case of a travel blog, we could store a list of countries and their capital cities in the data section. Then we could easily access that data throughout the blog.
### Layouts
One of the fundamental tools Hugo uses to help you organize your website is layouts. Layouts are basically skeletons you can use on your site. If you do decide to use layouts (and you should) they’ll go in this folder.

The simplest layout for a website would be a header and a footer. Most websites have a navigation header at the top where users can access site links. And a footer at the bottom with additional information. Since these elements often appear on every page, they can be placed into a layout so they only have to be written once.
### Static
The static folder could also be called the miscellaneous folder. It’s used to store everything that doesn’t go into the other folders. Everything in the static folder is static, meaning it won’t change from page to page. Normal residents of the static folder are css, js, and image files.
### Themes
If you decide to use a theme with your website, all of the files for the theme will go in here. Generally, unless you know what you’re doing, you don’t wanna mess with the files in this folder.
### Config.toml
The config.toml file is where configuration variables are set which control universal aspects of the website

The config.toml file is a lot like the settings app on your smartphone. All smartphones have a settings app where you can make changes and configure things on the phone. The config.toml file works in the same way. It’s the central configuration hug for the website. Needless to say this is THE most important file in a hugo site.

#### TOML, YAML, JSON

Hugo let’s you use 3 different data notations in the config file,  and in the front matter of each content page. TOML, YAML and JSON are all popular languages that accomplish the same goal of specifying key -> value pairs. The default language for Hugo is TOML.
## Hugo Server
Hugo server is Hugo’s built in web server which takes all of the content files, layout’s and other site elements and builds them into a static site and serves them.

Hugo server acts a lot like a kid building lego’s. It takes all the different parts of the website and puts them together to form the final product. With lego’s that could be a spaceship, but with Hugo it’s a static site. Hugo server then makes that newly generated website available to you on a port of your choosing.

To run the hugo server and serve our website. Run the following command
{{< code lang="bash" >}}
Hugo Server
{{< /code >}}
### Localhost
Once the server starts up, your website shoud be running on localhost port 1313.

Localhost is a domain name reserved for web servers running on your local machine. In the case of Hugo server, the generated website is usually running on localhost:1313 (1313 is the port number).
### Server Arguments
The Hugo server is powerful, and comes with a variety of useful run arguments built in.

Port - Refers to the port that Hugo should serve the site over

{{< code lang="bash" >}}
hugo server --port 3098
{{< /code >}}
This would run hugo on localhost:3098
Build Drafts - The --buildDrafts argument, when included will tell Hugo to build any content pages marked as drafts. This is a good way to test new content going on your site.

{{< code lang="bash" >}}
Hugo server --build Drafts
{{< /code >}}

### Disable Livereload


By default, Hugo server will automatically reload the browser window when it detects a change to one of the files. Including the --disableLiveReload runtime argument will prevent this from happening.
{{< code lang="bash" >}}
Hugo server --disableLiveReload
{{< /code >}}