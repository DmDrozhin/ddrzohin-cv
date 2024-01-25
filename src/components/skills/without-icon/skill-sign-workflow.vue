<template>
    <div class="skill workflow">
      <div class="workflow__bg">
        <span class="workflow__txt">Workflow Planning</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-workflow-planning',
}
</script>

<style lang="scss" scoped>
  .skill, .workflow {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-nd-c;
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
