<template>
  <form @submit.prevent>
    <h3>Добавить обращение</h3>
    <ui-input v-model="lead.type" type="text" placeholder="type"/>
    <ui-input v-model="lead.stage" type="text" placeholder="stage"/>
    <ui-input v-model="lead.date" type="date" placeholder="date"/>
    <ui-input v-model="lead.price" type="text" placeholder="price"/>
    <ui-input v-model="lead.departmen" type="text" placeholder="departmen"/>
    <ui-input v-model="lead.fio" type="text" placeholder="fio"/>
    <ui-input v-model="lead.phone" type="text" placeholder="phone"/>
    <ui-input v-model="lead.source" type="text" placeholder="source"/>
    <ui-input v-model="lead.device" type="text" placeholder="device"/>
    <ui-input v-model="lead.pay" type="text" placeholder="pay"/>
    <ui-input v-model="lead.comment" type="text" placeholder="comment"/>
    <ui-button @click="addLead">Добавить</ui-button>
  </form>
</template>
<script>

export default ({

  data() {
    return {
      lead: {
        type: '',
        stage: '',
        date: '',
        price: '',
        departmen: '',
        fio: '',
        phone: '',
        source: '',
        device: '',
        pay: '',
        comment: '',
      }
    }
  },
  methods: {
    addLead() {
      id: Date.now();
      this.$emit('add', this.lead);
      this.lead = {
        type: '',
        stage: '',
        date: '',
        price: '',
        departmen: '',
        fio: '',
        phone: '',
        source: '',
        device: '',
        pay: '',
        comment: ''
      }

    },
  },
})
</script>
<style>

</style>