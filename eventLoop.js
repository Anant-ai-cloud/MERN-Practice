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

let m = "monday"

switch(m){

    case "tuesday":
    console.log("tuesday");
    break;

    case "monday" :
        console.log("monday")
        break;
}


