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
        v-for="it in data.text"
        :key="it.id"
        v-html="it"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main-section-article',
  props: { data: { type: Object } },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
.article,.art {
  margin-bottom: 24px;
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
    padding-left: 20px;
    padding-right: 55px;
  }
  &__job {
    font-size: 20px;
    padding-left: 20px;
    line-height: 1;
    font-weight: 400;
  }
  &__period {
    font-size: 20px;
    color: $green-end;
  }
  &__list, .list {
    &__itm {
      padding-left: 20px;
      position: relative;
      font-size: 14px;
      margin-bottom: 4px;

    }
    &__itm::before {
      content: '';
      position: absolute;
      display: block;
      $sz: 8px;
      width: $sz;
      height: $sz;
      top: 5px;
      left: 0;
      border-radius: 50%;
      background-color: $grey-66;
      border: 2px solid $light;
      transition: all 0.3s ease-out;
    }
    &__itm:hover {
      background-color: #f0f2ed;
    }
    &__itm:hover::before {
      background-color: $green-md;
      border: 2px solid $light;
      outline: 1px solid $green-md;
    }
  }
}
</style>
