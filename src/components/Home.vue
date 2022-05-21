<template>
  <div class="Index_A">
    <article-kratos v-for="i in IData" :AData="i" :key="i.objectId"></article-kratos>
    <!--分页器-->
    <el-pagination
        layout="prev, pager, next"
        :page-size="5"
        :total="AData.length"
        style="text-align: center"
        @current-change="currentClick($event)">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
import ArticleKratos from "./ArticleKratos"

export default {
  name: "Home",
  data() {
    return {
      AData: [],
      IData: []
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'article-kratos': ArticleKratos
  },
  created() {
    // 请求数据
    axios.get(
        // http://localhost:5800
        "http://localhost:5800", {
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
  },
  methods: {
    currentClick(e) {
      // console.log(e)
      this.IData = this.AData.slice(e * 5 - 5, e * 5)
      // console.log(this.IData)
    }
  }
}
</script>

<style lang="less" scoped>


.Index_A {
  //box-sizing: border-box;
}


</style>