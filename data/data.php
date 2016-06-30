<?php
    @$page = $_GET['page'];

    switch ($page) {
        case 'news':
            echo '这里是新闻页';
            break;
        case 'articals':
            echo '这里是文章页';
            break;
        case 'cars':
            echo '这里是汽车页';
            break;
        default :
            echo 'default';
    }
 ?>
