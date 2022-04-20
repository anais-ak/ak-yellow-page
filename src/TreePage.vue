<template>
  <div id="app">
    <input type="search" class="searchbar" placeholder="Search..." />
    <button class="button" @click="refreshData">Refresh Data</button>
    <TreeSegment :tree="tree" />
    <div v-if="tree.groups">
      <div v-for="tribe in tree.groups" :key="tribe.name">
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
import TreeSegment from "./components/TreeSegment.vue";

// if root has groups & people
//    display the group name
//    display the people (this will be the leader)
//    display the groups
// if root has only people
//    display the title
//    display the people

const mockData = [
  {
    title: "Tech Team",
    people: [
      {
        name: "Lachland Laycock",
      },
    ],
    groups: [
      {
        title: "Brands XP Tribe",
        people: [
          {
            name: "Nikita",
          },
        ],
        groups: [
          {
            title: "Brands Network Squad",
            people: [
              { name: "Person1" },
              { name: "Person1" },
              { name: "Person1" },
              { name: "Person1" },
              { name: "Person1" },
              { name: "Person1" },
            ],
          },
          {
            title: "Brands Catalog Squad",
            people: [
              { name: "Person2" },
              { name: "Person2" },
              { name: "Person2" },
              { name: "Person2" },
              { name: "Person2" },
              { name: "Person2" },
            ],
          },
        ],
      },
    ],
  },
];

export default {
  name: "TreePage",
  components: { TreeSegment },
  data() {
    return { tree: mockData[0] };
  },
  methods: {
    refreshData() {
      this.tree = mockData[0];
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
