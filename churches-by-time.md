---
layout: default
title: Churches by Time
---
## Sunday
{% assign churches = site.churches | group_by: "services.day" %}
{% for church in churches %}
### {{ church.title }}

{% unless church.services == empty %}
#### Services
{% for service in church.services %}
- {{ service.day }} {{ service.time }} {% if service.description %}({{ service.description }}){% endif %}
{% endfor %}
{% endunless %}
{% endfor %}