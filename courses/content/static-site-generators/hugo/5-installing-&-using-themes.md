---
date: 2017-09-07T20:24:11-04:00
title: "Installing & Using Themes"
seo_title: "Installing & Using Themes | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: Themes are collections of hugo layouts that take all the hassle out of building your site. 
author: GOUP
image: installing-&-using-themes.png
video: L34JL_3Jkyc
url: /static-site-generators/hugo/installing-using-themes/
weight: 5
---

Themes are collections of hugo layouts that take all the hassle out of building your site. If you’re not inclined to learn how to write HTML and CSS, or if you simply want to get your blog or content site up as soon as possible then themes are for you. There are dozens of publicly available pre-built themes available for download that developers in the hugo community have built. Using a pre-built theme takes all the hassle out of designing and organizing your hugo site.
## Finding a theme
If you want to use a theme you can either build one for yourself, or use a premade one from the hugo community. Your first step is finding a theme that you want to use. The official hugo website has a section entirely dedicated to this, head over to https://themes.gohugo.io/ as see if any themes strike your fancy.

Image of the hugo themes website

Take your time and find a theme that is going to fit the look and feel of your site. Keep in mind that you can always modify a theme once you download it, although modifying a theme will most likely involve editing HTML and CSS.
## Importing a Theme
Once you’ve found a theme you want to use, it’s time to import it into your project. There’s two ways you can do this. The easiest is to use git. Simply cd into your Themes folder and clone the repository you want. You also need to add the theme to your config.toml file.

{{< code >}}
Cd Themes
Git clone path-to-git-repo.git
{{< /code >}}

Once you’ve cloned the theme you want to use the last thing you have to do is tell hugo that you want to use that theme. Head over to your config.toml file and add a line specifying the name of the theme you imported.

{{< code >}}
+++
…
Theme = “your-theme-name”
…
+++
{{< /code >}}

Now restart your hugo site and you should see your new theme. Play around with the theme by adding content files, taxonomies and data. The theme should automatically know what to do with all of your content and will organize it for you.

Download a couple themes and see which one works for your website. To switch to a different theme simply download the new one (you don’t have to delete the files for the existing one), and modify the theme name your config.toml file.
