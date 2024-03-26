export function useStateCourses () {
  const activeTab = ref(null)

  const modalOpen = ref(false)
  const lessonName = ref('')
  const lessonNumber = ref(null)

  const items = ref([
    { name: 'John', age: 30, gender: 'Male' },
    { name: 'Jane', age: 25, gender: 'Female' },
    { name: 'Doe', age: 40, gender: 'Male' },
    { name: 'John', age: 30, gender: 'Male' },
    { name: 'Jane', age: 25, gender: 'Female' },
    { name: 'Doe', age: 40, gender: 'Male' },
    { name: 'John', age: 30, gender: 'Male' },
    { name: 'Jane', age: 25, gender: 'Female' },
    { name: 'Doe', age: 40, gender: 'Male' },
    { name: 'John', age: 30, gender: 'Male' },
    { name: 'Jane', age: 25, gender: 'Female' },
    { name: 'Doe', age: 40, gender: 'Male' }
  ])
  const headers = [
    { title: 'Имя', value: 'имя' },
    { title: 'Возраст', value: 'age' },
    { title: 'Пол', value: 'gender' }
  ]
  const openModal = () => {
    modalOpen.value = true
  }

  return {
    lessonNumber,
    lessonName,
    items,
    headers,
    modalOpen,
    openModal,
    activeTab
  }
}
