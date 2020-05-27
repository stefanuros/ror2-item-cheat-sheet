<template>
  <div class="home-page">
    <TopBar/>
    <div class="info-section">
      <div class="item-list-section">
        <ItemList style="flex: 1;" :itemListType="SelectionType.ITEM" />
        <ItemList style="flex: 1;" :itemListType="SelectionType.EQUIPMENT" />
      </div>
      <SideBar/>
    </div>
  </div>
</template>

<script>
import ItemList from './ItemList.vue';
import TopBar from './TopBar.vue';
import SideBar from './SideBar.vue';
import { SelectionType } from '../data/constants';

export default {
  name: 'HomePage',
  components: {
    ItemList,
    TopBar,
    SideBar,
  },
  data() {
    return {
      SelectionType,
    };
  },
};
</script>

<style scoped>
.home-page {
  --font-family: Arial, Helvetica, sans-serif;
}

.home-page {
  font-family: var(--font-family);
}

.info-section {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
}

.item-list-section {
  flex: 1;
}
</style>
