<template>
  <div class="modal-backdrop" @click="$emit('close-modal')">
    <div class="modal reveals" @click.stop>
      <div class="top_section">
        <p class="modal_title">
          Your Cart
        </p>
        <span class="material-icons-outlined" @click="$emit('close-modal')">
          close
        </span>
      </div>
      <div v-if="productList.length">
        <div class="modal_content">
          <div v-for="(product, index) in productList" :key="index" class="product_item">
            <div class="lhs">
              <img :src="product.image" alt="">
            </div>
            <div class="mhs">
              <p class="product_name">
                {{ product.name }}
              </p>
              <p class="product_price">
                ₦ {{ product.price }}
              </p>
              <p class="product_delete" @click="removeItem(product)">
                Remove
              </p>
            </div>
            <div class="rhs">
              <div class="increment_decrement">
                <span class="material-icons-outlined" :class="`${product.value === 1 ? 'not_allow' : ''}`" @click="decrement(product)">
                  remove
                </span>
                <div class="num">
                  <p>
                    {{ product.value }}
                  </p>
                </div>
                <span class="material-icons-outlined" @click="increment(product)">
                  add
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="subtotal">
          <p>Subtotal</p>
          <p class="amount">
            ₦ {{ total }}.00
          </p>
        </div>
        <div class="bottom_section">
          <button class="checkout_btn" @click="$emit('goToCheckout')">
            Continue to Checkout
          </button>
        </div>
      </div>
      <div v-else class="empty_box">
        <p>No items found</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: [],
      total: 0
    }
  },
  created () {
    this.productList = this.$store.state.cartList
    this.calculateTotal()
  },
  methods: {
    calculateTotal () {
      this.productList.forEach((element) => {
        this.total = this.total + (element.price * element.value)
      })
    },
    removeItem (val) {
      this.$store.commit('removeCartList', val)
    },
    increment (val) {
      this.$store.commit('increaseCartProductValue', val)
    },
    decrement (val) {
      if (val.value > 1) {
        this.$store.commit('decreaseCartProductValue', val)
      }
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  z-index: 7;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(24, 18, 46, 0.8);
}

.modal {
  /* margin-top: 5%; */
  background-color: white;
  width: 40%;
  max-width: 550px;
  height: fit-content;
  align-items: center;
  border-radius: 20px;
  overflow-y: auto;
  padding: 30px 0;
}

.top_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}

.modal_title {
  font-family: 'Varela Round', sans-serif;
  font-size: 24px;
}

.material-icons-outlined {
  cursor: pointer;
}

.modal_content {
  max-height: 25rem;
  overflow: auto;
  padding: 2rem 3rem 1rem;
  border-bottom: 1px solid var(--border-color);
}

.empty_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
}

.empty_box p {
  text-align: center;
}

.product_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.lhs {
  flex-basis: 20%;
}

.lhs img {
  width: 70%;
}

.mhs {
  flex-basis: 50%;
}

.product_name {
  font-weight: 700;
  margin-bottom: 5px;
}

.product_delete {
  width: fit-content;
  cursor: pointer;
  font-size: 12px;
  color: red;
  margin-top: 5px;
}

.rhs {
  flex-basis: 20%;
}

.increment_decrement {
  display: flex;
  align-items: center;
  background-color: #F8F8F8;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  height: 40px;
  padding: 0 10px;
}

.not_allow {
  cursor: not-allowed;
  color: #999999;
}

.num {
  width: 40px;
  text-align: center;
}

.subtotal {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
}

.subtotal .amount {
  font-weight: 700;
}

.bottom_section {
  padding: 3rem 3rem 0;
}

.checkout_btn {
  height: 50px;
  border-radius: 30px;
  width: 100%;
  background-color: var(--primary-color);
  color: white;
}

@media only screen and (max-width: 1200px) {
  .modal {
    width: 50%;
  }
}

@media only screen and (max-width: 900px) {
  .modal {
    width: 70%;
  }
}

@media only screen and (max-width: 500px) {

  .modal {
    width: 90%;
  }

  .modal_content {
    padding: 20px 10px;
  }

}

</style>
