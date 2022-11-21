<!DOCTYPE HTML>
<html>
    <head>
        <title>No Tweet Specified</title>
        <link rel='stylesheet' href='resources/css/twitter.css'>
        <link rel='stylesheet/less' href='resources/css/style.less'>
        <script src='//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js'></script>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <script type='text/javascript'>window.tweetId = '<?php echo $_GET['tweetId']; ?>';</script>
    </head>
    <body>
        <?php include('data/tweets.php'); ?>
        <script src='resources/js/main.js'></script>
    </body>
</html>