---
date: 2017-09-07T20:24:10-04:00
title: "Windows Installation"
seo_title: "Windows Installation | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use installing hugo on windows in Hugo -  Static Site Generator.
author: GOUP
image: installing-hugo-on-windows.png
video: G7umPCU-8xc
url: /static-site-generators/hugo/installing-hugo-on-windows/
weight: 2
---

Often times, trying to install and setup programs can be a mess, either the instructions are unclear, or there’s too many little things to do that people end up messing up the first time around. Luckily, that’s not the case with Hugo. Windows Installation is really easy, and GOUP is here to guide you through every step.

## Step 1 : Preparing Your Windows File System
The first step when installing Hugo on windows is to make a space for it on your hard drive.

When you start a new class at school (if you’re still in school) it’s common to buy a new folder to put all your papers in. This helps you stay organized and makes it easier to find things when you need them. That's basically what we’re doing here. We’re going to make a new folder where we can put all of the Hugo files we download. That way everything's in one place and it’s organized.

{{< article-image src="hugo-windows.png" alt="This tutorial will teach you how to install hugo on windows." >}}

{{% spotlight %}}
1. Navigate to your C drive (or the drive you want to use)
2. Create a new folder called Hugo
3. Go inside the newly created Hugo folder and and create a folder called bin, and a folder called sites
{{% /spotlight %}}

We’ll install the Hugo executable files and all of the supporting files in the bin folder. And We’ll use the sites folder to store all of our Hugo sites.

## Step 2 : Downloading Hugo
Once you’ve prepared a space for it on your computer, it’s time to download Hugo. Hugo can be downloaded from the official Hugo website.

{{% spotlight %}}
Open a web browser and navigate to {{< link href="https://github.com/gohugoio/hugo/releases" text="Hugo's Releases Page" >}}
{{% /spotlight %}}

This website stores all the latest versions of Hugo for different operating systems. The files for Windows are located at the bottom of the list of Downloads

Scroll down to the bottom of the page and click the file that’s marked Windows. When you click it, the file should automatically start downloading to your Downloads folder.

There should be two types of files to choose from, one for 32 bit operating systems and one for 64 bit operating systems. Most likely your computer is a 64 bit, but if you’re not sure check
{{< link href="https://esupport.trendmicro.com/en-us/home/pages/technical-support/1038680.aspx" text="here" >}}.
Double check that the file was downloaded by navigating to your downloads folder (or wherever you saved it) and making sure it’s there.

## Step 3: Installing Hugo
At this point you should have a copy of Hugo downloaded to your windows computer. Now we need to install Hugo by placing it in the directory we created in step 1 and telling windows where it is so we can access it in the command line.

Locate the downloaded file on your computer, it should be a .zip file. Extract all the contents of the zip file into the bin folder that we created earlier.

Once you extract all the files, look for a file with a .exe extension. If this file is not named ```hugo.exe``` be sure to rename it.
The Hugo.exe file is what we’ll use to run the Hugo framework. But in order to be able to run this executable easily in the command line, we need to tell windows where it is by updating our PATH variable. The PATH variable a system variable that stores the locations of executable files on our Windows computer.

(If possible) run the powershell as an administrator and add the hugo.exe executable to your PATH by navigating to C:/Hugo/bin and typing in the following command.

{{< code lang="bash" >}}
Set PATH=%PATH%;C:\Hugo\bin
{{< /code >}}

If you extracted the downloaded Hugo files somewhere other than C:\Hugo\bin use that path in the set command.

Now check to see if everything is working by checking your Hugo version. Type the command

{{< code >}}
Hugo version
{{< /code >}}

Into the command line. If everything’s working a version number should pop up

If it’s not working then try restarting your computer. Sometimes that is needed when updating the PATH variable.

## Updating Hugo

New features and functions are constantly being added to Hugo, when the next awesome feature is released you wanna make sure you know how to get it. Hugo is an active project, so it’s constantly being worked on and updated.

On windows updating is easy. When a new version comes out, simply follow the instructions on this tutorial again and re-download/install it (you shouldn't have to update the PATH variable again).
