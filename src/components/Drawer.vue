<template>
<div>
  <Menu @click="showDrawer" class="h-[20px] w-[20px] cursor-pointer"></Menu>
  <a-drawer :width="300" :placement="'top'" :open="open" @close="onClose">
    <router-link @click="onClose" to="/todo" ><p class="px-2 py-2 bg-slate-300 border rounded-md font-semibold text-md">To do</p></router-link>
  </a-drawer>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Menu from '../assets/icons/Menu.vue';

const open = ref<boolean>(false);

const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
</script>