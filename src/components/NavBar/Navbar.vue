<script setup>
import Avatar from './Avatar.vue'
import { ChevronDoubleLeftIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import Navegation from './Navegation.vue';

const sizeNav = ref(true)
function reduceSizeNav(e) {
  sizeNav.value = sizeNav.value ? false : true
  // console.log(e.target.classList)
  // e.target.classList.toggle('rotate-180')
}
</script>

<template>
  <aside
    class="flex bg-zinc-800 md:flex-col h-16 w-full md:h-full md:w-fit p-2 rounded-md justify-between items-center md:items-start gap-4"
    @mouseenter="sizeNav=false" @mouseleave="sizeNav=true">

    <header class="flex gap-3 p-2 md:w-full align-middle justify-center">
      <img class="h-9 w-9 md:h-7 md:w-7" src="/vite.svg" alt="Logo">
      <h2 :class="['text-sky-400 font-bold text-lg hidden md:block transition-all',{'md:hidden':sizeNav}]">ViteTodo</h2>
    </header>

    <section :class="['hidden md:flex w-full', {'justify-end': !sizeNav, 'justify-center': sizeNav}]">
      <div class="p-2 rounded hover:bg-zinc-700 flex justify-center cursor-pointer"
        @click="sizeNav = sizeNav ?false :true">
        <ChevronDoubleLeftIcon
          :class="['text-center h-7 w-7 transition-all text-neutral-300', {'rotate-180': sizeNav}]" />
      </div>
    </section>



    <!--  -->

    <Navegation :hidden-nav="sizeNav" />



    <!--  -->


    <Avatar :hidden-nav="sizeNav" />

  </aside>

</template>