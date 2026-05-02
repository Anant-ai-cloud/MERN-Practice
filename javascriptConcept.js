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

// let arr = [2,5,1,]

// const newArr = arr.flatMap(e=> [e, e+1])
// console.log(newArr)
// const newArr = arr.sort((a,b)=> a-b) //Ascending order
// arr.sort((a,b)=> b - a)
// arr.reverse()

// let arr1 = [...arr, 4] //spreadoperator
// console.log(arr1) //original array got mutated

// const[x, m ,y, z= 0] = arr //array destructuring + default values
// console.log(x,y, z)

// console.log(Array.from("abc"))

// console.log(Array.from({length: 5}, (_,i)=> i))

// console.log(Array.isArray("abc")) //isArray checks if its a array or not

// const user = {
//     name: "Anant",
//     age: 20,
    // greet: ()=>{
    //     console.log(this.name) //arrow function do not have their own this, so it will be undefined

    // }
    // greet(){
    //     console.log(this.name)   //this will work because normal function have their own this
//     }
// }

// const key = "age"
 
//CRUD operation on object

//Read
// console.log(user.name)  //direct access
// console.log(user[key]) //dynamic access

// user.city = "Delhi" //add
// user.age = 23 //update
// delete user.city //delete

// console.log(user.greet())

//this keyword context
// let a = 23 //let and const variable do not become properties of global object only var
// var a = 23

// function thisKeyword(){
//     console.log(this.a)
// }

// thisKeyword()

// function func(name){
//     this.name = name

// }
// const cons = new func("anant")  //this points to new object in constructor function
// console.log(cons)

//destructuring
// const {name : username, age } = user
// console.log(username, age)

//nested destructuring
// const user = {
//    city: "Delhi" 
// };

// const {address: {city} } = user
// console.log(city)

// const updated = {...user, city: "mumbai"}
// console.log(updated)

// const obj = user //this is a reference not a copy
// const user = { name: "Anant", age: 22 };
// const ren = { same: "Vikram", kage: 35 }; //keys should be diffrent for assign to merge

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// Object.entries(user).forEach(([key, value])=>{
//     console.log(key, value)
// })

// Object.freeze(user)   //now object will freeze this makes object immutable
// user.name = "Vikram"
// console.log(user.name)


// console.log(Object.assign(user, ren))
// const copy = Object.assign({}, user)
// console.log(copy)
// const user = {
//   name: "A",
//   address: { city: "Delhi" }
// };

// const newUser = {...user}  //shallow copy 
// const newUser = JSON.parse(JSON.stringify(user)) //deep copy
// newUser.address.city = "Noida"  //changes original too, because it is referencing same object
//  console.log(user)

// for(let key in user){
//     console.log(key, user[key])
// }

// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 30 }
// ];

// const result = users.reduce((acc, curr)=>{
//     acc[curr.name] = curr.age
//     return acc
// },{})

// console.log(result)

//String

// let user= "Java Script"
// console.log(user.slice(-6))
// console.log(user.split(" "))
// user.trim()
// console.log("he llo".trim())   //trim  will only remove leading and trailing spaces

// let user= "hello hello"
// console.log(user.replace("hello", "hii"))
// console.log(user.replaceAll("hello", "hii"))
// console.log(user.replace(/hello/g, "hii"))  //with regex replace can work like replace all

// let user= "JavaScript"
// console.log(user.includes("Java"))
// console.log(user.startsWith("Java"))
// console.log(user.endsWith("Script"))

// console.log("5".padStart(3, "0"))
// console.log("5".padEnd(3, "0"))
// console.log("ha".repeat(4))
// console.log(`hello ${2+2}`)

// const user = String.raw`Hello\nWorld`
// console.log(user)

// let user= "JavaScript"
// console.log(user[-1]) //don't support negative index
// console.log(user.at(-1))

// let user= "madam"
// const isPalindrome = user === user.split("").reverse().join("")
// console.log(user.split("").reverse().join(""))
// console.log(isPalindrome)

//count characters

// const chars = user.split("").reduce((acc, char)=>{
//     acc[char] = (acc[char] || 0) + 1;
//     return acc
// }, {})

// console.log(chars)

// let arr = [1, 2, 3]
// console.log(arr.at(-1))

// console.log(document.querySelector(".this").innerText)

// try{
    
    // throw "Something went wrong"    //bad practice
    // throw new Error("Something went wrong")

// }catch(error){
// console.log(error)  //error is object in itself
// }

// class ValidationError extends Error {
//     constructor(message){
//         super(message)
        // this.name = message  //give specific name to Error because bydefault every error in javaScript have same name Error
//     }
// }

// function registerUser(user){
//     if(!user) throw new ValidationError("No User Present")

// }

// try {
//     registerUser()
// } catch (error) {
//     console.log(error.name)
// }

// console.log(null.toUpperCase())  //Type Error
//  let arr = new Array(-1) //range Error
 
//  console.log(arr)

//rethrowing Error
// try{
//     registerUser()
// }catch(err){
//     if(err instanceof TypeError){ 
//         console.log("Ha")
//     }else{
//         throw err
//     }
// }

//ES6+ features

//Destructuring
// let [head, ...rest] = [ 1, 2, 3]
// console.log(rest)

// const name = "Anant"
// const user = { name }

//function factory

// function factory(x){
//     return function product(y){
//         return x * y
//     }
// }

// const double = new factory(4)
// console.log(double(2))


//IIFE

// (function(){
// console.log("This is IIFE function")
// })()
// function Hello(){
//     console.log("This is normal function")

// }
// Hello()

// a= 10
// console.log(a)
// var a = 10 //only declaration hoist not initialization

// a= 10
// console.log(a)
// let a;
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
//closure controlling execution of the function
// function once(fn){
//     let called = false
//     return function(){
//         if(!called){
//             called = true
//             return fn()
//         }
//         console.log("Can't run two times")
//     }
// }
// const init = once(()=> console.log("Run only once"))
// init()
// init()

// let arr = [2,3]
// console.log(Object.getPrototypeOf(arr)) //will give you prototype

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const u1 = new User("Anant", 22);

// User.prototype.sayhi = function(){
//     console.log("this function add with prototype")
// }

// u1.sayhi()

//static methods
// class User{
    // #name
    // constructor(name){
    //     this.#name= name
    // }
    // get name(){
    //     return this.#name
    // }
    // set name(name){
    //     this.#name = name
    // }
//     static rao(){
//         console.log("This is static method")
//     }
//     khao(){
//         console.log("This is normal method")
//     }
// }

// const u = new User("Vikram")
// u.name = "Anant"
// console.log(u.name)
// const u = new User()
// u.khao()
// User.rao()

//mixins

// const obj1 = {
//     eat(){
//         console.log("I am eating")
//     }

// }

// const obj2 = {
//     walk(){
//         console.log("I am walking")
//     }
    
// }

// const person = {...obj1, ...obj2}
// person.eat()
// person.walk() //mixins

//composition
function canEat(entity) {
  return {
    eat() {
      console.log(`${entity.name} is eating`);
    }
  };
}

function canWalk(entity) {
  return {
    walk() {
      console.log(`${entity.name} is walking`);
    }
  };
}

function comp(name) {
  const entity = { name };
  return {
    ...entity,
    ...canEat(entity),
    ...canWalk(entity)
  };
}

const john = comp("John");
john.eat(); 
john.walk();  












