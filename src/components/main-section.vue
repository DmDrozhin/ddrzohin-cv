<template>
  <section class="main">
    <div class="main__wrap-1">
      <div class="main__t t">
        <div class="t__lit"><span>W</span></div>
        <h2 class="t__tit">{{ curr.titles[0] }}</h2>
      </div>
      <div class="main__wrap-2">
        <main-section-article
          v-for="it in curr.work"
          :key="it.id"
          :data="it"
        ></main-section-article>
      </div>
      <div class="main__t t">
        <div class="t__lit"><span class="lit-e">E</span></div>
        <h2 class="t__tit">{{ curr.titles[1] }}</h2>
      </div>
      <div class="main__wrap-2">
        <main-section-article
          v-for="it in curr.education"
          :key="it.id"
          :data="it"
        ></main-section-article>
      </div>
    </div>
    
  </section>
</template>

<script>
import mainSectionArticle from './main-section-article.vue'
import * as En from '@/data/content-en.js'
import * as Ua from '@/data/content-ua.js'

export default {
  name: 'main-section',
  components: { mainSectionArticle },
  props: { lang: { type: String, default: 'en' } },
  data() {
    return {
    }
  },
  computed: {
    curr() { return this.lang === 'en' ? En : Ua }
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  padding-top: 25px;
  // min-height: 800px;
  &__wrap-1 {
    // height: inherit;
    text-align: left;
    @include media('min', 'xs') { margin: 0 10px 0 10px;}
    // @include media('min', 'sm') { }
    // @include media('min', 'md') { }
    @include media('min', 'lg') { margin: 0 0 0 18px; }
  }
  &__t, .t {
    @include fr-st;
    &__lit {
      $sz: 32px;
      height: $sz;
      width: $sz;
      border-radius: 50%;
      background-color: $grey-66;
      @include fr-c-c;
      margin-bottom: 7px;
    }
    &__lit span {
      color: $light;
      font-size: 24px;
      font-weight: 600;
    }
    &__lit span.lit-e {
      position: relative;
      top: -1px;
    }
    &__tit {
      font-size: 24px;
      padding-left: 12px;
      letter-spacing: 1.7px;
      font-weight: 400;
      color: $grey-66;
    }
  }

  &__wrap-2 {
    height: inherit;
    margin-left: 22px;
    // border: 0.5px solid lawngreen;
    @include media('min', 'xs') { margin: 0 0 0 5px; }
    @include media('min', 'sm') { margin: 0 0 0 10px; }
    @include media('min', 'md') { margin: 0 0 0 16px; }
    @include media('min', 'lg') { margin: 0 0 0 22px; }
  }
}
</style>