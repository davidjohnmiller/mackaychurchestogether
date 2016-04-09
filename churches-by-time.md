---
layout: default
title: Churches by Time
---
## Sunday
{% assign days = site.churches | where: "services.day", "Sunday" %}
{{ days }}