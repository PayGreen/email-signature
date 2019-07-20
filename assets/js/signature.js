$('[type="tel"]').inputmask({'mask': '+99 (9)9 99 99 99 99'});

function completeIframe() {
    $('iframe').addClass('loading');

    var inputs = [];

    $('input').each(function() {
        element = {};
        id = $(this).attr('id');
        val = $(this).val().trim();

        if (id.startsWith('function')) {
            val = val.toUpperCase();
        }

        element[id] = val;
        inputs.push(element);
    });

    cookie.create('inputs', JSON.stringify(inputs));

    $('iframe').attr('src', function(i, val) {
        return val;
    });
}

$(document).ready(function() {
    completeIframe();

    $('iframe').on('load', function(){
        $(this).removeClass('loading');
    });
});

$('form').on('keyup paste change', function() {
    completeIframe();
});