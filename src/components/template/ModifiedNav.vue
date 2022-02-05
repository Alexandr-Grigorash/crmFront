<template>
<nav>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fa fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <router-link to="/leads" class="nav-link">Лиды</router-link>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <router-link to="/visits" class="nav-link">Визиты</router-link>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <router-link to="/analytics" class="nav-link">Аналитика</router-link>
    </li>
  </ul>
</nav>
</template>



<script>
export default {
  name: 'modified-nav',
}
</script>

<style>
nav{
  margin-left: 250px;
  border-bottom: 1px solid #dee2e6;
  z-index: 1034;
  background-color: #fff;
  transition: margin-left .3s ease-in-out;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0.5rem;
}

.navbar-nav{
  flex-direction: row;
  display: flex;
  -ms-flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-item{
  margin: 0;
  list-style: none;
}
.nav-link{
  color: rgba(0,0,0,.5);
  padding-right: 1rem;
  padding-left: 1rem;
  height: 2.5rem;
  position: relative;
  display: block;
  text-decoration: none;
}
.fa-bars:before {
  content: "\f0c9";
}
.fa {
  font-weight: 500;
  font-size: 17px;

}
</style>