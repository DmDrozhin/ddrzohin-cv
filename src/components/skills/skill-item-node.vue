<template>
    <div class="skill node">
      <div class="node__bg">
        <span class="node__txt">Node.js</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-node-js',
}
</script>

<style lang="scss" scoped>
  .skill, .node {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    position: relative;
    z-index: 1;
    @include fr-nd-c;
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
      padding: 0 10px 0 55px;
    }
    &__txt::before {
      content: url('@/assets/svg/node.svg');
      position: absolute;
      left: 9px;
      top: -10px;
      width: 40px;
      height: auto;
    }
  }
</style>
