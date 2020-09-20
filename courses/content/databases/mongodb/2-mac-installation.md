---
date: 2017-12-22T11:54:13-05:00
title: "Mac Installation"
seo_title: "Mac Installation | MongoDB | GOUP"
subheader:
     greeting: MongoDB - noSQL Database
     description: This course covers the basics of working with MongoDB. Work your way through the videos/articles and I'll teach you everything you need to know to interact with Mongo's flexible document database management system and create powerful document databases!
description: This tutorial covers mac installation in MongoDB.
author: GOUP
image: mac-installation.png
video: E6boH7U5ZlI
url: /databases/mongodb/mac-installation/
weight: 2
---
## Instructions
### Download using brew
1. Execute the following commands
     - brew update
     - brew install mongodb
Download the Binary
1. Download MongoDB Community Server Binary
     - https://www.mongodb.com/download-center?jmp=nav#community
2. Extract the files (double click) into the downloads folder
     - I just put them at the root directory of the home folder
3. Configure command line to recognize 'mongod' command
     - echo 'export PATH=/Users/Mike/mongodb-osx-x86_64-3.6.0/bin:$PATH' >> ~/.bashrc

### Download Compass
1. https://www.mongodb.com/download-center#compass

### Configure
4. Create '/data/db' directory
     - Create this at root directory of hard-drive
          - Ensure that current user has read/write permissions
     - Or customize location using:
          - mongod --dbpath <path to data directory>
          - I put this at the root directory of my home folder
5. Start MongoDB server
     - mongod
6. Connect to MongoDB server from client
     -- (in new terminal window) mongo --host localhost:27017
     -- (in compass) use the default settings

