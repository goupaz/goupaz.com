---
title: "Getting Started"
date: 2020-07-15T20:00:00+02:00
authors:
  - john-doe
tags:
  - Documentation
weight: 1
---

Geekblog is a simple Hugo theme for personal blogs. It is intentionally designed as a fast and lean theme and may not fit the requirements of complex websites. If a more feature-complete theme is required there are a lot of got alternatives out there. This post helps you to get started with the Geekblog theme, including initial setup and basic configuration.

<!--more-->

[![Build Status](https://img.shields.io/drone/build/thegeeklab/hugo-geekblog?logo=drone)](https://cloud.drone.io/thegeeklab/hugo-geekblog)
[![Hugo Version](https://img.shields.io/badge/hugo-0.65-blue.svg)](https://gohugo.io)
[![GitHub release](https://img.shields.io/github/v/release/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/graphs/contributors)
[![License: MIT](https://img.shields.io/github/license/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/blob/master/LICENSE)

<!-- spellchecker-disable -->

{{< toc >}}

<!-- spellchecker-enable -->

## Features

- Clean and simple design
- Light and mobile-friendly
- Easy customization
- Zero initial configuration
- Handy shortcodes
- Simple sticky posts
- Content tags
- Multiple authors
- Supports Atom and JSON feeds

## Install requirements

You need a recent version of Hugo for local builds and previews of sites that use Geekblog. As we are using [gulp](https://gulpjs.com/) as pre-processor the normal version of Hugo is sufficient. If you prefer the extended version of Hugo anyway this will work as well. For comprehensive Hugo documentation, see [gohugo.io](https://gohugo.io/documentation/).

If you want to use the theme from a cloned branch instead of a release tarball you'll need to install `gulp` locally and run the default pipeline once to create all required assets.

```Shell
# install required packages from package.json
npm install

# run gulp pipeline to build required assets
npx gulp default
```

## Using the theme

To prepare your new site environment just a few steps are required:

1. Create a new empty Hugo site.

   ```Shell
   hugo new site demosite
   ```

2. Switch to the root of the new site.

   ```Shell
   cd demosite
   ```

3. Install the Geekblog theme from a [release bundle](#option-1-download-pre-build-release-bundle) (recommended) or form [Git branch](#option-2-clone-the-github-repository).

4. Create the minimal required Hugo configuration `config.toml`. For all configuration options see [here](#configuration).

   ```Toml
   baseURL = "http://localhost"
   title = "Geekblog"
   theme = "hugo-geekblog"

   # Geekblog required configuration
   pygmentsUseClasses = true
   pygmentsCodeFences = true
   disablePathToLower = true

   # Needed for mermaid shortcodes
   [markup]
     [markup.goldmark.renderer]
       unsafe = true
     [markup.tableOfContents]
       startLevel = 1
       endLevel = 9

   [taxonomies]
     author = "authors"
     tag = "tags"

   [mediaTypes]
     [mediaTypes."application/atom+xml"]
       suffixes = ["xml"]

   [outputFormats]
     [outputFormats.Atom]
       name = "Atom"
       mediaType = "application/atom+xml"
       baseName = "atom"
       isPlainText = false
       rel = "alternate"
       isHTML = false
       noUgly = true
       permalinkable = false

   [outputFormats.outputs]
     home = ["HTML", "ATOM"]
     page = ["HTML"]
     section = ["HTML"]
     taxonomy = ["HTML"]
     term = ["HTML", "ATOM"]
   ```

5. Test your site.

   ```Shell
   hugo server -D
   ```

   If you want to add some demo data you could use the content from the [Hugo basic example](https://github.com/gohugoio/hugoBasicExample):

   ```Shell
   curl -L https://github.com/gohugoio/hugoBasicExample/archive/master.tar.gz | tar -xz --exclude "config*" --exclude "LICENSE" --exclude "README*" --strip-components=1
   ```

### Option 1: Download pre-build release bundle

Download and extract the latest release bundle into the theme directory.

```Shell
mkdir -p themes/hugo-geekblog/
curl -L https://github.com/thegeeklab/hugo-geekblog/releases/latest/download/hugo-geekblog.tar.gz | tar -xz -C themes/hugo-geekblog/ --strip-components=1
```

### Option 2: Clone the GitHub repository

{{< hint info >}}
**Info**\
Keep in mind this method is not recommended and needs some extra steps to get it working.
If you want to use the Theme as submodule keep in mind that your build process need to
run the described steps as well.
{{< /hint >}}

Clone the Geekblog git repository.

```Shell
git clone https://github.com/thegeeklab/hugo-geekblog.git themes/geekblog
```

Build required theme assets e.g. CSS files and SVG sprites with `gulp`.

```Shell
npx gulp default
```

## Configuration

### Site configuration

{{< tabs "site-config" >}}
{{< tab "TOML" >}}

```Toml
baseURL = "http://localhost"
title = "Geekblog"
theme = "hugo-geekblog"

# Required to get well formatted code blocks
pygmentsUseClasses = true
pygmentsCodeFences = true
disablePathToLower = true
enableGitInfo = true

[markup]
  [markup.goldmark.renderer]
      unsafe = true
  [markup.tableOfContents]
    startLevel = 1
    endLevel = 9

[taxonomies]
  author = "authors"
  tag = "tags"

[mediaTypes]
  [mediaTypes."application/atom+xml"]
    suffixes = ["xml"]

[outputFormats]
  [outputFormats.Atom]
    # https://validator.w3.org/feed/docs/atom.html#whatIsAtom
    name = "Atom"
    mediaType = "application/atom+xml"
    # generated file = <baseName>.<mediaType."application/atom+xml".suffixes[0]> = atom.xml
    baseName = "atom"
    isPlainText = false
    rel = "alternate"
    isHTML = false
    noUgly = true
    permalinkable = false

[outputs]
  home = ["HTML", "ATOM"]
  page = ["HTML"]
  section = ["HTML"]
  taxonomy = ["HTML"]
  term = ["HTML", "ATOM"]

[params]
  subtitle = "Blog about my favorite topics"
  description = "This is my personal blog about tech."
  keywords = []
  images = []

  # (Optional, default static/brand.svg) Set the path to a logo for the Geekblog
  # relative to your 'static/' folder.
  logo = "logo.png"

  # (Optional, default 6) Set how many table of contents levels to be showed on page.
  # Use false to hide ToC, note that 0 will default to 6 (https://gohugo.io/functions/default/)
  # You can also specify this parameter per page in front matter.
  geekblogToC = 3

  # (Optional, default none) Add a link to your Legal Notice page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogLegalNotice = "https://blog.example.com/legal"

  # (Optional, default none) Add a link to your Privacy Policy page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogPrivacyPolicy = "/privacy"

  # (Optional, default true) Add an anchor link to headlines.
  geekblogAnchor = true

  # (Optional, default true) Copy anchor url to clipboard on click.
  geekblogAnchorCopy = true

  # (Optional, default none) Sites main author.
  geekblogAuthor = "john-doe"

  # (Optional, default posts) Set the name of the default content section.
  geekblogContentSection = "my-pages"

  # (Optional, default none) Adds a "Hosted on <provider>" line to the footer.
  # Could be used if you want to give credits to your hosting provider.
  [params.geekblogHostedOn]
    name = "Uberspace"
    link = "https://uberspace.de/en/"

  # (Optional, default none) Adds a "Content licensed under <license>" line to the footer.
  # Could be used if you want to define a default license for your content.
  [params.geekblogContentLicense]
    name = "CC BY-SA 4.0"
    link = "https://creativecommons.org/licenses/by-sa/4.0/"
```

{{< /tab >}}
{{< tab "YAML" >}}

```Yaml
---
# ...

theme: hugo-geekblog

# Required to get well formatted code blocks
pygmentsUseClasses: true
pygmentsCodeFences: true
disablePathToLower: true
enableGitInfo: true

markup:
  goldmark:
    renderer:
      unsafe: true
  tableOfContents:
    startLevel: 1
    endLevel: 9

taxonomies:
  author: authors
  tag: tags

mediaTypes:
  "application/atom+xml":
    suffixes:
      - "xml"

outputFormats:
  Atom:
    # https://validator.w3.org/feed/docs/atom.html#whatIsAtom
    name: "Atom"
    mediaType: "application/atom+xml"
    # generated file: <baseName>.<mediaType."application/atom+xml".suffixes[0]> = atom.xml
    baseName: "atom"
    isPlainText: false
    rel: "alternate"
    isHTML: false
    noUgly: true
    permalinkable: false

outputs:
  home:
    - HTML
    - ATOM
  page:
    - HTML
  section:
    - HTML
  taxonomy:
    - HTML
  term:
    - HTML
    - ATOM

# Required if you want to render robots.txt template
enableRobotsTXT: true

params:
  subtitle: "Blog about my favorite topics"
  description: "This is my personal blog about tech."
  keywords: []
  images: []

  # (Optional, default static/brand.svg) Set the path to a logo for the Geekblog
  # relative to your 'static/' folder.
  logo: logo.png

  # (Optional, default 6) Set how many table of contents levels to be showed on page.
  # Use false to hide ToC, note that 0 will default to 6 (https://gohugo.io/functions/default/)
  # You can also specify this parameter per page in front matter.
  geekblogToC: 3

  # (Optional, default none) Add a link to your Legal Notice page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogLegalNotice: https://blog.example.com/legal

  # (Optional, default none) Add a link to your Privacy Policy page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogPrivacyPolicy: /privacy

  # (Optional, default true) Add an anchor link to headlines.
  geekblogAnchor: true

  # (Optional, default true) Copy anchor url to clipboard on click.
  geekblogAnchorCopy: true

  # (Optional, default none) Sites main author.
  geekblogAuthor: john-doe

  # (Optional, default posts) Set the name of the default content section.
  geekblogContentSection: "my-pages"

  # (Optional, default none) Adds a "Hosted on <provider>" line to the footer.
  # Could be used if you want to give credits to your hosting provider.
  geekblogHostedOn:
    name: Uberspace
    link: https://uberspace.de/en/

  # (Optional, default none) Adds a "Content licensed under <license>" line to the footer.
  # Could be used if you want to define a default license for your content.
  geekblogContentLicense:
    name: CC BY-SA 4.0
    link: https://creativecommons.org/licenses/by-sa/4.0/
```

{{< /tab >}}
{{< /tabs >}}

### Page configuration

{{< tabs "page-config" >}}
{{< tab "TOML" >}}

```Toml
# Title of your post. If not set, filename will be used.
title = My first post

# Set weigth to 1 to mark this post as sticky post.
weight = 1

# List of authors of the post.
authors = ["john-doe"]

# Tags for this post.
tags = ["Open Source"]

# Set how many table of contents levels to be showed on page.
geekblogToC = 3

# Set true to hide page or section from side menu (file-tree menu only).
geekblogHidden = true

# Add an anchor link to headlines.
geekblogAnchor = true
```

{{< /tab >}}
{{< tab "YAML" >}}

```Yaml
# Title of your post. If not set, filename will be used.
title: My first post

# Set weigth to 1 to mark this post as sticky post.
weight: 1

# List of authors of the post.
authors:
  - john-doe

# Tags for this post.
tags:
  - Open Source

# Set how many table of contents levels to be showed on page.
geekblogToC: 3

# Set true to hide page or section from side menu (file-tree menu only).
geekblogHidden: true

# Add an anchor link to headlines.
geekblogAnchor: true
```

{{< /tab >}}
{{< /tabs >}}
