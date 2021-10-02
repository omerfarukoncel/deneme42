<template>
  <header id="masthead" class="site-header header-primary">
    <!-- header html start -->
    <div class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 d-none d-lg-block">
            <div class="header-contact-info">
              <ul>
                <li>
                    <i v-html="require(`~/assets/icons/${family}/phone.svg?raw`)"></i> +90 0505 230 08 33
                  
                </li>
                <li>
                </li>
                <li>
                  <i v-html="require(`~/assets/icons/${family}/map-pin.svg?raw`)"></i> Konya Turkiye,
                  Aziye Mah.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-header">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="site-identity">
          <h1 class="site-title">
            <NuxtLink to="/">
              <img :src="require(`/static/assets/images/ehad1.png`)" alt="logo" />
            </NuxtLink>
          </h1>
        </div>
        <div class="main-navigation d-none d-lg-block">
          <nav id="navigation" class="navigation">
            <ul>
              <li>
                <NuxtLink to="/">AnaSayfa</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about">Hakkımızda</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink to="/products">Turlar</NuxtLink>
              </li>
              <li class="menu-item-has-children">
                <NuxtLink to="/coming">Hac-Umre</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="mobile-menu-container"></div>
  </header>
</template>

<script>
export default {
  props:{
        family: {
            type: String,
            required: false,
            default: 'feather',
        },
  }
}
</script>

<style>
</style>