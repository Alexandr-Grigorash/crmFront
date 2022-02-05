<template>


  <table v-if="leads.length > 0" >
    <thead>
    <tr>
      <td>Тип обращения</td>
      <td>Дата</td>
      <td>Стадия</td>
      <td>Сумма</td>
      <td>Отдел</td>
      <td>ФИО</td>
      <td>Телефон</td>
      <td>UTM</td>
      <td>Устройство</td>
      <td>Онлайн оплата</td>
      <td>Комментарий</td>
      <td>Действия</td>
    </tr>
    </thead>
    <tbody>

    <tr v-for="lead in leads" :key="lead.id">
      <td>{{ isType(lead.type) }}</td>
      <td>{{ lead.date }}</td>
      <td><stage-select v-model="lead.stage"/></td>
      <td class="table-price"><ui-input v-model="lead.price" type="text"/></td>
      <td class="table-department"><div :class="lead.department">{{ isDepartment(lead.department) }}</div></td>
      <td class="table-fio"><ui-input v-model="lead.fio" type="text"/></td>
      <td><ui-input v-model="lead.phone" type="text"/></td>
      <td>
        <div class="utm">{{ lead.utm_source }}
          <img src="@/assets/images/down.svg">
          <ul>
            <li><div class="title">source:</div> {{lead.utm_source}}</li>
            <li><div class="title">medium:</div> {{lead.utm_medium}}</li>
            <li><div class="title">campaign:</div> {{lead.utm_campaign}}</li>
            <li><div class="title">content:</div> {{lead.utm_content}}</li>
            <li><div class="title">term:</div> {{lead.utm_term}}</li>
          </ul>
      </div>
      </td>
      <td><img :src="deviceImage(lead.device)" alt=""></td>
      <td>{{ lead.pay }}</td>
      <td>{{ lead.info }}</td>
      <td class="btns">
        <ui-button @click="$emit('delete', lead)">Удилить</ui-button>
        <ui-button>Изменить</ui-button>
      </td>
    </tr>
    </tbody>
  </table>
  <h2 v-else>Нет записей</h2>
</template>

<script>

export default ({

  props: {
    leads: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {

    }
  },
  methods:{

    isType(id){
      let array =[
          "Звонок - Calltracing",
          "Заказ",
          "Обратный звонок",
          "Сообщение в чат",
          "Сообщение в чат с ботом",
          "Оффлайн",
      ];
      return array[id];
    },
    deviceImage(device){
      //let imagesList = ["phone", "pc", "tablet", "unknown"];
      let imagesList = ["phone", "phone", "phone", "phone"];
      const fileName = imagesList[device];
      return require(`@/assets/images/${fileName}.svg`);
    },
    isDepartment(dep){
      if(dep === 'spb'){
        return 'Санкт-Петербург';
      }
      if(dep === 'msk'){
        return 'Москва';
      }

    },
  },
  computed:{

  }
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
.table-department{
  text-align: center;
}
.table-department .spb{
  background: #2b7bc3;
  display: inline;
  padding: 1px 5px;
  color: #fff;
  border-radius: 4px;
  font-size: 11px;
}
.table-department .msk{
  background: #e75b5b;
  display: inline;
  padding: 1px 5px;
  color: #fff;
  border-radius: 4px;
  font-size: 11px;
}
.table-price{

}

.table-price input{
  width: 70%;
}
.utm ul{
  display: none;
  position: absolute;
  list-style: none;
  padding: 5px;
  border-radius: 3px;
  margin-top: -70px;
  min-width: 250px;
  background: #fff;
  border: 1px solid #ccc;
}
.utm ul li{
  display: flex;
  border-top: 1px dashed #ccc;
}
.utm ul li:first-child{

  border-top: 0;
}
.utm img{
  padding: 5px;
}
.utm ul li .title{    width: 100px;}
.utm img:hover ~ ul { display: block;}
</style>