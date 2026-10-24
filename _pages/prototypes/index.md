---
layout: base
title: Prototypes
permalink: /prototypes/
description: Small experiments and work-in-progress pages about how I work with tools and bots.
---

<div class="proto-index" markdown="1">

# Prototypes

Small experiments and work-in-progress pages. I use them to try out ideas and to show how I work with tools and bots. They change as I go.

{% assign proto_pages = site.pages | where_exp: "p", "p.url contains '/prototypes/'" | where_exp: "p", "p.url != page.url" | sort: "title" %}
<ul>
{%- for p in proto_pages %}
  <li><a href="{{ p.url | relative_url }}">{{ p.title | remove: "Prototype: " | escape }}</a>{% if p.description %}: {{ p.description | escape }}{% endif %}</li>
{%- endfor %}
</ul>

</div>
