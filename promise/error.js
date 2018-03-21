/**
 *
 * 作者：黎伟杰 on 2018/3/20.
 * 邮箱：liweijieok@qq.com
 * description：
 * update by:
 * update day:
 */
//第一种
// const x = 1;
// new Promise(function (resolve, reject) {
//     if (x > 1) {
//         resolve(x);
//     } else {
//         // reject("x <=1");,不能定位到具体行，使用下面方式可以
//         throw new Error("x<=1");
//     }
// }).then(value => {
//     console.log(value)
// }, error => {
//     console.log(error);
// });

//第二种方式
// const y = 2;
// new Promise(function (resolve, reject) {
//     if (y > 2) {
//         resolve(x);
//     } else {
//         reject("y <=2");//不能定位到具体行，使用下面方式可以
//         // throw new Error("x<=1");
//     }
// }).then(value => {
//     console.log(value)
// }).catch(error=>{
//     console.log(error);
// });


//catch之后是返回一个promise，假如内部不发生错误，可以使得后面的then继续执行。
// const z = 2;
// new Promise(function (resolve, reject) {
//     if (z > 2) {
//         resolve(x);
//     } else {
//         reject("z <=2");//不能定位到具体行，使用下面方式可以
//         // throw new Error("x<=1");
//     }
// }).then(value => {
//     console.log(value)
// }).catch(error=>{
//     console.log(error);
//     return "fix";
// }).then(value => {
//     console.log(value);
//     throw new Error("new error");
// }).then(()=>{
//     console.log("next");
// }).catch(error=>{
//     console.log(error)
// });
