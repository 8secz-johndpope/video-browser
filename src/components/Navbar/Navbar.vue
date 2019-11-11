<template>
    <div class="navbar-top">
       <div class="navbar-top-elements">
           <ul class="navigation-menu">
               <li><button class="btn">Home</button></li>
               <li><button class="btn selected">Top Videos</button></li>
               <li><button class="btn">Categories</button></li>
           </ul>
       </div>
       <div><SearchBar @termChange="onTermChange"> </SearchBar></div>
       <div>User</div>
    </div>
</template>

<script>
import SearchBar from '../SearchBar'
export default {
    name: 'Navbar',
    components: {
        SearchBar
    }
};
</script>

<style scoped>
    .navbar-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        background-color: transparent;
        border-bottom: 1px solid #ddd;
    }

    .navigation-menu {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
    }

    .btn{
        color: #888;
        border: 1px solid transparent;
        padding: 6px 12px;
        margin-right: 4px;
    }

    .btn:hover,
    .btn.selected {
        border: 1px solid #ED5060;
        background-color: #ED5060;
        border-radius: 18px;
        color: #fff;
        cursor: pointer;
    }
</style>