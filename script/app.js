$('h2').after('<div class="issPos"></div>');
$('.issPos').append('<div class="lat"><p>Latitude</p><p></p></div>');
$('.issPos').append('<div class="lng"><p>Longitude</p><p></p></div>');
var apiKey = 'AIzaSyBCL8IYGbVAgeymLwN9VFw2RW-kC262O7E';
var customIcon = 'http://megaicons.net/static/img/icons_sizes/258/926/64/satellite-icon.png';

setInterval(function() {
    var parsedResponse, lat, lng;
    $.ajax({
        url: 'https://jquery-workshop-codus.c9users.io/',
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            format: "json"
        },
        success: function(response) {
            parsedResponse = JSON.parse(response);
            lat = parsedResponse.iss_position.latitude;
            lng = parsedResponse.iss_position.longitude;
            $('.lat').find('p').next().text(lat);
            $('.lng').find('p').next().text(lng);
            var apiMap = 'https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&zoom=3&size=640x400&markers=icon:'+customIcon+'|'+lat+','+lng+'&key='+apiKey;
            $('#issPosition').attr('src', apiMap);
        }
    });
}, 5000);





