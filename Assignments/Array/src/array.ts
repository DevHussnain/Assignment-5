let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

// 1ST METHOD:

console.log(arr1.indexOf(3))

// 2ST METHOD:

console.log(arr1.lastIndexOf(10))

// 3RD METHOD

console.log(arr1.concat(arr2))

// 4TH METHOD

console.log(arr1.join("-"))

// 5TH METHOD

arr1.push(6)
console.log("6 is added at he last: ",arr1)

// 6TH METHOD

console.log(arr1.pop())
console.log("Last Element 6 is Removed: ",arr1)

// 7TH METHOD

console.log("The Array Is Reversed: ", arr1.reverse())

// 8TH METHOD

console.log(arr1.shift())
console.log("First Method Is Removed: ", arr1)

// 9TH METHOD

arr1.unshift(5)
console.log("First Method Is Added Again: ", arr1)

// 10TH METHOD

console.log("These are fecthed From The arr1" , arr1.slice(1,4))

// 11Th METHOD

    // adding:
    arr1.splice(1,0,10)
    console.log("10 is added after index 1",arr1)
    // replaced:
    arr1.splice(0,1,2)
    console.log("1 is replaced by 2", arr1)
    // removed:
    arr1.splice(2,2)
    console.log("The numbers on 2nd and 3rd index are removed", arr1)

// 12TH METHOD

console.log(arr1.toString())

// 13TH METHOD

const doubleNum = arr1.map((num:number)=>num*2)
console.log(doubleNum)

const changeToString:string[] = arr1.map((num:number)=>num.toString())
console.log(changeToString)

// 14TH METHOD

let eveNum = arr1.filter((num:number)=> num % 2 === 0)
console.log(eveNum)

let graterThanTree = arr1.filter((num:number)=> num > 3)
console.log(graterThanTree)

// 15TH METHOD

function isEven(item:number) {
    return item % 2 === 0
}

let num : number[] = [2,4,6,8,10]

console.log("Result for Even: ", num.every(isEven))

function isOdd(item:number) {
    return item % 2 !== 0
}

let num2 : number[] = [1,3,5,7,9]

console.log("Result for Odd: ", num2.every(isOdd))

// 16TH METHOD

let reduceRight : Array<number> = [1,2,3,4]

console.log("result: ", reduceRight.reduceRight(function(a,b){return a+b}))
console.log("result: ", reduceRight.reduceRight(function(a,b){return a-b}))

// 17TH METHOD

let reduce : Array<number> = [1,2,3,4]

console.log("result: ", reduce.reduce(function(a,b){return a+b}))
console.log("result: ", reduce.reduce(function(a,b){return a-b}))

// 18TH METHOD

let some : Array<number> = [1,2,3,4]

console.log("result: ", some.some((item) => item %2 == 0))

// 19TH METHOD

let sort : Array<number> = [1,5,3,2,4]
console.log(sort.sort( ( a , b ) => a - b ))

console.log(sort.sort((a,b) => {
    if (a > b) return -1;
    return 1
}))

// 20TH METHOD

let fill : Array<number> = [1,2,3,4,5]

console.log("Result 1: ", fill.fill(3,4,5))
console.log("Result 2: ", fill.fill(3,3))
console.log("Result 3: ", fill.fill(3))

// 21TH METHOD

let reverse : Array<number> = [1,2,3,4,5]

console.log(reverse.reverse())

// 22TH METHOD

let each : Array<number> = [1,2,3,4,5]

each.forEach((elem)=>{
    console.log(elem * 2)
})

// 23TH METHOD

let include : Array<number> = [1,2,3,4,5]

console.log(include.includes(5))
console.log(include.includes(7))