<template>
  <div class="skills-section-one one">
    <div class="one__bg"></div>
      <skills-title-skills class="one__title"></skills-title-skills>
      <skill-item-vue class="one__item-t1 vue"></skill-item-vue>
      <div class="one__wrap">
        <skill-item-webpack class="one__item-t2 wp "></skill-item-webpack>
        <skill-item-js class="one__item-t2 js"></skill-item-js>
        <skill-item-node class="one__item-t2 node"></skill-item-node>
      </div>
      <skill-item-html-css class="one__item-t1 html"></skill-item-html-css>
      <div class="one__wrap">
        <skill-item-w-press class="one__item-t2 w-press"></skill-item-w-press>
        <skill-item-elementor class="one__item-t2 elementor"></skill-item-elementor>
        <skill-item-w-comm class="one__item-t2 w-comm"></skill-item-w-comm>
      </div>
      <skill-item-corel class="one__item-t1 corel"></skill-item-corel>
      <div class="one__wrap">
        <skill-item-figma class="one__item-t2 figma"></skill-item-figma>
      </div>


    </div>
  
</template>

<script>
import skillsTitleSkills from './skills/skills-title-skills.vue'
import skillItemVue from '../components/skills/skill-item-vue.vue'
import skillItemWebpack from './skills/skill-item-webpack.vue'
import skillItemJs from './skills/skill-item-js.vue'
import skillItemNode from './skills/skill-item-node.vue'
import skillItemWPress from './skills/skill-item-w-press.vue'
import skillItemElementor from './skills/skill-item-elementor.vue'
import skillItemWComm from './skills/skill-item-w-comm.vue'
import skillItemFigma from './skills/skill-item-figma.vue'
import skillItemCorel from './skills/skill-item-corel-draw.vue'
import skillItemHtmlCss from './skills/skill-item-html-css.vue'
export default {
  name: 'skills-section-one',
  components: { skillsTitleSkills, skillItemVue, skillItemWebpack, skillItemJs, skillItemNode, skillItemWPress, skillItemElementor, skillItemWComm, skillItemFigma, skillItemCorel, skillItemHtmlCss },
}
</script>

<style lang="scss" scoped>
.skills-section-one, .one {
  flex: 0 0 214px;
  // height: 50%;
  display: flex;
  display: grid;
  padding-bottom: 10px;
  position: relative;
  // border: 1px dotted lightcoral;
  &__bg {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;    
    background-color: $grey-E6;
    width: 186px;
    border-radius: 35px 0 0 0;
    height: 100%;
  }

  &__wrap {
    justify-self: flex-end;
    width: 186px;
    height: 100%;
    display: grid;
  }
  &__title {
    margin-top: 15px;
    margin-left: 0px;
    margin-bottom: 5px;
  }
  &__item-t1.vue {
    margin-bottom: -8px;
  }
  &__item-t1.html {
    margin-top: -8px;
    margin-bottom: -8px;
  }
  &__item-t1.corel {
    margin-top: -8px;
    margin-bottom: -8px;
  }
  &__item-t2 {
    margin-bottom: 6px;
  }
}
</style>