<template>
  <div class="challenge">
    <div class="wrapper">
      <h1>To do</h1>
      <div class="items">
        <h1 
          v-for="item in test" 
          class="name"
          >{{ item }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetTasks } from "@/hooks/useGetTasks";

const data = useGetTasks();

data()

const test = [
  "Hola",
  "Test",
  "Wasdwadwad"
]
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
      
      .name {
        color: var(--color-heading);
        font-size: var(--fs-3);
        font-weight: 400;
        box-shadow: var(--box-shadow-1);
        padding: var(--space-2) var(--space-3);
        border-radius: var(--border-radius-1);
      }
    }
  }
}
</style>
