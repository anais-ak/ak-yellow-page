<template>
  <div id="app">
    <div v-if="!isShowingTree">
      <div class="flex justify-center">
        <img
          alt="Ankorstore logo"
          src="https://www.rebranding.sandbox.ankorstore.com/images/logo/logo-black.svg"
        />
      </div>
      <div>
        <h1 class="text-center text-4xl my-5 mb-10">Yellow Pages</h1>

        <div class="flex justify-evenly my-3">
          <PersonComponent name="Nico d’Audiffret" title="Co-founder & CEO" />
          <PersonComponent name="Nicolas Cohen" title="Co-founder & CEO" />
          <PersonComponent name="Jessica Atlan" title="Chief of Staff" />
        </div>
        <div class="flex justify-evenly my-12 mx-10 gap-x-3">
          <PersonComponent name="Fanny Ponce" title="VP Market" area="Market" />
          <PersonComponent
            name="Nico Sitter"
            title="Head of Growth"
            area="Growth"
          />
          <PersonComponent
            name="Pierre Luc Joffre"
            title="Finance Director"
            area="Finance"
          />
          <PersonComponent
            name="Thomas Lombard"
            title="Strategic Project Director"
            area="Ankorstart"
          />
          <PersonComponent
            name="Nathalie Lambert"
            title="VP Legal & Compliance"
            area="Legal"
          />
          <PersonComponent
            name="Pilou Lacoste"
            title="Co-Founder & CBO"
            area="Brand"
          />
          <PersonComponent
            name="Camille Vaisse"
            title="Head of Ops"
            area="Ops"
          />
          <PersonComponent name="Thomas Pueyo" title="CPO" area="Product" />
          <PersonComponent
            name="Lachlan Laycock"
            title="CTO"
            area="Tech"
            @click.native="handleClick"
          />
          <PersonComponent name="Johann Vivier" title="VP People" area="HR" />
        </div>
      </div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <ModalComponent 
        :show="showModal"
        @close="showModal = false"
        titleContent="Hiya">
      </ModalComponent>
    </div>

    <TreePage v-if="isShowingTree" />
  </div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'
import PersonComponent from "./components/PersonComponent.vue";
import TreePage from "./TreePage.vue";

export default {
  name: 'HomePage',
  components: {
    ModalComponent,
    PersonComponent,
    TreePage
  },
  data() {
    return {
      showModal: false,
      isShowingTree: false
    }
  },
  methods: {
    handleClick() {
      console.log("test");
      this.isShowingTree = true;
    },
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
