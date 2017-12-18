(function ($, jQuery) {

    $('#submit').click(function () {
        $('#board').append($('<div id="item"></div>'));
        $('#item').height($('#item').width() / 6);
    });

}($, jQuery));