<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="bg-green-800 ">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code class="text-neutral-800">components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

</template>
