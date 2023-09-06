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
  name: 'CatalogPage'
}
</script>

<style scoped>
.catalog_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

@media only screen and (max-width: 1200px) {
  .catalog_ctn {
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
}
@media only screen and (max-width: 500px) {
}
</style>
