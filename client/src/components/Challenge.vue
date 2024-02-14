<template>
  <div class="challenge">
    <div class="wrapper">
      <h1>To do</h1>
      <div 
        v-if="results"  
        class="items"
      >
        <h1 
          v-for="item in results" 
          class="name"
          >{{ item }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const results = ref([
  "Create the front-end component",
  "test",
  "wasd"
]);

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
        font-weight: 500;
        box-shadow: var(--box-shadow-1);
        padding: var(--space-2) var(--space-3);
        border-radius: var(--border-radius-1);
      }
    }
  }
}
</style>
