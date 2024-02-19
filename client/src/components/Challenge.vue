<template>
  <div class="challenge">
    <div class="wrapper">
      <h1>To do</h1>
      <p v-if="state === 'loading'">Loading...</p>
      <p v-else-if="state === 'failed'">Error fetching data</p>
      <div 
        v-else-if="state === 'loaded'"  
        class="items"
      >
        <TaskDisplay
          v-for="task in tasks"
          :key="task.tasksId"
          :task="task"
        />

        <TaskInput v-on:new-task = "handleNewTask"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskDisplay from './TaskDisplay.vue';
import TaskInput from './TaskInput.vue';
import { ref } from 'vue';
/* composables */
import { useGetTasks } from '../composables/useGetTasks';
import test from './TaskInput.vue';
import type { Task } from '@/utils/types';
const { tasks, state } = useGetTasks();
function handleNewTask(newTask: Task )
{
  tasks.value.push(newTask);
}
console.log(test);
</script>

<style lang="scss">
.challenge {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 350px;

    h1 {
      padding: 0px 20px;
      color: var(--color-heading);
      font-weight: 800;
      font-size: var(--fs-5);
    }
    
    .items {
      padding-top: var(--space-3);
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }
  }
}
</style>
