<script setup>
import { Bars4Icon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import { pathList } from '../../utils/listOfPath'

defineProps({
  hiddenNav: Boolean
})

const showMobileList = ref(true)

const links = ref(pathList)

</script>

<template>

  <section class="text-neutral-300 flex items-center flex-col grow w-full gap-2 overflow-x-scroll">

    <div class=" md:hidden flex justify-center" @click="showMobileList =  showMobileList ?false :true"
      @mouseleave="showMobileList = true">
      <Bars4Icon class="transition-all w-7 h-7" />
      <div class=" bg-zinc-700 shadow-md top-16 z-10 fixed w-2/4 rounded flex flex-col items-center justify-center ">
        <router-link v-for="link in links" :class="{hidden: showMobileList}"
          class="p-2 m-2 flex gap-2 w-full items-center hover:bg-zinc-600 hover:text-sky-400"
          active-class="text-sky-300" :to="link.path">
          <component :is="link.icon" class="h-5 w-5" />
          <p class="text-xs grow">{{link.name}}</p>
        </router-link>
      </div>
    </div>

    <router-link v-for="link in links"
      class="hidden w-full md:flex py-1 px-2 rounded transition-all hover:bg-zinc-600 hover:text-sky-400 gap-3 justify-center items-center"
      :to="link.path" active-class="text-sky-300">
      <component :is="link.icon" class="h-5 w-5" />
      <p :class="['text-xs grow',{'hidden': hiddenNav}]">{{link.name}}</p>
    </router-link>

  </section>

</template>