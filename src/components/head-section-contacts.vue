<template>
  <div class="contacts cont">

    <button class="cont__burger" 
      :style="{ backgroundImage: `url(${icon})` }"
      @click="toggle"
    ></button>

    <ul class="cont__menu" v-show="isOpen">
      <transition-group name="contacts" appear>
        <li :key="1" style="--i: 1" v-show="isOpen"><mail   @clicked="toggle" /></li>
        <li :key="2" style="--i: 2" v-show="isOpen"><git    @clicked="toggle" /></li>
        <li :key="3" style="--i: 3" v-show="isOpen"><telega @clicked="toggle" /></li>
        <li :key="4" style="--i: 4" v-show="isOpen"><phone  @clicked="toggle" /></li>
      </transition-group>
    </ul>

  </div>
</template>

<script>
  import mail from '@/components/contacts/contact-gmail.vue'
  import git from '@/components/contacts/contact-github.vue'
  import telega from '@/components/contacts/contact-telega.vue'
  import phone from '@/components/contacts/contact-phone.vue'
export default {
  name: 'head-section-contacts',
  components: { mail, git, telega, phone },
  props: { isMenu: { type: Number, default: 1 } },
  data() {
    return {
      // isOpen: true,
      isTurnOn: true
    }
  },
  computed: {
    icon() { return this.isOpen ? this.url('cross.svg') : this.url('burger.svg') },
    isOpen() { return this.isTurnOn }
  },
  watch: {
    isMenu(a, b) { if (a && !b) this.isTurnOn = false }
  },
  methods: {
    url(el) { return require('@/assets/svg/' + el) },
    toggle() { this.isTurnOn = !this.isTurnOn },
  }
}
</script>

<style lang="scss" scoped>
.contacts, .cont {
  position: relative;
  // outline: 2px solid yellow;
  // BURGER
  &__burger {
    width: 45px;
    height: 45px;
    background-repeat: no-repeat;
    background-position: center;
    @include media('max', 'md') { display: block; }
    @include media('min', 'md') { display: none; }
    position: absolute;
    top: -55px;
    left: calc(50% - 18px);
    transition: all 0.3s ease;
  }
  &__burger:hover::before {
    content: '';
    position: absolute;
    display: block;
    background-color: $green-md;
    z-index: 1;
    @include media('max', 'md') {
      height: 30px;
      width: 10px;
      top: 7px;
      left: -10px;
    }
  }
  // END BURGER

  // &__links {
  //   @include media('max', 'md') { display: none; }
  //   @include media('min', 'md') { display: block; }
  // }

  &__menu {
    flex: 1;
    background-color: $grey-80;
    @include media('min', 'md') {
      display: flex!important;
      @include fr-sb;
      & li { display: flex!important };
      & li:first-child, li:last-child { flex: 1 };
      & li:not(li:first-child, li:last-child) { flex-basis: 23% };
    }
    @include media('min', 'lg') {
      @include fr-ch;  
      & li:not(li:first-child, li:last-child) { flex-basis: auto };
    }
  }

  .contacts-enter-active {
    transition: all 0.4s ease;
    transition-delay: calc(0.1s * var(--i));
  }
  .contacts-enter-from {
    transform: scale(0.5);
    opacity: 0.5;
  }

}
</style>