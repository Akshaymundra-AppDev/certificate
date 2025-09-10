let arr=[2,8,5,3,9,7,12,10,6,11]
let new_arr=arr.map((ele)=>{
return ele*2
}).Filter((ele)=>{
    return ele>12
}).reduce ((accum,ele)=>{
    return accum+ele
})
console.log(new_arr)