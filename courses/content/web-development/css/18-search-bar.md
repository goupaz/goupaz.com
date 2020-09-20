---
date: 2019-01-22
title: "Styling a Search Bar"
seo_title: "Styling a Search Bar | CSS | GOUP"
subheader:
     greeting: CSS - Style a Website
     description: This course covers the basics of styling a website using CSS. Work your way through the videos/articles and I'll teach you everything you need to know to style a basic website!
description: This tutorial covers how to style a beautiful and responsive search bar in CSS.
author: GOUP
# image: css-frameworks.png
# video: nDXDxA27poE
url: /web-development/css/styling-search-bar/
weight: 18
---



Now a day's, almost every website you'll see has some sort of searching functionality. And intrinsic to the ability to be able to search on a website is a nice looking search bar! While almost all search bars act the same, you'll find a bunch of different ways that people have styled them accross the web. 

So a few questions arise: How do you build and style a clean, responsive and professional looking search bar? What are the specific HTML, CSS and JavaScript concerns that you need to be aware of? And are there any css properties that need to be tweaked in specific ways to make a search bar look and feel the way we want it?

I'll answer all of these questions and more as we dive in and build a professional looking search bar! Play around with the finished product below:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="mikedane94" data-slug-hash="ErxaJY" style="height: 203px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Search Bar">
  <span>See the Pen <a href="https://codepen.io/mikedane94/pen/ErxaJY/">
  Search Bar</a> by Mike (<a href="https://codepen.io/mikedane94">@mikedane94</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Setting up the HTML

Let's begin by setting up the HTML and laying a nice base. 

{{< code lang="html" >}}
  <div class="wrapper">
    <img class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
    <input class="search" placeholder="Search" type="text" >
    <img class="clear-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
  </div>  
{{< /code >}}

Believe it or not this is all the HTML we're gonna need for the search bar, most of the fun is gonna come it styling it. We start with a `<div class="wrapper">`. This will act as the high level container where the search bar and the icons are going to live. A lot of times when building components like this it's good to wrap them in something like this wrapper cause you can package it up all nicely and add high level styles!

Next you'll notice the icons. I actually just grabbed these from <a href="https://www.flaticon.com/home" target="_blank">Flaticon.com</a>, you can copy the code above, or go find different ones if you wanna get artsy (just be sure to click on the Base 64 option). These icons are actually going to be sitting inside of the search bar itself. A lot of websites do this and it looks really cool, we;ll check out how that works later on. 

Finally we have the `<input />`, the star of our show, our lead actor! The input is where we're going to be putting most of the styling, and there's actually some cool things we can do to make the input and the icons play nice together!

## Positioning the icons

We're gonna want to position the icons on the left and right ends of the input field. The kicker here is that they need to be _inside_ the input element itself, so we'll get a bit creative with our positions. 

{{< code lang="css" >}}
  .wrapper {
    position: relative;
    display: flex;
    min-width: 100px;
  }
{{< /code >}}

First things first we'll style the wrapper element. We'll give it a `display: flex;` so that the icons and the search bar are aligned in a row. Then we'll also add in a `min-width: 100px;` This is optional, but in reality a search bar that's less than 100px is probably unusable anyway so it's a good lower limit. 

Finally we need to give this a relative position. The icons will have to have absolute position so we can properly position them in line with the search bar, so giving this a relative position will keep those icons in the scope of the search bar. 

Next let's style the icons themselves

{{< code lang="css" >}}
  .search-icon {
    position: absolute;
    top: 6px;
    left: 8px;
    width: 14px;
  }

  .clear-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 10px;
    cursor: pointer;
    <!-- visibility: hidden; -->
  }
{{< /code >}}

As discussed these will get `position: absolute;`, and we'll tweak the top and left/right values to line them up properly in the search bar. Depending on the side/shape of your own icons you can modify these as necessary. You'll also want to play around with the width's to get them just right.

For the `.clear-icon`, we want to give it a pointer cursor, users will be able to click this and remove the text they've typed, so we want to indicate that. I also added in `visibility: hidden;` commented out, we'll use this later when we make this responsive in JavaScript. 

## Styling the Input

Okay, so we've set up the wrapper and lined up the icons, now we just need to style the search bar. Believe it or not we don't need to tweak too much to get the search bar looking really good. I've chosen some specific colors that I think look really good, but feel free to change them to match your site's theme.

First we'll add a nice grey border and a simple border radius to round out the edges. We'll also increase the height to `20px` and make the width `100%`. When I make search bars I usually like the make the width 100% so it will automatically fill the wrapper container (you can then change the size of the wrapper instead of the search bar).

{{< code lang="css" >}}
  .search {
    border: 1px solid grey;
    border-radius: 5px;
    height: 20px;
    width: 100%;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
  }
{{< /code >}}

Next we'll add some padding. The important part here is the left and right padding (`23px` and `30px` above). It's important that the left and right padding is spacious enough to allow the icons to fit inside the input, so depending on the icons you use this might need to be tweaked. 

Finally we'll remove the glowy outline that some browsers add and give this a light grey background color;

### Adding :hover and :focus styles

One thing that make a search bar like this really shine is giving the user a clear indication that it's ready to be used. We can do this by modifying some of the styling when the user is hovered over or focused in on the search bar. 

{{< code lang="css" >}}
  .search:hover, .search:focus {
    border: 1.5px solid #009688;
    background-color: white;
  }
{{< /code >}}

We'll simply make the border a bit bigger and give it a nice teal color, and we'll change the background from that light grey to a simple white. 

## Adding the clear functionality

At this point the search bar is looking pretty good, it's been styled to my liking and only one step remains. We want to make it so that the clear icon only shows up when some text has been typed in the search bar, and when the clear icon is clicked, the typed text is removed. 

If you're not super familiar with JavaScript, feel free to just copy and paste this part, or even better head over to the javascript section of this website and learn! Also keep in mind I'm doing this in vanilla JavaScript but this logic could be easily translated into the JS framework of your choice (React, Angular, Vue, Can, etc)

{{< code lang="js" >}}
  const clearIcon = document.querySelector(".clear-icon");
  const searchBar = document.querySelector(".search");

  searchBar.addEventListener("keyup", () => {
    if(searchBar.value && clearIcon.style.visibility != "visible"){
      clearIcon.style.visibility = "visible";
    } else if(!searchBar.value) {
      clearIcon.style.visibility = "hidden";
    }
  });

  clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
  })
{{< /code >}}

All we're doing here is adding event listeners to the search bar and clear icon, and updating their values when the icon is clicked or the user types!

## Wrapping Up

So there you have it, a nice, clean and responsive search bar ready to be dropped into your next website. Now you can stop _searching_ for tutorials on how to build this (yikes... pun) and start working on your next website!
