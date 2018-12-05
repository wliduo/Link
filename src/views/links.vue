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
        '你得先看重自己，否则别人就会当你一钱不值'
      ],
      title: '如果生活还没能改变你，那你已经失败了',
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
