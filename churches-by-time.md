---
layout: default
title: Churches by Denomination
---
## Sunday
{% assign churches = site.churches | where: "services.day", "Sunday" %}
{% for church in churches %}
### {{ church.title }}

#### Services
{% for service in church.services %}
- {{ service }}
{% endfor %}
{% endfor %}

## Saturday
{% assign churches = site.churches | where: "services.day", "Saturday" %}
{% for church in churches %}
### {{ church.title }}

#### Services
{% for service in church.services %}
- {{ service }}
{% endfor %}
{% endfor %}

## Weekday
{% assign churches = site.churches | where: "services.day", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] %}
{% for church in churches %}
### {{ church.title }}

#### Services
{% for service in church.services %}
- {{ service }}
{% endfor %}
{% endfor %}