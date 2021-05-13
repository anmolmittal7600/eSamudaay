$(document).ready(function(){
    $.ajax({
        url: 'https://609c052c2b549f00176e4efb.mockapi.io/api/v1/foodStore',
        type: 'get',
        dataType: 'JSON',
        success: function(response){

            var len = response.length;
            for(var i=0; i<len; i++){

                var avtar = response[i].avatar;
                var name = response[i].name;


var val =  "<div  class='col-lg-3 col-3'>"+
    "<img class='img' src="+avtar+" width='225px' height='140px' alt=''>"+
    "<p>"+name+"</p>"+
    "</div>";




                $("#foodid").append(val);
            }

        }
    });
    $.ajax({
        url: 'https://609c052c2b549f00176e4efb.mockapi.io/api/v1/logo',
        type: 'get',
        dataType: 'JSON',
        success: function(response){

            var len = response.length;
            for(var i=0; i<len; i++){

                var avtar = response[i].avatar;
                var name = response[i].name;


var val ="<div class='col-lg-3 col-4'>"+
"<img class='logo' src="+avtar+"  width='225px' height='140px' alt=''>"+
"<p class='logop'>"+name+"</p>"+
"</div>";




                $("#logo").append(val);
            }

        }
    });
});
