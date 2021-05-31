<template>
  <div class="carousel">
    <div class="shelfs">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import Flickity from "flickity";
import "flickity/css/flickity.css";

export default {
  mounted() {
    this.$nextTick(() => {
      this.$fl = new Flickity(".shelfs", {cellSelector: '.shelf'});
    });
    window.addEventListener('resize', () => this.$fl.resize())
    console.log(this.$fl);
  },
};
</script>