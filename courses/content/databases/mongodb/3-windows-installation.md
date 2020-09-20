---
date: 2017-12-22T11:54:13-05:00
title: "Windows Installation"
seo_title: "Windows Installation | MongoDB | GOUP"
subheader:
     greeting: MongoDB - noSQL Database
     description: This course covers the basics of working with MongoDB. Work your way through the videos/articles and I'll teach you everything you need to know to interact with Mongo's flexible document database management system and create powerful document databases!
description: This tutorial covers windows installation in MongoDB.
author: GOUP
image: windows-installation.png
video: UtV0g_sjOrc
url: /databases/mongodb/windows-installation/
weight: 3
---
## Instructions

1. Download the Windows installer
     - https://www.mongodb.com/download-center?jmp=nav#community
2. Step through installer (be sure to download compass)
3. Add mongod.exe to path
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

