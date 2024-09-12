$(function() {
    $('.sort_button').on('click', function() {
        const memoArray = [];

        // ローカルストレージの値を一度すべて配列に取り出す
        for (let i = 1; i <= localStorage.length; i++) {
            const value = JSON.parse(localStorage.getItem(i));
            if (value && value.status === "remove") {
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
            $('.memo_list').prepend(
                "<li class='open_edit' data-key=" + key + ">" + 
                    "<p class='title center'>" + title + "</p>" + 
                    "<p class='memo'>" + memo + "</p>" + 
                    "<button class='delete_button'>" + "完全に削除" + "</button>" + 
                    "<button class='restore_button'>" + "復元" + "</button>" +
                "</li>"
            );
        });

        // 復元ボタンと完全に削除ボタンのイベントを再設定
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
});
