<template>
  <div class="join animated">
    <div class="four animated">
      <img class="hidden" src="../assets/p1.png" />
      <img class="hidden" src="../assets/p2.png" />
      <img class="hidden" src="../assets/p3.png" />
      <img class="hidden" src="../assets/p4.png" />
      <img class="hidden layout" src="../assets/layout.png"/>
    </div>
    <div class="title hidden">
      入<br/>
      驻<br/>
      条<br/>
      件<br/>
      。
    </div>
    <p>
      只要你有热爱摄影的心，具有一定的摄影基础，满足以下条件：<br/>
      <br/>
      1.有两套以上独立拍摄的、具有一定质量的人像作品。<br/>
      2.对模特负责，有打磨作品的匠人精神。<br/>
      3.能够通过友拍平台作品审核组的审核。<br/>
      4.认同友拍平台价值观。<br/>

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
  name: 'join',
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

    let p=text.innerText,i;

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
  text-align: left;
  margin-top: 5%;
  margin-bottom: 0;
  width: 90%;
  height: auto;
  margin-left:auto;
  margin-right:auto;
}
.logo{
  margin-left: 85%;
}
.logo>img{
  width: 20px;
}
</style>
