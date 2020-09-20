---
date: 2017-09-07T20:24:11-04:00
title: "Mac Installation"
seo_title: "Mac Installation | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use installing hugo on mac in Hugo -  Static Site Generator.
author: GOUP
image: installing-hugo-on-mac.png
video: WvhCGlLcrF8
url: /static-site-generators/hugo/installing-hugo-on-mac/
weight: 3
---

Often times, trying to install and setup programs can be a mess, either the instructions aren't clear, or there’s too many little things to do that people end up messing up the first time around. Luckily, that’s not the case with Hugo. Mac Installation is really easy, and GOUP is here to guide you through every step.

{{< article-image src="hugo-mac.png" alt="This tutorial will teach you how to install hugo on mac." >}}

## Step 1 : Installing Homebrew
Installing programs on mac isn’t the same as installing them on Windows. The operating systems are different and therefore we need different methods for installing programs like hugo. One popular way to download programs on mac is to use a package manager. Package managers are programs that help you download programs, they also make it really easy to update and manage said programs.

In order to install Hugo on your mac, you’ll have to use a package manager called Homebrew. Homebrew is one of the most popular package managers on mac, and millions of people use it everyday.

If you don’t already have homebrew on your computer you can download and install it using the instructions from the official {{< link href="https://brew.sh/" text="homebrew website" >}}
## Step 2 : Installing Hugo
Once you’ve got homebrew installed, installing Hugo is a breeze. Simply open your terminal application and type in the following command.

{{< code lang="bash" >}}
Sudo Brew install Hugo
{{< /code >}}

Note that the word sudo in the above command stands for super user. This is equivalent to running a program as an administrator on windows. When you use the sudo command you may have to enter your computer password. This is simply to validate that you are, indeed the super user. If you don’t have access to this password, consult the person who does, and get them to help you run this command.

Once you’ve successfully run the installation command using homebrew, you should validate that it worked by checking the installed version of hugo. Type the following command into the command line

{{< code lang="bash" >}}
hugo version
{{< /code >}}

This will spit out a version number, which should represent the latest stable version of Hugo available on homebrew.

{{< code lang="bash" >}}
Hugo Static Site Generator v0.25.1 darwin/amd64 BuildDate: 2017-07-19T03:27:12-04:00
{{< /code >}}

## Updating Hugo
New features and functions are constantly being added to Hugo, when the next awesome feature is released you wanna make sure you know how to get it. Hugo is an active project, so it’s constantly being worked on and updated.

On mac, updating is easy. When a new version comes out, you can update it directly using homebrew. Simply type the following command into your terminal from anywhere on your computer.

{{< code lang="bash" >}}
brew update hugo
{{< /code >}}

Check to see if the update process worked by checking the version number again.
