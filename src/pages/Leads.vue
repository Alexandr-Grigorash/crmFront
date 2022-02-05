<template>
  <section class="content-header">
    <h1>Обращения</h1> <ui-button @click="showDialog">Добавить лид</ui-button>
  </section>
  <section class="content">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">jsGrid</h3>
      </div>
      <div class="card-body">
        <div class="grid">
          <div class="grid-container">
            <lead-list :leads="leads"/>
          </div>
        </div>
      </div>
    </div>
    <div ref="observer" class="observer"></div>
  </section>
</template>

<script>

import LeadList from "@/components/LeadList";
import axios from 'axios';

export default ({
  components: {
    LeadList,
  },
  data() {
    return {
      leads: [],
      dialogVisible: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ],
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  },
  methods: {

    addLead(lead) {
      this.leads.push(lead);
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },

    /*
    async fetchLeads() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.leads = response.data;
      } catch (e) {
        alert('error fetchLeads');
      }
    },
    async loadMoreLeads() {
      try {
        this.page += 1;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.leads = [...this.leads, ...response.data];
      } catch (e) {
        alert('error fetchLeads');
      }
    }
  },
  */
    async fetchLeads() {

      let token;
      //token = await this.login();
      token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzg1MGZlOWFlMDZiNzk2OTNmYTZmZGZlY2FlNjU4NWM0YzM1ZDIyZjZkZWIxODE3ODhhMGUwZGFjNmQ5YWI2MzNiZDIyMjVjOTgzMzVmODEiLCJpYXQiOjE2Mzk3ODQ5OTMuNDk5MTA5LCJuYmYiOjE2Mzk3ODQ5OTMuNDk5MTE2LCJleHAiOjE2NzEzMjA5OTMuNDE0OTU4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.uZOl8gzMIbgC3js3QTuNXIz8Dos5_r8oTBq14-50cKBL_jKeL6jgqV85Utnc5dDozawFQbNBGah3jyDVgR_WSW600ZjBcTQ4Bmufw9_rZx8Jim2qSZ0GO90lovLv2e5MwCjSrZ5VTR0jv58xw-gs-N8UOn0GAIDVfC6yK6LHsnByJ-jbSN6f14FGOoWfjn_5duSuP6SBlaC9ZHwpxG9IaOQzbobX5BlJMO2GLn-2G8FysZmMrohfgLCQvCWZXAsolBd9G9rDknWLra1BoqpWc3kIvxfg5hM44k6cy3OI-Z0jorvZ7Ql030qigJNB3tdZymNo83Z2scP1H_vqeAmsnRYPXgLuD_TLIWxY6Rhw62qwR9SKD1TQrzNz_cleh3GoWsimGuORn_pTEMj95V4aDbSSZwWKGGNsUixU3q-QL5V_1ytI9nyw1gTONbzk7HfLZ_44XsZdauNptHknlWE617pfVWqy1i4r6mD2LlqgNGAFETe9sSG5B2tiBWNx0DbeGeM2xJ09cVfa9degeGgpZsli9QGEf5fPdIbC6ZQzBmikSHdVRGCZYAnQQx3CYVj7s7r3gSF-nrOSCn_gYZOBQuIzBO-RuqYdwf2zMYsdNXIFljUFiC_R-dOWbDtawaqFKn0AqyuPNCh-TqHrMJ7m-E7j2qBxOQpM7_enXshMUns";
      // console.log(token);


      try {
        //let authorization = "Authorization: Bearer "+token;
        //   console.log(authorization);

        //const response = axios.get('http://734183-cs93484.tmweb.ru/api/leads', {
        const response = axios.get('http://127.0.0.1:8000/api/leads', {
          headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        })
        let ff = (await response).data;
        //console.log(ff.data);
        this.leads = ff.data;
      } catch (e) {
        alert('error fetchVisits');
      }
    }},
  mounted() {
    this.fetchLeads();
    /*
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMoreLeads();
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);*/
  },
  watch: {
    /*  selectedSort(newValue){
        this.leads.sort((a,b) =>{
          return a[newValue]?.localeCompare(b[newValue])
        })
      }*/
  }
})
</script>

<style>

</style>