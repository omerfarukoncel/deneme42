<template>
  <main>
    <main id="content" class="site-main">
      <!-- Inner Banner html start-->
        <nuxt-child/>
      <!-- Inner Banner html end-->
      <!-- contact form html start -->
      <div class="contact-page-section">
        <div class="contact-form-inner">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="contact-from-wrap">
                  <div class="section-heading">
                    <h5>İletişim</h5>
                    <h2>DAHA FAZLA BİLGİ ALMAK İÇİN BİZE ULAŞIN</h2>
                  </div>
                  <form class="contact-from">
                    <p>
                      <input type="text" name="name" placeholder="İsim*" />
                    </p>
                    <p>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                      />
                    </p>
                    <p>
                      <textarea rows="8" placeholder="Message*"></textarea>
                    </p>
                    <p>
                      <input
                        type="submit"
                        name="submit"
                        value="SUBMIT MESSAGE"
                      />
                    </p>
                  </form>
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-detail-wrap">
                  <h3>Yardıma mı ihtiyacınız var? Bizimle iletişime geçmekten çekinmeyin!</h3>
                  <p>
                    Yurdumuzun dört bir tarafının güzelliklerini görmek, yakından tanımak, her bölgenin 
                    kendine has lezzetlerini tatmak ve en 
                    eğlenceli tura katılmak isterseniz Yurtiçi tur kategorisini incelemenizi tavsiye ederiz.
                  </p>
                  <h3>Numaranızı bırakın biz sizi arayalım</h3>
                  <div class="details-list">
                    <ul>
                      <li>
                        <span class="icon">
                         <i v-html="require(`~/assets/icons/feather/navigation.svg?raw`)"></i>
                        </span>
                        <div class="details-content">
                          <h4>Adresimiz</h4>
                          <span>Aziziye, Aziziye Cd. No:9, 42030 Karatay/Konya</span>
                        </div>
                      </li>
                      <li>
                        <span class="icon">
                           <i v-html="require(`~/assets/icons/feather/at-sign.svg?raw`)"></i>
                        </span>
                        <div class="details-content">
                          <h4>Email Address</h4>
                          <span
                            ><a
                              href=""
                              class="__cf_email__"
                              data-cfemail="debab1b3bfb7b09ebdb1b3aebfb0a7f0bdb1b3"
                              >salimekici42@yahoo.com</a
                            ></span
                          >
                        </div>
                      </li>
                      <li>
                        <span class="icon">
                          <i v-html="require(`~/assets/icons/feather/phone-call.svg?raw`)"></i>
                        </span>
                        <div class="details-content">
                          <h4>Telefon numarası</h4>
                          <span
                            >Telephone: 0 332 351 25 25 / Mobile: +90 0505 230 08 33</span
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map-section">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.450689113254!2d32.4993007922039!3d37.873141571801455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0850e4a182a19%3A0x4e167a41f70a5906!2sEHAD%20Turizm!5e0!3m2!1sen!2snp!4v1633109045737!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      <!-- contact form html end -->
    </main>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>