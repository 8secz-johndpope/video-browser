<template>
  <div class="sdbr">
    <SidebarBrand></SidebarBrand>
    <SidebarProfile></SidebarProfile>
    <div class="router_links">
      <ul class="sidebar_router">
        <li>
          <span class="fas fa-film"></span>
          Videos
        </li>
        <li>
          <span class="fas fa-file-signature"></span>
          Campaigns
        </li>
        <li>
          <span class="far fa-star"></span>
          Favorites
        </li>
        <li>
          <span class="fas fa-list"></span>
          Watchlist
        </li>
        <li @click="logout">
          <span class="fas fa-power-off"></span>
          Signout
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SidebarBrand from "./SidebarBrand";
import SidebarProfile from "./SidebarProfile";

export default {
  name: "Sidebar",
  components: {
    SidebarBrand,
    SidebarProfile
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/common.sass";
.sdbr {
   background: linear-gradient(
      rgba(29, 39, 51, 0.85),
      rgba(29, 39, 51, 0.85)
    ),
    url("https://images.unsplash.com/photo-1506422748879-887454f9cdff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80") !important;
}

.router_links {
  margin-top: 24px;
  background-color: transparent;
}

.sidebar_router {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.sidebar_router li {
  height: 45px;
  width: 100%;
  color: #999;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
}

.sidebar_router li span {
  margin-right: 12px;
  background-color: transparent;
}

.sidebar_router li:hover {
  background-color: $pink;
  color: $white;
}



</style>