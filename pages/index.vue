<template>
  <div class="main_ctn">
    <div class="catalog_ctn">
      <Breadcrumb />
      <Products />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.catalog_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}
</style>
