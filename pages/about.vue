<template>
  <main id="content" class="site-main">
    <!-- Inner Banner html start-->
    <nuxt-child/>
    <!-- Inner Banner html end-->
    <!-- about section html start -->
    <section class="about-section about-page-section">
      <div class="about-service-wrap">
        <div class="container">
          <div class="section-heading">
            <div class="row align-items-end">
              <div class="col-lg-6">
                <h5>OUR TOUR GALLERY</h5>
                <h2>Hakkımızda</h2>
              </div>
              <div class="col-lg-6">
                <div class="section-disc">
                  <p>
                    Müşteri memnuniyetini %100 hedefleyerek, en kaliteli hizmeti, en hızlı şekilde 
                    ve en uygun seçenekler ile sunan EhadTurizm, size özel tatili planlamak için 7/24 
                    her zaman yanınızdadır.
                  </p>
                  <p>
                    Bireysel ve kurumsal anlamda sürekli gelişmeyi kendine felsefe edinen EhadTurizm, müşterilerine 
                    en iyi olanı sunmak isteyen çalışanları 
                    ile güçlü aile bütünlüğünü sürdürmeyi hedeflemiştir.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-service-container">
            <div class="row">
              <div class="col-lg-4">
                <div class="about-service">
                  <div class="about-service-icon">
                    <img :src="require(`/static/assets/images/icon15.png`)" alt="" /> 
                  </div>
                  <div class="about-service-content">
                    <h4>UYGUN FİYAT</h4>
                    <p>
                      Turlarmızda önceliğimiz her zaman hizmet ve uygun fiyat olmuştur
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="about-service">
                  <div class="about-service-icon">
                   <img :src="require(`/static/assets/images/icon16.png`)" alt="" /> 
                  </div>
                  <div class="about-service-content">
                    <h4>EN İYİ HEDEF</h4>
                    <p>
                      300 alt satış acentesi ve 1000’e yakın otel portföyü ile EhadTurizm.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="about-service">
                  <div class="about-service-icon">
                   <img :src="require(`/static/assets/images/icon17.png`)" alt="" /> 
                  </div>
                  <div class="about-service-content">
                    <h4>KİŞİSEL HİZMET</h4>
                    <p>
                      Müşterilerimize her zaman kaliteli hizmet vermeyi amaçladık
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- client section html start -->
      <div class="client-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="section-heading text-center">
                <h5>FİRMALAR</h5>
                <h2>MÜŞTERİLER</h2>
              </div>
            </div>
          </div>
          <div class="client-wrap client-slider">
            <carousel :per-page="3">
              <slide>
                <div class="client-item">
                  <figure>
                    <img :src="require(`/static/assets/images/feyruz.png`)" alt="" /> 
                  </figure>
                </div>
              </slide>
              <slide>
                <div class="client-item">
                  <figure>
                    <img :src="require(`/static/assets/images/tursabh.png`)" alt="" /> 
                  </figure>
                </div>
              </slide>
              <slide>
                <div class="client-item">
                  <figure>
                    <img :src="require(`/static/assets/images/thy.png`)" alt="" /> 
                  </figure>
                </div>
              </slide>
              <slide>
                <div class="client-item">
                  <figure>
                    <img :src="require(`/static/assets/images/pegasus1.png`)" alt="" /> 
                  </figure>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
      <!-- client html end -->
      <!-- callback section html start -->
      <div
        class="fullwidth-callback"
        style="background-image: url(assets/images/img26.jpg)"
      >
        <div class="container">
          <div class="section-heading text-center">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <h5>DAHA FAZLASI İÇİN GERİ ARAYIN</h5>
                <h2>Ehad Turizm</h2>
              </div>
            </div>
          </div>
          <div class="callback-counter-wrap">
            <div class="counter-item">
              <div class="counter-item-inner">
                <div class="counter-icon">
                  <img :src="require(`/static/assets/images/icon1.png`)" alt="" /> 
                </div>
                <div class="counter-content">
                  <span class="counter-no">
                    <span class="counter">500</span>K+
                  </span>
                  <span class="counter-text"> Memnun Müşteriler </span>
                </div>
              </div>
            </div>
            <div class="counter-item">
              <div class="counter-item-inner">
                <div class="counter-icon">
                  <img :src="require(`/static/assets/images/icon2.png`)" alt="" /> 
                </div>
                <div class="counter-content">
                  <span class="counter-no">
                    <span class="counter">250</span>K+
                  </span>
                  <span class="counter-text"> Memnun Müşteriler </span>
                </div>
              </div>
            </div>
            <div class="counter-item">
              <div class="counter-item-inner">
                <div class="counter-icon">
                  <img :src="require(`/static/assets/images/icon3.png`)" alt="" /> 
                </div>
                <div class="counter-content">
                  <span class="counter-no">
                    <span class="counter">15</span>K+
                  </span>
                  <span class="counter-text"> Memnun Müşteriler </span>
                </div>
              </div>
            </div>
            <div class="counter-item">
              <div class="counter-item-inner">
                <div class="counter-icon">
                  <img :src="require(`/static/assets/images/icon4.png`)" alt="" /> 
                </div>
                <div class="counter-content">
                  <span class="counter-no">
                    <span class="counter">10</span>K+
                  </span>
                  <span class="counter-text"> Tur Hedefi </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- callback html end -->
    </section>
    <!-- about html end -->
  </main>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style>
</style>