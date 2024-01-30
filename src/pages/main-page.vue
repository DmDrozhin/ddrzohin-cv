<template>
  <div class="my-cv">
    <div class="my-cv__container" ref="cv">
      <head-section 
        @clicked="toggle"
        @lang="this.lang = $event"
        :isOpen="isOpen"
        :isMenu="isMenu"
      />
      <div class="my-cv__main">
        <main-section :lang="lang" />

          <transition name="modal">
            <modal 
              v-show="isOpen"
              :isOpen = "isOpen"
              @close="close"
            />
          </transition>

          <transition name="slide-rtl">
            <aside-section
              class="my-cv__aside" 
              v-show="isOpen" 
            />
          </transition>

      </div>

    </div>
  </div>
</template>

<script>
import headSection from '@/components/head-section.vue'
import mainSection from '@/components/main-section.vue'
import asideSection from '@/components/aside-section.vue'
import modal from '../components/modal-section.vue'
export default {
  name: 'main-page',
  // components: { headSection, mainSection, asideSection },
  components: { headSection, mainSection, asideSection, modal },
  data () {
    return {
      ro: null,
      isOpen: false,
      isMenu: null,
      lang: 'en'
    }
  },
  computed: {
    el() { return this.$refs.cv }
  },
  methods: {
    toggle() { this.isOpen = !this.isOpen },
    close() { this.isOpen = false },
    atResize(w) {
      this.isMenu = w
      if (!w) this.isOpen = false
    },
    onResize() {
      const w = this.el.offsetWidth
      w < 768 ? this.atResize(0) : this.atResize(1)
      // console.log(el)
    }
  },
  mounted() {
    this.ro = new ResizeObserver(this.onResize)
    this.ro.observe(this.el)
  },
  beforeDestroy () {
    this.ro.unobserve(this.el)
  }
}

</script>

<style lang="scss" scoped>
.my-cv {
  width: 100%;
  height: 100%;
  // background-color: #dbd4d4; // tech
  // @include general;
  overflow-x: hidden;
  &__container {
    margin: 0 auto;
    max-width: 827px;
    // padding: 25px 0;
    // border: 0.5px dotted peru;
  }
  &__main {
    position: relative;
    @include fr;
    background-color: $bg-2;
    @include media('min', 'xs') {
      padding: 0 20px 0 20px;
    }
  }
  &__aside {
      // border: 0.5px dotted yellow;
    @include fc-sb;
    gap: 4px;
    @include media('min', 'xs') {
      // height: 100%;
      position: absolute;
      right: 0;
      top: 0px;
      z-index: 3;
      overflow-x: hidden;
    }
    @include media('min', 'md') {
      display: flex!important;
      position: static;
      height: auto;
      margin-right: -20px;
    }
  }
}
// .slide-rtl-move {  transition: transform 0.5sec ease; }
.slide-rtl-enter-active, .slide-rtl-leave-active {
  transition: all 0.5s ease;
}
.slide-rtl-enter-from, .slide-rtl-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* MODAL BLOCK */
.modal-enter-active, .modal-leave-active {
  transition: all 0.6s ease-in-out;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(100%);
}

</style>
