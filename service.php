<?php
    include('header.php');
?>
<style>
    .option-section .option-tab .nav-tabs li.active a::before {
    top: 0;
    border-top: 10px solid #FFFFFF;
    border-bottom: none;
}
</style>
 <!-- priceing-section -->
<br><br><br>
        <section class="option-section">
            <div class="option-tab">
                

                <div class="container">
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="features">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="content-wrapper">
                                        <span class="icon"><img src="assets/images/option/i1.png" alt=""></span>
                                        <h4 style="display: inline;font-size: 20px;"><a href="#"><?= $language === 'မြန်မာ' ? 'လစဉ်ပေးငွေ အင်တာနက်ဝန်ဆောင်မှု' : 'Monthly pay Internet Service'; ?></a></h4>
                                        <!-- <p>Perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p> -->
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="content-wrapper">
                                        <span class="icon"><img src="assets/images/option/i2.png" alt=""></span>
                                        <h4 style="display: inline;font-size: 20px;"><a href="#"><?= $language === 'မြန်မာ' ? 'CCTV တပ်ဆင်ခြင်း' : 'Installation CCTV'; ?></a></h4>
                                        <!-- <p>Perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p> -->
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="content-wrapper">
                                        <span class="icon"><img src="assets/images/option/i3.png" alt=""></span>
                                        <h4 style="display: inline;font-size: 20px;"><a href="#"><?= $language === 'မြန်မာ' ? 'အင်တာနက်လုံခြုံရေးဝန်ဆောင်မှု' : 'Internet Security Service'; ?></a></h4>
                                        <!-- <p>Perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p> -->
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="content-wrapper">
                                        <span class="icon"><img src="assets/images/option/i4.png" alt=""></span>
                                        <h4 style="display: inline;font-size: 20px;"><a href="#"><?= $language === 'မြန်မာ' ? 'ဒေတာစင်တာဝန်ဆောင်မှု' : 'Data Center Service'; ?></a></h4>
                                        <!-- <p>Perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p> -->
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="content-wrapper">
                                        <span class="icon"><img src="assets/images/option/i5.png" alt=""></span>
                                        <h4 style="display: inline;font-size: 20px;"><a href="#"><?= $language === 'မြန်မာ' ? 'ခေတ်မီသော စွမ်းရည်များ' : 'Advanced Capabilities'; ?></a></h4>
                                        <!-- <p>Perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p> -->
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="content-wrapper">
                                        <span class="icon"><img src="assets/images/option/i6.png" alt=""></span>
                                        <h4 style="display: inline;font-size: 20px;"><a href="#"><?= $language === 'မြန်မာ' ? 'စီးပွားရေးကွန်ရက်များ ချိတ်ဆက်တပ်ဆင်ခြင်းဝန်ဆောင်မှု' : 'Enterprise Network Setup Service'; ?></a></h4>
                                        <!-- <p>Perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- <ul class="nav nav-tabs text-center" role="tablist">
                    <li role="presentation" class="active"><a href="#features" aria-controls="features" role="tab" data-toggle="tab">Features</a></li>
                    <li role="presentation"><a href="#advanced" aria-controls="advanced" role="tab" data-toggle="tab">Advanced Features</a></li>
                    <li role="presentation"><a href="#optional" aria-controls="optional" role="tab" data-toggle="tab">Optional</a></li>                                                              
                </ul> -->
            </div> <!-- option-tab -->
        </section> <!-- option-section --> <!-- package-section -->
        


        <section class="subscribe-section">
            <div class="container">
                <div class="row">
                    <div class="caption hidden-sm hidden-xs wow fadeInLeft" data-wow-duration="1.5s"><img style="width: 33%;margin: 40px;" src="image/photo_2023-10-24-14.12.jpg" alt=""></div>

                    <div class="col-md-6 col-md-offset-5">
                        <div class="subscribe-wrapper">
                            <span class="small-text"><?= $language === 'မြန်မာ' ? '(လူမှုအဖွဲ့အစည်းများကို ချိတ်ဆက်ပေးခြင်း)':'(Connecting people and community)'; ?></span>
                            <h4 style="line-height: 1.5;"><?=  $language === 'မြန်မာ' ? 'မိမိတို့နိုင်ငံ၏ ဖွံ့ဖြိုးမှုနှင့် ယနေ့ခေတ်နည်းပညာလိုအပ်ချက်များကို ဖြည့်ဆည်းရန် အကောင်းဆုံး ICT ဝန်ဆောင်မှုများကို ပေးအပ်ရန်' : 'To provide the best service in essential ICT sector for modern and developed country.' ?></h4>

                            <div class="search-bar">
                                <form class="subscribeForm" method="POST">
                                    <button type="submit" class="subscribeBtn btn-primary inline-block ">connect</button>
                                </form>
                            </div> <!-- search-bar -->
                        </div> <!-- subscribe-wrapper -->
                    </div>
                </div>
            </div>
        </section><br><br> <!-- subscribe-section -->



<?php
 include('footer.php');
?>