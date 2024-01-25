<template>
    <div
      class="modal"
      ref="overlay"
      tabindex="0"
      @click.capture="click($event)"
      @keyup.esc="close"
      >
    </div>
  </template>
  <!-- v-set-overlay="isOpen" -->

<script>
export default {
  name: 'main-section-modal',
  props: { isOpen: { type: Boolean } },
  data() {
    return{
      // exceptions: ['modal__slot'],
      exceptions: [],
    }
  },
  watch: {
    isOpen(on) {
      if(on) this.$nextTick(() => { 
        this.$refs.overlay.focus({ preventScroll: true })
      })
    }
  },
  methods: {
    close() { this.$emit('close')},
    isException(v) {
      if (this.exceptions.length) return this.exceptions.includes(v)      
    },
    click(ev) {if (!this.isException(ev.target.className)) this.close() },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  @include media('min', 'xs') { display: block; }
  @include media('min', 'md') { display: none; }
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  overflow: hidden;
  background: rgba(62, 62, 62, 0.62);
  backdrop-filter: blur(7.5px);
  & :focus {
    box-shadow: none;
  }  
}
</style>