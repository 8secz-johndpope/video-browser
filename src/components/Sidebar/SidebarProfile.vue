<template>
  <div class="details">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="details__avatar" />
    <span class="details__name">Alexandra</span>
    <span class="details_surname">Barka</span>
    <button class="btn btn_details_edit">Edit Profile</button>
  </div>
</template>

<script>
export default {
  name: "SidebarProfile"
};
</script>

<style lang="scss">
@import '../../assets/styles/common.sass';

.details {
  display: flex;
  color: $white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.details__avatar {
  border-radius: 50%;
  width: 50px;
  height: auto;
  margin-top: 38px;
}

.details__name {
  letter-spacing: 0.15rem;
  margin-top: 12px;
  background-color: transparent;
}
.details_surname {
  text-transform: uppercase;
  background-color: transparent;
}

.btn {
  border: 1px solid #666;
  border-radius: 18px;
  color: #666;
  margin-top: 8px;
  font-size: 12px;
  padding: 2px 24px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  background-color: transparent;
}

.btn:hover {
  background-color: #666;
  color: $white;
  bottom: 0;
  transition: all 0.5s ease-out;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.28);
}
</style>