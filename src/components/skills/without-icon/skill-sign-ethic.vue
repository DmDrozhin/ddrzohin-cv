<template>
    <div class="skill wrap">
      <div class="ethic-bg">
        <span class="ethic-txt">
          {{ txt1 }}
        </span>
      </div>
      <div class="discipline-bg">
        <span class="discipline-txt">
          {{ txt2 }}
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'skill-work-ethic',
  props: { txt1: { type: String }, txt2: { type: String } },
  data() {
    return {
      text1: 'Work Ethic',
      text2: 'Discipline'
    }
  }
}
</script>

<style lang="scss" scoped>
  .skill, .wrap {
    width: 100%;
    height: 100%;
    // border: 0.5px dotted hotpink;
    @include fr-st-c;
    .ethic-bg {
      flex: 0 0 auto;
      height: 32px;
      border-radius: 16px 0 0 16px;
      background-color: $light;
      margin: 0 4px 0 8px;
      z-index: 1;
    }
    .ethic-txt {
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 10px;
    }
    .discipline-bg {
      height: 32px;
      border-radius: 0 16px 16px 0;
      background-color: $light;
      margin: 0 8px 0 2px;
      z-index: 1;
    }
    .discipline-txt {
      font-size: 14px;
      line-height: 32px;
      padding: 0 10px 0 10px;
    }
  }
</style>
