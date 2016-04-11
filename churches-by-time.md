---
layout: default
title: Churches by Time
---
{% assign services_array = "" | split: "" %}
{% for church in site.churches %}
  {% for service in church.services %}
    {% assign services_array = services_array | push: [church.title, service.description, service.day, service.time] %}
  {% endfor %}
{% endfor %}
{{ services_array }}
