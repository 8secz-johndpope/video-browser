<template>
  <div class="search">
    <input v-model="term" placeholder="Search..." />
    <button class="btn-search" @click="onInput">
      <span class="fas fa-search"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      term: ""
    };
  },
  methods: {
    onInput: function() {
      const term = this.term;
      window.console.log(term);
      if (term.length > 3) {
        this.$emit("termChange", term);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/common.sass";
input {
  width: 90%;
  border: 1px solid #ddd;
  padding: 9px;
}

.search {
  width: 400px;
  text-align: center;
  margin: 0 12px;
  display: flex;
  align-items: center;
}

.btn-search {
  background: transparent;
  border: 1px solid #ddd;
  font-size: $font-m-l;
  color: $pink;
  padding: .5rem;
}
</style>