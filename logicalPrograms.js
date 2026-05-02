//javascript
// function flattenArray(arr){
//     const flatArray = arr.flat(3)
//     return flatArray
// }
// const arr = [1, [2, [3, [4]], 5]]
// console.log(flattenArray(arr))


//throtlling
// function throttle(fn, delay) {
//   let lastCall = 0;
//   return function(...args) {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn.apply(this, args); // run only if enough time passed
//     }
//   };
// }

// // Usage
// const handleScroll = throttle(() => {
//   console.log("Scroll event handled!");
// }, 200);

// window.addEventListener("scroll", handleScroll);

//debouncing
// function debounce(fn, wait){
//     let timer;
//     return function(...args){
//         clearTimeout(timer)
//         timer= setTimeout(()=>{
//            fn.apply(this, args)
//         }, wait)
//     }
// }

// const search = debounce((e)=> console.log(e), 100)
// search("hello")

//remove duplicates from an array
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const newArray = [...new Set(arr)] //with set
// console.log(newArray)

// const newArray = arr.reduce((acc, elem)=>
//     acc.includes(elem) ? acc : [...acc, elem],[])
// console.log(newArray)  //with reduce

//grouping people with reduce
// const people = [
//   { name: 'Alice', dept: 'Engineering' },
//   { name: 'Bob',   dept: 'Design' },
//   { name: 'Carol', dept: 'Engineering' },
//   { name: 'Dan',   dept: 'Design' },
// ];

// const grouped = people.reduce((acc, person)=>{
//     const key = person.dept
//     acc[key] = acc[key] || []
//     acc[key].push(person)
//     return acc

// },{})

// console.log(grouped)

//maximum product

function maximumProd(nums){
    let max1 = -Infinity, max2 = -Infinity


    for(const n of nums){
        if(n>max1){
            max2= max1
            max1 = n
        }else if(n> max2){
            max2 = n
        }
        
    }
    return max1*max2
}

console.log(maximumProd([3, 5, 2, 8, 1]))