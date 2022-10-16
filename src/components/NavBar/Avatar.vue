<script setup>
defineProps({
  hiddenNav: Boolean
})


</script>

<template>
  <footer class="hover:bg-zinc-700 p-2 md:w-full rounded transition-colors cursor-pointer shrink-0">
    <figure class="flex items-center gap-2 ">
      <img class="rounded-full h-9 w-9 border border-gray-700 "
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=640&q=80"
        alt="avatar">
      <p :class="['text-neutral-200 flex-1 text-start text-sm font-bold hidden md:block', {'md:hidden':hiddenNav}]">avatar
      </p>
    </figure>
  </footer>
</template>