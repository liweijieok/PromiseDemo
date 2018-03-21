/**
 *
 * 作者：黎伟杰 on 2018/3/13.
 * 邮箱：liweijie@qq.com
 * description：
 * update by:
 * update day:
 */
console.log("------");

// new Promise(resolve => {
//     setTimeout(() => {
//         resolve("hello")
//     }, 2000);
// }).then((value) => {
//     console.log("value=" + value);
// });

//---------------////////
//promise一旦创建立刻执行，他会保存这个结果，然后等待then的回调。
//第一个例子promise和hi是几乎同时输出
// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("promise")
//         resolve("hi")
//     }, 3000);
// });
//
// setTimeout(() => {
//     promise.then(value => {
//         console.log(value);
//     });
// }, 1000);

//该例子是promise立即执行他的excuteor，1s之后打印promise，之后2s之后有then接受resolve(value)，所以再2s之后输出hi
let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log("promise");
        resolve("hi")
    }, 1000);
});

setTimeout(() => {
    promise.then(value => {
        console.log(value);
    });
}, 3000);
//---------------////////

//Promise嵌套
