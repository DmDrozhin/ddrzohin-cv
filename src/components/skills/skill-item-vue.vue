<template>
    <skill-item-bg>
      <div class="skill">
        <div class="skill__bg">
          <span class="skill__txt">Vue • Vuex • VueRouter</span>
        </div>
      </div>
    </skill-item-bg>
</template>

<script>
import skillItemBg from '../skills/skill-item-bg.vue'
export default {
  name: 'skill-vue',
  components: { skillItemBg },
}
</script>

<style lang="scss" scoped>
  .skill {
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
      margin: 0 2px 0 2px;

    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 12px 0 28px;
    }
    &__txt::before {
      content: url('@/assets/svg/vue.svg');
      position: absolute;
      left: -1px;
      top: -6px;
      width: 30px;
      height: auto;
    }
  }
</style>
