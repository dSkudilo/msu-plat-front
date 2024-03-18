export function useStateMain () {
  const CardsContent = ref([
    { slug: 'about', title: 'О нас', icon: 'mdi-delete', color: 'primary' },
    { slug: 'teachers', title: 'Преподователи', icon: 'mdi-delete', color: 'secondary' },
    { slug: 'promo', title: 'Акции', icon: 'mdi-delete', color: 'error'  },
    { slug: 'courses', title: 'Курсы', icon: 'mdi-delete', color: 'info' },
    { slug: 'contacts', title: 'Конаткты', icon: 'mdi-delete', color: 'success' },
  ])

  return {
    CardsContent
  }
}
