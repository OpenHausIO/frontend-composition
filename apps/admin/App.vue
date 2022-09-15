<script>
export default {
  name: "AdminApp",
  data() {
    return {};
  },
};
</script>


<template>
  <div>
    Hello from Admin app
    <button @click="$emit('changeApp', 'user')">User</button>
  </div>
</template>

<style>
</style>
