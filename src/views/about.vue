<template>
  <div class="container">
    <div class="item" v-for="(item, index) in list" :key="index" @dblclick="openLink(item.link)">
      <vue-danmaku class="item-wrap" :ref="'danmaku-' + item.id" :config="item.config || config" :danmus="item.danmus" @mouseIn="onMouseIn(item.id)" @mouseOut="onMouseOut(item.id)">
        <!-- <div class="intro">
          <h2>{{ item.name }}</h2>
          <p>{{ item.more }}<span>{{item.more2}}</span></p>
        </div> -->
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
          link: 'http://me.wang64.cn',
          danmus: [
            '第一个当然给自己了',
            '轻轻双击打开~',
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