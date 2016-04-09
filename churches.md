---
layout: default
title: Churches
---
{% for church in site.churches %}
## {{ church.title}}

{% unless church.services == empty %}
### Services
{% for service in church.services %}
- {{ service.day }} {{ service.time }} {% if service.description %}({{ service.description }}){% endif %}
{% endfor %}
{% endunless %}
{% endfor %}