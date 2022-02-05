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
    params: {
        type: Array,
        require: true,
    },

  },
  setup(props) {
    const pieChart = {
      type: "pie",
      data: {
        labels: props.params.map(c => c.label),
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: props.params.map(c => c.data),
          },
        ],
      },
    };

  //  console.log(props.data.map(c => c.visits_count))
      //console.log(props.params)

    return {
      pieChart,
    };
  },


})
</script>

<style scoped>

</style>