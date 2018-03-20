/**
 *
 * 作者：黎伟杰 on 2018/3/20.
 * 邮箱：liweijieok@qq.com
 * description：
 * update by:
 * update day:
 */
//Promise一旦改变状态不可逆转，也就是说，调用了resolve再去调用reject已经没有用了。
// let p = new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         reject("fail");
//     },1000)
// });
//
// p.then(value => {
//     console.log(value);
// },error=>{
//     console.log(error);
// });
let p = new Promise(function (resolve,reject) {
    setTimeout(()=>{
        //只会输出hello
        resolve("hello");
        resolve("hi");
    },1000)
});

p.then(value => {
    console.log(value);
},error=>{
    console.log(error);
});


