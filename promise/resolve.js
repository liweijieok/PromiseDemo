/**
 *
 * 作者：黎伟杰 on 2018/3/21.
 * 邮箱：liweijieok@qq.com
 * description：
 * update by:
 * update day:
 */
Promise.resolve(new Promise(function (resolve) {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})).then(value => {
    console.log(value);
});

const fun = {
    then: function (resolve, reject) {
        reject("ok")
    }
}

Promise.resolve(fun)
    .then(value => {
        console.log("ok");
    }).catch(error=>{
    console.log("error");
})

Promise.resolve("hi").then(value => console.log(value));
Promise.resolve().then(()=>{return new Promise(function (resolve) {
    setTimeout(() => {
        console.log("fix")
    }, 2000);
})}).then(value => {
    console.log(value);
})
