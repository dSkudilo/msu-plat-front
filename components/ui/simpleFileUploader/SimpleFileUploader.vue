<template>
  <div class="file-drop prima" @drop="handleDrop" @dragover.prevent @click="handleClick">
    <input ref="fileInput" type="file" style="display: none" accept="image/*" @change="handleFileInputChange">
    <div v-if="!file" class="drop-area">
      <p>Перетащите файлы сюда или нажмите, чтобы выбрать</p>
    </div>
    <div v-else class="preview">
      <img :src="file" alt="Preview" class="preview-image">
      <button class="delete-button" @click="deleteFile">
        Удалить
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const file = ref(null)
const fileInput = ref(null)

const handleDrop = (event) => {
  event.preventDefault()
  const fileData = event.dataTransfer.files[0]
  readFile(fileData)
}

const handleClick = () => {
  fileInput.value.click()
}

const handleFileInputChange = (event) => {
  const fileData = event.target.files[0]
  readFile(fileData)
}

const readFile = (fileData) => {
  if (fileData && fileData.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = () => {
      file.value = reader.result
    }
    reader.readAsDataURL(fileData)
  } else {
    alert('Выберите изображение!')
  }
}

const deleteFile = () => {
  file.value = null
}
</script>

<style scoped lang="scss">
.file-drop {
  width: 100%;
  height: 100%;
  border: 2px dashed rgb(var(--v-theme-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.drop-area {
  text-align: center;
}

.preview {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  &-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .delete-button {
    position: absolute;
    margin-top: 10px;
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    z-index: 2;
    cursor: pointer;
  }
}
</style>
