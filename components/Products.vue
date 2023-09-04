<template>
  <div class="products_ctn">
    <div class="top_section">
      <h2 class="title">
        {{ activeTab }}
      </h2>
      <div class="tab_section">
        <div v-for="(tab, index) in tabs" :key="index" :class="`tab ${activeTab.toLowerCase() === tab.toLowerCase() ? 'activeTab' : ''}`" @click="setActiveTab(tab)">
          <p>{{ tab }}</p>
        </div>
      </div>
    </div>
    <hr class="line">
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        'All Toys',
        'Wooden Toys',
        'Stuffed Animals'
      ],
      activeTab: 'All Toys'
    }
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
    }
  }

}
</script>

<style scoped>
.products_ctn {
  margin-top: 30px;
}

.top_section {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px;
  border-bottom: 1px solid var(--border-color);
}

.line {
  /* padding-bottom: 40px; */
  margin-top: -1px;
  border: 1px solid var(--primary-color);
  width: 11rem;
  z-index: 20;
}

.tab_section {
  display: flex;
  align-items: center;
}

.tab {
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
}

.tab p {
  font-size: 13px;
  line-height: 13px;
}

.activeTab {
  background-color: var(--primary-color);
}

.activeTab p {
  color: white;
}
</style>
