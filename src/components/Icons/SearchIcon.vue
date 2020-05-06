<template>
  <svg height="25" width="25" class="search-bar-icon">
    <circle cx="10" cy="10" r="7" class="glass" />
    <path d="m16 16 l5 5 z" class="handle" />
    <circle cx="22" cy="22" r="1" class="handle-end" />
  </svg> 
</template>

<style scoped>
.search-bar-icon {
  display: inline;
  padding-left: 10px;
  font-size: 120%;
  margin: auto;
}

.search-bar-icon .glass, .search-bar-icon .handle, .search-bar-icon .handle-end {
  stroke: #BBBBBB;
  stroke-width: 4px; 
  fill: none;
}

.search-bar-icon .handle-end {
  stroke-width: 2px; 
}
</style>
