<template>
    <div class="skill elem">
      <div class="elem__bg">
        <span class="elem__txt">Elementor Pro</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-elementor-pro',
}
</script>

<style lang="scss" scoped>
  .skill, .elem {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-nd-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 8px 0 0px;
      z-index: 1;
    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 40px;
    }
    &__txt::before {
      content: url('@/assets/svg/elementor.svg');
      position: absolute;
      left: 4px;
      top: -5px;
      width: 29px;
      height: auto;
    }
  }
</style>
