<template>
  <div class="counter-item">
    <div class="counter-icon">
      <img
            :src="
              require(`/static/assets/images/${
                callbackSection.image || 'icon4.png'
              }`)
            "
            alt=""
          />
    </div>
    <div class="counter-content">
      <span class="counter-no"> <span class="counter">{{callbackSection.number}}</span>K+ </span>
      <span class="counter-text"> {{callbackSection.name}} </span>
    </div>
  </div>
</template>

<script>
export default {
    props:["callbackSection"]
};
</script>

<style>
</style>