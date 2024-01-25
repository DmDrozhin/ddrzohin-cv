<template>
  <button class="git contact"
    @click="this.$emit('clicked')"
  >
    <a class="contact__link" href="https://github.com/DmDrozhin">
      <div class="contact__icon"></div>
      <p class="contact__txt">DmDrozhin</p>
    </a>
  </button>
</template>

<script>
export default {
  name: 'contact-github-link'
}
</script>

<style lang="scss" scoped>
.git, 
.contact {
  @include contact;
  &__icon {
    background-image: url('@/assets/svg/github.svg');
    // background-position-y: 1px; // *** ICON POSITION ***
  }
}
</style>
