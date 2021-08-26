---
title: "How to add post"
date: 2021-02-10T20:00:00+02:00
weight: 3
authors:
  - nurlana-mollayeva
tags:
  - Blog
---

Here are the steps you'll want to follow while writing a blog post

Fork the [goupaz.com](https://github.com/goupaz/goupaz.com) github repo

Repo or repository - a directory or storage space where your projects can live.

## Add blog

- Go to the 'blog' section
- Tap on 'data/authors' and create your author's name like "name-surname.yml" (as an example view the predecessor)
- After that return to the 'blog' and go to the 'content'
- Create post in 'posts' section with subsequent number (if last was "/post05/" yours is "/post06/")
- Name it appropriately (example: "how_to_write_a_post.md") (look at predecessor)
- Use the intro of post as your predecessor did with main info
- Put all your writings there
- Hit the "commit new file" button bellow

## Running blog.goupaz.com locally

If you want to run the site locally to see the changes then you need to install Hugo and NodeJS on your device. [Hugo](https://gohugo.io/) is a great tool which allowed us to build this website without breaking a sweat. After [installing Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo), you can simply `cd` into `blog` directory, run `npm install` to install all necessary dependencies and finally run `hugo server` to run the website in development mode. By default hugo server runs on port `1313` but you can change that if you want. To see the website, go to `http://localhost:1313` :)

## Create Pull Request to goupaz repo

Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub.
Tap [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) to see how to create it!

## That's all!

Feel free to contact if there are any questions or technical issues.
