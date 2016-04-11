---
layout: default
title: Churches by Time
---
{% assign services_array = "" | split: "" %}
{% for church in site.churches %}
  {% for service in church.services %}
      {% assign service_array = "" | split: "" %}
      {% assign sort_time = service.time | remove: ':' | remove: 'am' | remove: 'pm' %}
      {% if service.time contains 'pm' %}
        {% assign sort_time = sort_time | plus: '1200' %}
      {% endif %}
      {% assign sort_time = sort_time | prepend: '0' | slice: -4, 4 %}
      {% assign service_array = service_array | push: sort_time %}
      {% assign service_array = service_array | push: church.title %}
      {% assign service_array = service_array | push: service.day %}
      {% assign service_array = service_array | push: service.time %}
      {% assign services_array = services_array | push: service_array  %}
  {% endfor %}
{% endfor %}
{% assign services_array = services_array | sort %}
{% for service in services_array %}
  {{ service }}
{% endfor %}
