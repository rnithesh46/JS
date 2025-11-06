console.log("Functions");

// function fun(name) {
//     console.log("i am " +name);
//     console.log("hi " +name + ",nice to meet you");
//     console.log("how are you " +name+ " !!");
// }

// fun("harry");


function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c;
}

// sum(3,5);

result1 = sum(3, 5)
result2 = sum(13, 5)
result3 = sum(3, 15)

console.log("The sum of numbers is:", result1)
console.log("The sum of numbers is:", result2)
console.log("The sum of numbers is:", result3)

// if any term is not defined like sum(3),then it will be undefined and output will me NAN(not a number)


const func1 = (x)=>{
    console.log("i am a arrow function ", x);
}

func1(34);
func1(64);
func1(84);
// hehehehehe