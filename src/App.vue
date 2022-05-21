<template>
  <div id="app">
    <header class="navigationBar">
      <nav class="container" :style="{right: navigationBar.ul_right + '%'}">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/introduction">博客类容</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
        </ul>
      </nav>
      <div class="nav-toggle" :class="{toon: navigationBar.ul_right === 0}" @click="navigationBar_passOff">
        <a class="kratos-nav-toggle js-kratos-nav-toggle"><i></i></a>
      </div>
    </header>
    <div class="kratos-start">
      <h1>Ks精神小伙的博客</h1>
      <p>花花世界迷人眼，没有实力别赛脸</p>
      <!--      <audio id="myAudio1" src="./assets/jsmp3.mp3" controls="controls" muted>定义音频</audio>-->
    </div>
    <div class="kratos-content container">
      <div class="kratos-content_main">
        <router-view></router-view>
      </div>
      <div class="affix-top">其他类容</div>
    </div>
    <div id="footer">
      <div class="container">
        <p>© 2022 Ks精神小伙. ALL RIGHTS RESERVED.</p>
        <p>已在风雨中度过 {{ getDateT }}</p>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      navigationBar: {
        ul_right: -100
      },
      screenWidth: 0,
      getDateT: ''
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })()
    }
    /*document.addEventListener("scroll", () => {
      let audio = document.getElementById('myAudio1');
      audio.loop = true;
      audio.autoplay = true;
      audio.play();
      audio.addEventListener('canplay', () => {
        console.log("播放成功")
      },);
    })

     */

    setInterval(() => {
      // console.log(this.intervalTime("2018-05-05 21:58:59"))
      this.getDateT = this.intervalTime("2018-09-15 21:58:59")
    }, 1000)

  },
  watch: {},
  methods: {
    navigationBar_passOff() {
      if (this.navigationBar.ul_right === 0) {
        this.navigationBar.ul_right = -100
      } else {
        this.navigationBar.ul_right = 0
      }
    },
    intervalTime(autoTime) {
      //var autoTime='2022-05-05 21:58:59'   //尽量让服务端传时间戳，能够有效避免时区问题
      const date1 = (Date.parse(new Date(autoTime))) / 1000;//计算当前时间戳
      const date2 = (Date.parse(new Date())) / 1000;
      //自动收货的时间戳 （字符串转时间戳）
      const date3 = (date2 - date1) * 1000; //时间差的毫秒数
      //计算出相差天数
      const days = Math.floor(date3 / (24 * 3600 * 1000));
      //计算出小时数
      const leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      const hours = Math.floor(leave1 / (3600 * 1000));
      //计算相差分钟数
      const leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      const minutes = Math.floor(leave2 / (60 * 1000));
      //计算相差秒数
      const leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      const seconds = Math.round(leave3 / 1000);
      // console.log(days + "天 " + hours + "小时 ")
      return days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒"
      // return days + "天 " + hours + "小时 "
    }


  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

a {
  color: black;
  text-decoration: none;
}

ol, p, ul {
  margin: 0 0 1em 0;
  font-size: 16px;
  color: #333;
}

#myAudio1 {
  display: none;
}

