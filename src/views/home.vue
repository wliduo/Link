<template>
  <div class="home">
    <div class="avatar">
      <a :href="titleUrl" target="_blank">
        <img src="https://wang926454.gitee.io/reader/Image/headt.png">
      </a>
    </div>
    <!-- <div class="content">
      <a :href="titleUrl" target="_blank"><h1 @click="titleUrl = 'https://me.wang64.cn'">{{ title }}</h1></a>
    </div> -->
    <div class="container">

      <div class="item">
        <a href="https://note.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-snowflake-o fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Note</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <!-- <a href="https://blog.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            
            <div class="content">
              <span></span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a> -->
        <h1 @click="titleUrl = 'https://me.wang64.cn'">{{ title }}</h1>
      </div>

      <div class="item">
        <a href="https://blog.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-futbol-o fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Blog</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>
      
      <div class="item">
        <a href="https://res.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
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
        <a href="https://cv.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-heartbeat fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>MyCv</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://lis.wang64.cn" target="_blank">
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
        <a href="https://one.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-anchor fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>OnePiece</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://chats.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <!-- <i class="fa fa-empire fa-lg" aria-hidden="true"></i> -->
            <i class="fa fa-weixin fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>MyChat</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://msg.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-hourglass-o  fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Message</span>
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
        '⊙▂⊙',
        '⊙０⊙',
        '⊙︿⊙',
        '⊙ω⊙',
        '∩０∩',
        '∩﹏∩',
        "(●'◡'●)",
        '●▂●',
        '●ω●',
        'o(∩_∩)o',
        '∪ω∪',
        '≧ω≦',
        '＞ω＜',
        '∩ω∩',
        '⊙﹏⊙'
      ],
      title: 'o(∩_∩)o',
      titleUrl: 'https://me.wang64.cn',
      randomIndex: 0
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
    }, 1500) */
    // 一开始默认给一个随机标题
    t.title = t.text[Math.floor(t.text.length * Math.random())]
    t.changeTitle()
  },
  methods: {
    changeTitle () {
      setTimeout(() => {
        // 随机数不会和上一次重复，如果获取和上一次相同就重新获取，直到不同为止
        let index = Math.floor(this.text.length * Math.random())
        while (this.randomIndex === index) {
          index = Math.floor(this.text.length * Math.random())
        // console.log(this.randomIndex + ',' + index)
        }
        this.randomIndex = index
        // 给标题赋值
        this.title = this.text[this.randomIndex]
        this.changeTitle()
      }, 1500)
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
  height: 0px;
  text-align: center;
}

.home .avatar img{
  margin-top: -75px;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}

.home .content{
  height: 0px;
  text-align: center;
}

.home .content h1{
  color: #fff;
  font-weight: 300;
  font-size: 20px;
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
    text-align: center;
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
    h1 {
      margin-top: 47%;
      color: #fff;
      font-weight: 450;
      font-size: 1.2em;
    }
    &:hover {
      &:nth-child(n) {
        .backend {
          background-image: linear-gradient(-45deg, #50b5ef, #000033);
        }
      }
      &:nth-child(2n) {
        .backend {
          background-image: linear-gradient(-45deg, #d43437, #f43e4f);
        }
      }
      &:nth-child(3n) {
        .backend {
          background-image: linear-gradient(-45deg, #6666CC, #0066FF);
        }
      }
      &:nth-child(4n) {
        .backend {
          background-image: linear-gradient(-45deg, #CC0033, #990033);
        }
      }
      &:nth-child(5n) {
        .backend {
          background-image: linear-gradient(-50deg, #FFFFCC, #3e90b9);
        }
      }
      &:nth-child(6n) {
        .backend {
          background-image: linear-gradient(-50deg, #CCCCFF, #990000);
        }
      }
      &:nth-child(7n) {
        .backend {
          background-image: linear-gradient(-50deg, #000000, #FFFFFF);
        }
      }
      &:nth-child(8n) {
        .backend {
          background-image: linear-gradient(-50deg, #666600, #66CC33);
        }
      }
      &:nth-child(9n) {
        .backend {
          background-image: linear-gradient(-50deg, #99CC99, #99FF33);
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
