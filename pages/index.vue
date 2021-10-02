<template>
  <main>
    <main id="content" class="site-main">
      <!-- Home slider html start -->

      <section class="home-banner-section">
        <div class="home-slider">
          <CommonCarousel
            v-for="sliderInfo in sliderPicture"
            :key="sliderInfo.id"
            :sPicture="sliderInfo"
          />
        </div>
      </section>

      <!-- slider html start -->
      <section class="destination-section">
        <div class="container">
          <div class="section-heading">
            <div class="row align-items-end">
              <div class="col-lg-7">
                <h5>POPÜLER HEDEF</h5>
                <h2>ÜST DÜZEY HEDEF</h2>
              </div>
              <div class="col-lg-5">
                <div class="section-disc">
                  Konya,İstanbul,İzmir ve bir çok şehire kaliteli, uygun ve
                  güvenilir hizmet sunmaktayız. EhadTurizm sizleri Türkiye'nin
                  gezilebilecek en güzel yerleri ile buluşturuyor.
                </div>
              </div>
            </div>
          </div>
          <div class="destination-inner">
            <div class="row">
              <div class="col-lg-7">
                <CommonPicture
                  v-for="cardInfo in largPicture"
                  :key="cardInfo.id"
                  :pictureSection2="cardInfo"
                />
              </div>
              <div class="col-lg-5">
                <CommonSmallPicture
                  v-for="cardInfo in smalPicture"
                  :key="cardInfo.id"
                  :pictureSection="cardInfo"
                />
              </div>
            </div>
            <div class="btn-wrap text-center">
              <NuxtLink to="/products" class="button-primary"
                >Ürünler İçin Tıklayınız</NuxtLink
              >
            </div>
          </div>
        </div>
      </section>
      <!-- Home packages section html start -->
      <section class="package-section">
        <div class="container">
          <div class="section-heading text-center">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <h5>Yeni Yerler Keşfedin</h5>
                <h2>POPÜLER PAKETLER</h2>
              </div>
            </div>
          </div>
          <div class="package-inner">
            <div class="row">
              <CardsPackets
                v-for="cardInfo in largeCardInfo"
                :key="cardInfo.id"
                :cardsSection="cardInfo"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- packages html end -->
      <!-- Home callback section html start -->
      <section class="callback-section">
        <div class="container">
          <div class="row no-gutters align-items-center">
            <div class="col-lg-5">
              <div
                class="callback-img"
                style="background-image: url(assets/images/img8.jpg)"
              ></div>
            </div>
            <div class="col-lg-7">
              <div class="callback-inner">
                <div class="section-heading">
                  <h5>DAHA FAZLA BİLGİ İÇİN BİZİ ARAYIN</h5>
                  <h2>SEYAHAT ET .KEŞFET VE BİZİ HATIRLA!!</h2>
                  <p>
                    EhadTurizm, bu doğrultuda hazırladığı seçeneklerle sizlere
                    tatil paketleri değil, “tatil deneyimleri” sunuyor.
                  </p>
                </div>
                <div class="callback-counter-wrap">
                  <CommonCallback
                    v-for="callbackInfo in callBackCard"
                    :key="callbackInfo.id"
                    :callbackSection="callbackInfo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- callback html end -->
      <!-- Home activity section html start -->
      <section class="activity-section">
        <div class="container">
          <div class="section-heading text-center">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <h5>AKTİVİTEYE GÖRE SEYAHAT</h5>
                <h2>MACERA & AKTİVİTE</h2>
                <p>
                  Ehad Turizm ile bir çok yere kolayca ve güvenli bir şekilde
                  seyahet edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
          <div class="activity-inner row">
            <CommonActivity
              v-for="aktiveInfo in activityCard"
              :key="aktiveInfo.id"
              :activeSection="aktiveInfo"
            />
          </div>
        </div>
      </section>
      <!-- activity html end -->
      <!-- Home special section html start -->
      <!-- special html end -->
      <!-- Home special section html start -->
      <section class="best-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-heading">
                <h5>OUR TOUR GALLERY</h5>
                <h2>Gezilerden Fotoğraflar</h2>
              </div>
              <figure class="gallery-img">
                <img :src="require(`static/assets/images/ehadGallery1.jpg`)" alt=""/>
              </figure>
            </div>
            <div class="col-lg-7">
              <div class="row">
                <div class="col-sm-6" v-for="gallery in 2" :key="gallery">
                  <figure class="gallery-img">
                    <img :src="require(`static/assets/images/img13.jpg`)" alt=""/>
                  </figure>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <figure class="gallery-img">
                    <img :src="require(`static/assets/images/ehadGallery.jpg`)" alt=""/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </main>
</template>

<script>
import {
  largeCardSections,
  largePicture,
  smallPicture,
  slidePicture,
  callBack,
  activityBack
} from "~/assets/data.js";
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smalPicture: smallPicture,
      largPicture: largePicture,
      sliderPicture: slidePicture,
      callBackCard:callBack,
      activityCard:activityBack,
    };
  },
};
</script>
