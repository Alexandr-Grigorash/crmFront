<template>
  <div style="width: 800px;">
    <vue3-chart-js v-bind="{ ...lineChart }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import zoomPlugin from "chartjs-plugin-zoom";
import dataLabels from "chartjs-plugin-datalabels";

// globally registered and available for all charts
Vue3ChartJs.registerGlobalPlugins([zoomPlugin]);

export default {
    name: "App",
    components: {
        Vue3ChartJs,
    },
  props: {
    params: {
      type: Array,
      require: true,
    }
  },
    setup(props) {
        const lineChart = {
            type: "line",
            // locally registered and available for this chart
            plugins: [dataLabels],
            data: {
                labels: props.params.map(c => c.label),
                datasets: [
                    {
                        label: "",
                        data: props.params.map(c => c.data),
                        fill: false,
                        borderColor: "#41B883",
                        backgroundColor: "green",
                    },
                  /*  {
                        label: "Productivity",
                        data: [70, 25, 110, 90, 5, 60, 30],
                        fill: false,
                        borderColor: "#00D8FF",
                        tension: 0.5,
                        backgroundColor: "blue",
                    },*/
                ],
            },
            options: {
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true,
                            },
                            mode: "y",
                        },
                    },
                    datalabels: {
                        backgroundColor: function (context) {
                            return context.dataset.backgroundColor;
                        },
                        borderRadius: 4,
                        color: "white",
                        font: {
                            weight: "bold",
                        },
                        formatter: Math.round,
                        padding: 6,
                    },
                },
             // responsive: false,
            },
        };

        return {
            lineChart,
        };
    },
};
</script>