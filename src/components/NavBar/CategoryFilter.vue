<template>
  <div class="category-filter">
    <p class="category-filter-label">Filter Category By</p>
  </div>
</template>

<script>
export default {
  name: "CategoryFilter",
};
</script>

<style scoped>
.category-filter {
  --category-filter-select-height: 40px;
  --category-filter-select-text-size: 100%;
  --category-filter-label-size: 100%;
}

.category-filter {
  margin-left: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
}

.category-filter-label {
  display: inline;
  padding-left: 10px;
  font-size: var(--category-filter-label-size);
  color: darkGrey;
  margin: auto;

  font-family: Arial, Helvetica, sans-serif;
  color: #757575;
}
</style>
