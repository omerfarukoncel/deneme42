<template>
  <main id="content" class="site-main">
    <!-- Inner Banner html start-->
    <nuxt-child />
    <!-- Inner Banner html end-->
    <!-- faq html start -->
    <div class="faq-page-section">
      <div class="container">
        <div class="faq-page-container">
          <div class="row">
            <div class="col-lg-6">
              <div class="faq-content-wrap">
                <div class="section-heading">
                  <h5>Sorular</h5>
                  <h2>SIKÇA SORULAN SORULAR</h2>
                </div>
                <div class="accordion" id="accordionOne">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h4 class="mb-0">
                        <b-button
                          :class="visible ? null : 'collapsed'"
                          :aria-expanded="visible ? 'true' : 'false'"
                          aria-controls="collapse-4"
                          @click="visible = !visible"
                        >
                          Biz Kimiz ?
                        </b-button>
                      </h4>
                    </div>
                    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                      <div class="card-body">
                        {{text1}}
                      </div>
                    </b-collapse>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h4 class="mb-0">
                        <b-button
                          :class="visible ? null : 'collapsed'"
                          :aria-expanded="visible ? 'true' : 'false'"
                          aria-controls="collapse-4"
                          @click="visible = !visible"
                        >
                          Ne tür hizmetler Sunuyoruz?
                        </b-button>
                      </h4>
                    </div>
                    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                      <div class="card-body">
                        {{text2}}
                      </div>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="faq-page-container">
          <div class="row">
            <div class="col-lg-5">
              <div class="faq-testimonial">
                <figure class="faq-image">
                  <img :src="require(`/static/assets/images/img37.jpg`)" alt="" /> 
                </figure>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- faq html end -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      text1:"Yaklaşık olarak 25 yıldır Turizm ve Hac-Umre hizmeti vermekteyiz. Bir çok alanda kendimizi kanıtlamış bulunuyoruz.",

      text2:"Türkiyenin bir çok yerine seyahat sunmaktayız.(Urfa Turları ,Ege Turları,Karadeniz Turları vb). Bunlardan yanı sıra Hac-Umre hizmetimizde bulunmaktadır."               
    };
  },
};
</script>

<style>
</style>