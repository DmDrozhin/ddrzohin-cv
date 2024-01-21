<template>
    <div class="skill w-pack">
      <div class="w-pack__bg">
        <span class="w-pack__txt">Webpack</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-webpack',  
}
</script>

<style lang="scss" scoped>
  .skill, .w-pack {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-st-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 0px 0 8px;
    }
    &__txt {
      position: relative;
      padding: 0 10px 0 40px;
      font-size: 14px;
      line-height: 32px;
    }
    &__txt::before {
      content: url('@/assets/svg/webpack.svg');
      position: absolute;
      left: 5px;
      top: -7px;
      width: 30px;
      height: auto;
    }
  }
</style>
