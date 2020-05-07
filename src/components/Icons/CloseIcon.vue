<template>
  <div class="close-side-bar-button" v-on:mouseup="this.clickCloseButton">
    <svg class="close-side-bar-icon">
      <path d="m10 10 l20 20 m-20 0 l20 -20 z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "CloseIcon",
  props: ["clickCloseButton"],
};
</script>

<style scoped>
.close-side-bar-button {
  height: 40px;
  width: 40px;

  transition: background-color 0.5s ease;
  border-radius: 20px;
}

.close-side-bar-button:hover {
  background: rgba(190, 190, 190, 0.25);
  transition: background-color 0.25s ease;
}

.close-side-bar-button:active {
  background: rgba(190, 190, 190, 0.75);
}

.close-side-bar-icon {
  height: inherit;
  width: inherit;
  stroke: #CCCCCC;
  stroke-width: 2px;
}
</style>
