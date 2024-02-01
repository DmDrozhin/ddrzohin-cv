<template>
  <div class="skills-section-one two">
    <div class="two__bg"></div>
      <div class="two__wrap">
        <soft1 class="two__it-2" :txt="curr.skills[0]"/>
        <soft2 class="two__it-2" :txt="curr.skills[1]"/>
        <soft3 class="two__it-2" :txt="curr.skills[2]"/>
        <soft4 class="two__it-2" :txt1="curr.skills[3]" :txt2="curr.skills[4]" />
        <soft5 class="two__it-2" :txt="curr.skills[5]"/>
      </div>

      <title2 class="two__title" :txt="curr.titles[3]" />
      <div class="two__wrap">
        <course1 class="two__it-3" />
        <course2 class="two__it-3" />
        <course3 class="two__it-3" />
        <course4 class="two__it-3" />
      </div>

      <title3 class="two__title" :txt="curr.titles[4]" />
      <div class="two__wrap">
        <p class="two__lang">English • work proficiency</p>
        <p class="two__lang">Ukrainian, Russian • native</p>
      </div>
    </div>
</template>

<script>
import * as skills from '@/components/skills/index.js'
import * as En from '@/data/content-en.js'
import * as Ua from '@/data/content-ua.js'

export default {
  name: 'skills-section-one',
  components: { ...skills },
  props: { lang: { type: String, default: 'en' } },
  computed: {
    curr() { return this.lang === 'en' ? En : Ua }
  }
}
</script>

<style lang="scss" scoped>
.skills-section-two, .two {
  // @include media('min', 'xs') { display: block; width: 214px;}
  // @include media('min', 'md') { flex: 0 0 214px; }
  
  // flex: 1;
  display: grid;
  position: relative;
  padding: 6px 0 6px 0;
  // border: 1px dotted lightcoral;
  &__bg {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;    
    background-color: $grey-E6;
    width: 186px;
    height: 100%;
  }

  &__wrap {
    justify-self: flex-end;
    width: 186px;
    height: 100%;
    display: grid;
  }
  &__it-2 { margin-bottom: 6px; }
  &__it-2:last-child { padding-bottom: 10px; }
  &__it-3 { margin-bottom: 12px; }
  &__it-3:last-child { padding-bottom: 10px; }

  &__lang {
    font-size: 14px;
    text-align: left;
    padding-left: 10px;
    margin-bottom: 4px;
    z-index: 1;
  }
}
</style>