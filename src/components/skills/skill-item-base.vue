<template>
  <div class="skills-title-bg">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'skills-title',
  props: {
    cont: {
      char: { type: String, default: 'T' },
      skill: { type: String, default: 'TEXT' },
      pos: { type: Object, default: { x: 0, y: 0 } }
    } 
  }
}
</script>

<style  lang="scss" scoped>
.skills-title-bg {
  height: 55px;
  width: 214px;
  border-radius: 27.5px 0 0 27.5px;
  background-color: $grey-E6;
}
</style>