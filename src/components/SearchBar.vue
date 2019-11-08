<template>
    <div class="search">
        <input @input="onInput" />
    </div>  
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('termChange', event.target.value);
        }
    }
};
</script>

<style scoped>
    input {
        width: 80%;
        border: 1px solid #ddd;
    }

    .search {
        text-align: center;
        margin: 0 12px;
        padding: 12px;
    }
</style>