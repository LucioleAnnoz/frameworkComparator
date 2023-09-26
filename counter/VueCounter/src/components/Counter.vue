<script setup>
import { ref } from "vue";
const counter = ref(0);
const buttonStyle =
  "px-10 py-8 bg-blue-700 text-white text-4xl hover:bg-cyan-500 transition-all duration-500 hover:outline rounded-xl";

const minusOne = () => (counter.value -= 1);
const addOne = () => (counter.value += 1);
</script>

<template>
  <div
    class="counter-container flex items-center justify-center gap-8 px-14 py-16 rounded-3xl bg-gradient-to-r from-purple-700 via-red-600 to-yellow-500"
  >
    <button :class="buttonStyle" @click="minusOne">-1</button>
    <p class="px-10 py-8 text-white text-6xl font-bold w-40 text-center">
      {{ counter }}
    </p>
    <button :class="buttonStyle" @click="addOne">+1</button>
  </div>
</template>

<style scoped>
.counter-container {
  background-size: 200% 200%;
  animation: wave 5s ease infinite;
}

@keyframes wave {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
