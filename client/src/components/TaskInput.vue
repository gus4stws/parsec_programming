<template>
  <div class="task-input">
    <input v-model="newTask" type="text" placeholder="Add new task...">
    <button v-on:click="addTask">ADD</button>
  </div>
</template>

<script setup lang="ts">

 import { ref } from 'vue';

const newTask = ref('');
const emit = defineEmits();
 function addTask()
{
  if (newTask.value.trim() !== '') {
    emit('new-task', { content: newTask.value});
    newTask.value = '';
  }
};

</script>

<style scoped lang="scss">
.task-input {
  color: var(--color-heading);
  font-size: var(--fs-3);
  font-weight: 500;
  box-shadow: var(--box-shadow-1);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-1);
  background-color: var(--theme-c-soft-grey);
  border: 1px solid;
  border-color: var(--theme-c-dark-grey);
}

input
{
  border: none;
  outline: none;
  color: var(--color-heading);
  font-size: var(--fs-3);
  font-weight: 500;
  background-color: var(--theme-c-soft-grey);
}

input::placeholder
{
  color: var(--color-heading);
}

button
{
  font-weight:750;
  color: var(--color-heading);
  background-color: var(--color-background);;
  border: none;
  outline: none;
  float: right;
  border-radius: var(--border-radius-1);
  padding: var(--space-1) var(--space-3);
  box-shadow: var(--box-shadow-1);
  font-size: var(--fs-3);
  letter-spacing: var(--space-1);
}

button:active
{
  color: var(--color-accent-one);
}
</style>