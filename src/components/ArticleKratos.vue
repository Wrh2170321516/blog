<template>
  <article class="kratos-hentry clearfix">
    <div class="kratos-entry-border-new clearfix">
      <div class="kratos-entry-thumb-new">
        <router-link :to="'./article_info/' + 'hhh'">
          <img src="../assets/lxy1.jpg"
               alt="2018-2019  2020-2022，我失去了她">
        </router-link>
        <!--        <a href="https://www.moeeh.cn/468.html"></a>-->
      </div>
      <div class="kratos-post-inner-new">
        <header class="kratos-entry-header-new">
          <a class="label" href="#">标签</a>
          <h2 class="kratos-entry-title-new">
            <a href="#">{{ AData.title }}</a>
          </h2>
        </header>
        <div class="kratos-entry-content-new">
          <p>{{ "《我是类容》" + AData.title + "《我是类容》" }} 测试文章精神小伙精神小伙精神小伙精神小伙精神小伙精神小伙测试测试</p>
        </div>
      </div>
      <div class="kratos-post-meta-new">
        <span class="pull-left">
            <a><i class="fa fa-calendar"></i> {{ AData.createdAt.split('T')[0] }}</a>
            <a :href="AData.url + '#comments'"><i class="fa fa-commenting-o"></i> {{ AData.time }}条评论</a>
        </span>
        <span class="visible-md visible-sm pull-left">
                            <a href="#"><i class="fa fa-eye"></i> {{
                                AData.time * 3
                              }}次阅读</a>
                            <a href="javascript:" data-action="love" data-id="468" class="Love"><i
                                class="fa fa-thumbs-o-up"></i> 10人点赞</a>
                            <a href="/?author=1"><i class="fa fa-user"></i> 作者</a>
                        </span>
        <span class="pull-right">
                            <a class="read-more" :href="AData.url" title="阅读全文">阅读全文 <i
                                class="fa fa-chevron-circle-right"></i></a>
                        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticleKratos",
  props: ["AData"]
}
</script>

<style lang="less" scoped>
.kratos-hentry {
  background-color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.333rem;
  //height: 20rem;
  position: relative;


  .kratos-entry-border-new {
    padding-top: 20px;

    .kratos-entry-thumb-new {
      position: relative;
      float: left;
      width: 240px;
      height: 145px;
      overflow: hidden;
      margin: 0 21px 10px;


      img {
        padding: 2px;
        border: 1px solid #f3f3f3;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .kratos-post-inner-new {
      padding: 0 20px;
    }

    .kratos-entry-content-new {
      height: auto;
      overflow: hidden;
      text-overflow: ellipsis;

      p {
        font-size: 15px;
      }
    }

    .kratos-entry-header-new {
      //display: flex;
      h2 {
        font-size: 21px;
        //display: inline-block;
      }

      .label {
        display: inline-block;
        padding: 4px 6px;
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        color: #fff;
        vertical-align: baseline;
        white-space: nowrap;
        background-color: #51aded;
        margin-right: 5px;
        position: relative;
        top: -3px;
        cursor: url(https://cloud.moeeh.cn/wp-content/themes/kratos-pjax-master/static/images/pointer.cur), auto;
      }
    }

    .kratos-post-meta-new {
      width: 100%;
      //position: absolute;
      //bottom: 0;
      padding: 3px 20px;
      border-top: 1px solid #f3f3f3;
      //line-height: 27px;
      overflow: hidden;
      display: block;
      clear: both;
      font-size: 12px;
      background: rgba(253, 253, 253, .7);

      .pull-left {
        float: left !important;

        a {
          margin-right: 0.667rem;
        }
      }


      .pull-right {
        float: right !important;

        .read-more {
          margin-right: 0.533rem;

          .fa-chevron-circle-right::before {
            content: "\e927";
          }
        }
      }
    }
  }
}

//手机画面
@media (max-width: 768px) {


  .visible-md {
    display: none;
  }

  .kratos-hentry {
    .kratos-entry-border-new {
      padding: 0;

      .kratos-entry-header-new .label {
        display: none;
      }
    }

    .kratos-entry-border-new {
      .kratos-entry-thumb-new {
        position: relative;
        float: none;
        width: auto;
        height: auto;
        overflow: hidden;
        padding: 0;
        margin: 0;
        margin-bottom: 20px;

        img {
          height: auto;
          max-width: 100%;
          width: 750px;
          padding: 0;
          border: 0;
        }
      }
    }

  }
}
</style>