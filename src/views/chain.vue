<template>
  <div>
    <div class="container">

      <div class="item">
        <a href="https://dolyw.com/go?url=https://bing.ioliu.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-file-image-o fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Bing壁纸</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://api.i-meto.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-eercast fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>MetoAPI</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=http://pandownload.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>PanDown</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=http://www.cyxitong.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-window-maximize fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>SysDown</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://hellodigua.github.io/vue-danmaku" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-rebel fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Danmaku</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=https://squoosh.app" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-play fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Squoosh</span>
            </div>
          </div>
          <div class="backend"></div>
        </div>
        </a>
      </div>

      <div class="item">
        <a href="https://dolyw.com/go?url=http://www.ofmonkey.com" target="_blank">
        <div class="cover">
          <div class="frontend">
            <i class="fa fa-simplybuilt fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>在线工具</span>
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
    }
  },
  computed: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style lang="scss" scoped>
.fa{
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
          background-image: linear-gradient(-45deg, #00CC99, #FF3300);
        }
      }
      &:nth-child(2n) {
        .backend {
          background-image: linear-gradient(-45deg, #1457d5, #00CC99);
        }
      }
      &:nth-child(3n) {
        .backend {
          background-image: linear-gradient(-45deg, #000CCC, #6666CC);
        }
      }
      &:nth-child(4n) {
        .backend {
          background-image: linear-gradient(-45deg, #25292e, #f43e4f);
        }
      }
      &:nth-child(5n) {
        .backend {
          background-image: linear-gradient(-45deg, #f43e4f, #CCCCFF);
        }
      }
      &:nth-child(6n) {
        .backend {
          background-image: linear-gradient(-50deg, #b3281e, #3ac19f);
        }
      }
      &:nth-child(7n) {
        .backend {
          background-image: linear-gradient(-50deg, #64bea1, #3ac19f);
        }
      }
      &:nth-child(8n) {
        .backend {
          background-image: linear-gradient(-50deg, #FFFF00, #0e2342);
        }
      }
      &:nth-child(9n) {
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
