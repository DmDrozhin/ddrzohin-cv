<template>
    <div class="skill negotiate">
      <div class="negotiate__bg">
        <span class="negotiate__txt">Vendor Negotiating</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-vendor-negotiating',
}
</script>

<style lang="scss" scoped>
  .skill, .negotiate {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-c-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 8px 0 8px;

    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 10px;
    }
  }
</style>
