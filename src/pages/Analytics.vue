<template>
  <section class="content-header">
    <h1>Посещаемость сайта</h1>
  </section>
  <section class="content">
    <div class="card">
      <div class="card-header">
        <input type="date" v-model="startingDate">
        <input type="date" v-model="finalDate">
        <button type="submit" @click="fetchAnalytics()">Поиск</button>
      </div>
      <div class="card-body">
        <div class="grid">
          <div class="grid-container" style="display: block; ">
            <h2>Посещаемость</h2>
            <LineChartCastom :key="visitsInDay" :params="visitsInDay"></LineChartCastom>
          </div>
          <div class="grid-container">
            <div class="grid-container-50">
              <h2>Устройства</h2>
              <PieChartCastom :key="device" :params="device"></PieChartCastom>
            </div>
            <div class="grid-container-50">
              <h2>По дням</h2>
              <PieChartCastom :key="department" :params="department"></PieChartCastom>
            </div>
          </div>
          <div class="grid-container">
            <div class="grid-container-50">
              <h2>Стадии</h2>
              <PieChartCastom :key="stage" :params="stage"></PieChartCastom>
            </div>
            <div class="grid-container-50">
              <h2>"Экраны"</h2>
              <PieChartCastom :key="scrn" :params="scrn"></PieChartCastom>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div ref="observer" class="observer"></div>
  </section>
</template>

<script>

import PieChartCastom from "@/components/PieChartCastom";
import LineChartCastom from "@/components/LineChartCastom";
import axios from 'axios';

export default ({
  components: {
    PieChartCastom,
    LineChartCastom

  },
  data() {
    return {
      visitsInDay: [],
      device: [],
      department: [],
      stage: [],
      scrn: [],
      startingDate:0,
      finalDate:0,
    }
  },
  methods: {

    async login() {
      try {
        const requestOptions = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            email: 'griga@xaker.ru',
            password: 'griga358'
          })
        };
        //const response = await fetch("http://734183-cs93484.tmweb.ru/api/login", requestOptions);
        const response = await fetch("http://127.0.0.1:8000/api/login", requestOptions);
        const data = await response.json();
        console.log(data.token);
        return data.token;
      } catch (e) {
        alert('error fetchLeads');
      }
    },

    async fetchAnalytics() {
      //console.log(this.startingDate)
      let token;
      //token = await this.login();
      token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWQxOTBlMjFhZjNlN2FhY2UxMzAyYTAxYTFmNmJhNGMwY2Q5OWQ0M2NiYmJiNGJiNzE0MWYzYTg5YTFiNjgzZTIzMGRhNzkwNWZhZDI3ZDQiLCJpYXQiOjE2NDM1NjgwNzEuOTc1NTc0LCJuYmYiOjE2NDM1NjgwNzEuOTc1NTgyLCJleHAiOjE2NzUxMDQwNzEuOTA2MTc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.XiEKBZe-Fhzcff5jHr4_gO5D7ZmCqjSajx2Mes9Bj2jZXAORcrg-XrAo7eR6dyMk5jSB5KgfWhFwBqufy1d_09S5UI9SAqDpFj4cXG4ECXL2prjEDRs73EgIul7pp8HWPHImRctCIICE569bJYWACvQezAuY-DX0VI6s9ZyWqvqYj_JnhkyLkFQ3ZwculJPdHcsYDx7gFmKQmL8NVpbwVsJ8nv3rIEyU84Ie2ohWqOjyNdax-kVMlVFdUWKQERDqxKQZB7LtZgvGTeHAGHVPsThX0PCmnXyKcLVZDDtZzahZbfP6tGMCui9nZNtlSsBQj3YXlmeYhovZQy3ef6J02qpySIrNBWLTah908H8SApf4qof4LFbxevC2Lcg_aRI-jPIauVWXr8PI865r68vs1pttZbaodWNa_FBcTGmYXrAylaurnS4VXV-f_tUOnakDt9Iy-Bc5k8xLfjjCZE-JwUGprXasVPy5ENLguf5scFWBNJ_2WN2zuPXLTVFoxuclkW4zKQMfiq0M9Qb_ygGoBNLLQGoLgIzizyg3vTVKxyzAh0eBlpKZxxBSxtmNJTaka1EqwuaVZvR9DWYZKraAJYt382MgXtNFsZSLolfUe4YB9Uzw1X6gji2hWw9GAp2jaTPqh3Nis5it3sv0Ha9dEuombG2bmRATyyCejiXwihs";

      try {
        // let authorization = "Authorization: Bearer "+token;
        //const response = axios.get('http://734183-cs93484.tmweb.ru/api/analytics', {
        const response = axios.get('http://127.0.0.1:8000/api/analytic/', {
          headers: {
            Authorization: 'Bearer ' + token
          },
          params: {
            startingDate: this.startingDate,
            finalDate: this.finalDate
          },
        })
        let result = (await response).data;
        this.device = result.device;
        this.visitsInDay = result.visits;
        this.department = result.department;
        this.stage = result.stage;
        this.scrn = result.screen;
      } catch (e) {
        alert('error fetchVisits');
      }
    },

  },
  mounted() {
    //this.fetchAnalytics();
  },

})
</script>

<style>
.content-header {
  padding: 15px 0.5rem;
}

.content-header h1 {
  font-size: 1.8rem;
  margin: 0;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}

.content {
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.content .card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, .125);
  border-radius: 0.25rem;

}

.content .card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, .125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: 0;
}

.content .card-header:first-child {
  border-radius: calc(.25rem - 0) calc(.25rem - 0) 0 0;
}

.content .card-title {
  float: left;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;

}

.grid {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-size: 1em;
}

.grid-container {
  border: 1px solid #e9e9e9;
  background: #f9f9f9;
  overflow-x: auto;
  /*overflow-y:*/
  user-select: none;
  display: flex;
}

.grid-container-50 {
  width: 50%;
  border: 1px solid #e9e9e9;
  background: #f9f9f9;
  overflow-x: auto;
  /*overflow-y:*/
  user-select: none;
}
</style>