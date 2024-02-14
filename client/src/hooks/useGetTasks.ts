export const useGetTasks = () => {
  const results = async () => {
    const data = await fetch('http://localhost:4000/tasks');
    return data;
  }

  return results
}