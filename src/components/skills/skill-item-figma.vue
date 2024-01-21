<template>
    <div class="skill figma">
      <div class="figma__bg">
        <span class="figma__txt">Figma</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-figma',
}
</script>

<style lang="scss" scoped>
  .skill, .figma {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-c-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 8px 0 0px;

    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 35px;
    }
    &__txt::before {
      content: url('@/assets/svg/figma.svg');
      position: absolute;
      left: 5px;
      top: -4px;
      width: 26px;
      height: auto;
    }
  }
</style>
