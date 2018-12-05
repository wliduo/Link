<template>
  <div class="home">
    <!-- <div class="avatar">
      <a :href="titleUrl" target="_blank">
        <img src="https://wang926454.gitee.io/reader/Image/headt.png">
      </a>
    </div> -->
    <div class="content">
      <!-- <a :href="titleUrl" target="_blank"><h1 @click="titleUrl = 'https://me.wang64.cn'">{{ title }}</h1></a> -->
      <h1 @click="titleUrl = 'https://me.wang64.cn'">{{ title }}</h1>
    </div>
    <div class="container">

      <div class="item">
        <a href="https://char.wang64.cn" target="_blank">
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
        <a href="https://cmd.wang64.cn" target="_blank">
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
        <a href="https://article.wang64.cn" target="_blank">
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

      <div class="item">
        <a href="https://text.wang64.cn" target="_blank">
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
        <a href="https://mikutap.wang64.cn" target="_blank">
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
        <a href="https://lipstick.wang64.cn" target="_blank">
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

      <!-- <div class="item">
        <a href="https://github.com/wang926454" target="_blank">
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
        <a href="https://gitee.com/wang926454" target="_blank">
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
        <a href="https://blog.csdn.net/wang926454" target="_blank">
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
        <a href="https://weibo.com/wang926454" target="_blank">
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

      <!-- <div class="item">
        <a href="https://diygod.me/friends" target="_blank">
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
      </div> -->

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
        '当你能飞的时候就不要放弃飞，当你能梦的时候就不要放弃梦'
      ],
      title: '这个世界上没有天才，只有不努力的笨蛋',
      titleUrl: 'https://me.wang64.cn'
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
    setInterval(function () {
      // console.log(t.text[Math.floor(t.text.length * Math.random())])
      // console.log(Math.floor(t.text.length * Math.random()))
      t.title = t.text[Math.floor(t.text.length * Math.random())]
    }, 3000)
  },
  methods: {

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
  height: 110px;
  width: 480px;
  margin: 0px auto;
  text-align: center;
}

.home .content h1{
  padding-top: 55px;
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
    width: calc(33.33% - 10px);
    height: calc(33.33% - 10px);
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
        padding-left: 40px;
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
          background-image: linear-gradient(-45deg, #50b5ef, #6284f1);
        }
      }
      &:nth-child(2n) {
        .backend {
          background-image: linear-gradient(-45deg, #d43437, #f43e4f);
        }
      }
      &:nth-child(3n) {
        .backend {
          background-image: linear-gradient(-45deg, #3385f7, #1457d5);
        }
      }
      &:nth-child(4n) {
        .backend {
          background-image: linear-gradient(-45deg, #dd7843, #f5b740);
        }
      }
      &:nth-child(5n) {
        .backend {
          background-image: linear-gradient(-50deg, #0e2342, #3e90b9);
        }
      }
      &:nth-child(6n) {
        .backend {
          background-image: linear-gradient(-50deg, #64bea1, #3ac19f);
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
