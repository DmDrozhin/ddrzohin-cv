<template>
  <div class="my-cv">
    <div class="my-cv__wrap">
      <section class="my-cv__head head">
        <div class="head__wrap">
          <div class="head__sec-1 sec-1">
            <hgroup class="sec-1__t-group">
              <h1 class="t-group__name">{{ name }}</h1>
              <p class="t-group__pos">{{ position }}</p>
            </hgroup>
            <div class="sec-1__cont cont">
              <div class="cont__link eml"><a href="mailto:ddrozhin@gmail.com">ddrozhin@gmail.com</a></div>
              <div class="cont__link git"><a href="https://github.com/DmDrozhin">DmDrozhin</a></div>
              <div class="cont__link tlg"><a href="https://t.me/DDrozhin">@DDrozhin</a></div>
              <div class="cont__link tel"><a href="tel:+380952856434">+38 095 285 64 34</a></div>
            </div>
          </div>
          <div class="head__sec-2 sec-2">
            <img class="sec-2__photo" src="@/assets/imgs/my-photo.webp" alt="Dmitry Drozhin self photo">
          </div>
        </div>
        <div class="head__div"></div>


      </section>
    </div>
    <div class="my-cv__sec-main-wrap">
      <main-section></main-section>
      <main-section-aside></main-section-aside>
    </div>
    
  </div>
</template>

<script>
import mainSection from '../components/main-section.vue'
import mainSectionAside from '../components/main-section-aside.vue'
export default {
  name: 'main-page',
  components: { mainSection, mainSectionAside },
  data () {
    return {
      name: 'Drozhzhin Dmitriy',
      position: 'Frontend Developer (Vue.js)'

    }
  }
}
</script>

<style lang="scss" scoped>
.my-cv {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  // background-color: #dbd4d4; // tech
  @include general-width;
  &__wrap {
    // border: 1px solid peru;
  }
  &__head, .head {
    &__wrap {
      @include fr-sb;
    }
    &__sec-1, .sec-1 {
      flex: 1;
      &__t-group, .t-group {
        text-align: left;
        margin-left: 52px;
        margin-bottom: 40px;
        &__name {
          font-size: 32px;
          letter-spacing: 2.7px;
          line-height: 1;
          margin-bottom: 10px;
        }
        &__pos {
          font-size: 22px;
          letter-spacing: 0.1px;
        }
      }
      &__cont, .cont {
        background-color: $grey-80;
        // height: 34px;
        & a {
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.2px;
          color: $light;
          line-height: 34px;
        }
        @include fr-ar-c;
        &__link {
          position: relative;
          padding-left: 36px;
        }
        &__link:hover::after {
          content: '';
          position: absolute;
          display: block;
          height: 5px;
          width: 100%;
          top: -5px;
          left: 0;
          background-color: $green-md;
        }
        &__link.eml::before {
          content: url('@/assets/svg/gmail.svg');
          position: absolute;
          left: 0;
          top: 4px;
          width: 30px;
          height: auto;
        }
        &__link.git::before {
          content: url('@/assets/svg/github.svg');
          position: absolute;
          left: 0;
          top: 2px;
          width: 30px;
          height: 30px;
        }
        &__link.tlg::before {
          content: url('@/assets/svg/telegram.svg');
          position: absolute;
          left: 0;
          top: 2px;
          width: 30px;
          height: 30px;
        }
        &__link.tel {
          padding-left: 26px;
        }
        &__link.tel::before {
          content: url('@/assets/svg/tel.svg');
          position: absolute;
          left: 0;
          top: 3px;
          width: 28px;
          height: 28px;
        }
      }
    }
    &__sec-2, .sec-2 {
      &__photo {
        overflow: clip;
        overflow-clip-margin: content-box;
        max-width: 133px;
        min-height: 100%;
        border-top-left-radius: 18px;
        object-fit: cover;
      }
    }
    &__div {
      height: 78px;
      background: rgb(195,245,68);
      background: linear-gradient(90deg, rgba(195,245,68,1) 0%, rgba(195,245,68,1) 0%, rgba(116,164,0,1) 100%);
    }
  }
  &__sec-main-wrap {
    @include fr;
    // border: 0.5px dotted red;
  }
}
</style>
