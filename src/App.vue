<template>
  <div><router-link :to="{ path: '/' }">Home</router-link></div>
  <router-view />
</template>

<script>
  export default {
    name: "App",
  };
</script>
