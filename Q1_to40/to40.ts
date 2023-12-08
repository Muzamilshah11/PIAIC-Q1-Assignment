// Task: 31 ######## Ordinal Numbers ##########
const Number_array:number[]=[1,2,3,4,5,6,7,8,9]
Number_array.forEach((input_value) => {
    let OrdinalEnding:string;
    if (input_value === 1)  {
        OrdinalEnding = 'st';
        
    }
    else if (input_value === 2) {
        OrdinalEnding : 'nd'
        
    }
    else if (input_value === 3) {
        OrdinalEnding : 'rd'
        
    }
    else if (input_value === 4) {
        OrdinalEnding : 'th'
        
    }
    else if (input_value === 5) {
        OrdinalEnding : 'th'
        
    }
    else if (input_value === 6) {
        OrdinalEnding : 'th'
        
    }
    else if (input_value === 7) {
        OrdinalEnding : 'th'
        
    }
    else if (input_value === 8) {
        OrdinalEnding : 'th'
    
    }
    else if (input_value === 9) {
        OrdinalEnding : 'th'
        
    }else{
        console.log(`NOt a Ordinal Number`)
    }
    
});

// Task: 32 ######## Pizzas ##########
const trind_pizza:string[]=['Karachi Pizza','Peshaweri Pizza','Lahori Pizza']
trind_pizza.forEach((pizza) => {
    console.log(`Task: 32 \tI like ${pizza} Pizza!`);
});
console.log(`Task: 32 \tI Really like Pizza!`)

// Task: 33 ######## Animals ##########
const Animals:string[]=['Cow','Goat','Dog','Cat'] 
Animals.forEach((Animal) => {
    console.log(`Task: 33 \tThe ${Animal} like great Pet!`)
});
console.log(`Task: 33 \tthe Animals like Great Pet!`)

// Task: 34 ######## T_Shirt Function ########## 
function Tshirt(size:string , message:string){
    console.log(`Task: 34 \tT_Shirt size: ${size}, Message: ${message}`)
}
Tshirt('Large','I love R-Sheen!')

// Task: 35 ######## Large Shirt Function ##########
function largeShirt(sizel:'Extra Large', mess:'I love this size Shirt'):void
{
    console.log(`Task: 35 \t Shirt size: ${sizel}, with Message is: ${mess}`)

}
largeShirt('Extra Large','I love this size Shirt') 
// Why we are not empty this Explain?

// Task: 36 ########cities Function ##########
function famus_cities(city:string, country:string="unknown"):void{
console.log(`${city} is in ${country}!`)
}
famus_cities('Task: 36 \tCharsadda', 'Pakistan')

// Task: 37 ######## City with Country Function ##########

function city_country(city:string, country:string):string{
    return `Task: 37 \tYour city: ${city}, is in:${country}!`
    
}
console.log(city_country('Sharjah','UAE Duabi!'))
// console is must add in when we use return 

// Task: 38 ######## Album Making ##########
// function make_album(artist:string, title:string, track?:number):{artist:string, title:string, track?:string}{
//     const album:{artist:string, title:string, track?:number}={artist,title};
//     if(track!==undefined){
//         album.track= track
//     }
//     // return album;
// }// facing some issue 
// Task: 39 ######## Magicians ##########
function show_magicians(Magician:string[]):void{
    Magician.forEach((magician) => {
        console.log(`Task: 39\tThe name is: ${magician}`)
        const magicianName:string[]=['Shah khan','Ali jan','Khan Ali'];
        show_magicians(magicianName);
    });
}

