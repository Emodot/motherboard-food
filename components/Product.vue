<template>
  <div class="card_list">
    <div v-for="(card, index) in cardDetails" :key="index" class="card_ctn">
      <div class="card_image">
        <img :src="card.image" alt="">
      </div>
      <p class="card_title">
        {{ card.name }}
      </p>
      <div class="card_amount">
        <p>${{ card.price }} USD</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardDetails: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style scoped>
.card_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card_ctn {
  padding: 30px 0;
  background-color: white;
  border: 1px solid #99999969;
  border-radius: 20px;
  width: 23%;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 10px #dadada;
  margin-bottom: 40px;
  transition:  0.4s all ease-in-out;
}

.card_ctn:hover {
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
}

.card_image {
  width: 72%;
}

.card_image img {
  width: 100%;
}

.card_title {
  margin: 15px 0;
  font-size: 15px;
}
.card_amount {
  width: fit-content;
  padding: 7px 15px;
  border-radius: 30px;
  background-color: var(--primary-color);
}

.card_amount p {
  color: white;
}
</style>
