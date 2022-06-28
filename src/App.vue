<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  {{ aaa.counter }}
  <button @click="aaa.increment()">+</button>
    <button @click="aaa.decrement()">-</button>
  {{ aaa.doubleCount }}
  <br />
  {{ counter }}
  <br />
  {{ doubleCount }}
  <button @click="aaa.$reset()">reset</button>
  <a-button type="dashed" @click="alertFn(new Date())" class="btn"
    >Primary Button</a-button
  >
  <div :class="style">footer</div>
</template>

<script >
import HelloWorld from "./components/HelloWorld.vue";
import { useCounterStore } from "./store";
import { storeToRefs } from "pinia";
import { Button, message } from "ant-design-vue";
import { css } from "@emotion/css";
import { ref, computed } from "vue";
export default {
  name: "App",
  components: { HelloWorld },
};
</script>

<script setup>
const aaa = useCounterStore();
aaa.$reset;
const { counter, doubleCount } = storeToRefs(aaa);
console.log("====", counter, doubleCount);

const alertFn = function (msg) {
  alert(msg);
};

const style = computed(() =>
  css({
    background: "purple",
    fontSize: Math.max(counter.value, 10) + "px",
    color: "white",
  })
);
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
.btn {
  &.ant-btn {
    background-color: pink;
  }

  & span {
    color: orange;
  }
}
</style>
