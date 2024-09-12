<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/cd_style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <title>期限が近いメモ一覧</title>
</head>
<body>
    <header>
<?php
    require (__DIR__ . '/functions/header.html');
?>
    </header>
    <main>
        <h1 class="cd_heading center">期限が近いメモ一覧</h1>
            <ul class="memo_list">
                <!-- メモ一覧 -->
            </ul>
    </main>
    <script src="js/hamburgermenu.js"></script>
    <script src="js/search_bar.js"></script>
    <script src="js/close_deadline.js"></script>
</body>
</html>