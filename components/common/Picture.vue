<template>
  <main>
    <div class="row">
      <div class="col-sm-6">
        <div class="desction-item">
          <figure class="desction-image">
            <img
              :src="
                require(`/static/assets/images/${
                  pictureSection2.image || 'img3.jpg'
                }`)
              "
              alt=""
            />
          </figure>
          <div class="meta-cat">
            <NuxtLink to="">{{pictureSection2.name}}</NuxtLink>
          </div>
          <div class="desction-content">
            <h3>
              <NuxtLink to="">{{pictureSection2.city}}</NuxtLink>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["pictureSection2"],
};
</script>

<style>
</style>