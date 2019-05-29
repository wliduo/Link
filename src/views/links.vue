<template>
  <div class="home">
    <!-- <div class="avatar">
      <a :href="titleUrl" target="_blank">
        <img src="https://dolyw.gitee.io/reader/Image/headt.png">
      </a>
    </div> -->
    <div class="content">
      <!-- <a :href="titleUrl" target="_blank"><h1 @click="titleUrl = 'https://me.dolyw.com'">{{ title }}</h1></a> -->
      <h1 @click="titleUrl = 'https://me.dolyw.com'">{{ title }}</h1>
    </div>
    <div class="container">

      <!-- <div class="item">
        <a href="https://dolyw.com/go?url=https://github.com/dolyw" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-github fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Github</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://gitee.com/dolyw" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-git fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Gitee</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://blog.csdn.net/dolyw" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-codiepie fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>CSDN</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://weibo.com/dolyw" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-weibo fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Weibo</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div> -->

      <div class="item">
        <a href="https://dolyw.com/go?url=https://res.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <!-- <i class="fa fa-bookmark-o fa-lg" aria-hidden="true"></i> -->
            <i class="fa fa-envira fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Music</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://cmd.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <!-- <i class="fa fa-circle-o fa-lg" aria-hidden="true"></i> -->
            <i class="fa fa-circle-o-notch fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>CMD</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://dolyw.com/404" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-link fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Links</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://lis.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-superpowers fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Video</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://text.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-font fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Random</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://char.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-picture-o fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Picture</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://mikutap.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-cogs fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Mikutap</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://lipstick.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-diamond fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Lipstick</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://article.dolyw.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-sun-o fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Article</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data () {
    return {
      text: [
        '如果生活还没能改变你，那你已经失败了',
        '我拼尽全力追逐你的脚步，而你却消失在我的眼前',
        '有些事，只能一个人做，有些关，只能一个人过，有些路，只能一个人走',
        '没时间是最无力的借口',
        '我们都希望离别不是句号，而是破折号，指向一个带着笑容的温暖明天',
        '放下~简单两个字，寥寥十一笔',
        '有一种落差是，你配不上自己的野心，也辜负了所受的苦难',
        '喜欢你的我就像个赌徒，输了所有，却还不肯离场',
        '有勇气，有担当是好事，有能力才是前提',
        '我不强求，不代表不在乎，没有拥有，所以从未失去',
        '充满希望的旅途胜过终点的到达',
        '努力到无能为力，拼搏到感动自己',
        '时间不会停下来等你，我们现在过的每一天，都是余生中最年轻的一天',
        '成长是一场温柔的修行，不是越来越强硬和尖锐，而是越来越宽宥和平和',
        '就怕你一生碌碌无为，还安慰自己平凡可贵',
        '人生不能太过圆满，求而不得未必是遗憾',
        '日子就像喝茶一样，只会苦一阵子，不会苦一辈子',
        '如果不坚强，流泪给谁看',
        '宁愿跑起来被拌倒无数次，也不要规规矩矩走一辈子',
        '我们用人生最好的年华做抵押，去担保一个说出来都会被人嘲笑的梦想',
        '现实是此岸，理想是彼岸，中间隔着湍急的河流，行动则是架在川上的桥梁',
        '这个世界上没有天才，只有不努力的笨蛋',
        '心之所向，素履以往，生如逆旅，一苇以航',
        '你错过的，别人才会得到，正如你得到的都是别人错过的',
        '何必为昨天的泪，打湿今天的阳光',
        '人生没有白走的路，每一步都算数',
        '很多时候，不怕万人阻挡，只怕自己投降',
        '一个人至少拥有一个梦想，有一个理由去坚强，心若没有栖息的地方，到哪里都是流浪',
        '看不透是可惜的，看透了是可悲的',
        '成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成',
        '你我还会这样相聚吗？我们会不会，像风中转蓬一样，各自滚向渺茫，相忘人生的荒漠',
        '注定分散的结局何必去挽留，强求的结果都不是好结果',
        '有些时候，其实自己已经知道答案，再坚持，不过是希望你会给我一个惊喜罢了',
        '世界上其实根本没有感同身受这回事，针不刺到别人身上，他们就不知道有多痛',
        '人总是在接近幸福时倍感幸福，在幸福进行时却患得患失',
        '别以为世界抛弃了你，其实世界压根没空搭理你',
        '世界上唯一不变的就是变化，世界上唯一可能的就是不可能',
        '因为有了因为，所以有了所以，既然已成既然，何必再说何必',
        '当你能飞的时候就不要放弃飞，当你能梦的时候就不要放弃梦',
        'Work hard in silence. let success make the noise.(在沉默中努力，让成功自己发声)',
        'We are all in the world of anxiety for safe.(我们都在不安的世界里找安稳)',
        'Loneliness is a no one to send a bad cold.(孤独是一场无人送药的重感冒)',
        'I will start fresh, be some one new.(我要重新开始，做不一样的自己)',
        'Never let your fear decide your future.(别让你的恐惧决定了你的未来)',
        'I believe good things happen every day.(我相信每天都有好事发生)',
        'Never give up, and good luck will find you.(不要放弃，好运总会垂青你的)',
        'Win a few, lose a few. that is life.(有得也有失，生活就是如此)'
      ],
      title: '这个世界上没有天才，只有不努力的笨蛋',
      titleUrl: 'https://me.dolyw.com',
      randomIndex: 0,
      i: 0,
      timer: 0,
      str: ''
    }
  },
  computed: {
    /* title: function () {
      return this.text[Math.floor(this.text.length * Math.random())]
    } */
  },
  created () {
  },
  mounted () {
    let t = this
    /* setInterval(function () {
      // console.log(t.text[Math.floor(t.text.length * Math.random())])
      // console.log(Math.floor(t.text.length * Math.random()))
      // t.title = t.text[Math.floor(t.text.length * Math.random())]
    }, 10000) */
    // 一开始默认给一个随机语句
    /* t.randomIndex = Math.floor(t.text.length * Math.random())
    t.randomText()
    t.typing() */
    t.getHitokoto()
  },
  methods: {
    randomText () {
      // 重置索引i和文字
      this.i = 0
      this.str = this.text[this.randomIndex]
      // 随机数不会和上一次重复，如果获取和上一次相同就重新获取，直到不同为止
      let index = Math.floor(this.text.length * Math.random())
      while (this.randomIndex === index) {
        index = Math.floor(this.text.length * Math.random())
        // console.log(this.randomIndex + ',' + index)
      }
      this.randomIndex = index
    },
    typing () {
      // 打字
      if (this.i <= this.str.length) {
        if (this.i === this.str.length) {
          this.title = this.str.slice(0, this.i++)
        } else {
          this.title = this.str.slice(0, this.i++) + '_'
        }
        this.timer = setTimeout(() => {
          this.typing()
        }, 150)
      } else {
        clearTimeout(this.timer)
        // 停顿1.5秒开始删除文字
        setTimeout(() => {
          this.clearTitle()
        }, 1500)
      }
    },
    clearTitle () {
      // 删除文字
      if (this.i >= 0) {
        this.title = this.str.slice(0, this.i--) + '_'
        this.timer = setTimeout(() => {
          this.clearTitle()
        }, 50)
      } else {
        clearTimeout(this.timer)
        // 删除完成重置
        this.randomText()
        this.typing()
      }
    },
    getHitokoto () {
      this.axios.get('https://api.fczbl.vip/hitokoto/?encode=json').then(response => {
        // console.log(response.data.hitokoto)
        // 重置索引i和文字
        this.i = 0
        this.str = response.data.hitokoto
        this.typingNet()
      }).catch(error => {
        console.log(error)
        this.randomIndex = Math.floor(this.text.length * Math.random())
        this.randomText()
        this.typing()
      })
    },
    typingNet () {
      // 打字
      if (this.i <= this.str.length) {
        if (this.i === this.str.length) {
          this.title = this.str.slice(0, this.i++)
        } else {
          this.title = this.str.slice(0, this.i++) + '_'
        }
        this.timer = setTimeout(() => {
          this.typingNet()
        }, 150)
      } else {
        clearTimeout(this.timer)
        // 停顿1.5秒开始删除文字
        setTimeout(() => {
          this.clearTitleNet()
        }, 1500)
      }
    },
    clearTitleNet () {
      // 删除文字
      if (this.i >= 0) {
        this.title = this.str.slice(0, this.i--) + '_'
        this.timer = setTimeout(() => {
          this.clearTitleNet()
        }, 50)
      } else {
        clearTimeout(this.timer)
        // 删除完成重置
        this.getHitokoto()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.fa{
  color: #fff;
}

a {
    color: #ddd;
    text-decoration:none;
}

a:link {
    color: #ddd;
    text-decoration:none;
}
a:visited {
    color: #ddd;
    text-decoration:none;
}
a:active {
    color: #ddd;
    text-decoration:none;
}

.home{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  border-radius: 5px;
}
.home .avatar{
  height: 90px;
  text-align: center;
}

.home .avatar img{
  margin-top: -75px;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}

.home .content{
  height: 100px;
  width: 480px;
  margin: 0px auto;
  text-align: center;
}

.home .content h1{
  /* padding-top: 55px; */
  position: relative;
  top: 50%;
  /* transform: translateY(-50%); */
  color: #fff;
  font-weight: 450;
  font-size: 1.2em;
}
.home .content p{
  color: #fff;
}

.container {
  width: 100%;
  height: 100%;
  padding: 10px;
  .item {
    float: left;
    width: calc(25% - 10px);
    height: calc(25% - 10px);
    margin: 5px;
    .cover {
      position: relative;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;
      // background: #fff;
      // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      // transform: translate3d(0, -2px, 0);
      transition: all 0.3s;
      .frontend {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: center;
        padding-left: 25px;
        transition: all 0.3s;
        
        .content {
          width: 70%;
          text-align: center;
          height:  26px;
          line-height: 30px;
          span {
            font-size: 18px;
            color: #fff;
            -webkit-font-smoothing: antialiased;
          }
        }
      }
      .backend {
        position: absolute;
        z-index: 0;
        top: 38px;
        left: 40px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        transition: all 0.5s;
        transform: scale(1);
        background: transparent;
      }
    }
    &:hover {
      &:nth-child(n) {
        .backend {
          background-image: linear-gradient(-45deg, #33CCFF, #FFCCCC);
        }
      }
      &:nth-child(2n) {
        .backend {
          background-image: linear-gradient(-45deg, #333333, #000000);
        }
      }
      &:nth-child(3n) {
        .backend {
          background-image: linear-gradient(-45deg, #66FF33, #669999);
        }
      }
      &:nth-child(4n) {
        .backend {
          background-image: linear-gradient(-45deg, #660000, #CC0000);
        }
      }
      &:nth-child(5n) {
        .backend {
          background-image: linear-gradient(-50deg, #0e2342, #3e90b9);
        }
      }
      &:nth-child(6n) {
        .backend {
          background-image: linear-gradient(-50deg, #02D3FF, #25292e);
        }
      }
      &:nth-child(7n) {
        .backend {
          background-image: linear-gradient(-45deg, #3ac19f, #FFFF00);
        }
      }
      &:nth-child(8n) {
        .backend {
          background-image: linear-gradient(-45deg, #f43e4f, #CCCCFF);
        }
      }
      &:nth-child(9n) {
        .backend {
          background-image: linear-gradient(-50deg, #b3281e, #3ac19f);
        }
      }
      &:nth-child(10n) {
        .backend {
          background-image: linear-gradient(-50deg, #64bea1, #3ac19f);
        }
      }
      &:nth-child(11n) {
        .backend {
          background-image: linear-gradient(-50deg, #FFFF00, #0e2342);
        }
      }
      &:nth-child(12n) {
        .backend {
          background-image: linear-gradient(-50deg, #0e2342, #3e90b9);
        }
      }
      
      .cover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
        .frontend {
          color: #fff;
        }
        .backend {
          transform: scale(15);
        }
      }
    }
  }
}
</style>
