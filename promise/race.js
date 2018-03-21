/**
 *
 * 作者：黎伟杰 on 2018/3/21.
 * 邮箱：liweijieok@qq.com
 * description：
 * update by:
 * update day:
 */
const p = new Promise(function (resolve) {
    setTimeout(() => {
        console.log(1);
        resolve(1);
    }, 2000);
});
const p1 = new Promise(function (resolve) {
    setTimeout(() => {
        console.log(2);
        resolve(2);
    }, 1000);
});
const p2 = new Promise(function (resolve) {
    setTimeout(() => {
        console.log(3);
        resolve(3);
    }, 3000);
});

Promise.race([p,p1,p2]).then(value => {
    console.log(value);
});
// Promise.race([p, p1, p2,4]).then(value => {
//     console.log(value);
// });

