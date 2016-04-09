---
layout: default
title: Churches by Denomination
---
{% assign denominations = site.churches | group_by: "denomination" | sort: "name" %}
{% for denomination in denominations %}
## {{ denomination.name }}
{% for church in denomination.items | sort | reverse %}
### {{ church.title }}

#### Services
{% unless church.services == empty %}
{% for service in church.services %}
- {{ service.day }} {{ service.time }} ({{ service.description }})
{% endfor %}
{% endunless %}
{% endfor %}
{% endfor %}