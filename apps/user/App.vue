<script>
export default {
  name: "UserApp",
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  },
};

export const name = "userApp";
</script>


<template>
  <div>
    Hello from user app
    <button @click="$emit('changeApp', 'admin')">Admin</button>
  </div>
</template>

<style>
</style>
