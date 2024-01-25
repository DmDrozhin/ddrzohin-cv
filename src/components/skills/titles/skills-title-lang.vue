<template>
  <div class="skills-title lang">
    <div class="lang__char char">
      <div class="char__bg">
        <span class="char__char">{{ char }}</span>
      </div>
    </div>
    <h2 class="lang__txt">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'skills-title-languages',
  data() {
    return {
      char: 'L',
      text: 'LANGUAGES'
    }
  }
}
</script>

<style  lang="scss" scoped>
.skills-title, 
.lang {
  // @include fr-c-c;
  position: relative;
  // border: 0.5px dotted orange;
  // margin-bottom: 15px;
    &__char, .char {
      position: absolute;
      @include fr-c-c;
      $sz: 55px;
      width: $sz;
      height: $sz;
      border-radius: 50%;
      // background-color: $grey-E6;
      background-color: rgb(210, 209, 209);
      top: -40px;
      left: 0px;
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
    padding-left: 29px;
    font-size: 24px;
    letter-spacing: 1.7px;
    font-weight: 400;
    color: $grey-66;
  }
}
</style>