
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>IT-Spectrum Co.,Ltd</title>
        <!-- fav icon -->
        <link href="./image/photo_2020-10-18-12.15.58.jpeg" rel="shortcut icon" type="image/png">

        <!-- Bootstrap -->
        <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- animated-css -->
        <link href="assets/css/animate.min.css" rel="stylesheet" type="text/css">
        <!-- font-awesome-css -->
        <script src="https://kit.fontawesome.com/1825ee6726.js" crossorigin="anonymous"></script>
        <!-- owl-carrosel-css -->
        <link href="assets/owl-carrosel/owl.carousel.min.css" rel="stylesheet" type="text/css">
        <link href="assets/owl-carrosel/owl.theme.default.min.css" rel="stylesheet" type="text/css">
        <!-- Revulation Slider CSS -->
        <link rel="stylesheet" type="text/css" href="assets/rs-plugin/css/settings.css" media="screen" />
        <!-- offcanvas-menu-css -->
        <link href="assets/css/offcanvas-menu.css" rel="stylesheet" type="text/css">
        <!-- style-css -->
        <link href="assets/css/style.css" rel="stylesheet" type="text/css">
        <style>
            .subscribe-section {
                position: relative;
                background: url(../images/subscribe/subscribe-bg.jpg) no-repeat center;
                background-size: cover;
                padding: 0px 0 90px;
            }

            .header-section .top-bar .header-right-bar .social-icon li a:hover{
                color: #0df1f5;
            }

            .header-section .top-bar .header-right-bar .social-icon li a.fa-youtube-play:hover{
                color: red;
            }

            .header-section .top-bar .header-right-bar .social-icon li a.fa-cart-shopping:hover{
                color: rgb(187, 187, 187);
            }
    
            .header-section .navbar .navbar-collapse .navbar-nav li.active a {
                color: #0df1f5;
                /* background-color: transparent; */
            }

            .menu-toggle{
                top: 3px;
            }

            .menu-toggle i {
                background-color: #ffffff;
                cursor: pointer;
                color: #0df1f5;
            }

            .menu-toggle i {
                width: 40px;
                font-size: 25px;
                height: 0px;
                line-height: 0px;
                text-align: center;
            }

            #offcanvas-menu .close-menu i {
                color: #f8f8f8;
                background-color: #0df1f5;
            }

            #offcanvas-menu .menu-wrapper li a.active {
                color: #0df1f5;
            }

            .header-section .navbar .navbar-collapse .navbar-nav li a:hover{
                color: #0df1f5;
            }

            .header-section .navbar::before{
                background: white;
                height: 80px;
            }

            #preloader .preloader-inner {
                width: 400px;
                height: 0px;
            }

            #preloader .preloader-inner span {
                background-color: #ffffff;
            }

            #preloader .preloader-inner > span:nth-child(2) {
                background-color: #ffffff;
            }

            #preloader .preloader-inner > span:nth-child(4) {
                background-color: #ffffff;
            }

            #preloader .preloader-inner > span:nth-child(6) {
                background-color: #ffffff;
            }

            #preloader .preloader-inner > span:nth-child(8) {
                background-color: #ffffff;
            }

            .header-section .navbar .chat-box .btn-primary {
                font-size: 16px;
                background-color: #0daff5;
                padding: 5px 14px;
                margin: 24px 0;
                -webkit-box-shadow: 0 5px #0daff5;
                box-shadow: 0 5px #0089c4;
            }

            .slider-section .link-button .btn-primary {
                /* font-size: 18px; */
                /* color: #FFFFFF; */
                background-color: #0d75f5;
                /* padding: 10px 30px; */
                -webkit-box-shadow: 0 5px #0851c7;
                box-shadow: 0 5px #0854c7;
            }
            .header-section .navbar .chat-box .btn-primary:hover{
                
                box-shadow: 0 5px #0daff5;
            }

            .support-box .mail-box {
                width: 140px;
                height: 140px;
            }

            .counting-section {
                background: rgb(255, 255, 255);
                padding: 50px;
            }

            .counting-section .counting-pusher .counting-wrapper p {
                color: rgb(52, 52, 52);
            }

            .review-section .review-carousel .review-wrapper .caption img {
                border: 3px solid #152d32;
            }

            .footer-section .footer-container {
                padding: 30px 0 20px;
            }

            .footer-section {
                position: relative;
                background: #f7faff;
                color: #000000;
            }

            .footer-section .copy-right {
                border-top: 1px solid #00fff7;
                padding: 16px 0;
            }

            .section-padding {
                padding: 40px 0;
            }
            .menu-toggle.sticky::before {
                content: "";
                position: absolute;
                width: 150px;
                height: 30px;
                left: 0;
                right: 0;
                top: 20%;
                margin: 0px auto 0;
                background: url(./image/It-Spectum.png);
            }

            .priceing-section .priceing-option .nav-tabs li.active a {
                background-color:rgb(0, 247, 255);
            }

            .priceing-section .priceing-option .nav-tabs li.active::before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -30px;
                width: 20px;
                height: 30px;
                margin: 0 auto;
                border-top: 10px solid rgb(13, 226, 245);
                
            }

            .priceing-section .second-priceing-table .priceing-wrapper.premium-wrapper .btn {
                background-color:rgb(13, 230, 245);
                -webkit-box-shadow: 0 5px rgb(8, 183, 199);
                box-shadow: 0 5pxrgb(8, 151, 199);
            }


            .priceing-section .second-priceing-table .priceing-wrapper.premium-wrapper .header, .priceing-section .second-priceing-table .priceing-wrapper.premium-wrapper .priceing-content .priceing-head {
                background-color: rgb(13, 230, 245);
            }

            .priceing-section .first-priceing-table .priceing-wrapper.premium-wrapper .header, .priceing-section .first-priceing-table .priceing-wrapper.premium-wrapper .priceing-content .priceing-head {
                background-color: rgb(13, 230, 245);
            }

            .priceing-section .first-priceing-table .priceing-wrapper.premium-wrapper .btn {
                background-color: rgb(13, 226, 245);
                -webkit-box-shadow: 0 5px rgb(13, 226, 245);
                box-shadow: 0 5px rgb(13, 226, 245);
            }

            .priceing-section .first-priceing-table .priceing-wrapper .priceing-content .feature li:nth-child(4){
                color: black;
            }

            .priceing-section .second-priceing-table .priceing-wrapper .priceing-content .feature li:nth-child(4){
                color: black;
            }

            .priceing-section .second-priceing-table .priceing-wrapper.premium-wrapper .btn.active.focus, .priceing-section .second-priceing-table .priceing-wrapper.premium-wrapper .btn:hover{
                top: 2px;
                background-color: blue;
                -webkit-box-shadow: 0 3px blue;
                box-shadow: 0 3px blue;
            }

            .priceing-section .first-priceing-table .priceing-wrapper.premium-wrapper .btn.active.focus, .priceing-section .second-priceing-table .priceing-wrapper.premium-wrapper .btn:hover{
                top: 2px;
                background-color: blue;
                -webkit-box-shadow: 0 3px blue;
                box-shadow: 0 3px blue;
            }

            @media (max-width: 1350px) {
                .one {
                    width: 100%;
                }
            }
            
        </style>
        <?php
            $language = $_POST['language'] ?? 'English';            
        ?>

    </head>
    <body class="homePageOne login-box">
        <!-- start preloader -->
        <div id="preloader">
            <div class="preloader-inner">
                <span>I</span>
                <span>T</span>
                <span>-</span>
                <span>S</span>
                <span>P</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>R</span>
                <span>U</span>
                <span>M</span>
                <span> </span>
                <span>C</span>
                <span>o</span>
                <span>.</span>
                <span>,</span>
                <span>L</span>
                <span>t</span>
                <span>d</span>
            </div>
        </div>
        <!-- end preloader -->


        <header class="header-section ">
            <div class="top-bar hidden-sm hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="header-left-bar">
                                <ul class="contact-wrapper">
                                    <li><i class="fa fa-phone text-primary" aria-hidden="true"></i><a href="tel:+959789799799" style="color: black;"> +95 789 799 799</a></li>
                                    <li><i class="fa fa-envelope" aria-hidden="true"></i>itspectrum.com.mm</li>
                                </ul>
                            </div> <!-- header-left-bar -->
                        </div>

                        <div class="col-sm-6">
                            <div class="header-right-bar text-right">
                                <ul class="social-icon inline-block">
                                    <li><a href="https://www.facebook.com/linncomputerstore"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <!-- <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li> -->
                                    <!-- <li><a href="https://shop.linncomputer.com/" class="fa-cart-shopping"><i class="fa-solid fa-cart-shopping"></i></a></li> -->
                                    <!-- <li><a href="https://www.youtube.com/@linntv1722" class="fa-youtube-play"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li> -->
                                    <!-- <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> -->
                                     <li></li>
                                     <li></li>
                                </ul>

                                <!-- <ul class="access inline-block">
                                    <li><i class="fa fa-lock" aria-hidden="true"></i></li>
                                    <li id="login"><a>Login</a>
                                        <div id="search-modeal">
                                            <span class="logout-box"><a>Login Box <i class="fa fa-minus" aria-hidden="true"></i></a></span>

                                            <div class="search-bar">
                                                <form class="subscribeForm">
                                                    <div class="form-group text-left">
                                                        <label for="inputName1">Introduce yourself</label>
                                                        <input type="text" class="form-control" id="inputName1" placeholder="Name">
                                                    </div>

                                                    <div class="form-group text-left">
                                                        <label for="chatSearchBar">Input your mail address</label>
                                                        <input class="modalSearchBar" value="your email address.." onblur="if(this.value=='')this.value='your email address..'" onfocus="if(this.value=='your email address..')this.value=''" id="modalSearchBar" name="email" type="email">
                                                    </div>

                                                    <div class="form-group">
                                                        <button type="submit" class="subscribeBtn btn-primary">Login</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>  search-modeal 
                                    </li>

                                    <li><a href="#">Register</a></li>
                                </ul> -->
                            </div> <!-- header-right-bar -->
                        </div>
                    </div> <!-- top-bar -->
                </div>
            </div> <!-- top-bar -->
            
            <nav class="navbar navbar-inverse hidden-sm hidden-xs">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="index.php"><img src="./image/It-Spectum.png" alt="image"></a>
                    </div>

                    <div class="collapse navbar-collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <?php
                                $currentPage = basename($_SERVER['PHP_SELF']);
                            ?>
                            <li class="<?= $currentPage === 'index.php' ? 'active': ''?>"><a href="./index.php"><?= $language === 'မြန်မာ' ? 'ပင်မစာမျက်နှာ' : 'Home'; ?></i></a>
                            </li>

                            <li class="<?= $currentPage === 'cloud.php' ? 'active': ''?>"><a href="./cloud.php"><?= $language === 'မြန်မာ' ? 'Cloud server' : 'Cloud server'; ?></a>
                            </li>

                            <li class="<?= $currentPage === 'service.php' ? 'active': ''?>"><a href="./service.php"><?= $language === 'မြန်မာ' ? 'ဝန်ဆောင်မှုများ' : 'Service'; ?></a>
                                <!-- <ul class="dropdown-menu">
                                    <li><a href="hosting.html">Hosting</a></li>
                                    <li><a href="cloud-hosting.html">Cloud-hosting</a></li>
                                    <li><a href="dedicated-hosting.html">Dedicated-hosting</a></li>
                                    <li><a href="shared-hosting.html">Shared-Hosting</a></li>
                                    <li><a href="hosting-management.html">Hosting-Management</a></li>
                                </ul> -->
                            </li>

                            <li class="<?= $currentPage === 'about.php' ? 'active': ''?>"><a href="./about.php"><?= $language === 'မြန်မာ' ? 'အကြောင်း' : 'About'; ?></a>
                                <!-- <ul class="megamenu">
                                    <li>
                                        <div id="menu-carousel" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#menu-carousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#menu-carousel" data-slide-to="1"></li>
                                                <li data-target="#menu-carousel" data-slide-to="2"></li>
                                            </ol>

                                            <div class="carousel-inner" role="listbox">
                                                <div class="item active">
                                                  <img src="assets/images/menu/s1.jpg" alt="image">
                                                </div>

                                                <div class="item">
                                                  <img src="assets/images/menu/s2.jpg" alt="image">
                                                </div>

                                                <div class="item">
                                                  <img src="assets/images/menu/s3.jpg" alt="image">
                                                </div>
                                            </div>
                                        </div> 
                                    </li>

                                    <li class="mega-submenu3">
                                        <ul class="dropdown">
                                            <li><a href="box-single-one.html">Box Layout One</a></li>
                                            <li><a href="box-single-two.html">Box Layout Two</a></li>
                                            <li><a href="box-single-three.html">Box Layout Three</a></li>
                                            <li><a href="about.html">About</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-submenu">
                                        <ul class="dropdown">
                                            <li><a href="account.html">Account</a></li>
                                            <li><a href="affiliate.html">Affiliate</a></li>
                                            <li><a href="data-center.html">Data Center</a></li>
                                            <li><a href="support.html">Support</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-submenu2">
                                        <ul class="dropdown">
                                            <li><a href="testimonial.html">Testimonial</a></li>
                                            <li><a href="404.html">404-Page</a></li>
                                            <li><a href="single-one.html">Single Home One</a></li>
                                            <li><a href="single-two.html">Single Home Two</a></li>
                                        </ul>
                                    </li>
                                </ul> -->
                            </li>

                            <!-- <li class="dropdown"><a href="#">News <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                    <li><a href="news.html">News</a></li>
                                    <li><a href="news-single.html">News-Single</a></li>
                                    <li><a href="news-sidebar.html">News-Sidebar</a></li>
                                </ul>
                            </li> -->

                            <li class="<?= $currentPage === 'contact.php' ? 'active': ''; ?>">
                                <a href="contact.php" id="contact-menu">
                                    <?= $language === 'မြန်မာ' ? 'ဆက်သွယ်ရန်' : 'Contact'; ?>
                                </a>
                            </li>
                                <li class="<?= $currentPage === 'news.php' ? 'active' : ''; ?>">
                                    <a href="#">
                                        <div id="language-switcher">
                                            <form method="POST" id="language-form">
                                                <select id="language-select" name="language" onchange="document.getElementById('language-form').submit();">
                                                    <option value="မြန်မာ" <?= $language === 'မြန်မာ' ? 'selected' : ''; ?>>MY</option>
                                                    <option value="English" <?= $language === 'English' ? 'selected' : ''; ?>>EN</option>
                                                </select>
                                            </form>
                                        </div>
                                    </a>
                                </li>
                        </ul>
                    </div><!--/.nav-collapse -->
                </div> <!-- container -->
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </header>