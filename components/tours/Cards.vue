<template>
  <div class="col-lg-4 col-md-6">
    <div class="package-wrap">
      <figure class="feature-image">
        <NuxtLink :to="`/products/${cardsSection.id}`">
         <img
            :src="
              require(`/static/assets/images/${
                cardsSection.image || 'img5.jpg'
              }`)
            "
            alt=""
          />
        </NuxtLink>
      </figure>
      <div class="package-price">
        <h6><span>{{ cardsSection.price }} </span> / kişilik</h6>
      </div>
      <div class="package-content-wrap">
        <div class="package-meta text-center">
          <ul>
            <li>
              <i class="far fa-clock"></i>
              {{ cardsSection.day}}
            </li>
            <li>
               <i v-html="require(`~/assets/icons/feather/user.svg?raw`)"></i> 
              {{ cardsSection.people }}
            </li>
            <li>
              <i v-html="require(`~/assets/icons/feather/map-pin.svg?raw`)"></i> 
              {{ cardsSection.city }}
            </li>
          </ul>
        </div>
        <div class="package-content">
          <h3>
            <NuxtLink :to="`/products/${cardsSection.id}`">{{ cardsSection.title }}</NuxtLink>
          </h3>
          <p>
            {{ cardsSection.snippet}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["cardsSection"],
};
</script>

<style>
</style>