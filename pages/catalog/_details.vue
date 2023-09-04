<template>
  <div class="main_ctn">
    <div class="details_ctn">
      <Breadcrumb :add-route="'Teddy Bear'" />
      <div class="details_inner">
        <div class="top_section">
          <div class="lhs">
            <h2 class="product_name">
              Teddy Bear
            </h2>
            <p class="product_desc">
              A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.
            </p>
            <p class="product_price">
              $ 30.00 USD
            </p>
            <div class="add_cart">
              <div class="increment_decrement">
                <span class="material-icons-outlined" :class="`${productNum === 1 ? 'not_allow' : ''}`" @click="decrement()">
                  remove
                </span>
                <div class="num">
                  <p>
                    {{ productNum }}
                  </p>
                </div>
                <span class="material-icons-outlined" @click="increment()">
                  add
                </span>
              </div>
              <button class="cart_btn">
                Add to Cart
              </button>
            </div>
          </div>
          <div class="rhs">
            <img src="~assets/images/teddy.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productNum: 1
    }
  },
  methods: {
    increment () {
      this.productNum++
    },
    decrement () {
      if (this.productNum > 1) {
        this.productNum--
      }
    }
  }

}
</script>

<style scoped>
.main_ctn {
  background-color: #F8F8F8;
}
.details_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

.details_inner {
  background-color: white;
  border-radius: 30px;
  padding: 7rem 7rem 2rem;
}

.top_section {
  display: flex;
  align-items: center;
}

.product_name {
  font-size: 40px;
}

.product_desc {
  margin: 30px 0;
  width: 70%;
  line-height: 24px;
  color: #999999;
}

.product_price {
  color: var(--primary-color);
  font-family: 'Varela Round', sans-serif;
  font-size: 24px;
}

.add_cart {
  margin-top: 30px;
  display: flex;
  align-items: center;
}

.increment_decrement {
  display: flex;
  align-items: center;
  background-color: #F8F8F8;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  height: 50px;
  padding: 0 10px;
  margin-right: 20px;
}

.material-icons-outlined {
  cursor: pointer;
}

.not_allow {
  cursor: not-allowed;
  color: #999999;
}

.num {
  width: 40px;
  text-align: center;
}

.cart_btn {
  background-color: var(--primary-color);
  border-radius: 30px;
  color: white;
  height: 50px;
  padding: 0 20px;
}
</style>
