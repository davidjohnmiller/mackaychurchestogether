---
layout: default
title: Churches
---
{% for church in site.churches %}
## {{ church.title}}

### Services
{% for service in church.services %}
- {{ service }}
{% endfor %}
{% endfor %}