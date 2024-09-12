$(function () {
    $('.search_bar').on('input', function() {
        const search_word = $(this).val();
        $('.memo_list .open_edit p span').contents().unwrap();

        if (search_word) {
            $('.memo_list .open_edit p:contains(' + search_word + ')').each(function() {
                const this_html = $(this).html();
                $(this).html(this_html.replaceAll(search_word,'<span class="background_yellow">' + search_word + '</span>'));
            });
        }
    });

    $('.search_bar').keydown(function(e) {
        if (e.keyCode === 13) {
            return false;
        }
    });
});