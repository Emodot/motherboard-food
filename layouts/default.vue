<template>
  <div class="main">
    <Navbar
      @open-cart="openCart = true"
      @showMobileMenu="showMobileMenu = true"
    />
    <div class="mobile-menu">
      <MobileMenu
        v-show="showMobileMenu"
        @closeMobileMenu="showMobileMenu = false"
      />
    </div>
    <div class="main_content">
      <Nuxt />
    </div>
    <Footer />
    <ModalsCart v-if="openCart" @close-modal="openCart = false" @goToCheckout="goToCheckout" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      openCart: false,
      showMobileMenu: false
    }
  },
  methods: {
    goToCheckout () {
      this.openCart = false
      this.$router.push('/checkout')
    }
  }

}
</script>

<style scoped>
.main {
  background-color: #F8F8F8;
}
.main_content {
  padding: 90px 0;
}
</style>
