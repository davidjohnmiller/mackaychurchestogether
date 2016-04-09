---
layout: default
title: Churches by Denomination
---
{% assign days = site.churches | group_by: 'services.day' %}
{% for day in days %}
## {{ day.name }}
{% for church in day.items %}
### {{ church.title}}

#### Services
{% for service in church.services %}
- {{ service }}
{% endfor %}
{% endfor %}
{% endfor %}