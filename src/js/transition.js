var speed = 'slow';

$('.notfound, h1, h2').hide();

$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('.notfound, h1, h2').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});