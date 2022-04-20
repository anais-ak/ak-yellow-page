<template>
  <div id="app">
    <input type="search" class="searchbar" placeholder="Search..." />
    <button class="button" @click="refreshData">Refresh Data</button>
    <!-- <TreeSegment :tree="tree" /> -->
    <div v-if="tree">
      <div v-for="tribe in tree" :key="tribe.title">
        <TreeSegment :key="tribe.title" :tree="tribe" />
        <div if="tribe.groups" class="flex justify-evenly my-12 mx-10 gap-x-3">
          <TreeSegment
            v-for="sqd in tribe.groups"
            :tree="sqd"
            :key="sqd.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TreeSegment from "./components/TreeSegment.vue";

const getPeople = async () => {
  return await axios
    .get("http://localhost:3001");
};

export default {
  name: "TreePage",
  components: { TreeSegment },
  data() {
    return { 
      tree: [] 
    };
  },
  created() {
    console.log('---0');
    this.refreshData();
  },
  methods: {
    async refreshData() {
      console.log('---1');
      try {
        const tree = await getPeople();
        console.log('---', tree);
        this.tree = tree.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.button {
  position: absolute;
  right: 50px;
  top: 25px;
}

.searchbar {
  position: absolute;
  top: 20px;
  left: 50px;
  border: 1px solid grey;
  padding: 6px;
}
</style>
