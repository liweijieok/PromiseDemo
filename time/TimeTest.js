/**
 *
 * 作者：黎伟杰 on 2018/3/20.
 * 邮箱：liweijieok@qq.com
 * description：
 * update by:
 * update day:
 */
setTimeout(() => {
    console.log('timeout');
}, 0);

setImmediate(() => {
    console.log('immediate');
});

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}


// var t = true;
//
// setTimeout(function(){
//     t = false;
// }, 1000);
//
// while(t){
//     console.log("while")
// }
//
// alert('end');
