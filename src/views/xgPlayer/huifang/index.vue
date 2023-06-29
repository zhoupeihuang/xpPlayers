<template>
  <div>
    <div ref="video" id="mmid"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Player from "xgplayer";
export default {
	data(){
		return{
			videoPlayer: null
		}
	},
	mounted() {
		this.getVideo()
	},
	methods: {
		getVideo(){
			this.videoPlayer = new Player({
				el: document.querySelector("#mmid"),
				url: 'http://10.1.13.52:80/vodlive/loadmin/be05977add575832dc52655d4ad5c42e/0/20230628000000_20230628120000/FA-12-91_1.m3u8',
				// url: 'http://192.168.10.215:8080/live/livestream.m3u8',
				// url: "http://192.168.10.215:8080/live/livestream.flv",
				width: "600px",
				height: "440px",
				volume: 0.6, // 初始音量
				autoplay: true, // 自动播放
				lastPlayTime: 20, //视频起播时间（单位：秒）
				startTime: 15, //视频起播时间（单位：秒）
				playbackRate: [0.5, 0.75, 1, 1.5, 2],
				playsinline: true,
				isLive: true,
				cors: true
				});
		}
	}
}
/**
实时预览URL：
http://10.1.13.52:80/hls/loadmin/be05977add575832dc52655d4ad5c42e/0/FA-12-91_1.m3u8

回放URL:
http://10.1.13.52:80/vodlive/loadmin/be05977add575832dc52655d4ad5c42e/0/20230628000000_20230628120000/FA-12-91_1.m3u8

*/
</script>
