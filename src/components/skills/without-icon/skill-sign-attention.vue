<template>
    <div class="skill attention">
      <div class="attention__bg">
        <span class="attention__txt">{{ txt }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-attention-to-details',
  props: { txt: { type: String } },
  data() {
    return {
      text: 'Attention to details'
    }
  }
}
</script>

<style lang="scss" scoped>
  .skill, .attention {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-nd-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 16px 0 8px;
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
