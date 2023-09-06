<template>
  <div class="main_ctn">
    <div class="checkout_ctn">
      <div class="head_section">
        <p>Checkout</p>
      </div>
      <div class="body_section">
        <div class="body_inner">
          <div class="lhs">
            <div class="delivery_section">
              <p class="lhs_head">
                Delivery Options
              </p>
              <hr class="delivery_line">
              <div class="delivery_options">
                <div v-for="(data, index) in options" :key="index" :class="`option ${data.name === billings.delivery_option ? 'selected_option' : ''}`" @click="selectDelivery(data)">
                  <span class="material-icons-outlined">
                    {{ data.icon }}
                  </span>
                  <p>{{ data.name }}</p>
                </div>
              </div>
            </div>
            <div class="billing_section">
              <p class="lhs_head">
                Billing Details
              </p>
              <hr class="billing_line">
              <div class="form">
                <div class="form_flex">
                  <div class="flex_ctn">
                    <p class="label">
                      First Name
                    </p>
                    <input v-model="billings.first_name" class="form_input" placeholder="Enter your First Name" type="text">
                  </div>
                  <div class="flex_ctn">
                    <p class="label">
                      Last Name
                    </p>
                    <input v-model="billings.last_name" class="form_input" placeholder="Enter your Last Name" type="text">
                  </div>
                </div>
                <div class="input_ctn">
                  <p class="label">
                    Address
                  </p>
                  <input v-model="billings.address" class="form_input" placeholder="Enter your Address" type="text">
                </div>
                <div class="form_flex">
                  <div class="flex_ctn">
                    <p class="label">
                      Email Address
                    </p>
                    <input v-model="billings.email" class="form_input" placeholder="Enter your Email Address" type="email">
                  </div>
                  <div class="flex_ctn">
                    <p class="label">
                      Phone Number
                    </p>
                    <input v-model="billings.notes" class="form_input" placeholder="Enter your Phone Number" type="number">
                  </div>
                </div>
              </div>
            </div>
            <p class="lhs_head">
              Additional information
            </p>
            <hr class="delivery_line">
            <div class="form">
              <div class="input_ctn">
                <p class="label">
                  Order notes (optional)
                </p>
                <textarea v-model="billings.delivery_option" class="form_textarea" placeholder="Notes about your order, e.g. special notes for delivery" type="text" />
              </div>
            </div>
          </div>
          <div class="rhs">
            <div class="order_ctn">
              <div class="order_info">
                <p class="order_head_text">
                  Your order
                </p>
                <div class="order_inner">
                  <p class="order_header">
                    Product
                  </p>
                  <p class="order_header">
                    Subtotal
                  </p>
                </div>
                <hr class="order_line">
                <div v-if="productList.length">
                  <div v-for="data in productList" :key="data.index">
                    <div class="order_inner">
                      <p class="order_name">
                        {{ data.name }}  <span> x {{ data.value }}</span>
                      </p>
                      <p class="order_value">
                        ₦{{ data.price * data.value }}
                      </p>
                    </div>
                    <hr class="order_line">
                  </div>
                </div>
                <div v-else class="empty_box">
                  <p>No items found</p>
                </div>
                <div class="order_inner">
                  <p class="order_header">
                    Subtotal
                  </p>
                  <p class="order_header">
                    ₦{{ total }}.00
                  </p>
                </div>
                <hr class="order_line">
                <div class="order_inner">
                  <p class="order_header">
                    Total
                  </p>
                  <p class="order_header">
                    ₦{{ total }}.00
                  </p>
                </div>
                <hr class="order_line">
              </div>
              <div class="box_bottom">
                <p>Debit/Credit Cards</p>
                <div class="cards_img">
                  <img src="~assets/images/paystack-wc.png" alt="">
                </div>
                <button class="order_btn">
                  PLACE ORDER
                </button>
              </div>
            </div>
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
      options: [
        {
          name: 'Home Delivery',
          icon: 'local_shipping'
        },
        {
          name: 'Pick Up',
          icon: 'place'
        }
      ],
      billings: {
        first_name: '',
        last_name: '',
        address: '',
        phone: '',
        email: '',
        notes: '',
        delivery_option: ''
      },
      productList: [],
      total: 0
    }
  },
  created () {
    this.productList = this.$store.state.cartList
    this.productList.forEach((element) => {
      this.total = this.total + (element.price * element.value)
    })
    // console.log(this.total)
  },
  methods: {
    selectDelivery (val) {
      this.billings.delivery_option = val.name
    }
  }
}
</script>

<style scoped>
.main_ctn {
  background-color: #F8F8F8;
  padding-bottom: 5rem;
}
.checkout_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
  padding: 7rem 0;
  margin-bottom: 7rem;
}

.head_section {
  border-bottom: 3px solid var(--primary-color);
  margin-bottom: 4rem;
}

.head_section p {
  font-family: 'Varela Round', sans-serif;
  font-size: 28px;
  margin-bottom: 17px;
}

.body_inner {
  display: flex;
  justify-content: space-between;
}

.lhs {
  flex-basis: 55%;
}

.lhs_head {
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
  margin-bottom: 15px;
}

.rhs {
  flex-basis: 40%;
}

.billing_line {
  border: none;
  border-top: 1px solid var(--border-color);
  margin-bottom: 40px;
}
.delivery_line {
  border: none;
  border-top: 1px solid var(--border-color);
  margin-bottom: 30px;
}

.delivery_section {
  margin-bottom: 40px;
}
.billing_section {
  margin-bottom: 40px;
}

.delivery_options {
  display: flex;
}
.option {
  display: flex;
  height: 60px;
  flex-basis: 40%;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  margin-right: 30px;
}

.selected_option {
  border: 2px solid var(--primary-color);
}

.selected_option p {
  color: var(--primary-color);
  font-weight: 600;
}

.selected_option .material-icons-outlined {
  color: var(--primary-color);
}

.option p {
  font-size: 16px;
  margin-left: 20px;
}

.label {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
}

.form_flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.input_ctn {
  margin-bottom: 30px;
}

.flex_ctn {
  flex-basis: 47%;
}

.form_input {
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: transparent;
  padding: 0 20px;
}
.form_textarea {
  height: 150px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: transparent;
  padding: 20px;
}

::placeholder {
  color: var(--border-color);
}

.order_head_text {
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 25px;
}

.order_ctn {
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 30px 30px;
}

.order_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
}

.order_header {
  font-size: 16px;
  font-weight: 700;
}

.order_name {
  font-size: 15px;
  width: 80%;
  font-weight: 400;
  line-height: 24px;
}

.order_name span {
  padding-left: 10px;
  font-size: 15px;
  font-weight: 700;
}

.order_value {
  font-size: 15px;
  font-weight: 700;
}

.order_line {
  border: none;
  border-top: 1px solid var(--border-color);
}

.box_bottom {
  margin-top: 30px;
}
.box_bottom p {
  margin-bottom: 20px;
}
.order_btn {
  margin-top: 30px;
  height: 50px;
  border-radius: 30px;
  font-weight: 700;
  width: 100%;
  background-color: var(--primary-color);
  color: white;
}

.empty_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
}

</style>
