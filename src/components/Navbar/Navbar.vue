<template>
  <div class="nvbar">
    <div class="nvbar-elements nvbar__buttons">
      <ul class="nvbar-menu">
        <li>
          <button class="btn">Home</button>
        </li>
        <li>
          <button class="btn selected">Top Videos</button>
        </li>
        <li>
          <button class="btn">Categories</button>
        </li>
      </ul>
    </div>
    <div>
      <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
    <div>
      <ul class="nvbar-menu">
        <li>
          <button class="btn btn-login">Log In / Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchBar from "../SearchBar";
export default {
  name: "Navbar",
  components: {
    SearchBar
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #EFF4F7;
}
.nvbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: transparent;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
  margin: 0;
  &__buttons {
     background-color: aquamarine;
  }
}

.nvbar-menu {
  display: flex;
  align-items: center;
  list-style: none;
}

.btn {
  color: #888;
  border: 1px solid transparent;
  padding: 6px 12px;
  margin-right: 2px;
}

.btn:hover,
.btn.selected {
  border: 1px solid #ed5060;
  background-color: #ed5060;
  border-radius: 18px;
  color: #fff;
  cursor: pointer;
}

.btn-login {
    border: 1px solid #888;
  border-radius: 18px;
  cursor: pointer; 
}
</style>