<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  data: () => {
    console.log("vue is installed");
    return {
      message: "hello vue"
    };
  }
};
</script>