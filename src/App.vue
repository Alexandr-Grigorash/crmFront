<template>
  <!--<Header></Header>-->
  <ModifiedNav></ModifiedNav>
  <ModifiedAside></ModifiedAside>
  <div class="app">
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>


import ModifiedAside from "@/components/template/ModifiedAside";
import ModifiedNav from "@/components/template/ModifiedNav";

export default {
  components:{
     ModifiedAside, ModifiedNav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container{
  width: 90%;
  margin: 0 auto;
  position: relative;
  padding: 20px 10px 20px 10px;
}
body{
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
.content-wrapper{
  transition: margin-left .3s ease-in-out;
  margin-left: 250px;
  height: 100%;
  background-color: #f4f6f9;
  box-sizing: border-box;
}
</style>

