export function useRoutes () {
  const routes = ref([
    {
      name: 'Общее',
      icon: 'mdi-view-dashboard',
      children: [
        {
          name: 'Главная',
          routeName: 'index'
        },
        {
          name: 'Курсы',
          routeName: 'courses'
        }
      ]
    },
    {
      name: 'Управление',
      icon: 'mdi-cogs',
      children: [
        {
          name: 'Курсы',
          routeName: 'courses'
        },
        {
          name: 'Пользователи',
          routeName: 'courses'
        }
      ]
    }
  ])
  const open = ref([])
  return {
    routes,
    open
  }
}
