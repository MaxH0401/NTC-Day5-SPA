<template>
  <div class="product-box">
    <div class="image-box">
      <img :src="parseImgPath(img_path)" />
    </div>
    <!-- img_path是資料庫的key -->
    <!-- :src要注意 -->
    <h4>
      {{ brand }} <small>{{ category }}</small>
    </h4>
    <h3>{{ name }}</h3>
    <p>售價: {{ price }}</p>
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
    'img_path': String,
    'brand': String,
    'category': String,
    'name': String,
    'price': Number,
  },
  methods: {
    parseImgPath: function (path) {
      return this.serverPath + path;
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