<template>
  <div class="navbar_ctn">
    <div class="navbar_inner">
      <div class="navbar_lhs">
        <div class="logo">
          <img src="~assets/images/motherboard-logo.png" alt="">
        </div>
        <div class="menu_list">
          <p class="menu_item">
            Catalog
          </p>
          <p class="menu_item">
            Delivery
          </p>
          <p class="menu_item">
            About
          </p>
          <p class="menu_item">
            Contacts
          </p>
        </div>
      </div>
      <div class="cart_ctn">
        <p class="cart_text">
          Cart
        </p>
        <span class="material-icons-outlined">
          shopping_cart
        </span>
        <div class="num_box">
          <p>0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar_ctn {
  background-color: white;
  box-shadow: 0px 5px 20px #dadada;
  position: fixed;
  width: 100%;
  z-index: 30;
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
  flex-basis: 40%;
  /* background-color: red; */
}

.logo {
  margin-right: 5rem;
  width: 70%;
}

.logo img {
  width: 100%;
}

.menu_list {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.menu_item {
  cursor: pointer;
}

.cart_ctn {
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
</style>
