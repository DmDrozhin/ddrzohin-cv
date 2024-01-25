<template>
    <div class="skill w-comm">
      <div class="w-comm__bg">
        <span class="w-comm__txt">WooCommerce</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-woo-commerce',
}
</script>

<style lang="scss" scoped>
  .skill, .w-comm {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-c-c;
    position: relative;
    z-index: 1;
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
      padding: 0 10px 0 48px;
    }
    &__txt::before {
      content: url('@/assets/svg/wcomm.svg');
      position: absolute;
      left: 6px;
      top: -7px;
      width: 36px;
      height: auto;
    }
  }
</style>
