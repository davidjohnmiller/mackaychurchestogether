---
layout: default
title: Churches by Denomination
---
{% assign denominations = site.churches | group_by: 'denomination' %}
{% for denomination in denominations %}
## {{ denomination.name }}
{% for church in denomination.items %}
### {{ church.title}}

#### Services
{% for service in church.services %}
- {{ service }}
{% endfor %}
{% endfor %}
{% endfor %}