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
                        <h2>Pie Chart</h2>
                        <PieChartCastom :key="device" :device="device"></PieChartCastom>
                    </div>

                </div>
            </div>
        </div>
        <div ref="observer" class="observer"></div>
    </section>
</template>

<script>
//import VisitList from "@/components/VisitList";

import PieChartCastom from "@/components/PieChartCastom";
import axios from 'axios';

export default ({


    components: {
        //   VisitList,
        PieChartCastom

    },
    data() {
        return {
            visits: [
                { device: 'mobile', visits_count: 1000, avg: 5010, inc: 300 },
                { device: 'pc', visits_count: 2000, avg: 900, inc: 400 },
                { device: 'planshet', visits_count: 400, avg: 400, inc: 500 },
            ],
            visitsInDay: [

            ],
            device:[
                /* { device: 'mobile', visits_count: 1000, },
                 { device: 'pc', visits_count: 2000,},
                 { device: 'planshet', visits_count: 400,},*/
            ],
            update: false

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
                //const response = await fetch("http://734183-cs93484.tmweb.ru/api/login", requestOptions);
                const response = await fetch("http://127.0.0.1:8000/api/login", requestOptions);
                const data = await response.json();
                console.log(data.token);
                return data.token;
            } catch (e) {
                alert('error fetchLeads');
            }
        },

        async fetchVisits() {

            let token;
            //token = await this.login();
            token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWQxOTBlMjFhZjNlN2FhY2UxMzAyYTAxYTFmNmJhNGMwY2Q5OWQ0M2NiYmJiNGJiNzE0MWYzYTg5YTFiNjgzZTIzMGRhNzkwNWZhZDI3ZDQiLCJpYXQiOjE2NDM1NjgwNzEuOTc1NTc0LCJuYmYiOjE2NDM1NjgwNzEuOTc1NTgyLCJleHAiOjE2NzUxMDQwNzEuOTA2MTc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.XiEKBZe-Fhzcff5jHr4_gO5D7ZmCqjSajx2Mes9Bj2jZXAORcrg-XrAo7eR6dyMk5jSB5KgfWhFwBqufy1d_09S5UI9SAqDpFj4cXG4ECXL2prjEDRs73EgIul7pp8HWPHImRctCIICE569bJYWACvQezAuY-DX0VI6s9ZyWqvqYj_JnhkyLkFQ3ZwculJPdHcsYDx7gFmKQmL8NVpbwVsJ8nv3rIEyU84Ie2ohWqOjyNdax-kVMlVFdUWKQERDqxKQZB7LtZgvGTeHAGHVPsThX0PCmnXyKcLVZDDtZzahZbfP6tGMCui9nZNtlSsBQj3YXlmeYhovZQy3ef6J02qpySIrNBWLTah908H8SApf4qof4LFbxevC2Lcg_aRI-jPIauVWXr8PI865r68vs1pttZbaodWNa_FBcTGmYXrAylaurnS4VXV-f_tUOnakDt9Iy-Bc5k8xLfjjCZE-JwUGprXasVPy5ENLguf5scFWBNJ_2WN2zuPXLTVFoxuclkW4zKQMfiq0M9Qb_ygGoBNLLQGoLgIzizyg3vTVKxyzAh0eBlpKZxxBSxtmNJTaka1EqwuaVZvR9DWYZKraAJYt382MgXtNFsZSLolfUe4YB9Uzw1X6gji2hWw9GAp2jaTPqh3Nis5it3sv0Ha9dEuombG2bmRATyyCejiXwihs";

            try {
                // let authorization = "Authorization: Bearer "+token;
                //const response = axios.get('http://734183-cs93484.tmweb.ru/api/analytics', {

                const response = axios.get('http://127.0.0.1:8000/api/analytic/visitindevice', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                let ff = (await response).data;
                console.log(ff.data);
                // this.visits = ff.data;
                this.device = ff.data;
                this.update = true;
            } catch (e) {
                alert('error fetchVisits');
            }
        },
        async fetchVisitsInDay() {

            let token;
            //token = await this.login();
            token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWQxOTBlMjFhZjNlN2FhY2UxMzAyYTAxYTFmNmJhNGMwY2Q5OWQ0M2NiYmJiNGJiNzE0MWYzYTg5YTFiNjgzZTIzMGRhNzkwNWZhZDI3ZDQiLCJpYXQiOjE2NDM1NjgwNzEuOTc1NTc0LCJuYmYiOjE2NDM1NjgwNzEuOTc1NTgyLCJleHAiOjE2NzUxMDQwNzEuOTA2MTc5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.XiEKBZe-Fhzcff5jHr4_gO5D7ZmCqjSajx2Mes9Bj2jZXAORcrg-XrAo7eR6dyMk5jSB5KgfWhFwBqufy1d_09S5UI9SAqDpFj4cXG4ECXL2prjEDRs73EgIul7pp8HWPHImRctCIICE569bJYWACvQezAuY-DX0VI6s9ZyWqvqYj_JnhkyLkFQ3ZwculJPdHcsYDx7gFmKQmL8NVpbwVsJ8nv3rIEyU84Ie2ohWqOjyNdax-kVMlVFdUWKQERDqxKQZB7LtZgvGTeHAGHVPsThX0PCmnXyKcLVZDDtZzahZbfP6tGMCui9nZNtlSsBQj3YXlmeYhovZQy3ef6J02qpySIrNBWLTah908H8SApf4qof4LFbxevC2Lcg_aRI-jPIauVWXr8PI865r68vs1pttZbaodWNa_FBcTGmYXrAylaurnS4VXV-f_tUOnakDt9Iy-Bc5k8xLfjjCZE-JwUGprXasVPy5ENLguf5scFWBNJ_2WN2zuPXLTVFoxuclkW4zKQMfiq0M9Qb_ygGoBNLLQGoLgIzizyg3vTVKxyzAh0eBlpKZxxBSxtmNJTaka1EqwuaVZvR9DWYZKraAJYt382MgXtNFsZSLolfUe4YB9Uzw1X6gji2hWw9GAp2jaTPqh3Nis5it3sv0Ha9dEuombG2bmRATyyCejiXwihs";

            try {
                //  let authorization = "Authorization: Bearer "+token;
                //const response = axios.get('http://734183-cs93484.tmweb.ru/api/analytics', {
                const response = axios.get('http://127.0.0.1:8000/api/analytic/visitinday', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                let ff = (await response).data;
                console.log(ff.data);
                this.visitsInDay = ff.data;

            } catch (e) {
                alert('error fetchVisits');
            }
        },


    },
    async mounted() {
        this.fetchVisits();
        this.fetchVisitsInDay();
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

<template>
    <div style="max-width: 400px">
        <vue3-chart-js  v-bind="{ ...pieChart }" />
    </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default ({
    name: "PieChartCastom",
    components: {
        Vue3ChartJs,
    },
    data(){
        return{
            a:0,
        }
    },
    props: {
        device: {
            type: Array,
            require: true,
        },

    },
    setup(props) {
        const pieChart = {
            type: "pie",
            data: {
                labels: props.device.map(c => c.device),
                datasets: [
                    {
                        backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                        data: props.device.map(c => c.visits_count),
                    },
                ],
            },
        };

      //  console.log(props.device.map(c => c.visits_count))

        return {
            pieChart,
        };
    },


})
</script>

<style scoped>

</style>
