---
layout: default
title: Churches by Time
---
## Sunday
{% assign days = site.churches | group_by: "services" %}
{{ days }}