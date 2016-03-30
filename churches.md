---
---
# Churches
{% for Church in site.churches %}
  ## {{ Church.Name}}
  ### Services
  {% for Service in Church.Services %}
    - {{ Service }}
  {% endfor %}
{% endfor %}