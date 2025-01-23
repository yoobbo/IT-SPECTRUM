<?php
    include("header.php");
?>

        <section class="contact-section section-padding" style="margin-top: 60px;">
            <div class="container text-center">
                <div class="section-title">
                    <h2 class="inline-block"><?= $language === 'မြန်မာ' ? 'ကျွန်ုပ်တို့နှင့် ဆက်သွယ်ရန်' : 'Contact Us'; ?></h2>
                    <div class="chat-box inline-block">
                        <a href="tel:+959789799799" id="open-box" class="text text-primary"><i class="fa fa-comments" aria-hidden="true"></i></a>
                    </div>
                    <p><?= $language === 'မြန်မာ' ? 'လူတိုင်းအသုံးပြုနိုင်သော တတ်နိုင်သော ဈေးနှုန်းဖြင့် အကောင်းဆုံး အင်တာနက်ဝန်ဆောင်မှုကို ပေးဆောင်ရန်။' :  'To provide the best service of Internet service for the people as reasonable prize can be used everybody.'; ?>
                    </p>
                </div> <!-- section-title -->

                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="contact-wrapper">
                                <span class="caption"><img src="assets/images/contact/i1.png" alt=""></span>
                                <h4><?= $language === 'မြန်မာ' ? 'ကျွန်တော်တို့ရုံ' : 'Our Office' ; ?></h4>
                                <span class="contact"><?= $language === 'မြန်မာ' ? 'နံပါတ် (၁၄/၉၉၅)၊ ၃ ရပ်ကွက်၊ ပေါင်းလောင်းရွာ၊ ပျင်းမနားမြို့နယ်၊ နေပြည်တော်။' :'No. (14/995), 3rd Street, Paung Laung Ward, Pyinmana Township, Naypyitaw.' ?></span>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="contact-wrapper">
                                <span class="caption"><img src="assets/images/contact/i2.png" alt=""></span>
                                <h4><?= $language === 'မြန်မာ' ? 'ဆက်သွယ်ပါ' : 'Call Us' ; ?></h4>
                                <span class="contact">(+95) 09 789 799 799</span>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="contact-wrapper">
                                <span class="caption"><img src="assets/images/contact/i3.png" alt=""></span>
                                <h4><?= $language === 'မြန်မာ' ? 'အီးမေးလ်ပို့ပါ' : 'Email Us' ; ?></h4>
                                <span class="contact">info@mm-link.net</span>
                            </div>
                        </div>
                    </div><br><br>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4402.174446787956!2d96.092337113835!3d19.75290329067622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c8bb558aca09b7%3A0xa7001f7132bc7b94!2sLinn%20IT%2C%20Mobile%20%26%20Electronic%20(Myoma)!5e0!3m2!1sen!2smm!4v1737534974688!5m2!1sen!2smm" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section> <!-- contact-section -->



         <!-- map-section -->
<?php
 include('footer.php');
?>