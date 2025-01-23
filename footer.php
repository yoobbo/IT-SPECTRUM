<footer class="footer-section">
            <div class="footer-container">
                <div class="container">
                    <div class="row">
                            <span class="footer-logo col-md-3"><img src="./image/It-Spectum.png" alt="image"></span>

                        <div class="col-md-3">
                             <i class="fa fa-envelope-o text-primary" aria-hidden="true"></i><span><a href="#" style="color: black;"> itspectrum.com.mm</a></span>
                        </div>

                        <div class="col-md-3">
                                 <!-- wrapper-option -->
                            <i class="fa fa-phone text-primary" aria-hidden="true"></i><span> +959 789 799 799</span>
                        </div>

                        <div class="col-md-3">
                                 <!-- wrapper-option -->
                            <i class="fa fa-map-marker text-primary" aria-hidden="true"></i><span><?= $language === 'မြန်မာ' ? 'အမှတ်(၁၄/၅၈၅)၊ ၄ လမ်း၊ ပေါင်းလောင်းရပ်ကွက်၊ ပျဉ်းမနားမြို့နယ်၊ နေပြည်တော်။' :'No. (14/995), 3rd Street, Paung Laung Ward, Pyinmana Township, Naypyitaw.' ?></span>
                        </div>
                    </div>
                </div>
            </div> <!-- footer-container -->

            <div class="copy-right">
                <div class="container" style="display:flex ;align-item: center; justify-content: center;">
                    <p>Copyright &copy; <?php echo date('Y'); ?> IT Spectrum Co.,Ltd.</p>

                     <!-- social-icon -->
                </div>
            </div> <!-- copy-right -->
        </footer> <!-- footer-section -->


        <div class="support-box">
            <!-- <button id="open-box-two" class="btn btn-primary"><i class="fa fa-comments" aria-hidden="true"></i> Live Support</button> -->

            <div class="mail-box">
                <h4 class="close-box">Support <span class="pull-right"><i class="fa fa-minus" aria-hidden="true"></i></span></h4>

                <form class="chat-form form-horizontal">
                    <!-- <div class="form-group">
                        <label for="inputName1">Introduce yourself</label>
                        <input type="text" class="form-control" id="inputName1" placeholder="Name">
                    </div>

                    <div class="form-group">
                        <label for="chatSearchBar">Input your mail address</label>
                        <input class="chatSearchBar" value="your email address.." onblur="if(this.value=='')this.value='your email address..'" onfocus="if(this.value=='your email address..')this.value=''" id="chatSearchBar" name="email" type="email">
                    </div>

                    <div class="form-group">
                        <label>Message</label>
                        <textarea class="form-control" placeholder="Text" rows="3"></textarea>
                    </div> -->

                    <div class="form-group">
                        <a href="tel:+959789799799" type="submit" class="subscribeBtn btn-primary">Start contact</a>
                    </div>

                    <div class="form-group flod-right">
                        <a href="https://www.facebook.com/messages" type="submit" class="subscribeBtn btn-primary">Start chating</a>
                    </div>
                </form>
            </div>
        </div> <!-- support-box -->
        
       

        <!-- Off-Canvas View Only -->
        <span class="menu-toggle navbar visible-xs visible-sm"><i class="fa fa-bars mb-3" aria-hidden="true"></i></span>

        <div id="offcanvas-menu" class="visible-xs visible-sm">
            
            <span class="close-menu"><i class="fa fa-times" aria-hidden="true"></i></span>

            <ul class="menu-wrapper">
                <?php 
                    // Get the current page's basename
                    $currentPage = basename($_SERVER['PHP_SELF']); 
                ?>

                <li>
                    <a class="<?= $currentPage === 'index.php' ? 'active' : '' ?>" href="./index.php"><?= $language === 'မြန်မာ' ? 'ပင်မစာမျက်နှာ' : 'Home'; ?></a>
                </li><!-- end of li -->

                <!-- <li>
                    <a class="<?= $currentPage === 'news.php' ? 'active' : '' ?>" href="./news.php">News</a>
                </li>end of li -->

                <li>
                    <a class="<?= $currentPage === 'cloud.php' ? 'active' : '' ?>" href="./cloud.php"><?= $language === 'မြန်မာ' ? 'Cloud server' : 'Cloud server'; ?></a>
                </li>

                <li>
                    <a class="<?= $currentPage === 'affiliate.php' ? 'active' : '' ?>" href="./service.php"><?= $language === 'မြန်မာ' ? 'ဝန်ဆောင်မှုများ' : 'Service'; ?></a>
                </li><!-- end of li -->

                <li>
                    <a class="<?= $currentPage === 'about.php' ? 'active' : '' ?>" href="./about.php"><?= $language === 'မြန်မာ' ? 'အကြောင်း' : 'About'; ?></a>
                </li><!-- end of li -->

                <li>
                    <a class="<?= $currentPage === 'contact.php' ? 'active' : '' ?>" href="./contact.php"><?= $language === 'မြန်မာ' ? 'ဆက်သွယ်ရန်' : 'Contact'; ?></a>
                </li><!-- end of li -->
            </ul> <!-- menu-wrapper -->      
        </div>
        <!-- Off-Canvas View Only -->

        <div id="toTop" class="hidden-xs">
            <i class="fa fa-chevron-up"></i>
        </div> <!-- totop -->


        <script src="assets/js/jquery.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
        <script src="assets/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
        <script src="assets/js/jquery.inview.min.js"></script>
        <script src="assets/js/wow.js"></script>
        <script src="assets/js/lightbox.js"></script>
        <script src="assets/owl-carrosel/owl.carousel.min.js"></script>
        <script src="assets/js/script.js"></script>
    </body>
</html>