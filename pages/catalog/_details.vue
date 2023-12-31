<template>
  <div class="main_ctn">
    <div class="details_ctn">
      <Breadcrumb :add-route="$route.params.details" />
      <div class="details_inner">
        <div class="top_section">
          <div class="lhs">
            <h2 class="product_name">
              {{ product.name }}
            </h2>
            <p class="product_desc">
              A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy. It is based on a number of factors.
            </p>
            <p class="product_price">
              $ {{ product.price }} USD
            </p>
            <div class="add_cart">
              <div class="increment_decrement">
                <span class="material-icons-outlined" :class="`${product.value === 1 ? 'not_allow' : ''}`" @click="decrement()">
                  remove
                </span>
                <div class="num">
                  <p>
                    {{ product.value }}
                  </p>
                </div>
                <span class="material-icons-outlined" @click="increment()">
                  add
                </span>
              </div>
              <button class="cart_btn" @click="addToCart()">
                {{ addToCartText }}
              </button>
            </div>
            <div class="error_text_box">
              <p v-if="errorMessage" class="error_text come-down">
                {{ errorMessage }}
              </p>
            </div>
          </div>
          <div class="rhs">
            <img :src="product.image" alt="">
          </div>
        </div>
        <div class="product_details">
          <div class="head_section">
            <p class="details_head">
              Product Details
            </p>
            <p class="sku">
              SKU: 35009
            </p>
          </div>
          <hr class="line">
          <div class="details_content">
            <div class="content_lhs">
              <p class="content_head">
                Add Your Product Description
              </p>
              <p class="content_text">
                The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
              </p>
              <p class="content_head">
                Simple & Elegant Template
              </p>
              <p class="content_text">
                Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.
              </p>
              <ul>
                <li>Beautifully Designed</li>
                <li>Fully Responsive</li>
                <li>Beautifully Designed</li>
                <li>Fully Responsive</li>
              </ul>
              <p class="content_text">
                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
              </p>
            </div>
            <div class="content_rhs">
              <div class="size_ctn">
                <div class="size_inner">
                  <p class="size_name">
                    Width
                  </p>
                  <p class="size_value">
                    38 in
                  </p>
                </div>
                <hr class="size_line">
                <div class="size_inner">
                  <p class="size_name">
                    Height
                  </p>
                  <p class="size_value">
                    32 in
                  </p>
                </div>
                <hr class="size_line">
                <div class="size_inner">
                  <p class="size_name">
                    Length
                  </p>
                  <p class="size_value">
                    21.5 in
                  </p>
                </div>
                <hr class="size_line">
                <div class="size_inner">
                  <p class="size_name">
                    Weight
                  </p>
                  <p class="size_value">
                    24 0z
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
      <Newsletter />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      productNum: 1,
      addToCartText: 'Add to Cart',
      errorMessage: ''
    }
  },
  created () {
    this.product = this.$store.state.selectedProduct
  },
  methods: {
    addToCart () {
      const cartProduct = this.$store.state.cartList
      const foundProduct = cartProduct.find(product => product.name === this.product.name)
      if (!foundProduct) {
        this.$store.commit('updateCartList', this.product)
        this.addToCartText = 'Added!'
        setTimeout(() => {
          this.addToCartText = 'Add to Cart'
        }, 3000)
      } else {
        this.errorMessage = 'Product already in cart'
        setTimeout(() => {
          this.errorMessage = ''
        }, 3000)
      }
    },
    increment () {
      this.$store.commit('updateProductValue', 'increment')
      // this.product.value++
    },
    decrement () {
      if (this.product.value > 1) {
        this.$store.commit('updateProductValue', 'decrement')
      }
    }
  }
}
</script>

<style scoped>
.main_ctn {
  background-color: #F8F8F8;
  padding-bottom: 5rem;
}
.details_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

.details_inner {
  background-color: white;
  border-radius: 30px;
  padding: 7rem 7rem 7rem;
  margin-bottom: 7rem;
}

.top_section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lhs {
  flex-basis: 50%;
}

.rhs {
  flex-basis: 50%;
  text-align: right;
}

.rhs img {
  width: 80%;
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

.error_text {
  /* margin-top: 20px; */
  color: red;
}

.error_text_box {
  height: 50px;
  padding-top: 20px;
}

.product_details {
  margin-top: 4rem;
}

.head_section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 40px;
  border-bottom: 1px solid var(--border-color);
}

.details_head {
  font-family: 'Varela Round', sans-serif;
  font-size: 17px;
}

.sku {
  font-size: 11px;
  color: #999999;
}

.line {
  /* padding-bottom: 40px; */
  margin-top: -1px;
  border: 1px solid var(--primary-color);
  width: 11rem;
  z-index: 2;
}

.details_content {
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
}

.content_lhs {
  flex-basis: 70%;
}

.content_rhs {
  flex-basis: 25%;
}

.content_head {
  font-family: 'Varela Round', sans-serif;
  font-size: 24px;
  margin-bottom: 17px;
}

.content_text {
  margin-bottom: 25px;
  line-height: 24px;
}

.content_lhs ul {
  margin-left: 40px;
  line-height: 24px;
  margin-bottom: 25px;
}

.size_ctn {
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 10px 30px;
}

.size_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.size_name {
  font-size: 12px;
  font-weight: 400;
}
.size_value {
  font-size: 12px;
  font-weight: 600;
}

.size_line {
  border: none;
  border-top: 1px solid var(--border-color);
}

@media only screen and (max-width: 1200px) {
  .details_ctn {
    width: 90%;
  }

  .details_inner {
    padding: 4rem 4rem 4rem;
  }
  .product_desc {
    width: 90%;
  }
    .content_lhs {
      flex-basis: 60%;
    }

    .content_rhs {
      flex-basis: 35%;
    }
}
@media only screen and (max-width: 900px) {
  .top_section {
    flex-direction: column-reverse;
  }

  .rhs {
    text-align: center;
    margin-bottom: 30px;
  }
  .product_desc {
    width: 100%;
  }

  .details_content {
    flex-direction: column;
  }

  .content_rhs {
    width: 50%;
  }

  .product_name {
    font-size: 30px;
  }

}
@media only screen and (max-width: 500px) {
  .details_inner {
    padding: 2rem 2rem 2rem;
  }
  .content_rhs {
    width: 100%;
  }
}
</style>
