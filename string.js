let firstName = "Chinmay"
console.log(firstName)
console.log(typeof firstName)


//0    1   2   3   4   5    6
//C    H   I   N   M   A    Y
// -7                           -1


console.log(firstName[0])
console.log(firstName[-1]) // does not allow negative

// Looping though string 
// person --- age - 26  , method --- talk() , walk()

// String ?


// Method will perform some action 

// Method will return somethinf


let upper = firstName.toUpperCase() // CHINMAY  // return - String
console.log(upper)


// toLowerCase()

let lower = firstName.toLowerCase() // chinmay // return string
console.log(lower)



firstName = "hiCnCmayC"

// Javascript is case sensitive 

// uppercase and lowercase are different

// let b = firstName.indexOf('C')
// console.log(b)

// let ls = firstName.lastIndexOf('C')
// console.log(ls)


// Indexof - firstoccurence of string 


//    H C I N C M A Y C

// let v = "CHINMCACYC"
// let c = v.indexOf('C',v.indexOf(' ') + 1)
// console.log(c)

// Third index


let c = "apple manago banana chiku papaya grapes apple"
// let v = c.indexOf('Apple' , c.indexOf('Apple') + 1)
// console.log(v)

// let userInput = prompt('Please enter the fruit you wish ro buy?').toLowerCase() // APPLE  // apple // grapes

// if(c.indexOf(userInput) >= 0){
//     console.log('fruit found ')
// }
// else {
//     console.log('Fruit not found')
// }

// ---------------------------------------

 //0    1    2    3    4  5   6
// C    H    I    N    M   A  Y 
// -7  -6  -5  -4   -3    -2   -1





let n = "CHINMAY"
// let r = n.slice(3)   
// console.log(r)
// console.log(n)
// only one paramter considered as starting point 
let r = n.slice(1,3)    //(startpoint,endpoint(not included )) // HI
console.log(r)
console.log(n.slice(3,))

console.log(n.slice(-5,-1))
console.log(n.slice(-5,-1))
console.log(n.slice(2,-1))
console.log(n.slice(-1,4)) // end point should always be after start point 

// ---------------
let y = n.search('I') // first occurence
console.log(y)


console.log('chinmay'.startsWith('ch')) // return boolean
console.log('chinmay'.endsWith('ay')) // boolean 
console.log("poorva".charAt(3))  // value at index



let a = " chinmay deshpande "
console.log(a.length)
let g = a.trim()
console.log(g.length)
console.log(g)
console.log(a)












// v = "A M C"

// let n = v.indexOf('D')
// console.log(n)