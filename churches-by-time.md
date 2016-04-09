---
layout: default
title: Churches by Time
---
## Sunday
{% assign churches = site.churches %}
{% for church in churches %}
### {{ church.title }}

#### Services
{% unless church.services == empty %}
{% for service in church.services %}
- {{ service.day }} {{ service.time }} ({{ service.description }})
{% endfor %}
{% endunless %}
{% endfor %}

## Saturday
{% assign churches = site.churches %}
{% for church in churches %}
### {{ church.title }}

#### Services
{% unless church.services == empty %}
{% for service in church.services %}
- {{ service.day }} {{ service.time }} ({{ service.description }})
{% endfor %}
{% endunless %}
{% endfor %}

## Weekday
{% assign churches = site.churches %}
{% for church in churches %}
### {{ church.title }}

#### Services
{% unless church.services == empty %}
{% for service in church.services %}
- {{ service.day }} {{ service.time }} ({{ service.description }})
{% endfor %}
{% endunless %}
{% endfor %}