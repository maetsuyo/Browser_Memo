$(function() {
    $('.sort_button').on('click', function() {
        const memoArray = [];

        // ローカルストレージの値を一度すべて配列に取り出す
        for (let i = 1; i <= localStorage.length; i++) {
            const value = JSON.parse(localStorage.getItem(i));
            if (value && value.status === "current") {
                memoArray.push({ key: i, data: value });
            }
        }

        // 配列を重要度でソート
        memoArray.sort((a, b) => a.data.importance - b.data.importance);

        // メモリストに表示
        $('.memo_list').empty();
        memoArray.forEach((item) => {
            const key = item.key;
            const title = item.data.title;
            const memo = item.data.memo;
            $('.memo_list').prepend("<li class='open_edit' data-key=" + key + ">" + "<p class='title center'>" + title + "</p>" + "<p class='memo'>" + memo + "</p>" + "</li>");
        });
    });
});
