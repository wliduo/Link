<template>
  <div class="home">
    <div class="avatar">
      <a :href="titleUrl" target="_blank">
        <img src="~@/assets/images/head.jpg">
      </a>
    </div>
    <div class="content">
      <h1 @click="titleUrl = 'https://cv.wang64.cn'">{{ title }}</h1>
    </div>
    <div class="container">

      <div class="item">
        <a href="https://note.wang64.cn/" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-snowflake-o fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>&diams;Note&diams;</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://me.wang64.cn/" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-heartbeat fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>&rarr;Me&larr;</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://blog.wang64.cn/" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-futbol-o fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>&diams;Blog&diams;</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://article.wang64.cn/" target="_blank">
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
        <a href="https://msg.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <!-- <i class="fa fa-empire fa-lg" aria-hidden="true"></i> -->
            <i class="fa fa-envira fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Message</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <!-- <div class="item" v-if="cv">
        <a href="https://cv.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-superpowers fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>MyCv</span>
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
        '⊙▂⊙',
        '⊙０⊙',
        '⊙︿⊙',
        "(●'◡'●)",
        '⊙ω⊙',
        '⊙﹏⊙',
        '∩０∩',
        '∩﹏∩',
        '●▂●',
        '●ω●',
        '∪ω∪',
        '≧ω≦',
        '＞ω＜',
        '∩ω∩'
      ],
      title: 'o(∩_∩)o',
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
    }, 1500)
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.fa{
  color: #fff;
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
  height: 30px;
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
