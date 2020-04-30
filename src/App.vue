<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ItemCard></ItemCard>
    <ItemCard></ItemCard>
    <ItemCard></ItemCard> -->
    <ItemView/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import ItemCard from './components/ItemCard.vue';
import ItemView from './components/ItemView.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ItemCard,
    ItemView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
