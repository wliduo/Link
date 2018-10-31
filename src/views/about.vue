<template>
  <div>
    <div class="container">
      <div class="content">
        <h1>关于</h1>
        <p>这是一个待完成的页面</p>
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
.container {
  width: 100%;
  height: 100%;
  padding: 20px;
  .content {
    color: #eee;
    h1 {
      font-size: 32px;
      font-weight: 300;
      line-height: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 15px;
      line-height: 30px;
    }
  }
}
</style>
