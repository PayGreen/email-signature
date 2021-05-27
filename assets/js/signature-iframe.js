$(document).ready(function() {
    var inputs = JSON.parse(cookie.read('inputs'));

    if (inputs !== null) {
        inputs.forEach(function(element) {
            for (inputName in element) {
                value = element[inputName];

                if (value == '') {
                    $('[data-remove="'+inputName+'"]').remove();
                    $('[data-remove2="'+inputName+'"]').remove();
                    $('[data-opacity="'+inputName+'"]').attr('color', '#ffffff');
                }

                $('[data-id="'+inputName+'"]').each(function() {
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
