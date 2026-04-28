// console.log("1")
// process.nextTick(()=> console.log("2"))
// Promise.resolve().then(()=> console.log("3"))//microtask
// console.log("4")
// setTimeout(()=> console.log("5"), 0)

// const x= "5"+2  //type coercion
// console.log(x)
// console.log(typeof x)

// const a = {x: 1}
// const b = a
// b.x = 2
// console.log(a.x)

//can't be reassigned primitive type

// let str = "hello"
// str[0] = "H"
// console.log(str)

// str = "raghav"
// console.log(str)


//non primitive type reassigned

// let str1 = [1, 2, 3, 4, 5]
// str1[0] = 7
// console.log(str1)

// let v = 5
// v++  //preincrement
//  ++v
// console.log(v)
 
// console.log(true&& "hello")
// console.log(false&& "hello")
// console.log(false|| "hello")

// let val = 0
// console.log(val || 10)
// console.log(val ?? 10)

// let a = 5
// if(a===3){
//     console.log("wrong")

// }else if(a===4){
//     console.log("not correct")

// }else{
//     console.log("Correct")
// }

// let m = "monday"

// switch(m){

//     case "tuesday":
//     console.log("tuesday");
//     break;

//     case "monday" :
//         console.log("monday")
//         break;
// }

//for...in used to get keys

// for(let i in [10,20]){
//     console.log(i)
// }

//for...of used to get values

// for(let i of [10,20]){
//     console.log(i)
// }

// console.log(a)
// var a = 10

// console.log(b)   //for let and const temporal deadzone so here you will get refrence error
// let b = 3

// const greet = function(){  //function expression can't be hoist
    // console.log("Hey")
// }
// greet()

//CRUD operation on Arrays

// let arr = [10, 20]  //create
// console.log(arr)  //read
// arr[1] = 30 //update
// arr.splice(1,1) //delete  (delete arr[1] bad practice leaves empty space)
// console.log(arr)

// let arr = [1,2,3,4]

// const newArr= arr.map((e)=> e*2)  //map
// const newArr = arr.filter((e)=> e%2 === 0)  //filter
// const newArr = arr.reduce((total, n)=> total+n, 0)  //reduce

// let arr = [{id:1}, {id:2}, {id: 3}]
// console.log(arr.find(e=> e.id === 2))  //first match

// arr.forEach(e=> console.log(e))

//logical method

// console.log(arr.some(e=> e>3)) //atleast one element should follow condition
// console.log(arr.every(e=> e>3)) //every element should follow condition

//flatting the array

//flat(depth)
// let arr = [1,[2,[3]]]
// const newArr = arr.flat(2)
// console.log(newArr)

let arr = [2,5,1]

// const newArr = arr.flatMap(e=> [e, e+1])
// console.log(newArr)
const newArr = arr.sort((a,b)=> a+b)
console.log(newArr)
