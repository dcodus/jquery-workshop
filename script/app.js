// Write your code here!
$(document).ready(function() {
   $('li').click(function () {
       var currentKitty = $(this).find('img');
       var displayKitty = '<div id="overlayKitty"></div>';
       var displayText = '<div id="overlayText">"'+currentKitty.attr('alt')+'"</div>'
       $('.overlay').css('visibility', 'visible');
       $('.overlay').append(displayKitty);
       $('#overlayKitty').append(displayText);
       $('#overlayKitty').find('img').css({'width': '100%'});
       $('#overlayText').css({'width': '100%', 'height': '30px', 'border-top': '2px solid #fff', 'position': 'absolute', 'bottom': '-2px', 'color': '#f4f4f4', 'text-shadow': '2px 2px #222', 'font-weight': 'bold', 'text-align': 'center', 'padding-top': '7px', 'background': 'rgba(0,0,0,0.3)'})
       $('#overlayKitty').css({'position': 'absolute', 'margin': 'auto', 'top': 0, 'right': 0, 'bottom': 0, 'left': 0, 'background-image':'url("'+currentKitty.attr('src')+'")', 'background-size': 'contain', 'background-repeat': 'no-repeat', 'width': '420px', 'height': '420px', 'border': '2px solid  #f4f4f4', 'border-radius': '10px', 'box-shadow': 'inset 0px 0px 40px #fff'});
   }); 
    $('.overlay').bind('click', function () {
        $('#overlayKitty').fadeOut(300, function () {
            $('#overlayKitty').remove();
            $('.overlay').css('visibility', 'hidden');
        })
    })
});


