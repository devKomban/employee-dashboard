export const environment = {
  production: true,
  endPoints: {
    dashboard: {
      get_user: 'https://jsonplaceholder.typicode.com/users'
    },
    tasks: {
      get_user_tasks: 'https://jsonplaceholder.typicode.com/users/{userId}/todos'
    }
  }
};
