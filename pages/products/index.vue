<template>
  <main id="content" class="site-main">
    <!-- Inner Banner html start-->
      <section class="inner-banner-wrap">
    <div
      class="inner-baner-container"
      style="background-image: url(assets/images/inner-banner.jpg)"
    >
      <div class="container">
        <div class="inner-banner-content">
          <h1 class="inner-title">Tur Paketlerimiz</h1>
        </div>
      </div>
    </div>
    <div class="inner-shape"></div>
  </section>
    <!-- Inner Banner html end-->
    <!-- packages html start -->
    <div class="package-section">
      <div class="container">
        <div class="package-inner">
          <div class="row">
            <ToursCards
            v-for="cardInfo in largeCardInfo"
            :key="cardInfo.id"
            :cardsSection ="cardInfo"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- packages html end -->
    <!-- Home activity section html start -->
    <!-- activity html end -->
  </main>
</template>

<script>
import { smallCardSections,largeCardSections } from '~/assets/data.js'
export default {
  data (){
    return {
      largeCardInfo:smallCardSections,
      largeCardInfo1:largeCardSections,
    }
  },
};
</script>

<style>
</style>