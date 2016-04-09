---
layout: default
title: Churches
---
{% for church in site.churches %}
## {{ church.title}}
### services
{% for service in church.services %}
- {{ service }}
{% endfor %}
{% endfor %}