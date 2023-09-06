<template>
  <div class="navbar_ctn">
    <div class="navbar_inner">
      <div class="navbar_lhs">
        <div class="logo">
          <img
            src="~assets/images/motherboard-logo.png"
            alt=""
            @click="$router.push('/')"
          >
        </div>
      </div>
      <div class="navbar_middle">
        <div class="menu_list">
          <NuxtLink to="/catalog">
            <p class="menu_item">
              Catalog
            </p>
          </NuxtLink>
          <NuxtLink to="#">
            <p class="menu_item">
              Delivery
            </p>
          </NuxtLink>
          <NuxtLink to="#">
            <p class="menu_item">
              About
            </p>
          </NuxtLink>
          <NuxtLink to="#">
            <p class="menu_item">
              Contacts
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="navbar_rhs">
        <div class="cart_ctn" @click="$emit('open-cart')">
          <p class="cart_text">
            Cart
          </p>
          <span class="material-icons-outlined"> shopping_cart </span>
          <div class="num_box">
            <p>{{ productList.length }}</p>
          </div>
        </div>
        <div class="mobile_menu">
          <span class="material-icons-outlined" @click="$emit('showMobileMenu')">
            menu
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: {}
    }
  },
  created () {
    this.productList = this.$store.state.cartList
  }
}
</script>

<style scoped>
.navbar_ctn {
  background-color: white;
  box-shadow: 0px 5px 20px #dadada;
  position: fixed;
  width: 100%;
  z-index: 5;
}
.navbar_inner {
  max-width: 1344px;
  width: 80%;
  height: 90px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar_lhs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 23%;
}

.logo {
  margin-right: 5rem;
  width: 80%;
}

.logo img {
  cursor: pointer;
  width: 100%;
}

.navbar_middle {
  flex-basis: 68%;
  display: flex;
  justify-content: left;
}

.navbar_rhs {
  height: 100%;
  flex-basis: 30%;
  display: flex;
  justify-content: flex-end;
}

.menu_list {
  display: flex;
  align-items: center;
  width: 45%;
  justify-content: space-between;
}

.menu_item {
  cursor: pointer;
}

.cart_ctn {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.cart_text {
  margin-right: 15px;
}

.num_box {
  width: 20px;
  height: 20px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  margin-left: 15px;
}

.num_box p {
  font-size: 12px;
  color: white;
  line-height: 19px;
}

.mobile_menu {
  height: 100%;
  display: none;
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid var(--border-color);
}

@media only screen and (max-width: 1200px) {
  .navbar_lhs {
    flex-basis: 30%;
  }
  .logo {
    width: 100%;
  }
  .menu_list {
    width: 70%;
  }
}
@media only screen and (max-width: 900px) {
  .navbar_inner {
    width: 90%;
  }
  .navbar_middle {
    display: none;
  }
  .mobile_menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media only screen and (max-width: 500px) {
  .navbar_lhs {
    flex-basis: 40%;
  }
}

@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 900px) {
}
@media only screen and (max-width: 500px) {
}
</style>
