<template>
  <section class="header">
    <head-section-radio-btn class="header__radio" @lang="setLang($event)" />
      <div class="header__wrap">

        <div class="header__s1 s1">
          <div class="s1__photo">
            <!-- <img src="@/assets/imgs/my-photo-640.webp" alt="Dmitry Drozhin photo"> -->
            <picture>
              <source media="(max-width: 576px)" 
                srcset="
                  @/assets/imgs/my-photo-403-1x.webp 1x,
                  @/assets/imgs/my-photo-403-2x.webp 2x,
                  @/assets/imgs/my-photo-403-3x.webp 3x"
                type="image/webp"
              >
              <source media="(max-width: 768px)" 
                srcset="
                  @/assets/imgs/my-photo-380-1x.webp 1x,
                  @/assets/imgs/my-photo-380-2x.webp 2x,
                  @/assets/imgs/my-photo-380-3x.webp 3x"
                type="image/webp"
              >
              <source media="(max-width: 992px)"
                srcset="
                  @/assets/imgs/my-photo-188-1x.webp 1x,
                  @/assets/imgs/my-photo-188-2x.webp 2x,
                  @/assets/imgs/my-photo-188-3x.webp 3x"
                type="image/webp"
              >
              <source media="(min-width: 993px)"
                srcset="
                  @/assets/imgs/my-photo-157-1x.webp 1x,
                  @/assets/imgs/my-photo-157-2x.webp 2x,
                  @/assets/imgs/my-photo-157-3x.webp 3x"
                type="image/webp"
              >
              <img src="@/assets/imgs/my-photo-640.webp" alt="Dmitry Drozhin photo">
            </picture>
            </div>
            <!-- sizes="(min-width: 0px) 0px, (min-width: 768px) 768px, (min-width: 992) 992px" -->
        </div>
  
        <div class="header__s2 s2">
          <hgroup class="s2__title title">
            <h1 class="title__name">{{ curr.person.name }}</h1>
            <p class="title__job">{{ curr.person.job }}</p>
          </hgroup>
        </div>

        <transition name="roll-out" v-if="true">
          <head-section-contacts class="header__contacts" :isMenu="isMenu" />
        </transition>
      
      </div>
    
    <div class="header__divider divider">
      <button class="divider__button button" @click="handle" ref="arrow" aria-label="show or hide skills button">
        <span :class="{ rotate: isOpen }"></span>
      </button>
    </div>
  </section>
</template>

<script>
import headSectionContacts from '@/components/head-section-contacts.vue'
import headSectionRadioBtn from '@/components/head-section-radio-btn.vue'
import * as En from '@/data/content-en.js'
import * as Ua from '../data/content-ua.js'
export default {
  name: 'head-section',
  components: { headSectionContacts, headSectionRadioBtn },
  props: { isOpen: { type: Boolean, default: true }, isMenu: { type: Number } },
  data() {
    return{
      name: 'Dmitriy Drozhzhin',
      position: 'Frontend Developer (Vue.js)',
      isSkills: true,
      lang: 'en'
    }
  },
  computed: {
    curr() { return this.lang === 'en' ? En : Ua }
  },
  methods: {
    handle() { this.$emit('clicked') },
    setLang(ev) {
      this.lang = ev
      this.$emit('lang', ev)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: #eaeaea;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @include media('min', 'xs') { padding-top: 25px; }
    @include media('min', 'md') { padding-top: 0px; }
    position: relative;

    &__radio {
      position: absolute;
      top: 10px;
      @include media('min', 'xs') { right: 3%; }
      @include media('min', 'md') { right: 30%; }
      @include media('min', 'lg') { right: 25%; }
      // border: 0.5px solid rgb(165, 165, 23);
    }

    &__wrap {
      display: grid;
      align-items: center;
      @include media('min', 'xs') {
        height: fit-content;
        grid-template-columns: 1fr;
        grid-template-areas: 'photo' 'title' 'contacts';
      } // 0
      @include media('min', 'md') {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas: 'title photo' 'contacts contacts';
        align-content: space-between;
      } // 768
      @include media('min', 'lg') {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas: 'title photo' 'contacts photo';
        align-content: space-between;
      } // 768
    }
    &__s1, .s1 {
      grid-area: photo;
      &__photo {
        position: relative;
        margin: 0 auto;
        @include media('min', 'xs') { width: 70%; padding-bottom: 70%; }
        @include media('min', 'sm') { width: 50%; padding-bottom: 50%; margin: 0 auto; }
        @include media('min', 'md') {
          top: 0;
          width: 45%;
          padding-bottom: 45%;
          margin: 0 0 0 auto;
        }
        @include media('min', 'lg') {
          width: 100%;
          padding-bottom: 100%;
          z-index: 10;
        }
        & img {
          border-top-left-radius: 10%;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1;
        }
      }
    }
    &__s2, .s2 {
      @include media('min', 'xs') { padding: 35px 15px 75px 15px; }
      @include media('min', 's')  { padding: 50px 50px 100px 50px; }
      @include media('min', 'sm') { padding: 70px 50px 120px 50px; }
      @include media('min', 'md') { padding: 20px 50px 20px 50px; }
      @include media('min', 'lg') { padding: 30px 50px 20px 50px; }
      grid-area: title;
      &__title, .title {
        // @include marker;
        &__name {
          letter-spacing: 2.7px;
          margin-bottom: 10px;
          @include media('min', 'xs') { font-size: 28px; line-height: 1.3; text-align: center; }
          @include media('min', 'md') { font-size: 32px; line-height: 1; text-align: left; }
        }
        &__job {
          padding-right: 10px;
          @include media('min', 'xs') { font-size: 18px; text-align: center; }
          @include media('min', 'md') { font-size: 22px; text-align: left; }
        }
      }
    }
    &__contacts {
      grid-area: contacts;
    }

    &__divider, .divider {
      height: 78px;
      background: rgb(195,245,68);
      background: linear-gradient(90deg, rgba(195,245,68,1) 0%, rgba(195,245,68,1) 0%, rgba(116,164,0,1) 100%);
      @include fr-nd;
      padding: 0 40px;

      // BUTTON OPEN SKILLS
      &__button {
        @include media('max', 'md') { display: flex; }
        @include media('min', 'md') { display: none; }
        position: relative;
        // border: 0.5px dotted yellow;
        width: 100px;
        padding: 0 25px;
        @include fr-c-c;
      }
      &__button > span {
        display: inline-block;
        background-image: url('../assets/svg/arrow.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 60px;
        width: 100px;
        padding-bottom: 60px;
        transition: transform 0.9s ease-in-out;
      }
      &__button::after {
        content: 'Skills';
        position: absolute;
        font-size: 14px;
        letter-spacing: 1.8px;
        color: $bg-2;
        bottom: 2px;
        left: 35px;
      }
      &__button:hover {
        background-color: #74A400;
      }
      &__button:hover::before {
        content: '';
        position: absolute;
        display: block;
        background-color: $green-md;
        height: 5px;
        width: 100%;
        top: -5px;
        left: 0;
      }
    }
  }
  .rotate {
    transform: rotate(180deg);
  }

</style>