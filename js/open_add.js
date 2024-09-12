$(function() {
    // 右上の追加ボタンをクリックしたらモーダルを表示
    $('.open_add').on('click', function() {
        $('.add_container').addClass('active');
        $('.add_importance').val(0);
        return false;
    });
  
    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.add_body').length) {
            $('.add_container').removeClass('active');
          }
    });

    // 追加ボタンをクリックしたらフォームの内容を取得して表示
    $('.add_button').on('click', function(e) {
        e.preventDefault(); // デフォルトのフォーム送信動作を防ぐ

        const count_key = localStorage.length;
        const new_key = count_key + 1

        // フォームの入力値を取得
        const add_title = $('.add_title').val();
        const add_memo = $('.add_memo').val();
        const add_deadline = $('.add_deadline').val();
        const add_importance = $('.add_importance').val();

        // 全ての欄が入力されているか確認
        if (add_title && add_memo && add_deadline && add_importance) {

            const new_memo = {
                "status": "current",
                "title": add_title,
                "memo": add_memo,
                "deadline": add_deadline,
                "importance": add_importance
            };

            const string_new_memo = JSON.stringify(new_memo);
            localStorage.setItem(new_key, string_new_memo);

            // 新しい項目をリストに追加
            $('.memo_list').prepend("<li class='open_edit' data-key=" + new_key + ">" + "<p class='title center'>" + add_title + "</p>" + "<p class='memo'>" + add_memo + "</p>" + "</li>");

            // フォームの入力をクリア
            $('.add_title').val('');
            $('.add_memo').val('');
            $('.add_deadline').val('');
            $('.add_importance').val('');

            // モーダルを閉じる
            $('.add_container').removeClass('active');
        } else {
            // タイトルとメモの両方が必要な場合のアラートや処理を追加
            alert('未入力の欄があります。');
        }
    });
});