$(function() {
    // メモをクリックしたらモーダルを表示し、既存の値をセット
    $('.memo_list').on('click', '.open_edit', function() {
        key = $(this).data('key');
        // JSON形式をJavaScriptオブジェクトに変換
        value = JSON.parse(localStorage.getItem(key));
        title = value.title;
        memo = value.memo;
        const deadline = value.deadline;
        const importance = value.importance;
        $('.edit_container').addClass('active');
        $('.edit_title').val(title);
        $('.edit_memo').val(memo);
        $('.edit_deadline').val(deadline);
        $('.edit_importance').val(importance);
        return false;
    });
  
    // モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.edit_body').length) {
            $('.edit_container').removeClass('active');
          }
    });

    // 保存ボタンをクリックしたらフォームの内容を取得して表示
    $('.save_button').on('click', function(e) {
        e.preventDefault(); // デフォルトのフォーム送信動作を防ぐ

        // フォームの入力値を取得
        const edit_title = $('.edit_title').val();
        const edit_memo = $('.edit_memo').val();
        const edit_deadline = $('.edit_deadline').val();
        const edit_importance = $('.edit_importance').val();

        // 全ての欄が入力されているか確認
        if (edit_title && edit_memo && edit_deadline && edit_importance) {
            $('.open_edit[data-key="' + key + '"]').remove();
            value.title = edit_title;
            value.memo = edit_memo;
            value.deadline = edit_deadline;
            value.importance = edit_importance;

            // JavaScriptオブジェクトをJSON形式に変換
            const update_memo = JSON.stringify(value);
            // ローカルストレージのvalueを更新
            localStorage.setItem(key, update_memo);

            // 更新した内容をメモリストに追加
            $('.memo_list').prepend("<li class='open_edit' data-key=" + key + ">" + "<p class='title center'>" + edit_title + "</p>" + "<p class='memo'>" + edit_memo + "</p>" + "</li>");

            // フォームの入力をクリア
            $('.edit_title').val('');
            $('.edit_memo').val('');
            $('.edit_deadline').val('');
            $('.edit_importance').val('');

            // モーダルを閉じる
            $('.edit_container').removeClass('active');
        } else {
            // タイトルとメモの両方が必要な場合のアラートや処理を追加
            alert('未入力の欄があります。');
        }
    });

    $('.remove_button').on('click', function(e) {
        e.preventDefault();
        // $('.open_edit[data-key="' + key + '"]').remove();
        value.status = "remove";
        const update_status = JSON.stringify(value);
        localStorage.setItem(key, update_status);
        // $('.memo_list').prepend("<li class='open_edit' data-key=" + key + ">" + "<p class='title center'>" + title + "</p>" + "<p class='memo'>" + memo + "</p>" + "</li>");
        $('.edit_title').val('');
        $('.edit_memo').val('');
        $('.edit_deadline').val('');
        $('.edit_importance').val('');
        $('.edit_container').removeClass('active');
        location.reload();
    });
});