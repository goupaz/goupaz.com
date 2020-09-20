---
date: 2017-10-09T15:35:15-04:00
title: "Images"
seo_title: "Images | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use images in HTML.
author: GOUP
image: images.png
video: u2BtHQwxq7E
url: /web-development/html/images/
weight: 9
---

One of the staples of any good website are images. In fact, now-a-days, most of what people do online is looking at images and watch videos. 

In this lesson we'll dive into using images in our webpages. I'll show you how to display images you have stored on your computer as well as images that are stored else ware on the internet. Finally we'll talk about some of the different attributes we can use to control how the image tags behave. 

## The Image Tag

HTML gives us a special tag that can be used just for images. Any time you want to display an image it needs to be displayed with this tag. Let's take a look at an example of displaying an image using the `img` tag.

{{< code lang="html" >}}
<img src="https://courses.goupaz.com/web-development/html/introduction-to-html.png" />
{{< /code >}}

Above we have an image tag which will display an image on the webpage. Notice first off that this is a non-container tag, it doesn't need a start and an end component. All images on the web are displayed just like this, and images can be places within any other HTML container tags.

Let's take a look at the various attributes we can pass into it to learn more. 

### Src

The `src` attribute tells HTML where the image is located. This can be either a url (like the one above) which links to an image on the internet, or a relative path which links to an image in the same file system as the current html page.

You can easily display any image you find on the internet by simply placing it's url in the `src` attribute. But if you want to add an image that you made yourself you need to follow a couple steps:

1. Add the image somewhere in your website's folder. Many times people will just add the image to the same directory that the html file is in. 
2. In the `src` attribute place the relative path (from the location of the html file) to the image.

For a folder structure like this:

```
- website/
  - index.html
  - images/
    - funny_img.jpg
```

If you wanted to add `funny_img.jpg` as an image in `index.html`, then the code would look like this:

{{< code lang="html" >}}
<img src="./images/funny_img.jpg">
{{< /code >}}

Notice how I start with a `./` which points to the current directory, and then we say the name of the directory where the image is located (if it's not in the same dir as the html file), followed by the name of the image with the file extension attached. 

{{% spotlight %}}This `src` attribute is required for all HTML images and shouldn't be left blank.{{% /spotlight %}}

### Width & Height

As a rule, images will be rendered on the website in their original size. So if you have an image which is 800x1000 pixels (800px wide by 1000px tall) then it will show up that same size on the website. 

With a lot of images though you'll want to resize them, make them smaller or change their proportions. In this case you can use two optional `img` tag attributes called `width` and `height` (I'll give you two guesses what these do).

If we want to change the width and height of our `funny_img.png` we can do the following:

{{< code lang="html" >}}
<img 
  src="./images/funny_img.jpg"
  width="200"
  height="100"
>
{{< /code >}}

This will display the image in the new width/height proportions. It's important to note that if you decide to change both the width and the height then you'll want to ensure that the aspect ratio of the image stays the same. The aspect ratio is the ratio of width to height which gives the image it's shape. 

{{% spotlight %}}If you don't want to have to worry about this you can change either the width OR the height on their own, and HTML will automatically scale the opposite proportion to match (maintaining the aspect ratio).{{% /spotlight %}}

This is the easiest way to control image size, however it's also possible to do this using something called CSS. CSS lets you style HTML elements, including images, in a very powerful way. I bring this up just incase you hear people mentioning it as a way to resize images. Although I'd strongly recommend you check out my {{< link href="https://courses.goupaz.com/web-development/css" >}} CSS course {{< /link >}} after this one to learn more about it!

### Alt

The last attribute I want to discuss related to HTML images is the `alt` attribute. Check out an example of it in action below:

{{< code lang="html" >}}
<img src="./images/funny_img.jpg" alt="A funny looking cat playing the piano">
{{< /code >}}

The alt attribute is used to describe the image that is being displayed. It's also used as a backup, just in case the image can't be displayed or the url is broken. 

Alt tags help in a number of ways. The first is for search engines. Often times a search engine, when it's reading through and indexing a site, will use the alt attribute of an image to determine what it's an image of. Google, for example, can use alt tags to help index images for it's image search. 

Alt tags are also used for page readers. A page reader is a software application which can read a webpage for people with visual impairments. If a visually impaired person uses a page reader to read a web page, the page reader can use the alt tag as a description of the image and provide more context to the user. 

Finally alt tags are a backup. If the image url is broken, if the image to large to be downloaded onto the page, or if the user has a slow internet connection, the browser will simply display the text in the alt tag instead of the image itself. 

It's always good to include an alt tag, no matter what. There's really no reason not to. 

## Wrapping it up

If you're working as a web developer, or simply building your own website for fun, eventually you'll find the need to display an image.

The `img` tag is extremely easy to use and is one of the most widely used tags on the entire internet!