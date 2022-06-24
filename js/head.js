const select = document.querySelector(".select");
const item = document.querySelectorAll(".item");
const circle = document.querySelector(".circle");
const a = document.querySelector("#a");
const b = document.querySelector("#b");

//这里下面解释是我走弯路的想法后来我查资料发现获取css值不能直接style.这样获得
//而是通过这个getComputedStyle()来获得具体用法看js现代
//直接style.获取发现是空的 我下面先赋值才不为空
//style.是改 但获取不好

//这里轮播图这里内的东西我本来想css设置好然后添加类就完了
//然后发现css类设置透明度0 动画透明度结束1 发现动画结束后因为样式设置零所以消失了
//但是我不想它消失 css又不能动画后改变样式 所以我选择js来搞
//想要突然出现就得先隐藏我通过上移到看不见translateY(-800px) 然后js弄回translateY(0px)
//但是没有渐变效果这个要异步才能有渐变效果
//然后我js遍历每个子元素异步 发现可以通过调整异步的时间来让他们各自延迟出现 真是秒啊

//这里先循环一遍因为一开始就要有轮播图延迟动画而不是点击后才有
for (let i = 0; i < item[0].children.length - 1; i++) {
    let j = i + 1;
    setTimeout(() => { item[0].children[i].style.transform = "translateY(0px)"; }, j * 200);

}
select.addEventListener("click", (e) => {
 //这里我判断选中了另一个 其他一个要重新移动会y-800px 不然回来就没效果了
 //而且我这样写不能延展多个轮播图和内效果 只针对两个
 //所以我做的不好，要是用到还是看视频用别人写好的js库直接套用
 //别人做的轮子可以延展而且简洁，这里我之所以这么做是因为不服气 先自己搞效果先
    if (e.target.dataset.id == 100) {
        item[1].style.left = 0;

        b.checked = true;
        for (let i = 0; i < item[1].children.length - 1; i++) {
            let j = i + 1;
            //通过调整j来实现不同延迟
            setTimeout(() => { item[1].children[i].style.transform = "translateY(0px)"; }, j * 200);

        }
        for (let i = 0; i < item[0].children.length - 1; i++) {
            item[0].children[i].style.transform = "translateY(-800px)"
        }
        item[0].style.opacity = 0;
    } else {
        item[1].style.left = "100vw";
        a.checked = true;
        for (let i = 0; i < item[0].children.length - 1; i++) {
            let j = i + 1;
            setTimeout(() => { item[0].children[i].style.transform = "translateY(0px)"; }, j * 200);

        }
        for (let i = 0; i < item[1].children.length - 1; i++) {
            item[1].children[i].style.transform = "translateY(-800px)"
        }
        item[0].style.opacity = 1;
    }

})
//这里我没设置内部延迟出现因为效果一样而且这个下面两个点其实没啥必要
circle.addEventListener("click", (e) => {
    if (e.target.dataset.id == 100) {
        item[1].style.left = 0;
        b.checked = true;
        item[0].style.opacity = 0;
    } else {
        item[1].style.left = "100vw";
        a.checked = true;
        item[0].style.opacity = 1;
    }


})
//导航滑动出现
const heard=document.querySelector(".heard");
window.addEventListener("scroll",()=>{
    
    if(window.pageYOffset>document.documentElement.clientHeight)
        heard.classList.add("stick");
    
      if(window.pageYOffset<heard.getBoundingClientRect().height)
        heard.classList.remove("stick");
    
})

// 返回首部功能
const re=document.querySelector(".return");
re.addEventListener("click",()=>{
    //绝对定位根文档的0，0 即x y
    window.scrollTo(0,0);
})