<template>
  <section>
    <skills-section-one></skills-section-one>
    <skills-section-two></skills-section-two>
  </section>
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

</style>