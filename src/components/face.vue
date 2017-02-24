<template>
  <div class="face animated">
    <div class="four animated">
      <img class="hidden" src="../assets/face.png" />
    </div>

    <div class="under">
      <div class="logo hidden">
        <img src="../assets/location.png"/><br/>
        友<br/>拍
      </div>
      <div class="linear hidden">
        一个叫做友拍的平台
      </div>
      <div class="linear hidden">
        为这群记录者我们打造了
      </div>
      <div class="linear hidden">
        真实地把这一切的景象记录下来
      </div>
      <div class="linear hidden">
        透过一组组镜片
      </div>
      <div class="linear hidden">
        而有一群摄影师
      </div>
      <div class="linear hidden">
        图书馆里安静品书的她
      </div>
      <div class="linear hidden">
        篮球场上帅气灌篮的他
      </div>
      <div class="linear hidden">
        青葱校园留下每个人不同的足迹
      </div>
      <div class="hr hidden"></div>
      <div class="title hidden">
        邀<br/>
        请<br/>
        函<br/>
      </div>
    </div>

  </div>
</template>

<script>
require('../assets/animate.css')

export default {
  name: 'face',
  data () {
    return {
    }
  },
  mounted(){
    let [pics,title,text,logo,hr] =
    [document.getElementsByClassName('four')[0].getElementsByTagName('img'),
      document.getElementsByClassName('title')[0],
      document.getElementsByClassName('linear'),
      document.getElementsByClassName('logo')[0],
      document.getElementsByClassName('hr')[0]
    ]

    console.log(text);

    let i,touchstart=[];

    setTimeout(()=>{pics[0].className='animated slideInLeft'}, 1000)

    for(i=0; i<text.length; i++){
      let a = i;
      setTimeout(()=>{text[a].className='animated linear fadeInLeft'},1500+100*i)
    }
    setTimeout(()=>{hr.className='animated hr fadeInLeft'}, 1500+100*i+100)
    setTimeout(()=>{title.className='animated title fadeInRight'}, 1500+100*i+200)
    setTimeout(()=>{logo.className='animated logo fadeInLeft'}, 1600)
    document.getElementsByClassName('face')[0].addEventListener('touchstart',(event) => {
      touchstart.push(event)
    })

    document.getElementsByClassName('face')[0].addEventListener('touchend', (event) => {
      let pre = touchstart.pop()

      console.log(event)

      if(pre.changedTouches[0].pageY > event.changedTouches[0].pageY){
        document.getElementsByClassName('face')[0].className += " fadeOutUp"
        setTimeout(()=>{location.hash = "#/intro"},1000)
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
  width: 75%;
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
  width: 20%;
  font-size: 40px;
  float: left;

}
.linear{
  float: left;
  width: 1.2rem;
  line-height: 1rem
}
.hr{
  height: 14rem;
  float:left;
  margin-left: 5%;
  border-left: grey solid 2px
}
.hidden{
  visibility: hidden;
}
.under{
  margin-top: 5px;
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
  margin-left: 10%;
  float: left;
  margin-top: 35%;
  margin-right: 5%;
}
.logo>img{
  width: 20px;
}
</style>
