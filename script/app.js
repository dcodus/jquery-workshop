$('h2').after('<div class="issPos"></div>');
$('.issPos').append('<div class="lat"><p>Latitude</p><p></p></div>');
$('.issPos').append('<div class="lng"><p>Longitude</p><p></p></div>');




// setInterval(function(res) {
//     var parsedResponse, lat, lng;
//     $.ajax({
//         url: 'https://jquery-workshop-codus.c9users.io/',
//         jsonp: "callback",
//         dataType: "jsonp",
//         data: {
//             format: "json"
//         },
//         success: function(response) {
//             parsedResponse = JSON.parse(response);
//             lat = parsedResponse.iss_position.latitude;
//             lng = parsedResponse.iss_position.longitude;
//             $('.lat').find('p').next().text(lat);
//             $('.lng').find('p').next().text(lng);
//         }
//     });
// }, 2000);