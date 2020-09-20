---
date: 2017-09-07T20:24:18-04:00
title: "Building & Hosting"
seo_title: "Building & Hosting | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use building & hosting in Hugo -  Static Site Generator.
author: GOUP
image: building-&-hosting.png
video: 6U3emx29rKg
url: /static-site-generators/hugo/building-&-hosting/
weight: 23
---

Up until this point you’ve most likely been running and testing your hugo website using the hugo server command. Hugo server is a great way to test and track changes locally, but what about when you’re ready to display your creation to the world.

When you're creating all of your layouts, partials and content pages your website is scattered into a bunch of pieces. But when you build your website all of those pieces get put together is exactly the way you want by hugo. It’s a lot like building legos. You start out with a bunch of lego pieces scattered about, and by following the instructions you end up with a finished model. In this case hugo is building the lego’s and you’re providing the instructions.
## Hugo Command
When you run the hugo command, hugo will take all of your content, layouts and static resources and combine them together to make your finished website. The finished website is then dumped into a folder called public which should appear in the root directory of your project folder.

Running the hugo command is as simple as typing hugo into your command line

{{< code >}}
Hugo
{{< /code >}}

It might take a second or two to build the site, the more content pages you have the longer this will be.
## Public Folder
When you run the hugo command you’ll notice a new folder called public has been added to your project. The public folder contains your finished website. It’s important to note that the structure of your public folder will be different from the structure of your project folder. So don’t be alarmed if they don’t match up.

As they say on an airplane, Items may have shifted during flight. While hugo is building your site, it’s moving things around, combining things together. The finished product might look a little confusing at first.

### Public folder structure
The structure of the public folder is the structure that will be uploaded to your web server. Hugo will move a bunch of stuff around, be sure to look at the structure of the public folder to make sure everything is where you want it.
### Deleting public folder on new build
It's important to note that when you make a change to your layouts or content (ex. delete a file) when you rebuild the site the public folder might not accommodate those change. So if you are making big changes to your site, consider deleting the public folder before you rebuild it.

For example, if you have a piece of content that you want to delete and you delete it in your content folder, it won’t be deleted in the public folder. If you run the hugo command to rebuild the site that piece of content will still be there. So as a good rule delete the public folder before a re-build.
## Deploying
Once you’ve built everything the next step is to deploy your website onto a web server. There are tons of ways to do this, and we’re not going to go into in in too much depth in this tutorial. But for the most part a hugo generated website can be hosted anywhere. Because we're working with static websites, there's no need for any fancy servers or software, a basic Apache web server will do.

When you eventually do deploy your website you only want to deploy the public folder. All of the hugo files should remain on your computer. The public folder represents the finished website, so only upload that to the web server.