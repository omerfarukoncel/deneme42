<template>
  <div class="row">
    <div class="col-md-6 col-xl-12">
      <div class="desction-item">
        <figure class="desction-image">
          <img
            :src="
              require(`/static/assets/images/${
                pictureSection.image || 'kapadok.jpg'
              }`)
            "
            alt=""
          />
        </figure>
        <div class="meta-cat">
          <NuxtLink to="">{{ pictureSection.name }}</NuxtLink>
        </div>
        <div class="desction-content">
          <h3>
            <NuxtLink to="">{{ pictureSection.city }}</NuxtLink>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pictureSection"],
};
</script>

<style>
</style>