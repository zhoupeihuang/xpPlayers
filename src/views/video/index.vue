<template>
  <div> 
    <video width="320" height="240" controls loop autoplay>
    <source :src="urlStr" type="video/mp4">
    <!-- <source src="movie.ogg" type="video/ogg"> -->
    您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
import { computed, reactive,onMounted, onUnmounted ,ref, toRefs, watch} from 'vue'
import { useRoute } from 'vue-router';
import node1 from '../../assets/video/node1.mp4' // 本地地址
export default {
  name:'',
  props: {

  },
  data() {
     return {
        url:""
     };
  },
  setup() {
    const route = useRoute()
    let urlStr = route.query.url || node1 // "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    
    return {urlStr}
  }
};
</script>

<style scoped lang="less" >

</style>
