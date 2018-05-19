{% extends "../layout.tpl" %}

{% block content %}
<table id="tbimage" class="table table-striped table-bordered">
  <caption class="text-success">Maintained By Render Team </caption>
  <thead class="thead-light">
    <tr>
      <th scope="col">Job</th>
      <th scope="col">Image</th>
      <th scope="col">分数</th>
    </tr>
  </thead>
  <tbody>
    {% for item in list %}
      <tr>
            <td class="jobid">{{ item.uid }}</td>
            <td><img src={{ item.imgS3Url }}></img></td>
            <td><input type="number" min="0" max="100"></td>
          </tr>
    {% endfor %}
  </tbody>
</table>
<button onclick='onSubmit("{{url}}")'>Submit</butotn>
{% endblock %}
