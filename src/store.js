import { defineStore } from "pinia"
import { ref, computed } from "vue"


// export const useCounterStore = defineStore("counter", {

//     state: () => {
//         return { counter: 0 }
//     },
//     actions: {
//         increment() {
//             this.counter++
//         }
//     },
//     getters: {
//         doubleCount: (state) => { return state.counter * 2 }
//     },


// })


export const useCounterStore = defineStore("counter", () => {

    const counter = ref(0)
    const increment = () => {
        counter.value++
    }
    const decrement = () => {
        counter.value--
    }
    const doubleCount = computed(() => {
        return counter.value * 2
    })


    return {
        counter,
        increment,
        decrement,
        doubleCount
    }

})


