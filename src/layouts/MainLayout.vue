<script setup>

import Navbar from '../components/NavBar/Navbar.vue';

</script>

<template>

  <section class="flex gap-2 bg-zinc-900 min-h-screen h-full md:h-screen p-2 flex-col md:flex-row">
    <Navbar />

    <main class="bg-zinc-800 rounded-md">
      <slot>

      </slot>

    </main>

  </section>

</template>