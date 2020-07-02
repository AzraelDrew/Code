<template>
  <div class="hello">
    <p>Server Status:{{status}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      status: "Critical"
    };
  }
};
</script>

<style>
</style>
