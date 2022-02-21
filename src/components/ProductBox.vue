<template>
  <div
    :class="[{ border: has_border }, 'product-box']"
    @click="redirectProduct(id)"
  >
    <!-- 當has_border =true時，顯示.borderCSS，此外原先的product-box不影響，繼續出現 -->
    <!-- :class要注意 -->
    <div class="image-box">
      <img :src="parseImgPath(img_path)" />
    </div>
    <h4>
      {{ brand }} <small>{{ category }}</small>
    </h4>
    <h3>{{ name }}</h3>
    <p>售價: {{ price }}</p>
    <slot></slot>
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
    'id': Number,
    'img_path': String,
    'brand': String,
    'category': String,
    'name': String,
    'price': Number,
    'has_border':{
        type: Boolean,
        default: false
    },
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
.border {
  border: 1px solid #888888;
}
div.product-box {
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