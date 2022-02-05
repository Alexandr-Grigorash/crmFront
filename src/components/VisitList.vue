<template>
  <table v-if="visits.length > 0">
    <thead>
    <tr>
      <td class="table-date">Дата</td>
      <td class="table-visit-page">Страница входа</td>
      <td class="table-utm_source">utm_source</td>
      <td class="table-utm_medium">utm_medium</td>
      <td class="table-utm_campaign">utm_campaign</td>
      <td class="table-utm_content">utm_content</td>
      <td class="table-utm_term">utm_term</td>
      <td class="table-utm_referer">utm_referer</td>
      <td class="table-device">device</td>
      <td class="table-screen">screen</td>
      <td class="table-ip">ip</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="visit in visits" :key="visit.id">
      <td class="table-date">{{ visit.date }}</td>
      <td class="table-visit-page"><a href="{{ visit.visit_page }}"><i class="fa fa-link" aria-hidden="true" ></i></a>{{ visit.visit_page/*.substring(0,30)*/ }}</td>
      <td class="table-utm_source">{{ visit.utm_source }}</td>
      <td class="table-utm_medium">{{ visit.utm_medium }}</td>
      <td class="table-utm_campaign">{{ visit.utm_campaign }}</td>
      <td class="table-utm_content">{{ visit.utm_content }}</td>
      <td class="table-utm_term">{{ visit.utm_term/*.substring(0,15)*/ }}</td>
      <td class="table-utm_referer">{{ visit.utm_referer }}</td>
      <td class="table-device">{{ visit.device }}</td>
      <td class="table-screen">{{ visit.screen }}</td>
      <td class="table-ip">{{ visit.ip }}</td>
    </tr>
    </tbody>
  </table>
  <h2 v-else>Нет записей</h2>
</template>

<script>

export default ({

  props: {
    visits: {
      type: Array,
      require: true,
    }
  },
  data() {
    return {
      ad:1,
    }
  },
})
</script>
<style scoped>
table{
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;

}
tr{
  box-sizing: border-box;
  background: #fcfcfc;
}
td{
  padding: 0.5em;
  border: 1px solid #f3f3f3;
  font-size: 13px;
  border-top: none;
  border-left: none;
}
thead tr{
  background: #f9f9f9 !important;
  font-weight: 500;
}
tr:nth-child(2n+1){
  background: #fff;
}

.table-visit-page{
  width: 235px;
  text-align: center;
}
.table-visit-page i{
  margin-right: 10px;
  font-size: 13px;
}
.table-date{
  width: 70px;
  text-align: center;
}

.table-utm_source{
  width: 80px;
  text-align: center;
}
.table-utm_medium{
  width: 95px;
  text-align: center;
}
.table-utm_campaign{
  width: 200px;
  text-align: center;
}
.table-utm_content{
  width: 95px;
  text-align: center;
}
.table-utm_term{
  width: 170px;
  text-align: center;
}
.table-utm_referer{
  width: 170px;
  text-align: center;
}
.table-device{
  width: 45px;
  text-align: center;
}
.table-screen{
  width: 70px;
  text-align: center;
}
.table-ip{
  width: 80px;
  text-align: center;
}

</style>