---
layout: default
title: Churches by Denomination
---
{% assign denominations = site.churches | group_by: "denomination" | sort: "name", "last" %}
{% for denomination in denominations %}
{% if denomination.name <> "" %}
## {{ denomination.name }}
{% else %}
## Other
{% endif %}
{% for church in denomination.items %}
### {{ church.title }}

{% unless church.services == empty %}
#### Services
{% for service in church.services %}
- {{ service.day }} {{ service.time }} {% if service.description <> "" %}({{ service.description }}){% endif %}
{% endfor %}
{% endunless %}
{% endfor %}
{% endfor %}