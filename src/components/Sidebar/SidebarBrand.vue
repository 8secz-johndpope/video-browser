<template>
  <div class="brand-name">
    <h1>YouTube</h1>
  </div>
</template>

<script>
export default {
  name: "SidebarBrand"
};
</script>

<style lang="scss">
@import "../../assets/styles/common.sass";
.brand-name {
  background-color: $pink;
  color: $white;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.brand-name h1 {
  font-weight: 600;
  font-size: 1.1rem;
  background-color: $pink;
}

</style>