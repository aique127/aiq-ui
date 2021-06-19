<template>
  <div class="rq-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rq-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .rq-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>