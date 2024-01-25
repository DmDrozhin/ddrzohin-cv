<template>
    <skill-item-bg>
      <div class="skill corel-draw">
        <div class="corel-draw__bg">
          <span class="corel-draw__txt">CorelDraw•Graphics Suite</span>
        </div>
      </div>
    </skill-item-bg>
</template>

<script>
import skillItemBg from '../skill-item-base.vue'
export default {
  name: 'skill-corel-draw',
  components: { skillItemBg },
}
</script>

<style lang="scss" scoped>
  .skill, .corel-draw {
    
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    display: flex;
    justify-content: center;
    align-items: center;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 2px 0 10px;
      z-index: 1;
    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 8px 0 28px;
    }
    &__txt::before {
      content: url('@/assets/svg/coreldraw.svg');
      position: absolute;
      left: 4px;
      top: -6px;
      width: 22px;
      height: auto;
    }
  }
</style>
