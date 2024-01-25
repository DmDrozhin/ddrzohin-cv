<template>
    <div class="skill cert-3">
      <div class="cert-3__bg">
        <span class="cert-3__txt">HTML / CSS</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-html-css',
}
</script>

<style lang="scss" scoped>
  .skill, .cert-3 {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-st-c;
    &__bg {
      height: 32px;
      border-radius: 16px;
      background-color: $light;
      margin: 0 8px 0 auto;
      position: relative;
    }
    &__bg::after {
      content: 'ITDVN';
      position: absolute;
      bottom: -10px;
      left: 20px;
      color: $green-end;
      font-size: 14px;
    }
    &__txt {
      position: relative;
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 10px;
    }
  }
</style>
