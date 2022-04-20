<template>
  <div id="app">
    <h1 class="text-center text-4xl my-5">Tech team</h1>

    <PersonComponent
      name="Lachlan Laycock"
      title="CTO"
    />
  </div>
</template>

<script>
import PersonComponent from "./components/PersonComponent.vue";

export default {
  name: "HomePage",
  components: { PersonComponent },
  computed: {},
};
</script>

<style>
</style>
