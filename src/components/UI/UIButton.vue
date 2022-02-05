<template>
<button>
    <slot></slot>
</button>
    
</template>

<script>
export default {
    name: 'ui-button'
}
</script>
<style>
button{
  background: #2b7bc3;
  color: #fff;
  padding: 5px 10px;
  border: 0;
}
</style>
