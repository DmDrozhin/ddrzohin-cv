<template>
  <div class="aside">
    <skills-section-one></skills-section-one>
    <skills-section-two></skills-section-two>

  </div>
</template>

<script>
import skillsSectionOne from './skills-section-one.vue'
import skillsSectionTwo from './skills-section-two.vue'

export default {
  name: 'main-section-aside',
  components: { skillsSectionOne, skillsSectionTwo },
}
</script>

<style lang="scss" scoped>
.aside {
  // border: 0.5px dotted yellow;
  @include fc-sb;
  gap: 4px;
}
</style>