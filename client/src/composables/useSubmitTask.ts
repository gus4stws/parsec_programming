import api from '../utils/axios';
import { ref } from 'vue';
import type { Task } from '../utils/types';

export const useSubmitTask = (task: Task) => {
  const state = ref<'uploading' | 'failed' | 'uploaded'>('uploading');
  const submitTasks = (newTask: Task) => {
    api.post<Task>('/mission-two', newTask)
      .then((response) => {
        state.value = 'uploaded';
      })
      .catch((error) => {
        console.error(error);
        state.value = 'failed';
      });
  };
  submitTasks(task);

  return { submitTasks };
};
