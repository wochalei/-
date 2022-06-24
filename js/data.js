const data_number=document.querySelectorAll(".data_number");
let data=[0,0,0,0];
let flag=[0,0,0,0];
//这个有个问题就是如果父元素布局没有设置定位
//那么儿子的OffsetTop 不是相对父的 那么累加起来就特别大
//这个要注意 所以我弄服务流程的时候弄子元素的OffsetTop比下面data类的还大
//用offsetParent这个父类它才会找相对的值 所以我没理解好
function getOffsetTop(a){
    //用offsetParent这个父类它才会找相对的值 所以我没理解好
    //否则不是相对的父 是父的都算了就特别大 之前我懒直接用a.parentElement导致gg
    if(a.offsetParent){
      
        return a.offsetTop+getOffsetTop(a.offsetParent);
     
    }
    
    return a.offsetTop;
    
}

/*滚轮到加载*/
const data_item=document.querySelector(".data_item");

window.addEventListener("scroll",()=>{
    let go_three=getOffsetTop(data_item)-document.documentElement.scrollTop;
if(go_three<=document.documentElement.clientHeight){
    let time=setInterval(()=>{
        
        
        for(let i=0; i<data.length;i++){
           if(data[0]==60&&flag[0]==0){
            flag[0]=1; 
           }else if(data[1]==120&&flag[1]==0){
            flag[1]=1;
           }else if(data[2]==140&&flag[2]==0){
          
            flag[2]=1;
           }else if(data[3]==160&&flag[3]==0){
            flag[3]=1;
         }else{
             if(flag[i]!=1) data[i]++;   
         }
           
            data_number[i].textContent=data[i];
        }
        if(flag[0]&&flag[1]&&flag[2]&&flag[3]){
            clearInterval(time);
            
        }
       
    },30)   
      
      
}
})

