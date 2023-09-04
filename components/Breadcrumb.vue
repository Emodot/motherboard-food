<template>
  <div class="breadcrumb_ctn">
    <div class="breadcrumb_inner">
      <p class="nav_link">
        Home
      </p>
      <span class="material-icons-outlined">
        east
      </span>
      <p class="nav_link" @click="$router.go(-1)">
        Catalog
      </p>
      <div v-if="addRoute !== ''" class="new_route">
        <span class="material-icons-outlined">
          east
        </span>
        <p class="nav_link">
          {{ addRoute }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addRoute: {
      type: String,
      default: () => ''
    }
  }

}
</script>

<style scoped>
.breadcrumb_ctn {
  padding: 4rem 0;
}
.breadcrumb_inner {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  padding: 15px 20px;
  border-radius: 30px;
}

.new_route {
  display: flex;
  align-items: center;
}

.nav_link {
  color: #999999;
  font-size: 12px;
  cursor: pointer;
}

.material-icons-outlined {
  color: #999999;
  margin: 0 10px;
  font-size: 14px;
}
</style>
