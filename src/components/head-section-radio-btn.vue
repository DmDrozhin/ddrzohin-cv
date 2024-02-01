<template>
  <div class="lang">
    <input type="radio" id="lang-en" name="lang" @input="this.$emit('lang', 'en')" checked>
    <label for="lang-en">EN</label>
    <input type="radio" id="lang-ua" name="lang" @input="this.$emit('lang', 'ua')">
    <label for="lang-ua">UA</label>
  </div>
</template>

<script>
export default {
  name: 'head-section-radio-btn'
}
</script>

<style lang="scss" scoped>
.lang {
  @include fr;

  @include media('min', 'xs') { @include fc; row-gap: 5px; }
  @include media('min', 'md') { @include fr; column-gap: 3px; }
  & input {
    display: none;
  }
  & label {
    font-size: 14px;
    margin: 0 2px;
    // border: 0.5px dotted orange;
    position: relative;
    @include media('min', 'xs') { font-size: 22px; }
    @include media('min', 'md') { font-size: 14px; }
    cursor: pointer;
  }
  & input:checked + label {
    color: $green-end;
  }
  & input:checked + label::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: $green-md;
    
  }
}

</style>