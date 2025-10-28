let arr=[1,13,5,17]
// without using map,it is complex
// let newarr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)


// by using map function
// It is easy to create a new array by performing some operation on existing array
let newarr=arr.map((e)=>{
    return e**2
})
console.log(newarr)

// filter an array with values that passes a test
const greaterthanseven=(e)=>{
    if (e>7) {
        return true
    }
    return false
}
console.log(newarr.filter(greaterthanseven))

// reduce an array into single value
let a2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}
console.log(a2.reduce(red))


// used to create an array from any object
console.log(Array.from("harry"))