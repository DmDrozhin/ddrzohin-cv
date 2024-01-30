<template>
  <div class="skills-section-one one">
    <div class="one__bg"></div>
    
    <div class="one__wrap">
      <title1 class="one__title" /> 
    </div>

      <vue class="one__it-1 vue shake" ref="vue" />
      <div class="one__wrap">
        <wpack class="one__it-2" />
        <js class="one__it-2 js" />
        <node class="one__it-2" />
      </div>

      <htmlCss class="one__it-1 html" />
      <div class="one__wrap">
        <wpress class="one__it-2" />
        <elemntr class="one__it-2"/>
        <wcomm class="one__it-2"/>
      </div>

      <corel class="one__it-1 corel"/>
      <div class="one__wrap">
        <figma class="one__it-2"/>
      </div>
    </div>
  
</template>

<script>
import * as skills from '@/components/skills/index.js'
export default {
  name: 'skills-section-one',
  components: { ...skills },
}
</script>

<style lang="scss" scoped>
.skills-section-one, .one {
  flex: 1;
  display: flex;
  display: grid;
  padding-bottom: 10px;
  position: relative;
  // border: 1px dotted lightcoral;
  &__bg {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;    
    background-color: $grey-E6;
    width: 186px;
    border-radius: 35px 0 0 0;
    height: 100%;
  }

  &__wrap {
    justify-self: flex-end;
    width: 186px;
    height: 100%;
    display: grid;
  }
  &__title {
    margin-top: 15px;
    margin-left: 0px;
    margin-bottom: 10px;
  }
  &__it-1.vue { margin-bottom: -8px; }
  &__it-1.html { margin: -8px 0; }
  &__it-1.corel { margin: -8px 0; }
  &__it-2 { margin-bottom: 6px; }

  
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: .5s;
  // animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
// Vertical shake
@keyframes shake {
  10%, 90% { transform: translate3d(0, -1px, 0); }
  20%, 80% { transform: translate3d(0, 2px, 0); }
  30%, 50%, 70% { transform: translate3d(0, -4px, 0); }
  40%, 60% { transform: translate3d(0, 4px, 0); }
}
// Horizontal shake
// @keyframes shake {  
//   10%, 90% { transform: translate3d(-1px, 0, 0); }
//   20%, 80% { transform: translate3d(2px, 0, 0); }
//   30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
//   40%, 60% { transform: translate3d(4px, 0, 0); }
// }
</style>