$(document).ready(function() {
    var inputs = JSON.parse(cookie.read('inputs'));

    if (inputs !== null) {
        inputs.forEach(function(element) {
            for (name in element) {
                value = element[name];

                if (value == '') {
                    $('[data-remove="'+name+'"]').remove();
                    $('[data-remove2="'+name+'"]').remove();
                    $('[data-opacity="'+name+'"]').attr('color', '#ffffff');
                }

                $('[data-id="'+name+'"]').each(function() {
                    if (value == '') {
                        $(this).remove();
                    } else {
                        if ($(this).is('a')) {
                            if (value.startsWith('+')) {
                                $(this).attr('href', 'tel:' + value);
                            } else {
                                $(this).attr('href', value);
                            }
                        } else {
                            $(this).text(value);
                        }
                    }
                });
            }
        });
    }
});
