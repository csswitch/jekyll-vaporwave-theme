---
layout: default
title: Archive
permalink: /archive/
---
<main class="vp-main">
<div class="section-header">
  <span class="section-header__title">Archive</span>
  <span class="section-header__count">{{ site.posts.size }}</span>
</div>
{% assign years = site.posts | group_by_exp:"p", "p.date | date: '%Y'" %}
{% for year in years %}
<div class="archive-year">{{ year.name }}</div>
<ul class="archive-list">
{% for post in year.items %}
  <li class="archive-list__item">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="archive-list__item__date">{{ post.date | date: "%b %d" }}</span>
  </li>
{% endfor %}
</ul>
{% endfor %}
</main>
