<template>
  <div @dblclick="isActive=!isActive">
    <input :value="modelValue" @input="updateInput" :class="{ active: !isActive}" :disabled="isActive" type="text" >
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  data() {
    return {
      isActive: true,
    }
  },
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);

    }
  },
}
</script>
<style scoped>
input{
  background: rgb(0,0,0,0);
  border: 0;
  width: 96%;
  padding: 4px 2%;
}
  .active{
    background: #e9e9e9;
    border: 1px solid #dddddd;

  }
</style>
