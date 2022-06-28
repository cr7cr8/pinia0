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

  <a-button type="dashed" @click="changeColor" :class="btnClass"
    >Primary Button</a-button
  >

  <div :class="cssObj">footer</div>
</template>

<script >
import HelloWorld from "./components/HelloWorld.vue";
import { useCounterStore } from "./store";
import { storeToRefs } from "pinia";
import { Button, message } from "ant-design-vue";
import { css } from "@emotion/css";
import { ref, computed, watchEffect } from "vue";
import facepaint from "facepaint";
const mq = facepaint([
  "@media(min-width: 600px) and (max-width: 899px)",
  "@media(min-width: 900px) and (max-width: 1199px)",
  "@media(min-width: 1200px) and (max-width: 1535px)",
  "@media(min-width: 1536px)",
]);

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

const cssObj = computed(() =>
  css([
    {
      fontSize: Math.max(counter.value, 10) + "px",
      color: "white",
      height: "200px",
    },

    mq({
      backgroundColor: [
        "rgba(200,10,10,0.2)",
        "rgba(200,10,10,0.4)",
        "rgba(200,10,10,0.6)",
        "rgba(200,10,10,0.8)",
        "rgba(200,10,10,1)",
      ],
    }),
  ])
);

const btnBackColor = ref("pink");
function changeColor() {
  //alert("xxx");
  btnBackColor.value = btnBackColor.value === "orange" ? "pink" : "orange";
}
const btnClass = computed(() => {
  console.log(btnBackColor.value);
  return css({
    color: "tomato",
    "&.ant-btn": { backgroundColor: btnBackColor.value },
  });
});

watchEffect(() => {
  console.log(btnClass);
});

// const btnClass = watchEffect(() => {
//   console.log(btnBackColor.value);
//   return css({
//     color: "tomato",
//     backgroundColor: btnBackColor.value,
//   });
// });
</script>


<script setup>
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
