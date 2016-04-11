---
layout: default
title: Churches by Time
---
{% assign array = empty %}
{% for church in site.churches %}
{% for service in church.services %}
{{ array | push: church.title }}
{% end for %}
{% end for %}
{{ array }}