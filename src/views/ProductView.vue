<template>
  <div>
    <div class="row">
      <template v-for="product in products" :key="product">
        <div class="product-box">
          <div class="image-box">
            <img :src="parseImgPath(product.img_path)" alt="" />
            <!-- img_path是資料庫的key -->
            <!-- :src要注意 -->
          </div>
          <h4>
            {{ product.brand }}<small>{{ product.category }}</small>
          </h4>
          <h3>{{ product.name }}</h3>
          <p>售價：{{ product.price }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get(`http://35.234.34.149/products?user_id=1`)
      .then((res) => (this.products = res.data));
  },
  methods: {
    parseImgPath: function (path) {
      return `http://35.234.34.149${path}`;
    },
  },
};
</script>

<style scoped>
div.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
}
div.product-box {
  border: 1px solid #999999;
  min-width: 350px;
  width: 24%;
  text-align: center;
  margin: 1px;
  cursor: pointer;
  /* 滑鼠換成典籍圖示  */
  display: block;
}
div.image-box {
  width: 100%;
  height: 250px;
  display: flex;
}
img {
  display: block;
  width: 50%;
  margin: auto;
}
</style> 