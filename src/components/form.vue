<template>
  <div class="form animated fadeInUp">
    <div class="four animated">
      <img class="hidden" src="../assets/form.png" />
      <div class="title hidden">
        加<br/>
        入<br/>
        我<br/>
        们<br/>

      </div>
    </div>

    <form>
     <div class="input">
      <label>姓名</label><input type="text"/>
     </div>
     <div class="input">
      <label>性别</label><input type="text"/>
     </div>
     <div class="input">
      <label>电话</label><input type="text"/>
     </div>
     <div class="input">
      <label>邮箱</label><input type="text"/>
     </div>
     <div class="input">
      <label>个人简介</label><input type="text"/>
     </div>
     <div class="input" style="border:none">
      <label>个人标签</label><input type="text" disabled="true"/>
     </div>
     <div class="input">
      <label>风格</label><input type="text"/>
     </div>
     <div class="input">
      <label>价格</label><input type="text"/>
     </div>
     <button>提交</button>
    </form>
    <div class="logo hidden">
      <img src="../assets/location.png"/><br/>
      友<br/>拍
    </div>
  </div>
</template>

<script>
require('../assets/animate.css')

export default {
  name: 'form',
  data () {
    return {
    }
  },
  mounted(){
    let [pics,title,logo] =
    [document.getElementsByClassName('four')[0].getElementsByTagName('img'),
      document.getElementsByClassName('title')[0],
      document.getElementsByClassName('logo')[0]
    ]


    setTimeout(()=>{pics[0].className='animated slideInLeft'}, 1000)
    setTimeout(()=>{title.className='animated title fadeInLeft'}, 1100)
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
  font-size: 40px;
  height: 100%;
  border-right: black solid 2px;
  margin-top:-75%;
  margin-left: 10%;
  width: 1em;
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
form{
  margin-top: 25px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
label{
  margin-right: 15px;

}
.input{
  margin-top: 15px;
  border-bottom: black solid 1px;
  padding-bottom: 5px;
}
input{
  background: transparent;
  border: none;
  font-size: 1rem
}
button{
  width: 4em;
  height: 2em;
  line-height: 2em;
  border-radius: 2em;
  text-align: center;
  margin:10px auto auto 65%;
  background: transparent;
  border: black solid 1
}
</style>
