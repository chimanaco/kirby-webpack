<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <?php echo liveCSS('assets/bundle.css') ?>
</head>
<body>
<header class="sticky">
    <a href="#" role="button">Home</a>
    <a href="#" role="button">About</a>
    <a href="#" role="button">Contact</a>
</header>
