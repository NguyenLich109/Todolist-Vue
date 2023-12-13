<template>
  <div class="w-full bg-[#f5f5f5] ">
    <Navbar />
    <div class="mt-[56px] px-[48px] py-[32px]">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style></style>
