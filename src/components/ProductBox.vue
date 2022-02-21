<template>
  <div class="product-box" @click="redirectProduct(id)" >
    <div class="image-box">
      <img :src="parseImgPath(img_path)" />
    </div>
    <h4>
      {{ brand }} <small>{{ category }}</small>
    </h4>
    <h3>{{ name }}</h3>
    <p>售價: {{ price }}</p>
    <slot></slot>
    <!-- 給productview放資料的地方 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverPath: this.$store.state.serverPath,
    };
  },
  props: {
    'id':Number,
    'img_path': String,
    'brand': String,
    'category': String,
    'name': String,
    'price': Number,
    // 這些都對應data資料
  },
  methods: {
    parseImgPath: function (path) {
      return this.serverPath + path;
    },
    redirectProduct: function (id) {
      this.$router.push(`/products/${id}`);
    },
  },
};
</script>
<style scoped>
div.product-box {
  border: 1px solid #888888;
  min-width: 350px;
  width: 24%;
  text-align: center;
  margin: 1px;
  cursor: pointer;
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