<template>
  <div>{{ studentTasks }}</div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import { useTasksAPIStore } from "~~/stores/tasksAPI";

// const state = reactive({
//   count: 17,
// });

const TasksList = useTasksAPIStore();
console.log("TasksList:", TasksList);

const getStudentLists = async () => {
  const response = await TasksList.listStudentTasks();
  console.log("Response:", response);
  return response;
};

onMounted(() => {
  getStudentLists();
});

const studentTasks = reactive(TasksList);
</script>

<style scoped></style>
