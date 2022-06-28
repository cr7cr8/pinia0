<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  {{ aaa.counter }}
  <button @click="aaa.increment()">+</button>
  {{ aaa.doubleCount }}
  <br />
  {{ counter }}
  <br />
  {{ doubleCount }}
  <button @click="aaa.$reset()">reset</button>
  <a-button type="primary" @click="alertFn(new Date())">Primary Button</a-button>
</template>

<script >
import HelloWorld from "./components/HelloWorld.vue";
import { useCounterStore } from "./store";
import { storeToRefs } from "pinia";
import { Button, message } from "ant-design-vue";
export default {
  name: "App",
  components: { HelloWorld },

  // setup() {
  //   const aaa = useCounterStore();
  //   aaa.$reset;
  //   const { counter, doubleCount } = storeToRefs(aaa);
  //   console.log("====", counter, doubleCount);

  //   return {
  //     aaa,
  //     counter,
  //     doubleCount,
  //   };
  // },
};
</script>

<script setup>
  const aaa = useCounterStore();
  aaa.$reset;
  const { counter, doubleCount } = storeToRefs(aaa);
  console.log("====", counter, doubleCount);

  const alertFn = function(msg){alert(msg)}

</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
