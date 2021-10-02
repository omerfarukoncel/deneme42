<template>
  <main id="content" class="site-main">
    <!-- Inner Banner html start-->
    <section class="inner-banner-wrap">
      <div
        class="inner-baner-container"
        style="background-image: url(/assets/images/inner-banner.jpg)"
      >
        <div class="container">
          <div class="inner-banner-content">
            <h1 class="inner-title"></h1>
          </div>
        </div>
      </div>
      <div class="inner-shape"></div>
    </section>
    <!-- Inner Banner html end-->
    <div v-if="product" class="single-tour-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="single-tour-inner">
              <h2>{{ product.title }}</h2>
              <figure class="feature-image">
                <img :src="require(`static/assets/images/${product.image || 'img5.jpg'}`)" alt="" />
                <div class="package-meta text-center">
                  <ul>
                    <li>
                      <i v-html="require(`~/assets/icons/feather/clock.svg?raw`)"></i>
                      {{product.day}}
                    </li>
                    <li>
                       <i v-html="require(`~/assets/icons/feather/user.svg?raw`)"></i>
                      {{product.people}} 
                    </li>
                    <li>
                       <i v-html="require(`~/assets/icons/feather/map-pin.svg?raw`)"></i>
                      {{ product.city }}
                    </li>
                  </ul>
                </div>
              </figure>
              <div class="tab-container">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="overview-tab"
                      data-toggle="tab"
                      href="#overview"
                      role="tab"
                      aria-controls="overview"
                      aria-selected="true"
                      >DESCRIPTION</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="program-tab"
                      data-toggle="tab"
                      href="#program"
                      role="tab"
                      aria-controls="program"
                      aria-selected="false"
                      >PROGRAM</a
                    >
                  </li>
                  <li class="nav-item">
                    <button
                      v-on:click="overview - content"
                      href="#"
                      class="nav-link"
                      id="include-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="include"
                      aria-selected="false"
                    >
                      TRIP INCLUDES
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="overview"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                  >
                    <div class="overview-content">
                      <p>
                        totam mauris rhoncus? Tellus netus fringilla class
                        auctor dui. Dolores excepteur, doloribus, blanditiis
                        aliquip nisl. Occaecat iusto? Provident sociis rerum.
                        Amet, asperiores molestie varius eos! Libero, fermentum
                        fermentum totam! Sunt praesentium, totam. Excepteur
                        platea nisl. Convallis aliquam? Iaculis erat ipsa
                        molestie, quod, vestibulum reiciendis, maxime nostra,
                        integer unde officiis quo integer unde officiis quo.
                      </p>
                      <p>
                        Occaecat pariatur! Quaerat ligula, ab, consequuntur orci
                        mus ultricies praesent aute blandit beatae nisl aut,
                        totam mauris rhoncus? Tellus netus fringilla class
                        auctor dui. Dolores excepteur, doloribus, blanditiis
                        aliquip nisl..
                      </p>
                    </div>
                  </div>
                  <div
                    class="tab-pane"
                    id="program"
                    role="tabpanel"
                    aria-labelledby="program-tab"
                  >
                    <div class="program-content">
                      <p>
                        Dolores maiores dicta dolore. Natoque placeat libero
                        sunt sagittis debitis? Egestas non non qui quos, semper
                        aperiam lacinia eum nam! Pede beatae. Soluta, convallis
                        irure accusamus voluptatum ornare saepe cupidatat.
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        <strong>DAY 1</strong> – Departure at the airport and
                        arrival at the hotel
                      </p>
                      <p>
                        <strong>DAY 2</strong> – Visit the main museums and
                        lunch included
                      </p>
                      <p>
                        <strong>DAY 3</strong> – Excursion in the natural oasis
                        and picnic
                      </p>
                      <p>
                        <strong>DAY 4</strong> – Transfer to the airport and
                        return to the agency
                      </p>
                      <p>
                        <strong>DAY 5</strong> – Lorem ipsum dolor sit amet,
                        consectetur adipiscing
                      </p>
                    </div>
                  </div>
                  <div
                    class="tab-pane"
                    id="include"
                    role="tabpanel"
                    aria-labelledby="include-tab"
                  >
                    <div class="include-content">
                      <p>
                        Culpa cupidatat occaecat neque hic sollicitudin
                        provident nascetur felis, sollicitudin nonummy class
                        explicabo litora sed. Sapien, nobis consequatur
                        consequatur eaque. Incidunt. Ex? Repellat voluptates
                        dignissim! Aliquam velit natoque aspernatur maiores.
                      </p>
                      <p>&nbsp;</p>
                      <ul>
                        <li>- Travel cancellation insurance</li>
                        <li>- Breakfast and dinner included</li>
                        <li>- Health care included</li>
                        <li>
                          - Transfer to the airport and return to the agency
                        </li>
                        <li>
                          - Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-tour-gallery">
                <h3>GALLERY / PHOTOS</h3>
                <div class="single-tour-slider">
                  <carousel :per-page="2">
                    <slide>
                      <div class="single-tour-item">
                        <figure class="feature-image">
                          <img :src="require(`/static/assets/images/img28.jpg`)" alt="" />
                        </figure>
                      </div>
                    </slide>
                    <slide>
                      <div class="single-tour-item">
                        <figure class="feature-image">
                          <img :src="require(`/static/assets/images/img29.jpg`)" alt="" />
                        </figure>
                      </div>
                    </slide>
                    <slide>
                      <div class="single-tour-item">
                        <figure class="feature-image">
                         <img :src="require(`/static/assets/images/img32.jpg`)" alt="" />
                        </figure>
                      </div>
                    </slide>
                    <slide>
                      <div class="single-tour-item">
                        <figure class="feature-image">
                         <img :src="require(`/static/assets/images/img33.jpg`)" alt="" />
                        </figure>
                      </div>
                    </slide>
                  </carousel>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="sidebar">
              <div class="package-price">
                <h5 class="price"><span>{{product.price}}</span> / tek kişilik</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container padding">
      <h1>Sayfa bulunamadi</h1>
    </div>
    <!-- subscribe section html start -->
    <!-- subscribe html end -->
  </main>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>