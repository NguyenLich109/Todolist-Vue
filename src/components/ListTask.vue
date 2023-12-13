<template>
  <div class="tasks">
    <a-divider orientation="left" orientation-margin="0px">
      <span class="font-[500] text-[1.1rem]">Tasks</span>
    </a-divider>
    <div class="relative">
      <div v-if="isLoading" class="absolute w-full h-full bg-slate-50">
        <a-spin class="absolute left-[49.2%] top-[40%]" />
      </div>
      <a-list bordered :data-source="tasks" class="h-[500px] overflow-auto">
        <template #renderItem="{ item }">
          <a-list-item class="flex items-center justify-between">
            <div class="flex items-center">
              <span class="mr-2">
                <Warning v-if="!item.completed" class="h-4 w-4"></Warning>
                <Success v-else class="h-4 w-4"></Success>
              </span>
              {{ item.title }}
            </div>
            <a-button
              @click="$emit('onComplete',item)"
              v-if="!item.completed"
              class="button-done"
              size="small"
              :loading="item.id === keyTask"
            >
              <span class="text-[0.8rem]">Mark Done</span>
            </a-button>
          </a-list-item>
        </template>
      </a-list>
    </div>
    <div class="mt-[12px] text-[0.9rem]">
      <span>Done {{ numberCompleted }}/{{ tasks.length }} tasks</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["tasks", "isLoading", "numberCompleted", "keyTask"]);
defineEmits(["onComplete"]);
import { ref } from "vue";

import type { typeTask } from "../types";
import Warning from "../assets/icons/Warning.vue";
import Success from "../assets/icons/Success.vue";

</script>

<style scoped>
.button-done {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer !important;
  opacity: 1 !important;
}
</style>
