<template>
  <header>
    <div class="container">
    <div class="logo">
      <img src="" alt="">
    </div>
    <nav>
      <router-link to="/leads"><div class="item">Лиды</div></router-link>
      <router-link to="/visits"><div class="item">Визиты</div></router-link>
      <router-link to="/"><div class="item">Аналитика</div></router-link>
    </nav>
    <ui-button>Войти</ui-button>
    </div>
  </header>

</template>
<script>
import UiButton from "../UI/UIButton";
export default {
  components: {UiButton}
}
</script>
<style scoped>
header{
  background: #fff;
  width: 100%;
  box-shadow: 0px 5px 10px rgb(0 0 0 / 10%);

}
.container{
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{

}
.logo img{
  width: 200px;
}

nav{

}
nav a{
  text-decoration: none;
}
nav .item{
  background: #2b7bc3;
  display: inline-flex;
  padding: 10px ;
  margin: 0 5px;
  color: #fff;
}

</style>