<template>
  <div id="app">
    <div
      v-if="tree.title"
      class="title rounded py-2 text-center text-2xl mx-10"
    >
      {{ tree.title }}
    </div>
    <div v-if="tree.people" class="flex justify-evenly my-12 mx-10 gap-x-3">
      <PersonComponent
        v-for="person in tree.people"
        :key="person.name"
        :name="person.firstName + ' ' + person.lastName"
        :title="person.title"
        :country_emoji="person.countryEmojy"
        @click.native="openModal(person)"
      />
    </div>
    <ModalComponent
      :show="showModal"
      @close="showModal = false"
      :profile="person"
    >
    </ModalComponent>
  </div>
</template>

<script>
import PersonComponent from "./PersonComponent.vue";
import ModalComponent from "./ModalComponent.vue";

export default {
  name: "HomePage",
  components: {
    PersonComponent,
    ModalComponent,
  },
  data() {
    return {
      person: {},
      showModal: false,
    };
  },
  props: {
    tree: Object,
  },
  computed: {},
  methods: {
    openModal(person) {
      this.showModal = true;

      this.person = {
        ...person,
        name: person.firstName + " " + person.lastName
      };
    },
  },
};
</script>

<style>
.title {
  background: #aeccf4;
}
</style>
