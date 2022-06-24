/* const nav=document.querySelector(".nav");
nav.addEventListener("click",(e)=>{
  
  const tmp =document.querySelector(`.${e.target.id}`);
  const tmp_top=getOffsetTop(tmp);
 
  setTimeout(()=>{window.scrollTo({ 
    top: tmp_top, 
    behavior: "smooth" 
});},100);
 
 
}) */
/* CSS 有原生滑动渐变效果
scroll-behavior: smooth;
对需要的滚轮滑动平滑的 设置这个就好了 比如a标签的瞄点移动
不兼容就js */