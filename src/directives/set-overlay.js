export default {
  // For use with modal window and 'v-show' but not 'v-if'

  updated(el, bind) {
    // console.log(bind.value)
    if (bind.value) {
      document.body.style.overflowX = 'hidden'
    } else document.body.style.overflow = 'auto'
  },
  // beforeUnmount() {
  //   document.body.style.overflow = 'auto'
  // },
  name: 'set-overlay'
}
