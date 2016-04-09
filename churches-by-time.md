---
layout: default
title: Churches by Time
---
## Sunday
{% assign days = site.churches.services | where: "day", "Sunday" %}
{{ days }}