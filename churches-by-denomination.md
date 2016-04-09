---
layout: default
title: Churches by Denomination
---
{% assign denominations = site.churches | group_by: 'denomination' | sort %}
{% for denomination in denominations %}
## {{ denomination.name }}
{% for church in denomination.items | sort %}
### {{ church.title}}

#### Services
{% for service in church.services %}
- {{ service.day }} {{ service.day }} ({{ service.description }})
{% endfor %}
{% endfor %}
{% endfor %}