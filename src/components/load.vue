<template>
  <div class="load animated">
    <div class="loadcon">
     <div class="loadimg" style="transform: rotateY(0deg);transition: transform 1s;">
         <img class="hidden" src="../assets/loading/loading1.png" />
         <img class="hidden" src="../assets/loading/loading2.png" />
         <img class="hidden" src="../assets/loading/loading3.png" />
         <img class="hidden" src="../assets/loading/loading4.png" />
         <img class="hidden" src="../assets/loading/loading5.png" />
         <img class="hidden" src="../assets/loading/loading6.png" />
         <img class="hidden" src="../assets/loading/loading7.png" />

     </div>
     <div>Loading...</div>
    </div>
  </div>
</template>

<script>
require('../assets/animate.css')

export default {
  name: 'join',
  data () {
    return {
    }
  },
  mounted(){
  let p=document.getElementsByClassName("hidden"),load=document.getElementsByClassName("loadimg")[0],i,img=[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];

   setTimeout(()=>{p[0].className = "animated fadeInDown"}, 500)
   setTimeout(()=>{p[1].className = "animated fadeInDown"}, 1500)
   setTimeout(()=>{p[2].className = "animated fadeInDown"}, 2000)
   setTimeout(()=>{p[3].className = "animated fadeInDown"}, 2500)
   setTimeout(()=>{p[0].className = "animated fadeInDown"}, 3000)
   setTimeout(()=>{p[0].className = "animated fadeInDown"}, 3500)
   setTimeout(()=>{p[0].className = "animated fadeInDown"}, 4000)
   setTimeout(()=>{load.style.transform = "rotateY(89deg)"}, 5000)
   setTimeout(()=>{load.style.transition = "height 1s";load.style.height = "0"}, 6000)
   setTimeout(()=>{location.hash = "#/face"}, 7000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loadcon{
  width:360px;
  padding-top:45%;
}
.loadimg{
  background:url(../assets/loading/loading.png);
  background-size:cover;
  width:90px;
  height:80px;
  margin:0 auto 0 auto;
  overflow: hidden;
}
.loadimg>img{
  float:left;
  width:90px;
  height:80px;
  margin-top:-80px;
}
.loadimg>img:first-of-type{
  margin-top:0;
}
.hidden{
  visibility: hidden;
}
</style>
