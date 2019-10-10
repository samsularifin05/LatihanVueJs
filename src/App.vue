<template>
  <div id="app">
    <Login>
      <router-view></router-view>
    </Login>
  </div>
</template>

<script>
import Login from "@/components/Login";
  export default{
    components:{
      Login
    },
  }
</script>