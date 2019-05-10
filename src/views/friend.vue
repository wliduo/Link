<template>
  <div class="container">
    <div class="item" v-for="(item, index) in list" :key="index" @dblclick="openLink(item.link)">
      <vue-danmaku class="item-wrap" :ref="'danmaku-' + item.id" :config="item.config || config" :danmus="item.danmus" @mouseIn="onMouseIn(item.id)" @mouseOut="onMouseOut(item.id)">
        <div class="avatar">
          <img :src="item.avatar">
        </div>
        <div class="intro">
          <h2>{{ item.name }}</h2>
          <p>{{ item.more }}<span>{{item.more2}}</span></p>
        </div>
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
        /*
        {
          id: 'flag',
          name: '哞菇',
          more: '头上长着蘑菇',
          more2: '居然是一种牛',
          link: 'http://flag.moe',
          avatar: require('https://dolyw.gitee.io/reader/Image/headt.png'),
          danmus: [
            '咕咕咕！',
            '有女装的潜质',
            '化妆一定很好看',
            '2333',
            '全栈大佬',
            '全栈大佬',
            '全栈大佬'
          ]
        },
        {
          id: 'diygod',
          name: 'DIYgod',
          more: '网红',
          more2: '他家有猫！',
          link: 'https://diygod.me',
          avatar: require('https://dolyw.gitee.io/reader/Image/headt.png'),
          danmus: [
            '哔哩哔哩，干杯( ˊ ▽ ` )丿'
          ],
          config: {
            speed: 2,
            loop: true
          }
        },
        {
          id: 'archeb',
          name: '蚊子',
          more: '我蚊子今天',
          more2: '要把你肛的喵喵叫',
          link: 'https://qwq.moe',
          avatar: require('https://dolyw.gitee.io/reader/Image/headt.png'),
          danmus: [
            '我，蚊子，打钱。'
          ],
          config: {
            fontSize: 30
          }
        },
        {
          id: 'nightcat',
          name: '夜喵',
          more: '有女朋友',
          more2: '最近快住一起了',
          link: 'https://nightcat.win',
          avatar: require('https://dolyw.gitee.io/reader/Image/headt.png'),
          danmus: [
            '？',
            '是个好人',
            '是个萌妹',
            '不是人的',
            '热心萌妹',
            '想被包养，不想上班',
            '我学了你们就再也追不上了',
            '热心群众',
            '大佬的',
            '钱真是好赚，每天坐着玩玩电脑就有收入',
            '喜欢怼人',
            '2333'
          ]
        },
        {
          id: 'geeku',
          name: '树',
          more: '树对我很好',
          more2: '可惜是个男的',
          link: 'https://geeku.net',
          avatar: 'https://dolyw.gitee.io/reader/Image/headt.png',
          danmus: [
            '周树人',
            '百年树人',
            '别树一帜',
            '阿里大树',
            '喵秀于林，树必催之',
            '百科全树'
          ]
        },
        {
          id: 'qingzhen',
          name: '清真',
          more: 'HZFE的群主',
          more2: '博客丑',
          link: 'http://zhaoyuxiang.cn',
          avatar: 'https://dolyw.gitee.io/reader/Image/headt.png',
          danmus: [
            '已经被架空了',
            '便秘',
            '打倒狗群主',
            '没福利差评',
            '不是女装群主，差评',
            '我不拉稀不便秘 怎么就是废物',
            '拉稀（铲铲说的',
            '便秘（铲铲说的'
          ]
        } */

        {
          id: 'dolyw',
          name: '随心',
          more: '第一第一',
          more2: '',
          link: 'https://dolyw.com/go?url=https://dolyw.com',
          avatar: 'https://dolyw.gitee.io/reader/Image/headt2.png',
          danmus: [
            '第一个当然给自己了',
            '轻轻双击打开~',
            '实在是不知道说什么~o(*////▽////*)o'
          ]
        }
      ],
      config: {
        // channels为空表示自动识别容器可容纳最高行数
        channels: '',
        fontSize: 14,
        loop: true
      }
    }
  },
  computed: {},
  created () { },
  mounted () { },
  methods: {
    onMouseIn (id) {
      this.$refs['danmaku-' + id][0].play()
      setTimeout(() => {
        this.$refs['danmaku-' + id][0].resize()
      }, 300)
    },
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
    width: 50%;
    height: 33%;
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
      width: 70%;
      height: 70%;
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
        font-size: 1em;
        color: #eee;
      }
      p {
        font-size: 0.8em;
        color: #ccc;
      }
      span {
        opacity: 0;
      }
    }
  }
}
</style>