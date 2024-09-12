$(function() {
    // ページ読み込み時に実行される処理
    loadCloseDeadlineMemos();

    // 期限が近いメモを読み込む関数
    function loadCloseDeadlineMemos() {
        $('.memo_list').empty();

        const now = new Date().getTime();

        // ローカルストレージの全てのアイテムを確認
        for (let i = 1; i <= localStorage.length; i++) {
            const value = JSON.parse(localStorage.getItem(i));

            // valueが存在し、かつstatusが"current"で、かつ期限が1週間以内の場合
            if (value && value.status === "current" && isWithinOneWeek(now, new Date(value.deadline).getTime())) {
                const title = value.title;
                const memo = value.memo;

                // 期限までの残り日数を計算
                const daysRemaining = calculateDaysRemaining(new Date(value.deadline).getTime());

                // 残り日数が正の場合のみ表示
                if (daysRemaining >= 0) {
                    // メモの前に表示する部分を追加
                    $('.memo_list').prepend(
                        "<p class='days_remaining'>期限まであと " + daysRemaining + " 日</p>" +
                        "<li class='open_edit' data-key=" + i + ">" + 
                            "<p class='title center'>" + title + "</p>" + 
                            "<p class='memo'>" + memo + "</p>" +
                        "</li>"
                    );
                }
            }
        }
    }

    // 期限が1週間以内かどうかをチェックする関数
    function isWithinOneWeek(now, deadline) {
        const oneWeek = 7 * 24 * 60 * 60 * 1000; // 1週間のミリ秒数
        return deadline - now <= oneWeek;
    }

    // 期限までの残り日数を計算する関数
    function calculateDaysRemaining(deadline) {
        const now = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000; // 1日のミリ秒数
        return Math.ceil((deadline - now) / oneDay);
    }

    // 期限が近いメモをソートする処理
    $('.sort_button').on('click', function() {
        loadCloseDeadlineMemos(); // ソート後に再度メモを読み込む
    });
});
