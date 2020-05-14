<template>
  <div class="category-filter">
   <multiselect class="filter-select"
      placeholder="Filter By Category"
      v-model="filterByCategory"
      :options="categoryOptions"
      :searchable="true"
      :multiple="true"
      :close-on-select="false"
      :preserve-search="false"
      :preselect-first="false"
      :showNoResults="false"
      label="name"
      track-by="code">
    </multiselect>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { Multiselect } from 'vue-multiselect';
import { Category } from '../../data/constants';

const clear = {
  name: "Clear All",
  code: Symbol("Clear All"),
};
const rarities = [clear].concat(Object.values(Category).map((category) => {
  return {
    name: category.description,
    code: category,
  };
}));


export default {
  name: "CategoryFilter",
  components: { Multiselect },
  data() {
    return {
      filterByCategory: null,
      categoryOptions: rarities,
    };
  }, 
  methods: {
    ...mapMutations([
      'setFilterByState',
    ]),
    clearAll() {
      this.filterByCategory = null;
      this.setFilterByState({ category: [] });
    },
  },
  watch: {
    filterByCategory(selected) {
      if (!selected || selected.includes(clear)) {
        this.clearAll();
      } else {
        const filter = selected.map(item => item.code);
        this.setFilterByState({ category: filter });
      }
    },
  },
};
</script>

<style>
.category-filter {
  --category-filter-height: 30px;
  --category-filter-select-text-size: 100%;
  --category-filter-label-size: 100%;
  --category-filter-width: 150px;
  --category-pill-width: 70%;
  --category-pill-text-size: 70%;
}

.category-filter {
  margin-left: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: grid;
}


.multiselect {
  margin-top: 10px;
  width: var(--category-filter-width);
  font-size: var(--category-filter-text-size);
  color: #757575;
  display: inline;
  margin-left: 10px;
  border-radius: 10px;
  height: var(--category-filter-height);
  overflow: scroll;
}

.multiselect::-webkit-scrollbar {
  display: none;
}

.multiselect__input {
  font-size: var(--category-filter-text-size);
  outline: none;
  border: none;
}

.multiselect__input:focus::-webkit-input-placeholder {
  transition: text-indent 0.5s 0.5s ease; 
  text-indent: 0%;
  opacity: 1;
}

.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
  color: #fff;
  line-height: 1;
  background: #777;
  margin-bottom: 5px;
  max-width: 100%;
  text-overflow: ellipsis;

  font-size: var(--category-pill-text-size);
}

.multiselect__content {
  margin-top: 15px;
  position: absolute;
  list-style: none;
  padding-inline-start: 0px;
}

.multiselect__element {
  display: flex;
  flex-grow: -1;
}

.multiselect__option {
  color: #555;
  cursor: pointer;
  background: #fff;
  width: calc(var(--category-filter-width) - 25px);
  margin-left: -10px;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  transition: 0.4s;

  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.multiselect__option:hover {
  background:  rgba(170, 170, 170, 0.9);;
  
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  transition: 0.4s;
}

.multiselect__option--selected {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  border-radius: 8px;
  background: #777;
  color: #fff;
}
</style>
