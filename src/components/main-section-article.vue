<template>
  <div class="article art">
    <h3 class="art__job">
      {{ data.job }}
    </h3>
    <div class="art__wrap">
      <h4 class="art__comp">{{ data.comp }}</h4>
      <div class="art__period">{{ data.period }}</div>
    </div>
    <ul class="art__list list">
      <li 
        class="list__itm"
        v-for="it, idx in data.text"
        :key="it.id"
        v-html="it"
        :class="{ 'first': idx === 0 }"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main-section-article',
  props: { data: { type: Object } },
  computed: { }
}
</script>

<style lang="scss" scoped>
.article,.art {
  margin-bottom: 24px;
  padding-right: 5px;
  &__comp {
    font-size: 16px;
    color: $grey-95;
    letter-spacing: 0.5px;
    line-height: 1;
    font-weight: 400;
  }
  &__wrap {
    @include fr-sb-c;
    margin-bottom: 0px;
    @include media('min', 'xs') { padding: 10px 5px 10px 22px; }
    @include media('min', 'md') { padding: 0 0 0 22px; }
    @include media('min', 'lg') { padding: 0 55px 0 22px; }
  }
  &__job {
    font-size: 20px;
    padding-left: 20px;
    line-height: 1;
    font-weight: 400;
  }
  &__period {
    color: $green-end;
    @include media('min', 'xs') { font-size: 16px; }
    @include media('min', 'sm') { font-size: 18px; }
    @include media('min', 'md') { font-size: 20px; }
  }
  &__list, .list {
    &__itm {
      padding-left: 20px;
      position: relative;
      font-size: 14px;
      margin-bottom: 4px;
      word-break: break-word;
    }
    &__itm::before {
      content: '';
      position: absolute;
      display: block;
      $sz: 8px;
      width: $sz;
      height: $sz;
      top: 7px;
      left: 0;
      border-radius: 50%;
      background-color: $grey-66;
      transition: all 0.3s ease-out;
      outline-offset: 2px;
    }
    &__itm.first::before {
      background-color: $green-md;
      outline: 1px solid $green-md;
    }
    // &__itm:hover {
      //   background-color: #f0f2ed;
      // }
      &__itm:hover::before {
        // background-color: $green-md;
        outline: 1px solid $grey-66;
      }
      &__itm.first:hover::before {
        outline-offset: 3px;
        outline: 1px solid $green-md;
      }
  }
}
</style>
