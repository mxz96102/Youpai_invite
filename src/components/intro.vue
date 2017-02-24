<template>
  <div class="intro animated">
    <div class="four animated">
      <img class="hidden" src="../assets/p1.png" />
      <img class="hidden" src="../assets/p2.png" />
      <img class="hidden" src="../assets/p3.png" />
      <img class="hidden" src="../assets/p4.png" />
      <img class="hidden layout" src="../assets/layout.png"/>
    </div>
    <div class="title hidden">
      关<br/>
      于<br/>
      友<br/>
      拍<br/>
      。
    </div>
    <p>
      校园中存在着每个人的专属记忆<br/>
      青春独好的年华里每个人也都是独特美的存在<br/>
      我们希望讲这些记忆和美记录下来<br/>
      于是构想了友拍这款产品<br/>
      这是由华科联创团队打造的一款公益webAPP<br/>
      平台集结了华科最优秀的学生摄影师<br/>
      目标是连接所有优秀摄影师和<br/>
      所有爱美、追求美、希望留住美的同学<br/>
    </p>
    <div class="logo hidden">
      <img src="../assets/location.png"/><br/>
      友<br/>拍
    </div>
  </div>
</template>

<script>
require('../assets/animate.css')

export default {
  name: 'intro',
  data () {
    return {
    }
  },
  mounted(){
    let [pics,title,text,logo] =
    [document.getElementsByClassName('four')[0].getElementsByTagName('img'),
      document.getElementsByClassName('title')[0],
      document.getElementsByTagName('p')[0],
      document.getElementsByClassName('logo')[0]
    ]

    let p=text.innerText,i,touchstart=[];

    setTimeout(()=>{pics[0].className='animated slideInLeft'}, 1000)
    setTimeout(()=>{pics[1].className='animated slideInLeft'}, 1500)
    setTimeout(()=>{pics[2].className='animated slideInLeft'}, 2000)
    setTimeout(()=>{pics[3].className='animated slideInLeft'}, 2500)
    setTimeout(()=>{pics[4].className='layout animated slideInLeft'}, 3000)
    setTimeout(()=>{title.className='animated title fadeInLeft'}, 3500)
    text.innerText= "";
    text.className="";

    for(i=0;i<p.length;i++){
     let a = i
     setTimeout(()=>{text.innerText += p[a]}, 4000 + (i)*100)
    }

    setTimeout(()=>{logo.className='animated logo fadeInLeft'}, 4000 + (i)*100 +100)

    document.getElementsByClassName('intro')[0].addEventListener('touchstart',(event) => {
      touchstart.push(event)
    })

    document.getElementsByClassName('intro')[0].addEventListener('touchend', (event) => {
      let pre = touchstart.pop()

      console.log(event)

      if(pre.changedTouches[0].pageY > event.changedTouches[0].pageY){
        document.getElementsByClassName('intro')[0].className += " fadeOutUp"
        setTimeout(()=>{location.hash = "#/join"},1000)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.four{
  width: 100%;
  justify-content:center;
}
.four>img{
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: block;

}
.four>.layout{
  margin-top:-97.5%;
  height: 100%;
  margin-bottom: 0;
}
.title{
  top: 5%;
  left: 10%;
  position: absolute;
  float: left;
  font-size: 40px;
}
.hidden{
  visibility: hidden;
}
p{
  text-align: center;
  margin-top: 5%;
  margin-bottom: 0;
}
.logo{
  margin-left: 85%;
}
.logo>img{
  width: 20px;
}
</style>
