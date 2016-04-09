---
layout: default
title: Churches by Time
---
## Sunday
{% for church in site.churches %}
{% for service in church.services %}
{{ array | push: [church.title, service.description, service.day, service.time]}}
{% end for %}
{% end for %}
{{ array }}