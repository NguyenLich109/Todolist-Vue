<template>
  <div class="flex items-center pl-[16px] h-[56px] bg-[#fff] border-b-[1px] fixed top-0 w-full z-50">
    <span class="mr-2 hidden check-width"><Drawer /></span>
    <img class="h-[32px]" alt="" src="../assets//images/logoGeek.svg" />
    <router-link class="mx-[6px] check-width-text" to="/"
      ><span class="cursor-pointer text-base font-semibold"
        >Test</span
      ></router-link
    >
    <router-link class="px-[16px] py-[6px] check-width-text" to="/todo"
      ><span class="cursor-pointer text-base text-[#1677ff]"
        >To do</span
      ></router-link
    >
  </div>
</template>

<script lang="ts" setup>
import Drawer from './Drawer.vue';

</script>

<style scoped>
@media screen and (max-width: 768px){
  .check-width{
    display: block;
  }
  .check-width-text{
    display: none;
  }
}
</style>