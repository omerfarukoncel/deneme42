<template>
  <main>
    <carousel :per-page="1">
      <slide>
        <div class="home-slider-items">
          <div
            class="slider-inner-wrap"
            style="background-image: url(assets/images/slider-banner-1.jpg)"
          ></div>

          <div class="slider-content-wrap">
            <div class="container">
              <div class="slider-content">
                <h2 class="slider-title">TÜRKİYEYİ GEZMEK</h2>
                <p>
                  Farklı kalkış noktalarına ve sürelerine göre sınırsız bir
                  seçeneğe sahip Kültür Turları kategorimizdeki Karadeniz
                  Turları, Kapadokya Turları, Akdeniz Turları, GAP Turları ve
                  daha nicesi Gezinomi’de seçimlerinizi bekliyor.
                </p>
                <NuxtLink to="/tours" class="button-primary"
                  >OKUMAYA DEVAM ET</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </div>
      </slide>
      <slide>
        <div class="home-slider-items">
          <img
            :src="
              require(`/static/assets/images/${
                sPicture.image || 'slider-banner-1.jpg'
              }`)
            "
            alt=""
            class="slider-inner-wrap"
          />

          <div class="slider-content-wrap">
            <div class="container">
              <div class="slider-content">
                <h2 class="slider-title">T{{ sPicture.name }}</h2>
                <p>
                  {{ sPicture.title }}
                </p>
                <NuxtLink to="/tours" class="button-primary"
                  >OKUMAYA DEVAM ET</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </div>
      </slide>
    </carousel>
  </main>
</template>

<script>
export default {
  props: ["sPicture"],
};
</script>

<style>
</style>
