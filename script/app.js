$('#signup-form').on('submit', function(event) {
    var valuePassowrd = $('input[name="password"]').val();
    var valueConfirm = $('input[name="password2"]').val();
    if(valuePassowrd.length < 10 || valueConfirm !== valuePassowrd || valueConfirm === null || valuePassowrd === null ){
        event.preventDefault();
    }
});