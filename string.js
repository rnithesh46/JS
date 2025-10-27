console.log("Strings")

let a="Harry"

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

let name="harry"
let frnd="rohan"

// console.log("his name is " + name + " and his frnds name is " +frnd)
console.log(`his name is ${name} and his frnd name is ${frnd}`)

let b="wroetoshaw"

// to convert into uppercase
console.log(b.toUpperCase())

// to lowercase
console.log(b.toLowerCase())

// to find the lenght of string
console.log(b.length)

console.log(b.slice(1,4))
// from 1 to 3, 4 is excluded
console.log(b.slice(1))
// gives string from 1 to end

console.log(b.replace("shaw","harry"))
// if two occurance,frst one will be replaced

// concatination of strings
console.log(b.concat(frnd))
let c="padddy"
console.log(b.concat(frnd,"harry",c))

console.log(b.charAt(0))
// console.log(b.charAt(110))

console.log(b.indexOf("ro"))

// checks whether is starts with or ends with,returns true or false
console.log(b.startsWith("wro"))
console.log(b.endsWith("sh"))