<template>
    <div class="search">
        <input @input="onInput" placeholder="Search..." />
    </div>  
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            const term =  event.target.value;
            if (term.length > 3) {
                this.$emit('termChange', event.target.value);
            }       
        }
    }
};
</script>

<style scoped>
    input {
        width: 90%;
        border: 1px solid #ddd;
    }

    .search {
        width: 400px;
        text-align: center;
        margin: 0 12px;
    }
</style>