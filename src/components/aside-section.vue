<template>
  <section>
    <skills-section-one :lang="lang" />
    <skills-section-two :lang="lang" />
  </section>
</template>

<script>
import skillsSectionOne from './skills-section-one.vue'
import skillsSectionTwo from './skills-section-two.vue'

export default {
  name: 'main-section-aside',
  components: { skillsSectionOne, skillsSectionTwo },
  props: { lang: { type: String, default: 'en' } },
}
</script>

<style lang="scss" scoped>

</style>