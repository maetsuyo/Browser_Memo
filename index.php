<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index_style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>メモ一覧</title>
</head>
<body>
    <header>
<?php
    require (__DIR__ . '/functions/header.html');
?>
        <!-- 追加ボタン -->
        <i class="open_add fa fa-plus-circle" aria-hidden="true"></i>

        <!-- モーダルウィンドウ(追加) -->
        <div class="add_container modal_container">
            <div class="add_body modal_body">
                <div class="add_content modal_content">
                    <form class="add_form">
                        <p id="add_line1"><input type="text" name="add_title" class="add_title" placeholder="タイトル"><input type="date" name="add_deadline" class="add_deadline"><input type="number" name="add_importance" class="add_importance" min="0" max="5"></p>
                        <p id="add_line2"><textarea name="add_memo" class="add_memo" placeholder="メモ"></textarea></p>
                        <button class="add_button">追加</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- モーダルウィンドウ(編集) -->
        <div class="edit_container modal_container">
            <div class="edit_body modal_body">
                <div class="edit_content modal_content">
                    <form class="edit_form">
                        <p id="edit_line1"><input type="text" name="edit_title" class="edit_title" placeholder="タイトル"><input type="date" name="edit_deadline" class="edit_deadline"><input type="number" name="edit_importance" class="edit_importance" min="0" max="5"><i class="remove_button far fa-trash-alt"></i></p>
                        <p id="edit_line2"><textarea name="edit_memo" class="edit_memo" placeholder="メモ"></textarea></p>
                        <button class="save_button">保存</button>
                    </form>
                </div>
            </div>
        </div>
    </header>
    <main>
        <ul class="memo_list">
            <!-- メモ一覧 -->
        </ul>
    </main>
    <script src="js/hamburgermenu.js"></script>
    <script src="js/search_bar.js"></script>
    <script src="js/open_add.js"></script>
    <script src="js/open_edit.js"></script>
    <script src="js/load_current.js"></script>
    <script src="js/index_sort.js"></script>
</body>
</html>