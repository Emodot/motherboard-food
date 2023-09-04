<template>
  <div class="main_ctn">
    <div class="catalog_ctn">
      <Breadcrumb />
      <ProductsContainer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.main_ctn {
  background-color: #F8F8F8;
}
.catalog_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}
</style>
