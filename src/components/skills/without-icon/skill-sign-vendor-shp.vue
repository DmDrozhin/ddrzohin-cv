<template>
    <div class="skill ship">
      <div class="ship__bg">
        <span class="ship__txt">{{ txt }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-vendor-partnership',
  props: { txt: { type: String } },
  data() {
    return {
      text: 'Vendor Partnership'
    }
  }
}
</script>

<style lang="scss" scoped>
  .skill, .ship {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-st-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 8px 0 8px;
      z-index: 1;
    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 10px;
    }
  }
</style>
