$(function() {
    $('.memo_list').empty();

    const count_key = localStorage.length;
    for (let i=1; i<=count_key; i++) {
        const value = JSON.parse(localStorage.getItem(i));
        const status = value.status;

        if (status === "current") {
            const title = value.title;
            const memo = value.memo;
            $('.memo_list').prepend("<li class='open_edit' data-key=" + i + ">" + "<p class='title center'>" + title + "</p>" + "<p class='memo'>" + memo + "</p>" + "</li>");
        } else {
            // 何もしない
        }
    }
});