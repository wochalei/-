const we_show_item =document.querySelectorAll(".we_show_item");
const serve_item=document.querySelectorAll(".serve_item");
const serve_items=document.querySelector(".serve_items");
const serve=document.querySelector(".serve");



window.onscroll=()=>{
    //window.pageYOffset和document.documentElement.scrollTop 一样
 //pageYOffset这些是window属性 scrollTop这些是节点属性
 //注意scrollTop这个属性是 使用该属性的节点有滚动条才能用 否则一直为0
 //通过这个scrollTop跳转不是说div滚动条内的元素用 而是有滚动条的节点用然后跳到
 //设置的位置 
    
    let go =we_show_item[0].offsetTop-document.documentElement.scrollTop;
    let go_two=getOffsetTop(serve)-document.documentElement.scrollTop;
    
     if(go<=document.documentElement.clientHeight){
        for(let i=0;i<we_show_item.length;i++){
            we_show_item[i].classList.add("same");
        }
       
     }
     //还没到就执行的原因是offsetTop是相对父元素的位移所以一般很小
     //不是你想象那个里窗口顶部的距离
     if(go_two<=document.documentElement.clientHeight){
        
        for(let i=0;i<serve_item.length;i++){
            serve_item[i].classList.add("same");
        }
       
     }
    
    
}