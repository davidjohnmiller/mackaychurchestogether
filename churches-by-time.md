---
layout: default
title: Churches by Time
---
{% for church in site.churches %}
{% for service in church.services %}
{{ array | push: church.title }}
{% end for %}
{% end for %}
{{ array }}