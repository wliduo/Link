<template>
  <div class="container">
    <div class="item" v-for="(item, index) in list" :key="index" @click="openLink(item.link)">
      <vue-danmaku class="item-wrap" :ref="'danmaku-' + item.id" :config="item.config || config" :danmus="item.danmus">
        
      </vue-danmaku>
    </div>
  </div>
</template>
<script>
import VueDanmaku from 'vue-danmaku'
export default {
  components: {
    VueDanmaku
  },
  props: {},
  data () {
    return {
      list: [
        {
          id: 'wang926454',
          name: '随心',
          more: '第一第一',
          more2: '',
          link: 'https://me.wang64.cn',
          danmus: [
            '看什么看，不就是一堆弹幕啊~',
            '⊙▂⊙',
            '轻轻点击打开关于页面~',
            '⊙ω⊙',
            '●▂●',
            '⊙﹏⊙',
            '∩﹏∩',
            '我猜你肯定盯着看我写的弹幕了~',
            "(●'◡'●)",
            '⊙０⊙',
            'hhh~',
            '⊙︿⊙',
            '∩０∩',
            '●ω●',
            '∪ω∪',
            '≧ω≦',
            '＞ω＜',
            '∩ω∩',
            '实在是不知道说什么~o(*////▽////*)o'
          ]
        }
      ],
      config: {
        channels: 6,
        loop: true
      }
    }
  },
  computed: {},
  created () { },
  mounted () {
    this.$refs['danmaku-' + 'wang926454'][0].play()
    setTimeout(() => {
      this.$refs['danmaku-' + 'wang926454'][0].resize()
    }, 300)
  },
  methods: {
    onMouseOut (id) {
      this.$refs['danmaku-' + id][0].stop()
    },
    openLink (link) {
      window.open(link)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 10px;
  .item {
    float: left;
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    &:hover {
      .item-wrap {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.2);
        border-radius: 5px;
        span {
          opacity: 1;
        }
      }
    }
    .item-wrap {
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .avatar {
      float: left;
      width: 70px;
      height: 70px;
      margin: 0 10px;
      img {
        height: 60px;
        max-width: 60px;
        border-radius: 50%;
      }
    }
    .intro {
      h2 {
        font-size: 18px;
        color: #eee;
      }
      p {
        font-size: 14px;
        color: #ccc;
      }
      span {
        opacity: 0;
      }
    }
  }
}
</style>