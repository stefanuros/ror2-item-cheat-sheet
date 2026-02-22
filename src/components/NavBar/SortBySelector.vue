<template>
  <div class="sort-by">
    <p class="sort-by-label" unselectable="on">Sort By</p>
    <multiselect
      placeholder="None"
      class="sort-by-select"
      id="sort-by-select"
      name="sort-by-select"
      v-model="sortBy"
      :options="sortOptions"
      :searchable="false"
      :multiple="false"
      :close-on-select="true"
      :preselect-first="true"
      label="name"
      track-by="value"
    >
    </multiselect>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Multiselect } from "vue-multiselect";
import { SortType } from "../../data/constants";

const sortOptions = Object.entries(SortType).map((entry) => {
  return {
    name: entry[1],
    value: entry[0],
  };
});
sortOptions.reverse();

export default {
  name: "SortBySelector",
  components: { Multiselect },
  data() {
    return {
      sortBy: null,
      sortOptions,
    };
  },
  methods: {
    ...mapMutations(["updateSortByState"]),
  },
  watch: {
    sortBy(sort) {
      this.updateSortByState(SortType[sort.value]);
    },
  },
};
</script>

<style>
.sort-by-select {
  --sort-by-select-height: 40px;
  --sort-by-select-width: 70px;
  --sort-by-select-text-size: 100%;
  --sort-by-label-size: 110%;
}

.multiselect__tags {
  height: var(--sort-by-select-height);
}

.multiselect__single {
  border: 2px #96a6a6 solid;
  border-radius: 10px;
  padding: 4px 8px;
  margin-left: 2px;
  top: 10px;
  position: relative;
}

.multiselect__single:hover {
  background: rgba(190, 190, 190, 0.25);
  transition: background-color 0.25s ease;
}

.sort-by {
  margin-left: 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
}

.sort-by-label {
  display: inline;
  padding-left: 10px;
  font-size: var(--sort-by-label-size);
  color: darkGrey;
  margin: auto;

  color: #757575;

  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

.sort-by-select {
  height: var(--sort-by-select-height);
  background: white;

  font-size: var(--sort-by-select-text-size);
  color: #757575;

  border-radius: 10px;
}

.sort-by .multiselect {
  padding-left: 5px;
  margin-right: 5px;
  width: var(--sort-by-select-width);
  height: var(--sort-by-select-height);
  font-size: var(--sort-by-select-text-size);
  color: #757575;

  display: inline;
  overflow: hidden;

  margin-left: 0px;
  border-radius: 10px;
}

.sort-by .multiselect__single {
  cursor: pointer;
}

.sort-by .multiselect__input {
  position: relative;
  display: block;

  font-size: var(--sort-by-select-text-size);
  outline: none;
  border: none;
}

.sort-by .multiselect__content {
  position: absolute;
  margin-top: 15px;
  list-style: none;
  padding-inline-start: 0px;
}

.sort-by .multiselect__element {
  display: flex;
  flex-grow: -1;
  margin-left: 20px;
}

.sort-by .multiselect__option {
  color: #555;
  cursor: pointer;
  background: #fff;
  width: calc(var(--sort-by-select-width) - 25px);
  margin-left: -10px;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  transition: 0.4s;

  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.sort-by .multiselect__option--selected {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  border-radius: 8px;

  background: #777;
  color: #fff;
}
</style>
