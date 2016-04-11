---
layout: default
title: Churches by Time
---
{% assign services_array = "" | split: "" %}
{% for church in site.churches %}
  {% assign services_array = services_array | push: church.services | push: church.title %}
  {% for service in church.services %}
  {% endfor %}
{% endfor %}
{{ services_array }}
