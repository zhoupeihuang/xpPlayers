<template>
  <div>
    像我这样的人
    <div id="mmid"></div>
  </div>
</template>
<script>
import Player from 'xgplayer'
import HlsJsPlayer from "xgplayer-hls.js";
import FlvPlugin from 'xgplayer-flv'
// npm i xgplayer-hls.js --save
export default {
  data() {
    return {
      videoPlayer: null,
      url3:
        "http://10.1.13.52:80/hls/loadmin/be05977add575832dc52655d4ad5c42e/0/FA-12-91_1.m3u8",
    };
  },
  mounted() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      // this.videoPlayer = new HlsJsPlayer({
      //   el: document.querySelector("#mmid"), // url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      //   url: this.url3,
      //   width: "600px",
      //   height: "440px",
      //   volume: 0.6, // 初始音量
      //   autoplay: true, // 自动播放
      //   playsinline: true,
      //   isLive: true,
      //   cors: true,
      // });
     // FlvPlayer继承于xgplayer
     this.videoPlayer =  new Player({
          id:'mmid',
          isLive: true,
          plugins: [HlsJsPlayer],  // 以xgplayer的插件形式传入并挂载
          url: "http://10.1.13.52:80/hls/loadmin/be05977add575832dc52655d4ad5c42e/0/FA-12-91_1.m3u8",
          width: "600px",
          height: "440px",
          volume: 0.6, // 初始音量
          autoplay: true, // 自动播放
          playsinline: true,
          cors: true,
  })
      // const player = new FlvPlayer({
      //   url: this.url3,
      //   width: "600px",
      //   height: "440px",
      //   volume: 0.6, // 初始音量
      //   autoplay: true, // 自动播放
      //   playsinline: true,
      //   isLive: true,
      //   cors: true,
      // })
    },
  },
};
</script>
<style scoped lang="less"></style>
