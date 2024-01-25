<template>
    <div class="skill w-press">
      <div class="w-press__bg">
        <span class="w-press__txt">Wordpress</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-word-press',
}
</script>

<style lang="scss" scoped>
  .skill, .w-press {
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
      padding: 0 10px 0 40px;
    }
    &__txt::before {
      content: url('@/assets/svg/w-press.svg');
      position: absolute;
      left: 5px;
      top: -5px;
      width: 28px;
      height: auto;
    }
  }
</style>
