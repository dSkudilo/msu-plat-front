import { ref, computed } from 'vue'

export default function useDataTable (itemsPerPage) {
  const inventoryStartIndex = ref(0)
  const inventoryEndIndex = ref(itemsPerPage)

  const headers = [
    { text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name' },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
    { text: 'Calcium (%)', value: 'calcium' },
    { text: 'Magnesium (%)', value: 'magnesium' },
    { text: 'Potassium (%)', value: 'potassium' }
  ]

  const desserts = generateRandomItems()

  function generateRandomItems () {
    const items = []
    for (let i = 0; i < 100000; i++) {
      items.push({
        name: generateRandomString(),
        calories: getRandomNumber(100, 500),
        fat: getRandomFloat(0, 20),
        carbs: getRandomNumber(0, 50),
        protein: getRandomFloat(0, 10),
        iron: getRandomNumber(0, 5),
        calcium: getRandomNumber(0, 15),
        magnesium: getRandomNumber(0, 15),
        potassium: getRandomNumber(0, 15)
      })
    }
    return items
  }

  function generateRandomString () {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function getRandomFloat (min, max) {
    return (Math.random() * (max - min) + min).toFixed(1)
  }

  const displayedItems = computed(() => desserts.slice(inventoryStartIndex.value, inventoryEndIndex.value))

  function scrollToRow (index) {
    const row = table.rows[index]
    if (row) {
      row.scrollIntoView(true)
    }
  }

  function loadMore (entries, observer, isIntersecting) {
    if (isIntersecting) {
      const indexesLeft = desserts.length - inventoryEndIndex.value
      if (indexesLeft < itemsPerPage) {
        inventoryStartIndex.value = inventoryEndIndex.value + indexesLeft - itemsPerPage
        inventoryEndIndex.value = desserts.length
      } else {
        inventoryStartIndex.value += itemsPerPage
        inventoryEndIndex.value += itemsPerPage
      }
      scrollToRow(23)
    }
  }

  function loadLess (entries, observer, isIntersecting) {
    if (isIntersecting) {
      if (inventoryStartIndex.value < itemsPerPage) {
        inventoryStartIndex.value = 0
        inventoryEndIndex.value = itemsPerPage
      } else {
        inventoryStartIndex.value -= itemsPerPage
        inventoryEndIndex.value -= itemsPerPage
      }
      scrollToRow(5)
    }
  }

  return {
    displayedItems,
    inventoryStartIndex,
    inventoryEndIndex,
    headers,
    canShow: computed(() => displayedItems.value.length > itemsPerPage),
    loadMore,
    loadLess
  }
}
