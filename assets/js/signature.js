$('form').on('keyup paste change', function() {
    var text = $('input', $(this)).val();

    cookie.create('text', text);

    $('iframe').attr('src', function(i, val) {
        return val;
    });
});


