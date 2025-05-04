---
layout: common
title: Copyright
---

Copyright © 2025 by Boulder Guitar Society.  All rights reserved


   {% assign latest = site.posts.first %
   {% for post in site.posts limit:4 %}
      {% unless post == latest %}
         <p><a href="{{ post.url }}">{{ post.title }}</a><br>
         {{ post.brief }}<br>
         {{ post.date | date: "%B %e, %Y" }}</p>
         {% for part in post %}
           {% if part.first %}
             array {{ part.first }} to {{ part.last }}<br>
           {% else %}
             string {{ part }}<br>
           {% endif %}
         {% endfor %}
      {% endunless %}
   {% endfor %}
