<template>
  <button class="telega contact"
    @click="this.$emit('clicked')"
  >
    <a class="contact__link" href="https://t.me/DDrozhin" rel="nofollow">
      <div class="contact__icon"></div>
      <p class="contact__txt">@DDrozhin &nbsp;</p>
    </a>
  </button>
</template>

<script>
export default {
  name: 'contact-telegram-link'
}
</script>

<style lang="scss" scoped>
.telega, 
.contact {
  @include contact;
  &__icon {
    background-image: url('@/assets/svg/telegram.svg');
    // background-position-y: 1px; // *** ICON POSITION ***
  }
}
</style>
