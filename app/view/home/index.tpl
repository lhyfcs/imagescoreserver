{% extends "../layout.tpl" %}

{% block content %}
<table id="tbimage" class="table table-striped table-bordered">
  <caption class="text-success">Maintained By Render Team </caption>
  <thead class="thead-light">
    <tr>
      <th scope="col">Job</th>
      <th scope="col">Image</th>
      <th scope="col">分数</th>
      <th scope="col">类型</th>
      <th scope="col">创建时间</th>
    </tr>
  </thead>
  <tbody>
    {% for item in list %}
      <tr>
            <td class="jobid">{{ item.uid }}</td>
            <td><img src={{ item.imgS3Url }}></img></td>
            <td><input type="number" min="0" max="100" value={{ item.score }}></td>
            <td>{{ item.queueName }}</td>
            <td>{{ item.created }}</td>
      </tr>      
    {% endfor %}
  </tbody>
</table>
{% if index == 0 %}
  <button class="previous" disabled onclick='previous("{{pageUrl}}", {{index}})'>Prev Page</butotn>
{% else %}
  <button class="previous" onclick='previous("{{pageUrl}}", {{index}})'>Prev Page</butotn>
{% endif%}
<button onclick='onSubmit("{{scoreUrl}}")'>Submit</butotn>
<button onclick='next("{{pageUrl}}", {{index}})'>Next Page</butotn>
{% endblock %}
