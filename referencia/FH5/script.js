var proxy = 'https://cors-anywhere.herokuapp.com/';
function loadScript("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}
            $( "#loadBtn" ).click(function(){
            let count = document.getElementById('slider').value;
            var myUrl = 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=1551360&count=' + count + '&maxlength=300&format=json';
    var elem = document.getElementById('hirek_table1');
    elem.parentNode.removeChild(elem);
    $.ajax({
        type: "GET",
        url: proxy + myUrl,
        data: "",
        dataType: "JSON",
        success: function(data)
        {
            var html = "";
            html += '<tr><th>Legújabb Hírek: </th><th>Több Info: </th>';
            var tomb = data.appnews.newsitems;
             tomb.forEach(element => {
                 html += '<tr><td>' + element.title + '</td><td><a href="' + element.url + '">Kattints!</a></td>';
                 //alert('xd');
             });
            //alert(data.appnews.newsitems[0].title);
            document.getElementById('hirek_table').innerHTML = html;
        },
        error: function(xhr, status, error){
         var errorMessage = xhr.status + ': ' + xhr.statusText
         alert('Hiba - ' + errorMessage + '                                                                           Aktiváld a https://cors-anywhere.herokuapp.com/corsdemo -t');
     }


    });
}
    
  );
  var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);