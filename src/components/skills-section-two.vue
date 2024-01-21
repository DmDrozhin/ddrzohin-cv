<template>
  <div class="skills-section-one two">
    <div class="two__bg"></div>
      <div class="two__wrap">
        <skill-sign-vendor-ship class="two__item-t2 vendor"></skill-sign-vendor-ship>
        <skill-sign-workflow class="two__item-t2 workflow"></skill-sign-workflow>
        <skill-sign-negotiate class="two__item-t2 negotiate"></skill-sign-negotiate>
        <skill-sign-ethic class="two__item-t2 ethic"></skill-sign-ethic>
        <skill-sign-attention class="two__item-t2 attention"></skill-sign-attention>
      </div>
      <skills-title-cert class="two__title"></skills-title-cert>
      <div class="two__wrap">
        <skill-cert-j-s1 class="two__item-t3 cert-1"></skill-cert-j-s1>
        <skill-cert-j-s2 class="two__item-t3 cert-2"></skill-cert-j-s2>
        <skill-cert-j-s3 class="two__item-t3 cert-3"></skill-cert-j-s3>
        <skill-cert-j-s4 class="two__item-t3 cert-4"></skill-cert-j-s4>
      </div>
      <skills-title-lang class="two__title"></skills-title-lang>
      <div class="two__wrap">
        <p class="two__lang">• English - work proficiency</p>
        <p class="two__lang">• Ukrainian, Russian - native</p>
      </div>
      


    </div>
  
</template>

<script>
import skillsTitleCert from './skills/skills-title-cert.vue'
import skillsTitleLang from './skills/skills-title-lang.vue'
import skillSignVendorShip from './skills/skill-sign-vendor-shp.vue'
import skillSignWorkflow from './skills/skill-sign-workflow.vue'
import skillSignNegotiate from './skills/skill-sign-negotiate.vue'
import skillSignEthic from './skills/skill-sign-ethic.vue'
import skillSignAttention from './skills/skill-sign-attention.vue'
import skillCertJS1 from './skills/skill-cert-js1.vue'
import skillCertJS2 from './skills/skill-cert-js2.vue'
import skillCertJS3 from './skills/skill-cert-js3.vue'
import skillCertJS4 from './skills/skill-cert-js4.vue'

export default {
  name: 'skills-section-one',
  components: { skillsTitleCert, skillsTitleLang, skillSignVendorShip, skillSignWorkflow, skillSignNegotiate, skillSignEthic, skillSignAttention, skillCertJS1, skillCertJS2, skillCertJS3, skillCertJS4 },
}
</script>

<style lang="scss" scoped>
.skills-section-two, .two {
  flex: 1 0 214px;
  // height: 100%;
  display: flex;
  display: grid;
  position: relative;
  padding: 6px 0 6px 0;
  // border: 1px dotted lightcoral;
  &__bg {
    position: absolute;
    z-index: -1;
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
  &__item-t2 {
    margin-bottom: 6px;
  }
  &__item-t2:last-child {
    padding-bottom: 10px;
  }
  &__item-t3 {
    margin-bottom: 12px;
  }
  &__item-t3:last-child {
    padding-bottom: 10px;
  }


  &__lang {
    font-size: 14px;
    text-align: left;
    padding-left: 4px;
    margin-bottom: 4px;
  }

}
</style>