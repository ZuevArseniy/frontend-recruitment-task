<template>
  <div class="shelf mb-2 br-12">
    <div class="image">
      <img :src="shelf.img" :alt="shelf.name" class="br-12" />
    </div>
    <div class="info">
        <h3>{{shelf.name}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shelf: {
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
/* @import '@/assets/scss/ds.scss'; */
.shelf {
  height: 273px;
  width: 164px;
  margin-bottom: 10px;
  display: flex;
  border-radius: 12px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #ffffff;
  flex-direction: column;
 .image {
    height: 164px;
    width: 164px;

    img {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      width: 100%;
      height: 100%;
    }
  }
  .info {
      h3 {
          color: #2F2F2F;
          text-transform: uppercase;
      }
  }
}
</style>