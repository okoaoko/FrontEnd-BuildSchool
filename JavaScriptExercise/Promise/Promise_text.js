let p1 = Promise.resolve(35)
let p2 = Promise.resolve(p1)
console.log(p2)
p2.then(function(value){
    console.log('p2解析p1 value為:' + value);
})
