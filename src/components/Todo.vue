<template>
  <div class="task-person">
    <div class="user">
      <a-divider orientation="left" orientation-margin="0px">
        <span class="font-[500] text-[1.1rem]">User</span>
      </a-divider>
      <a-select
        v-model="value"
        show-search
        placeholder="Select a person"
        style="width: 200px"
        :options="options"
        @change="handleChange"
      ></a-select>
    </div>
    <ListTask
      :isLoading="isLoading"
      :tasks="tasks"
      :numberCompleted="numberCompleted"
      :keyTask="keyTask"
      @onComplete="onComplete"
    />
  </div>
</template>

<script lang="ts" setup>
import type { SelectProps } from "ant-design-vue";
import { ref, onMounted, computed, watch,watchEffect } from "vue";

import type { typeTask, typeStorageTask } from "../types";
import ListTask from "./ListTask.vue";
import { filterUser,filterDetail} from "../utils/filterUser";
import {getTaskUser} from '../redux/Store'


const value = ref<string | undefined>(undefined);
const options = ref<SelectProps["options"]>([]);
const tasks = ref<typeTask[]>([]);
const storageBin = ref<typeStorageTask[]>([]);
const isLoading = ref<boolean>(false);
const keyTask = ref<number>();
const numberCompleted = ref<number>();

const handleChange = (id: number) => {
  isLoading.value = true;
  const checkTaskStorage = filterUser({ id, data: storageBin.value });
  if (!checkTaskStorage) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        isLoading.value = false;
        tasks.value = result;
        storageBin.value.push({ key: id, storage: result });
      })
      .catch((error) => {
        isLoading.value = false;
        console.error("Error fetching data:", error);
      });
  } else {
    isLoading.value = false;
    tasks.value = checkTaskStorage.storage;
  }
};

const onComplete = (task:typeTask) => {
  keyTask.value = task.id
  if(!!task){
    const {searchTaskUser,searchTaskDetail } = filterDetail({idUser:task.userId, id: task.id, data:storageBin.value})
    searchTaskDetail.completed = true;
  }
};

// watch(
//   tasks,
//   (newTasks) => {
//     newTasks.sort((a, b) => {
//       return a.completed ? 1 : -1;
//     });
//     numberCompleted.value = newTasks.filter(
//       (task) => task.completed === true
//     ).length;

//     console.log("helo")
//   },
//   { deep: true }
// );

watchEffect(() => {
  tasks.value.sort((a, b) => {
      return a.completed ? 1 : -1;
    });
    numberCompleted.value = tasks.value.filter(
      (task) => task.completed === true
    ).length;
})

onMounted(async () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      options.value = result.map((res: any) => {
        return {
          value: res.id,
          label: res.name,
        };
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
</script>
