/**
 *
 * 作者：黎伟杰 on 2018/3/21.
 * 邮箱：liweijieok@qq.com
 * description：
 * update by:
 * update day:
 */
let p = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("ok");
    }, 2000);
});

let p2 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        reject("error");
    }, 3000);
});

p.then(value => {
    console.log(value);
    return p2;
}).then(value => {
    console.log(value)
}).catch(error=>{
    console.log(error);
});
//
// p.then(value => {
//     console.log(value);
//     return p2;
// }).finally(()=>{
//     console.log("finally")
// });