#app {
  //height: 6000px;
  background-image: url(./assets/indexBg.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

@font-face {
  font-family: 'icomoon';
  src: url(./fonts/icomoon.ttf);
}


.fa {
  display: inline-block;
  font: normal normal normal 14px/1 icomoon;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

//日历
.fa-calendar::before {
  content: "\e926";
}

//评论
.fa-commenting-o::before {
  content: "\e93b";
}


.navigationBar {
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  background: rgba(40, 42, 44, .6);

  nav {
    width: 80%;
    //margin-left: 6.667rem;
    //float: left;
    //height: 2rem;
    transition: all 0.5s;
    //line-height: 2rem;
    ul {
      //display: flex;
      //flex-direction: row;
      //justify-content: space-around;
      margin: 0;

      li {
        //flex: 1;
        float: left;
        margin: 0 0.667rem;
        //height: 2rem;
        text-align: center;

        a {
          display: block;
          color: rgba(255, 255, 255, .55);
          //height: 100%;
          font-size: 16px;
          padding: 10px 0;

          &:hover {
            background: rgba(238, 236, 236, 0.17);
            color: white;
          }
        }
      }
    }
  }


  .nav-toggle {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    //background-color: #ff9900;
    //width: 6rem;
    //height: 6rem;
    //transform: translateX(50%) rotateZ(45deg);
    transition: all 0.5s;

    a {
      position: fixed;
      top: 11px;
      right: 15px;
      z-index: 999;
      height: 38px
    }

    i {
      position: relative;
      top: 15px;
      display: inline-block;
      zoom: 1;
      width: 6rem;
      height: 0.6rem;
      color: #fff;
      font: 700 14px/.4 Helvetica;
      text-transform: uppercase;
      text-indent: -55px;
      background: #fff;
      -webkit-transition: .2s;
      transition: .2s;

      &::after, &::before {
        content: '';
        width: 6rem;
        height: 0.6rem;
        background: #fff;
        position: absolute;
        left: 0;
        -webkit-transition: .2s;
        transition: .2s;
      }

      &::before {
        top: -2.3rem;
      }

      &::after {
        bottom: -2.3rem;
      }

    }
  }

  .toon {
    i {
      background: 0 0 !important;

      &::after, &::before {
        top: 0 !important;
        bottom: 0 !important;
        //height: ;
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
      }

      &::before {
        -webkit-transform: rotateZ(-45deg);
        transform: rotateZ(-45deg);
      }
    }
  }
}

.kratos-start {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 20rem;
  color: #83dcc7;
  //https://s1.ax1x.com/2022/05/16/ORb0ns.jpg
  //https: //gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F66b7ce397068c1f4710cafe4e1827ab5f7565180.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655397041&t=a72a5feda2400bfc39ff9f07d737c56d
  background-image: url(./assets/精神小伙.webp);
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: -3.5rem;
  }

  p {
    color: white;
  }
}

.kratos-content {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem !important;

  .kratos-content_main {
    //background-color: #fff;
    float: left;
    width: 48rem;
  }
}

.affix-top {
  width: 10rem;
  height: 10rem;
  background-color: #c9c4c4;
  float: left;
  margin-left: 4rem;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

#footer {
  height: 300px;
  background: rgba(35, 40, 45, 1);
  padding: 40px 0 30px;

  p {
    color: rgba(255, 255, 255, .3);
    text-align: center;
  }
}

//手机画面
@media (max-width: 768px) {
  html {
    font-size: 10px
  }


  .kratos-content {
    .kratos-content_main {
      width: 100%;
    }
  }

  .navigationBar {
    font-size: 1.6rem;

    nav {
      //background-color: rgba(0, 122, 255, 0.32);
      position: fixed;
      flex-direction: column;
      justify-content: space-around;
      z-index: 2;
      width: 40%;
      height: 100vh;
      padding: 3rem;
      background: rgba(40, 42, 44, 0.6);

      //font-weight: 600;

      ul {
        height: 20%;
        display: flex;
        flex-direction: column;

        li {
          flex: 1;
          text-align: left;
          margin: 1.5rem 0;

          a {
          }
        }

      }
    }

    .nav-toggle {
      display: block;
    }
  }

  .kratos-start {
    height: 220px;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }
}

@media (max-width: 530px) {
  html {
    font-size: 5px;
  }

  #app {
    background-color: #fff;
    background-image: none;
  }

  .container {
    padding: 0;
  }
}

//电脑画面
@media (min-width: 768px) {
  html {
    font-size: 15px;
  }

  .container {
    width: 970px;
  }
}

@media (max-width: 970px) {
  .affix-top {
    display: none;
  }
}
</style>
