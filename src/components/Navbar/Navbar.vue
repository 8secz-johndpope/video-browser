<template>
    <div class="navbar-top">
       <div>Navigation</div>
       <div>Search</div>
       <div>User</div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
};
</script>

<style scoped>
    .navbar-top {
        display: flex;
        width: 100%;
        height: 50px;
        background-color: transparent;
        border-bottom: 1px solid #ddd;
    }
</style>