(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abba2"],{1706:function(e,t,d){"use strict";d.r(t);var i=d("7a23");const a={ref:"video",id:"mmid"};function n(e,t,d,n,l,o){return Object(i["q"])(),Object(i["d"])("div",null,[Object(i["e"])("div",a,null,512)])}var l=d("b908"),o=d("3fcb"),u={data(){return{videoPlayer:null}},mounted(){this.getVideo()},methods:{getVideo(){this.videoPlayer=new l["a"]({el:document.querySelector("#mmid"),plugins:[o["a"]],url:"http://10.1.13.52:80/vodlive/loadmin/be05977add575832dc52655d4ad5c42e/0/20230628000000_20230628120000/FA-12-91_1.m3u8",width:"600px",height:"440px",volume:.6,autoplay:!0,lastPlayTime:20,startTime:15,playbackRate:[.5,.75,1,1.5,2],playsinline:!0,isLive:!0,cors:!0})}}},c=d("6b0d"),r=d.n(c);const s=r()(u,[["render",n]]);t["default"]=s}}]);