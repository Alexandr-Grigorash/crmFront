<template>
  <section class="content-header">
    <h1>Посещаемость сайта</h1>
  </section>
  <section class="content">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">jsGrid</h3>
      </div>
      <div class="card-body">
        <div class="grid">
          <div class="grid-container">
            <visit-list :visits="visits"/>
          </div>
        </div>
      </div>
    </div>
    <div ref="observer" class="observer"></div>
  </section>
</template>

<script>
import VisitList from "@/components/VisitList";
import axios from 'axios';
export default ({
  components: {
    VisitList
  },
  data() {
  return {
    visits: [

    ],
  }
},
methods: {
  async login() {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: 'griga@xaker.ru',
          password: 'griga358'
        })
      };
      const response = await fetch("http://734183-cs93484.tmweb.ru/api/login", requestOptions);
      const data = await response.json();
      return data.token;
    } catch (e) {
      alert('error fetchLeads');
    }
  },

  async fetchVisits() {

    let token;
    //token = await this.login();
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzg1MGZlOWFlMDZiNzk2OTNmYTZmZGZlY2FlNjU4NWM0YzM1ZDIyZjZkZWIxODE3ODhhMGUwZGFjNmQ5YWI2MzNiZDIyMjVjOTgzMzVmODEiLCJpYXQiOjE2Mzk3ODQ5OTMuNDk5MTA5LCJuYmYiOjE2Mzk3ODQ5OTMuNDk5MTE2LCJleHAiOjE2NzEzMjA5OTMuNDE0OTU4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.uZOl8gzMIbgC3js3QTuNXIz8Dos5_r8oTBq14-50cKBL_jKeL6jgqV85Utnc5dDozawFQbNBGah3jyDVgR_WSW600ZjBcTQ4Bmufw9_rZx8Jim2qSZ0GO90lovLv2e5MwCjSrZ5VTR0jv58xw-gs-N8UOn0GAIDVfC6yK6LHsnByJ-jbSN6f14FGOoWfjn_5duSuP6SBlaC9ZHwpxG9IaOQzbobX5BlJMO2GLn-2G8FysZmMrohfgLCQvCWZXAsolBd9G9rDknWLra1BoqpWc3kIvxfg5hM44k6cy3OI-Z0jorvZ7Ql030qigJNB3tdZymNo83Z2scP1H_vqeAmsnRYPXgLuD_TLIWxY6Rhw62qwR9SKD1TQrzNz_cleh3GoWsimGuORn_pTEMj95V4aDbSSZwWKGGNsUixU3q-QL5V_1ytI9nyw1gTONbzk7HfLZ_44XsZdauNptHknlWE617pfVWqy1i4r6mD2LlqgNGAFETe9sSG5B2tiBWNx0DbeGeM2xJ09cVfa9degeGgpZsli9QGEf5fPdIbC6ZQzBmikSHdVRGCZYAnQQx3CYVj7s7r3gSF-nrOSCn_gYZOBQuIzBO-RuqYdwf2zMYsdNXIFljUFiC_R-dOWbDtawaqFKn0AqyuPNCh-TqHrMJ7m-E7j2qBxOQpM7_enXshMUns";

    try {
      //let authorization = "Authorization: Bearer "+token;
      //const response = axios.get('http://734183-cs93484.tmweb.ru/api/visits', {
      const response = axios.get('http://127.0.0.1:8000/api/visits', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      let ff = (await response).data;
      console.log(ff.data);
      console.log(ff.type);
      this.visits = ff.data;

    } catch (e) {
      alert('error fetchVisits');
    }
  },

},
mounted() {
  this.fetchVisits();

},

watch: {

}
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
.content{
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.content .card{
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
  border: 0 solid rgba(0,0,0,.125);
  border-radius: 0.25rem;

}

.content .card-header{
  background-color: transparent;
  border-bottom: 1px solid rgba(0,0,0,.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: 0;
}
.content .card-header:first-child {
  border-radius: calc(.25rem - 0) calc(.25rem - 0) 0 0;
}
.content .card-title{
  float: left;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
}
.card-body{
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;

}
.grid{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-size: 1em;
}
.grid-container{
  border: 1px solid #e9e9e9;
  background: #f9f9f9;
  overflow-x: auto;
  /*overflow-y:*/
  user-select: none;
}
</style>