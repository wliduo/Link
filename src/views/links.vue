<template>
  <div>
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

      <div class="item">
        <a href="https://cmd.wang64.cn" target="_blank">
        <div class="cover">
          <div class="frontend">
            <!-- <i class="fa fa-circle-o fa-lg" aria-hidden="true"></i> -->
            <i class="fa fa-circle-o-notch fa-lg" aria-hidden="true"></i>
            <div class="content">
              <span>Command</span>
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
          background-image: linear-gradient(-45deg, #158cd1, #6284f1);
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
          background-image: linear-gradient(-45deg, #25292e, #25292e);
        }
      }
      &:nth-child(6n) {
        .backend {
          background-image: linear-gradient(-50deg, #b3281e, #f43e4f);
        }
      }
      &:nth-child(7n) {
        .backend {
          background-image: linear-gradient(-50deg, #64bea1, #3ac19f);
        }
      }
      &:nth-child(8n) {
        .backend {
          background-image: linear-gradient(-50deg, #00a1d6, #50abe0);
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
