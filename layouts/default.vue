<template>
  <div class="main">
    <Navbar @open-cart="openCart = true" />
    <div class="main_content">
      <Nuxt />
    </div>
    <Footer />
    <ModalsCart v-if="openCart" @close-modal="openCart = false" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      openCart: false
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
