<template>
    <skill-item-bg>
      <div class="wrap">
        <div class="skill html">
          <div class="html__bg">
            <span class="html__txt">HTML</span>
          </div>
        </div>
        <div class="skill css">
          <div class="css__bg">
            <span class="css__txt">SASS</span>
          </div>
        </div>
      </div>
    </skill-item-bg>
</template>

<script>
import skillItemBg from './skill-item-bg.vue'
export default {
  name: 'skill-corel-draw',
  components: { skillItemBg },
}
</script>

<style lang="scss" scoped>
  .wrap {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;
    .skill, .html {
      // border: 0.5px dotted hotpink;
      display: flex;
      justify-content: center;
      align-items: center;
      &__bg {
        height: 32px;
        border-radius: 16px 0 0 16px;
        background-color: $light;
        margin: 0 4px 0 12px;
      }
      &__txt {
        position: relative;
        font-size: 14px;
        line-height: 32px;
        padding: 0 8px 0 40px;
      }
      &__txt::before {
        content: url('@/assets/svg/html.svg');
        position: absolute;
        left: 5px;
        top: -8px;
        width: 32px;
        height: auto;
      }
    }
    .skill, .css {
      &__bg {
        height: 32px;
        border-radius: 0 16px 16px 0;
        background-color: $light;
        margin: 0 2px 0 2px;
      }
      &__txt {
        position: relative;
        font-size: 14px;
        line-height: 32px;
        padding: 0 10px 0 45px;
      }
      &__txt::before {
        content: url('@/assets/svg/sass.svg');
        position: absolute;
        left: 4px;
        top: -8px;
        width: 35px;
        height: auto;
      }

    }



  }
</style>
