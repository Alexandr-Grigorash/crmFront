<template>
  <div class="stage" @dblclick="isActive=!isActive">
    <img :src="itemImage" alt="">
    <select :class="{ active: isActive}" :disabled="isActive" v-model="localModelValue" @change="changeOption">
      <option value="0">Новый</option>
      <option value="1">Консультация</option>
      <option value="2">В работе</option>
      <option value="3">Успешная сделка</option>
      <option value="4">Отказ</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "stage-select",
  data() {
    return {
      stage: '',
      isActive: true,
    }
  },
  props: {
    modelValue: {
      type: Number,
    },
  },
  methods: {
    changeOption(event) {
      this.stage = event.target.value;
      this.isActive = !this.isActive;
      /*
      * Запись измененной стадии в базу
      * */
    },
  },
  computed: {
    itemImage() {
      if (!this.stage) {
        return require(`@/assets/images/st-work.svg`);
      }
      let imagesList = ["st-new", "st-con", "st-work", "st-success", "st-fail"];
      const fileName = imagesList[this.stage];
      return require(`@/assets/images/${fileName}.svg`);
    },
    localModelValue: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('update:modelValue',parseInt(newValue))
      },
    },
  },

}
</script>

<style scoped>
.active {
  border: 0;
  background: rgb(0, 0, 0, 0);
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>