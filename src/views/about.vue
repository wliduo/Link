<template>
  <div class="container">
    <div class="item" v-for="(item, index) in list" :key="index" @click="openLink(item.link)">
      <vue-danmaku class="item-wrap" :ref="'danmaku-dolyw'" :config="config" :danmus="item.danmus"></vue-danmaku>
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
      data: [
        '看什么看，不就是一堆弹幕啊~',
        "(●'◡'●)",
        '轻轻点击打开关于页面~∩ω∩',
        '看到这条弹幕你已经不是前1000了',
        '暂停听BGM',
        '大军还有一秒到达现场~⊙﹏⊙',
        '我猜你肯定盯着看我写的弹幕了',
        "红红火火恍恍惚惚，韩红会画画后悔画韩寒~(●'◡'●)",
        '开心的像个200多斤的孩子~⊙０⊙',
        '前方高能，非战斗人员赶快撤离',
        '散了吧，要X的~⊙︿⊙',
        'B站看片指日可待~∩０∩',
        '此生无悔入海贼，来世愿做船上人',
        '我觉得，我可以再抢救一下~●ω●',
        'BGM~爱的自杀，再问供养，唉，我都要哭了~∪ω∪',
        '干了这碗入江陈醋，来世还做傲娇直树~≧ω≦',
        '卡在了奇怪的地方~＞ω＜',
        '刘星的蚂蚁花被',
        '胖儿子沉迷游戏，秃父苦劝无言',
        '233333',
        '6666666',
        '瞬间爆炸',
        '朱军画质',
        '牛顿的棺材板压不住了',
        '教练我想学这个',
        '实在是不知道说什么~o(*////▽////*)o'
      ],
      list: [
        {
          id: 'dolyw',
          link: 'https://dolyw.com/go?url=https://me.dolyw.com',
          danmus: []
        }
      ],
      config: {
        channels: 10,
        speed: 7,
        fontSize: 15,
        loop: true
      }
    }
  },
  computed: {},
  created () { },
  mounted () {
    // 如果是手机端弹幕显示行数置空，为空表示自动识别容器可容纳最高行数
    if (this.util.isMobile()) {
      this.config.channels = ''
    }
    this.axios.get('https://api.fczbl.vip/hitokoto/?encode=json').then(response => {
        // console.log(response.data.hitokoto)
      this.$refs['danmaku-dolyw'][0].add(response.data.hitokoto)
    }).catch(error => {
      console.log(error)
      this.$refs['danmaku-dolyw'][0].add(this.data[Math.floor(this.data.length * Math.random())])
    })
    this.getHitokoto()
  },
  methods: {
    openLink (link) {
      window.open(link)
    },
    getHitokoto () {
      this.axios.get('https://api.fczbl.vip/hitokoto/?encode=json').then(response => {
        // console.log(response.data.hitokoto)
        this.$refs['danmaku-dolyw'][0].add(response.data.hitokoto)
      }).catch(error => {
        console.log(error)
        this.$refs['danmaku-dolyw'][0].add(this.data[Math.floor(this.data.length * Math.random())])
      }).finally(() => {
        // always executed
        if (this.list[0].danmus.length > 2) {
          this.$refs['danmaku-dolyw'][0].play()
          setTimeout(() => {
            this.$refs['danmaku-dolyw'][0].resize()
          }, 300)
        }
        setTimeout(() => {
          if (this.list[0].danmus.length < 30) {
            this.getHitokoto()
          }
        }, 500)
      })
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
  }
}
</style>