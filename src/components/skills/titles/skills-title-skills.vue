<template>
  <div class="skills-title">
    <div class="skills-tile__char char">
      <div class="char__bg">
        <span class="char__char">{{ char }}</span>
      </div>
    </div>
    <h2 class="skills-title__txt">{{ txt }}</h2>
  </div>
</template>

<script>
export default {
  name: 'skills-title-skills',
  props: { txt: { type: String } },
  data() {
    return {
      char: 'S',
      text: 'SKILLS'
    }
  }
}
</script>

<style  lang="scss" scoped>
.skills-title {
  // @include fr-c-c;
  position: relative;
  // border: 0.5px dotted orange;
  z-index: 1;
  margin-bottom: 15px;
    &__char, .char {
      position: absolute;
      @include fr-c-c;
      $sz: 55px;
      width: $sz;
      height: $sz;
      border-radius: 50%;
      // background-color: $grey-E6;
      background-color: $grey-D1;
      top: -10px;
      left: 7px;
      &__bg {
        @include fr-c-c;
        $sz: 32px;
        height: $sz;
        width: $sz;
        border-radius: 50%;
        background-color: $grey-66;
      }
      &__char {
        color: $light;
        font-size: 24px;
        font-weight: 600;
        position: relative;
        top: -1px;
      }
    } 
  &__txt {
    // background-color: yellow;
    position: relative;
    text-align: center;
    padding-left: 25px;
    font-size: 24px;
    letter-spacing: 1.7px;
    font-weight: 400;
    color: $grey-66;
  }
}
</style>