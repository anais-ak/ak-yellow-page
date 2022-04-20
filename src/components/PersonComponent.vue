<template>
  <div class="rounded overflow-hidden shadow-lg max-w-xs cursor-pointer">
    <div v-if="area" class="w-full orange text-white font-bold py-2">{{ area }}</div>
    <img
      class="w-full"
      src="https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png"
      alt="Profile Picture"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
      <div class="text-xl mb-2">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonComponent",
  props: {
    name: String,
    title: String,
    area: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orange {
  background: #ff6400ff;
}
</style>
