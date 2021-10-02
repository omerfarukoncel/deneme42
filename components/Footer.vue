<template>
  <footer id="colophon" class="site-footer footer-primary">
    <div class="top-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <aside class="widget widget_text">
              <h3 class="widget-title">SEYAHAT HAKKINDA</h3>
              <div class="textwidget widget-text">
                Konya da Turizm ve Hac-Umre sektöründe hizmet vermekteyiz.
                Türkiyenin bir çok yerine geziler ve turlar düzenlemekteyiz.
              </div>
            </aside>
          </div>
          <div class="col-lg-4 col-md-6">
            <aside class="widget widget_text">
              <h3 class="widget-title">İLETİŞİM BİLGİLERİ</h3>
              <div class="textwidget widget-text">
                Size bir telefon kadar yakınız.
                <ul>
                  <li>
                    <NuxtLink to="">
                     <i v-html="require(`~/assets/icons/${family}/phone.svg?raw`)"></i>
                      +90 0505 230 08 33
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="">
                     <i v-html="require(`~/assets/icons/${family}/mail.svg?raw`)"></i>
                      <span
                        class="__cf_email__"
                        data-cfemail="0d6e62607d6c63744d6962606c6463236e6260"
                        >salimekici42@yahoo.com</span
                      >
                    </NuxtLink>
                  </li>
                  <li>
                    <i v-html="require(`~/assets/icons/${family}/phone.svg?raw`)"></i>
                    Konya Turkiye,
                  Aziye Mah.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div class="col-lg-4 col-md-6">
            <aside class="widget widget_newslatter">
              <h3 class="widget-title">BİZE ABONE OLUN</h3>
              <div class="widget-text">
                Turlarımız ve Gezilerimiz için detaylı bilgi almak için abone olunuz
              </div>
              <form class="newslatter-form">
                <input type="email" name="s" placeholder="Your Email.." />
                <input type="submit" name="s" value="SUBSCRIBE NOW" />
              </form>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div class="buttom-footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <div class="footer-menu">
              <ul>
                <li>
                  <NuxtLink to="/policity">Gizlilik Politikası</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/terms">Şart ve Koşul</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/faq">FAQ</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="footer-logo">
              <NuxtLink to="/"
                > <img :src="require(`/static/assets/images/ehad1.png`)"/></NuxtLink>
            </div>
          </div>
          <div class="col-md-5">
            <div class="copy-right text-right">
              Copyright © 2021 EhadTurizm.Tüm Hakları Sakladır.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    props:{
        family: {
            type: String,
            required: false,
            default: 'feather',
        },
  }
};
</script>

<style>
</style>