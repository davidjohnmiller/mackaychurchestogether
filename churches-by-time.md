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
      {% assign service_array = service_array | push: church.url %}
      {% assign service_array = service_array | push: service.day %}
      {% assign service_array = service_array | push: service.time %}
      {% assign services_array = services_array | push: service_array  %}
  {% endfor %}
{% endfor %}
{% assign services_array = services_array | sort %}
{% assign previous_time = "" %}
<h2>Sunday</h2>
{% for service in services_array %}
  {% if service contains 'Sunday' %}
    {% unless service[4] == previous_time %}
      <dt>{{ service[4] }}</dt>
    {% endunless %}
    <dd><a href="{{ site.url }}{{ church.url }}">{{ service[1] }}</a></dd>
    {% assign previous_time = service[4] %}
  {% endif %}
{% endfor %}

<h2>Saturday</h2>
{% for service in services_array %}
  {% if service contains 'Saturday' %}
    {% unless service[4] == previous_time %}
      <dt>{{ service[4] }}</dt>
    {% endunless %}
    <dd><a href="{{ site.url }}{{ church.url }}">{{ service[1] }}</a></dd>
    {% assign previous_time = service[4] %}
  {% endif %}
{% endfor %}

<h2>Weekday</h2>
{% for service in services_array %}
  {% unless service contains 'Sunday' or service contains 'Saturday' %}
    <dt>{{ service[3] }} {{ service[4] }}</dt>
    <dd><a href="{{ site.url }}{{ church.url }}">{{ service[1] }}</a></dd>
  {% endunless %}
{% endfor %}
