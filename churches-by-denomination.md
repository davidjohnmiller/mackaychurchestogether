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

{% endfor %}
{% endfor %}