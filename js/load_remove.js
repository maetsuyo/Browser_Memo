$(function() {
    $('.memo_list').empty();

    const count_key = localStorage.length;
    for (let i=1; i<=count_key; i++) {
        const value = JSON.parse(localStorage.getItem(i));
        const status = value.status;

        if (status === "remove") {
            const title = value.title;
            const memo = value.memo;
            $('.memo_list').prepend("<li class='open_edit' data-key=" + i + ">" + "<p class='title center'>" + title + "</p>" + "<p class='memo'>" + memo + "</p>" + "<button class='delete_button'>" + "完全に削除" + "</button>" + "<button class='restore_button'>" + "復元" + "</button>" + "</li>");
        } else {
            // 何もしない
        }
    }

    $('.delete_button').on('click', function(e) {
        e.preventDefault();
        if (confirm("メモを完全に削除しますか？")) {
            const key = $(this).parent().data('key');
            value = JSON.parse(localStorage.getItem(key));
            value.status = "delete";
            const update_status = JSON.stringify(value);
            localStorage.setItem(key, update_status);
            location.reload();
        } else {
            // 何もしない
        }
    });

    $('.restore_button').on('click', function(e) {
        e.preventDefault();
        if (confirm("メモを復元しますか？")) {
            const key = $(this).parent().data('key');
            value = JSON.parse(localStorage.getItem(key));
            value.status = "current";
            const update_status = JSON.stringify(value);
            localStorage.setItem(key, update_status);
            location.reload();
        } else {
            // 何もしない
        }
    });
});