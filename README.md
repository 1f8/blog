# 1F8 Blog

## Directions to Add Blog Entry

1. Create a branch off master with your blog name in this format: `this-is-a-blog-title`
2. Create a new folder with your `${YOUR_NAME}-${BLOG_TITLE}` under `content/blog`
3. Add an .md file and any images to this folder
4. In the title of the .md  file, you need to add (date is `new Date().toISOString()` value):
```
---
title: 
date: "2020-10-04T17:46:55.148Z"
description: 
author: 
---
```
5. Submit a pull request when you're ready. When the pull request is approved, you can check https://blog.1f8.dev/ to see your updates. The blog is automatically updated via github actions upon pull request
