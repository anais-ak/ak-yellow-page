<template>
  <div id="app">
    <div>
      <img class="text-center" alt="Ankorstore logo" src="https://www.rebranding.sandbox.ankorstore.com/images/logo/logo-black.svg">
      <h1 class="text-center text-xl mt-4">Thoughts and Posts</h1>

      <div class="flex flex-row">
        <div class="flex items-stretch">
          <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">01</div>
          <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">02</div>
          <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">03</div>
        </div>
      </div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <ModalComponent 
        :show="showModal"
        @close="showModal = false"
        titleContent="Hiya">
      </ModalComponent>
    </div>
  </div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'
export default {
  name: 'HomePage',
  components: {
    ModalComponent
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
