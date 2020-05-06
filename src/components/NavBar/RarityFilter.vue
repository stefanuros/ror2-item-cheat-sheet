<template>
  <div class="rarity-filter">
    <p class="rarity-filter-label">Filter Rarity By</p>
  </div>
</template>

<script>
export default {
  name: "RarityFilter",
};
</script>

<style scoped>
.rarity-filter {
  --rarity-filter-select-height: 40px;
  --rarity-filter-select-text-size: 100%;
  --rarity-filter-label-size: 100%;
}

.rarity-filter {
  margin-left: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
}

.rarity-filter-label {
  display: inline;
  padding-left: 10px;
  font-size: var(--rarity-filter-label-size);
  color: darkGrey;
  margin: auto;

  color: #757575;
}
</style>
