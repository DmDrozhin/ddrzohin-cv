<template>
  <button class="mail contact"
    @click="this.$emit('clicked')"
  >
    <a class="contact__link" href="mailto:ddrozhin@gmail.com" rel="nofollow">
      <div class="contact__icon"></div>
      <p class="contact__txt">ddrozhin@gmail.com</p>
    </a>
    <p class="contact__test">

    </p>
  </button>
</template>

<script>
export default {
  name: 'contact-mail-address'
}
</script>

<style lang="scss" scoped>

.gmail, 
.contact {
  @include contact;
  &__icon {
    background-image: url('@/assets/svg/gmail.svg');
    background-position-y: 3px; // *** ICON POSITION ***
  }
}
</style>
