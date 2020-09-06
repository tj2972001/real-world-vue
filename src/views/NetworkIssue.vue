<template>
  <div>
    <h1>Oops!</h1>
    <h3>It looks like you are having some network issue</h3>
    <router-link :to=" { name:'event-list' } ">Or go back to home</router-link>
  </div>
</template>

<script>
export default {}
</script>
