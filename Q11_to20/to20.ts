// Task 11:########     Names in Array     ############
const name_array : string[]=['khan','shah','Ali'];
name_array.forEach((name)=>console.log("Task 11:#",name))
//                //parameter called it

// Task 12:########     Greetings in Array     ############

let Greeting_Person:string[]=['Shahin Shah','Jamal khan','Salman Shah','Sabir Ali','Ali Khan','Bilal khan','Dawood Shah','Zulfiqar Khan']
let message:string = "Hello, and Good morning Mr."

Greeting_Person.forEach((name_in_array) => { console.log(`Task 12: Greeting in Array:# ${message} ${name_in_array}`)});
// ##### Without We Checking the below Syntax ##########
// console.log(`Task 12: Greeting in Array:# ${message}${Greeting_Person[0]}`)
// console.log(`Task 12: Greeting in Array:# ${message}${Greeting_Person[1]}`)
// console.log(`Task 12: Greeting in Array:# ${message}${Greeting_Person[2]}`)
// console.log(`Task 12: Greeting in Array:# ${message}${Greeting_Person[6]}`)



// Task 13:########    Your Own Array     ############

let fav_tranfortation = ['Honda','Totya','Suzuki','Tesla','Nisan','Hino']

fav_tranfortation.forEach((cars) => { console.log(`Task 13:# I would like to Own a ${cars} motor!`)});// Using forEach method 
// below is without using method to access this array
// console.log(`Task 13:# I would like to Own a ${fav_tranfortation[0]} motor!`)
// console.log(`Task 13:# I would like to Own a ${fav_tranfortation[1]} motor!`)
// console.log(`Task 13:# I would like to Own a ${fav_tranfortation[3]} motor!`)

// Task 14:########    Gist List Invatation for Dinner     ############


let list = ['Shahin Shah','Jamal khan','Salman Shah'];
let mess=  `Welcome! I will invite you to jion us for Dinner!`;
list.forEach((invite_person) => {
    console.log(`Task 14: # \t Dear ${invite_person}, you are invited for dinner!`)
    
});
// Without access forEach() method below content
// console.log(`Task 14:# Mr,${list[0]} ${mess}`)
// console.log(`Task 14:# Mr,${list[1]} ${mess}`)
// console.log(`Task 14:# Mr,${list[2]} ${mess}`)


// Task 15:########    Changing Gist list invatation     ############

let listgest = ['Shahin Shah','Jamal khan'];
const delete_lastone = listgest.pop();
const add_in_array= listgest.push('Shaid khan','Ali Raza')
console.log(`Delete the last element of Array through Pop() : ${delete_lastone}. Adding new Element through Push: ${add_in_array} `)
listgest.forEach((invitenow) => {
    console.log(`Task 15:# \t Dear, ${invitenow}, you are invited for dinner!`)
    
});

// Task 16:########    Changing Gist list invatation     ############

console.log(`Good New's! We found a bigger dinner table`)
listgest.unshift('Sheer Ali');// take first position in array
listgest.splice(3,0,'Muzamil Shah','Ismail Shah')// as you want location
// Stating_index |Deleting index |and Adding Element                  
listgest.push('Musa khan')
listgest.forEach((More_changing_array) => {
    console.log(`Task 16:# \t  Dear ${More_changing_array}, You are invited for dinner!`)
    
});

// Task 17:########    Shrinking Gist list      ############
let list_updated:string[] = ['kamal khan','Gul Mateen','Shahjahan','Watan khan'];

while (list_updated.length>2) {
    let dele = list_updated.pop();
    console.log(`Dear ${dele}, Sorry to say. You are not invited`)
}
{
    list_updated.forEach((invite_per) => {
        console.log(`Task 17:# \t Dear ${list_updated}, you are invited of today dinner!`)
    });
}

// Task 18:########    See the World      ############

const visit_place :string[]= ['Pakistan','UAE','China','Itly']
console.log(` Task 18:# \t Orignal Order: ${visit_place.join(", ")}`)
console.log(` Task 18:# \t Alphabetical Order: ${visit_place.slice().sort().join(", ")}`)
console.log(` Task 18:# \t Reverse Order: ${visit_place.slice().sort().reverse().join(", ")}`)

// Task 18:########    Dinner Gest      ############
const gest_dinner:string[]= ['Shah khan','Shah Wali','Shah jehan']
console.log(`Total inviting ${gest_dinner.length}, People of dinner!`)

// Task 18:########    Store think of something in array      ############

const think:string[]=['Schools','Gest houses','Cites','Country']
console.log(`Store somethink in array : ${think}`)

// Task 19:########    Object in typescript      ############
 const thingsObject:{[key:string]:string}={ // Object Syntax:
country:'Pakistan',
city:'Peshawar',
village:'Musa kali'

 }
 console.log(`Task 19:# \t This is Object in TypeScript: ${thingsObject['country']}`)
 console.log(`Task 19:# \t This is Object in TypeScript: ${thingsObject['village']}`)

 // Task 20:########    Intentional Error      ############
const var_num:number[]=[113,12,43,84]
console.log(` Task 20:# \t The value that not in Array:- ${var_num[5]} is Called Intentional Error!`)
console.log(`Task 20:# \t Correct the Error and give me Result :--  ${var_num[0]}!`)
