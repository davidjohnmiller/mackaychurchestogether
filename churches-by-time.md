---
layout: default
title: Churches by Time
---
{% assign services_array = "" | split: "" %}
{% for church in site.churches %}
  {% for service in church.services %}
      {% assign service_array = "" | split: "" %}
      {% assign service_array = service_array | push: service.time %}
      {% assign service_array = service_array | push: church.title %}
      {% assign service_array = service_array | push: service.day %}
      {% assign services_array = services_array | push: service_array  %}
  {% endfor %}
{% endfor %}
{% assign services_array = services_array | sort %}
{% for service in services_array %}
{{ service }}
{% endfor %}
{{ services_array }}
