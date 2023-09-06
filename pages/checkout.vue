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
                <div v-for="(data, index) in options" :key="index" class="option">
                  <span class="material-icons-outlined">
                    {{ data.icon }}
                  </span>
                  <p>{{ data.name }}</p>
                </div>
              </div>
            </div>
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
                  <input class="form_input" placeholder="Enter your First Name" type="text">
                </div>
                <div class="flex_ctn">
                  <p class="label">
                    Last Name
                  </p>
                  <input class="form_input" placeholder="Enter your Last Name" type="text">
                </div>
              </div>
              <div class="input_ctn">
                <p class="label">
                  Address
                </p>
                <input class="form_input" placeholder="Enter your Address" type="text">
              </div>
              <div class="form_flex">
                <div class="flex_ctn">
                  <p class="label">
                    Email Address
                  </p>
                  <input class="form_input" placeholder="Enter your Email Address" type="email">
                </div>
                <div class="flex_ctn">
                  <p class="label">
                    Phone Number
                  </p>
                  <input class="form_input" placeholder="Enter your Phone Number" type="number">
                </div>
              </div>
            </div>
          </div>
          <div class="rhs">
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
      ]
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
  margin-right: 30px;
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

::placeholder {
  color: var(--border-color);
}

</style>
