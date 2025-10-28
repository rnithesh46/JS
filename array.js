let arr1=[1,2,3,4,5,7]

console.log(arr1,typeof arr1)
// type of array is object
console.log(arr1.length)
console.log(arr1[0])
console.log(arr1[3])
console.log(arr1[5])

// arrays are murtable,they cange be changed
// whereas strings are imutable ,it cannot be change
arr1[0]=999
console.log(arr1)


let n1=[1,2,3,4,5]
console.log(n1)
console.log(n1.toString())
// to convert it into string

let n2=[1,2,3,4]
console.log(n2.join(" and "))
// joins all the elements in an array using a spereator

let n3=[1,2,3,4,5]
console.log(n3.pop())
console.log(n3)
// here 5 is popped,last element is popped

console.log(n3.shift())
console.log(n3)
// pops first element in the array

let n4=[1,2,3,4,5]
console.log(n4.push("harry"))
console.log(n4)
// push and element inside the array at last

console.log(n4.unshift("fifa"))
console.log(n4)
// push element at the frst of the array

delete n4[6]
console.log(n4)
console.log(n4.length)
// deletes element from an array
// but the space alloted will be empty and the length will be same

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
console.log(a1.concat(a2,a3))
// used to join array to the given array
console.log(a1)
// but the existing array is not changed,it reamins same

let b1=[5,2,3,7]
console.log(b1)
b1.sort()
console.log(b1)
// sorts array in alphabeticall form
// modifies the original array

let c=[1,2,3,4,5]
// c.splice(2,4)
// this only removes the values from positon 2 and 4 values after that
c.splice(2,3,44,66,88)
console.log(c)
// the rest of the values are added to it
// it addes to the first value which is position 2
// 4 is number of elements to remove

let d=[1,2,3,4,5]
// d.slice(3)
console.log(d.slice(3))
// slice out a piece from array from 2 to end

let e=[1,2,3,4,5]
console.log(e.slice(2,4))
// slice element from 2 to 4,4 is excluded

let f=[1,2,3,4,5]
console.log(f.reverse())