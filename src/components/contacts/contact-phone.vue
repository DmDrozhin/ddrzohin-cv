<template>
  <button class="phone contact"
    @click="this.$emit('clicked')"
  >
    <a class="contact__link" href="tel:+380952856434" rel="nofollow">
      <div class="contact__icon"></div>
      <p class="contact__txt">+38 095 285 64 34</p>
    </a>
  </button>
</template>

<script>
export default {
  name: 'contact-phone-number'
}
</script>

<style lang="scss" scoped>
.phone, 
.contact {
  @include contact;
  &__icon {
    background-image: url('@/assets/svg/tel.svg');
    // background-position-y: 2px; // *** ICON POSITION ***
    background-position: 4px 3px;
    width: 28px;
    margin-right: -2px;
  }
}
</style>
