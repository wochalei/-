let success_buttons = document.querySelector(".success_buttons");
let success_imges = document.querySelector(".success_imges");
//判断点击哪个按钮 通过dataset.image对不属于的类型进行样式变化
success_buttons.addEventListener("click", (e) => {
    let test = e.target.dataset.image;
    if (test == "全部") {
        for (let i = 0; i < success_imges.children.length; i++) {
            success_imges.children[i].style.opacity = 1;
        }
    } else {
        for (let i = 0; i < success_imges.children.length; i++) {
            if (success_imges.children[i].dataset.image != test) {

                success_imges.children[i].style.opacity = 0;


            } else {

                success_imges.children[i].style.opacity = 1;

            }
        }
    }
    move_img();
})
//初始化opacity 为1; 不然js获取是空字符
for (let i = 0; i < success_imges.children.length; i++) {
    success_imges.children[i].style.opacity = 1;
}



function move_img() {
    let tmp = [];
    let o = 0;
    //转二维数组存放 其实也可以不用转直接for循环外声明变量column满了就归零 row++
    for (let i = 0; i < 2; i++) {
        let test = [];
        for (let j = 0; j < 4; j++) {
            test[j] = success_imges.children[o++];

        }

        tmp[i] = test;
    }
   
    pailie(tmp);
    //网页大小发生变化触发这个函数更新照片的高度
    window.onresize = () => {
       pailie(tmp);
      
       success_imges.style.height=40+success_imges.children[7].offsetTop+success_imges.children[7].offsetHeight+"px";
    };
}

//对二维数组的节点进行排列 透明度为0的不排且自动补上
function pailie(tmp){
    let row = 0;
    let e = 0;
    for (let i = 0; i < tmp.length; i++) {

        for (let j = 0; j < tmp[0].length; j++) {
            //透明为0的不分配
            if (tmp[i][j].style.opacity == 1) {
                tmp[i][j].style.left = row + "%";
                row = 25 + row;
                tmp[i][j].style.top = e * tmp[0][0].height + "px";

            }
            //因为有不分配情况如果一行没满要补上
            if (row >= 100) {
                row = 0;
                e++;
                //之前这里break了 我傻了 这里不要break因为column没满 就下一行了 break的不是前一行
                //是下一行的那行直接就没了， 它是按顺序来的不用break
            }
        }

    }
}
//要加载完才运行不然有问题的偶尔压上去没有高度 因为父布局高度不限制图绝对定位
//父布局拿不到绝对定位的高度BFC只能计算浮动的 最后只能用js来计算图片高度然后赋给父布局
//还弄个窗体大小变化的函数 随时更新父元素高度
window.onload=()=>{
    move_img();
    success_imges.style.height=90+success_imges.children[7].offsetTop+success_imges.children[7].offsetHeight+"px";}
