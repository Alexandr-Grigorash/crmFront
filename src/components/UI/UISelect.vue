<template>
  v-model="modelValue"
<select  @change="changeOption">
  <option disabled value="">--</option>
  <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
</select>
</template>
<script>
export default {
  name: 'ui-select',
  props:{
   /* modelValue:{
      type: String
    },*/
    options:{
      type: Array,
      default: () => []
    }
  },
  methods:{
    changeOption(event){
      console.log(event);
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style>

</style>