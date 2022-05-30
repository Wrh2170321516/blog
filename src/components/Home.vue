<template>
  <div class="Index_A">
    <article-kratos v-for="i in $store.state.subData" :AData="i" :key="i.objectId"></article-kratos>
    <!--分页器-->
    <el-pagination
        layout="prev, pager, next"
        :page-size="5"
        :total="$store.state.totalData.length"
        @current-change="currentClick($event)"
        style="text-align: center">
    </el-pagination>
  </div>
</template>

<script>
// import axios from 'axios'
import ArticleKratos from "./ArticleKratos"

export default {
  name: "Home",
  data() {
    return {
      // AData: [],
      // IData: []
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'article-kratos': ArticleKratos
  },
  created() {
    // 旧版请求数据
    /*
    axios.get(
        // http://localhost:5800
        "http://395149j70j.zicp.vip:22581", {
          headers: {
            'content-type': 'application/json;charset=utf-8',
          }
        })
        .then(res => {
          console.log(res)
          this.AData = res.data.results;
          this.IData = res.data.results.slice(0, 5)
        })
        .catch((err) => {
          console.log(err)
        })
     */

    // 从vuex获取数据
    this.$store.dispatch('getTotalData')
  },
  methods: {
    currentClick(e) {
      // 旧版更改数据
      // this.IData = this.AData.slice(e * 5 - 5, e * 5)

      // 从vuex更改数据
      this.$store.dispatch('changeTheNumberOfPages', e)
    }
  }
}
</script>

<style lang="less" scoped>


.Index_A {
  //box-sizing: border-box;
}


</style>