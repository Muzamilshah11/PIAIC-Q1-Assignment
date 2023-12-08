// ########### Conditional Tests: ###########
let transport:string = 'Hunda Civic';
console.log(transport=='Suzuki');// out is False Because the transport isn't Equal to Suzuki. Transoprt is Equal to Hunda Civic.

//Qustion:--write a conditional tests covering dirrerent scenarios. 1 test for equality and inequality with string. 2tests using the lowercase function 3 Numerical tests invaling equality adn inequality, greater than and less than, greater thean or eqal tom and less than or equal to 4 tests using "and" and "OR" Operater . 5 test weather an item is in an array. 6test weather an item is not in array
let s:string="Hellow";
let g:string="world";
console.log(`1:\t String conditon test:-- ${s==g}`);
console.log(`2: \t String to lowerCase conditon test:-- ${s.toLowerCase()==g.toLowerCase()}`);

let num1:number=5;
let num2:number=10;
if(num1==num2){
    console.log(`3: \t ${num1} and ${num2} is Equal`)
}
else{
    console.log(`3: \t ${num1} and ${num2} is NotEqual`)
}
// testing Equality  Opertater
console.log(`Equality ${num1===num2}`)
console.log(`Non Equal ${num1!==num2}`)
console.log(`Using Grater then  ${num1 > num2}`)
console.log(`Using Less then  ${num1 < num2}`)
console.log(`Using Grater then or Equal to  ${num1 >= num2}`)
console.log(`Using Less the or Equal to  ${num1 <= num2}`)

// testing AND && and OR || Operater

let condition1:string= "true";
let condition2:string= "false";
console.log(`Using the And Operater : ${condition1 && condition2}`)
console.log(`Using the OR Operater: ${condition1 || condition2}`)

// checking item is in array or not 
let weatherarray:number[]=[1,2,3,4,5];
let search:number=3;
console.log(`Checking Weather Array 3 is in an Array: ${weatherarray.includes(search)}`)
let search2:number=10;
console.log(`Checking Weather Array 10 is in an Array: ${weatherarray.includes(search2)}`)

// ############ Alien Color#1 ###########3
const alien_color:string= 'Green'
if(alien_color){
    console.log(`Your Color is:-- ${alien_color} so the Player just earned 5 Poins.for shooting the alien.`)
}
else{
    console.log(`Not ${alien_color} so Sorry.`)   
}
 
// ############ Alien Color#2 ###########
const alien_color2:string= 'red';
if(alien_color2){
    console.log(`Your Color is:-- ${alien_color2} so the Player just earned 10 Poins.for shooting the alien.`)
}
else{
    console.log(`Not ${alien_color2} so Sorry.`)   
}
 
// Task: 25 ### Alien Color##### Exercise 24 into Switch Statment####
const alien_color3:string='Pink';
switch (alien_color3) {
    case 'Green':
        console.log(`Task:25:-- \t Player Earned 5 Point becauase you Color is Green`) 
        break;

        case 'Red':
            console.log(`Task:25:-- \t Player Earned 10 Point becauase you Color is Red`)   
        break;

        case 'Pink':
        console.log(`Task:25:-- \t Player Earned 15 Point becauase you Color is Pink`) 
        break;
        
}
 // Task: 26 ############### Stages of life ####################
 const age:number=30;
 if(age<15){
console.log(`Task: 26\t You are a kid because your age is ${age}`)
 }
 else if(age>=15 && age<=30){
    console.log(`Task: 26\tYou are a young because your age is ${age}`)
 }
 else if(age>=31 && age<=65){
    console.log(`Task: 26\tYou are a Adult because your age is ${age}`)
 }
    else{
        console.log(`Task: 26\tYou are Elder because your age is above of 65 year`)
    }

// Task: 27 ############### Favorite Fruit ####################

const fav_fruit:string[]=['Banana','Mango','Cherry','WaterMelon']

if(fav_fruit.includes('Mango')){
console.log(`Task: 27 \t I really like Mango!`)
} // Can use more if statements f.
else{
    console.log(`Task: 27 \t Sorry! My Choice is Different!`)
}

// Task: 28 ############### Hello Admin ####################
const hello_arry:string[]=['user1','user2','user3','admin','user4'];
hello_arry.forEach((user_search) => {
    if(user_search == "admin"){
        console.log(`Task: 28 \t Hello Admin, would you like to see a status report?`)
    }else{
        console.log(`Task: 28 \t Hellow ${user_search}, thank you for logging in Again!`)
    }
});

// Task: 29 ############### No User in Array ####################
const user_array : string[]=[];
if(user_array.length == 0){
    console.log(`Task: 29 \t We are looking new user! Please Sign up First!`)
}
else{
    console.log(`Task: 29 \t Please login in your Accout`)
}

// Task: 30 ############### Checking Usernames ####################
const current_user:string[]=['Ali','khan','Ahmad','Luqman'];
const new_user:string[]=['Shahab','Salman','Akmal','Adil'];

current_user.forEach((check_new_user) => {
    const lowerCase_current_user:string[]= current_user.map((curr_user)=>curr_user.toLowerCase());
    const lower_new_user:string[]=new_user.map((new_user)=>new_user.toLowerCase());

    if(lowerCase_current_user.includes('lower_new_user')){
        console.log(`Task: 30 \tSorry, ${check_new_user}, you'll need to enter a new username.`)

    }
    else{
        console.log(`Task: 30 \tCongratulations, ${check_new_user}, Your name is avaliable.`);
    }
});


