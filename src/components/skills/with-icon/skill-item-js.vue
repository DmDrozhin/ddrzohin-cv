<template>
    <div class="skill js">
      <div class="js__bg">
        <span class="js__txt">JavaScript (ES6+)</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-js',
}
</script>

<style lang="scss" scoped>
  .skill, .js {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-c-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      z-index: 1;
    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 42px;
    }
    &__txt::before {
      content: url('@/assets/svg/js.svg');
      position: absolute;
      left: 9px;
      top: -4px;
      width: 27px;
      height: auto;
    }
  }
</style>
