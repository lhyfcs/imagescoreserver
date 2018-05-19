<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="shortcut icon" href="/public/img/favicon.ico" >
    <link href="/public/css/main.css" rel="stylesheet">
    <title>PanoAPI</title>
  </head>
  <body>
       <!-- Image and text -->
      <nav class="navbar navbar-dark bd-navbar">
        <a class="navbar-brand" href="javascript::void(0)">
          <img src="/public/img/favicon.png" width="30" height="30" class="d-inline-block align-top" alt="">
          &nbsp;&nbsp;&nbsp;PanoAPI Service
        </a>
      </nav>

    <div class="container">


      <!-- Content here -->
      {% block content %}{% endblock %}
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript">
    function sendRequest(url){
      return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function() {
          if (this.readyState == 4 && this.status == 200) {
            resolve();
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      });
    }
    async function onSubmit(url){
      const values = getUpdateValues();
      let promises = [];
      values.forEach((v) => {
        const requestUrl = `${url}${v.uid}?v=${v.value}`;
        console.log(requestUrl);
        promises.push(sendRequest(requestUrl));
      });      
      await Promise.all(promises);
      alert('update success');
    }
    function getUpdateValues(){
      const table = document.getElementById('tbimage');
      const trs = table.getElementsByTagName('tr'); 
      let values = [];
      for(let i = 1; i < trs.length; i++){
        const td = trs[i].getElementsByTagName('td');
        let v = td[2].firstChild.value;
        if (v > 100) v = 100;
        else if(v < 0) v = 0;
        values.push({uid: td[0].innerHTML, value: v});
      }
      return values;
    }
    </script>
  </body>
</html>
