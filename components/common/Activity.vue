<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="activity-item">
      <div class="activity-icon">
        <NuxtLink to="/tours">
          <img
            :src="
              require(`/static/assets/images/${
                activeSection.image || 'icon11.png'
              }`)
            "
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="activity-content">
        <h4>
          <NuxtLink to="/tours">{{activeSection.name}}</NuxtLink>
        </h4>
        <p>{{activeSection.number}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:["activeSection"]
};
</script>

<style>
</style>