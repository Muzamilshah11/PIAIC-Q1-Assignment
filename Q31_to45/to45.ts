// // // Task: 31 ######## Ordinal Numbers ##########
// const Numbers:number[]=[1,2,3,4,5,6,7,8,9,];
// // //Loop through array

// for(const number in Numbers){
//     let Ordinalnumber;
//     if(number == "0"){
//         continue;
//     }
//     else if(number == '1'){
//         Ordinalnumber ='st';
//     } else if(number == '2'){
//         Ordinalnumber ='nd';
//     } else if(number == '3'){
//         Ordinalnumber ='rd';
//     }
//     else{
//         Ordinalnumber = 'th';
//     }
//     console.log(`${number}${Ordinalnumber}`);
//     }
    
    

// // // Task: 32 ######## Pizzas ##########
// const trind_pizza:string[]=['Karachi Pizza','Peshaweri Pizza','Lahori Pizza']
// trind_pizza.forEach((pizza) => {
//     console.log(`Task: 32 \tI like ${pizza} Pizza!`);
// });
// console.log(`Task: 32 \tI Really like Pizza!`)

// // // Task: 33 ######## Animals ##########
// const Animals:string[]=['Cow','Goat','Dog','Cat'] 
// Animals.forEach((Animal) => {
//     console.log(`Task: 33 \tThe ${Animal} like great Pet!`)
// });
// console.log(`Task: 33 \tthe Animals like Great Pet!`)

// // Task: 34 ######## T_Shirt Function ########## 

// function Tshirt(size:string , message:string){
//     console.log(`Task: 34 \tT_Shirt size: ${size}, Message: ${message}`)
// }
// Tshirt('Large','I love R-Sheen!')

// // Task: 35 ######## Large Shirt Function ##########
// function largeShirt(sizel:'Extra Large', mess:'I love this size Shirt'):void
// {
//     console.log(`Task: 35 \t Shirt size: ${sizel}, with Message is: ${mess}`)

// }
// largeShirt('Extra Large','I love this size Shirt') 
// // Why we are not empty this Explain?

// // Task: 36 ########cities Function ##########
// function famus_cities(city:string, country:string="unknown"):void{
// console.log(` ${city} is in ${country}!`)
// }
// famus_cities('Task: 36 \tCharsadda', 'Pakistan')

// // Task: 37 ######## City with Country Function ##########

// function city_country(city:string, country:string):string{
//     return `Task: 37 \tYour city: ${city}, is in:${country}!`
    
// }
// console.log(city_country('Sharjah','UAE Duabi!'))
// // console is must add in when we use return 

// // Task: 38 ######## Album Making ##########

// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     // The function should take in an artist name and an album title,
//     // and it should return an Object containing these two pieces of information.
//     const album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     };

//     // Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//     // If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }

//     return album;
// }

// // Use the function to make three dictionaries representing different albums.
// const album1 = make_album("Artist1", "Album1");
// const album2 = make_album("Artist2", "Album2", 12); 
// // This one includes the number of tracks.
// const album3 = make_album("Artist3", "Album3");

// console.log(album1);
// console.log(album2);
// console.log(album3);

// // Task: 41 ######## Magicians ##########

// const magicians1: string[] = ["Merlin", "Houdini", "David Copperfield", "Dynamo"];

// // Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians1(magicianNames: string[]): void {
//     for (const magician of magicianNames) {
//         console.log(magician);
//     }
// }

// // Call the function to show the names of the magicians.
// show_magicians1(magicians1);



// // 43 ################# Great Magicians: ################

// // Make an array of magician’s names.
// const magicians: string[] = ["Merlin", "Houdini", "David Copperfield", "Dynamo"];

// // Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians(magicianNames: string[]): void {
//     for (const magician of magicianNames) {
//         console.log(magician);
//     }
// }

// // Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// function make_great(magicianNames: string[]): string[] {
//     const greatMagicians: string[] = [];

//     for (const magician of magicianNames) {
//         greatMagicians.push(`#43 \t${magician} the Great`);
//     }

//     return greatMagicians;
// }

// // Call make_great() to modify the array of magicians.
// const greatMagicians = make_great(magicians);

// // Call show_magicians() to see that the list has actually been modified.
// show_magicians(greatMagicians);

// 44 ################# Unchanged Magicians ################

// Write a function that accepts an array of items a person wants on a sandwich.
function make_sandwich(...toppings: string[]): void {
    // The function should print a summary of the sandwich that is being ordered.
    console.log("Sandwich Summary:");
    
    if (toppings.length === 0) {
        console.log("You ordered an empty sandwich. Please add some toppings!");
    } else {
        console.log("Toppings:");
        for (const topping of toppings) {
            console.log(`- ${topping}`);
        }
        console.log("Enjoy your sandwich!");
    }

    console.log(); // Empty line for better readability
}

// Call the function three times, using a different number of arguments each time.
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato");
make_sandwich();


// 45  ################# Cars ################

// // Write a function that stores information about a car in an object.
// function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
//     // The function should always receive a manufacturer and a model name.
//     const car: { [key: string]: any } = {
//         manufacturer,
//         modelName,
//     };

//     // It should then accept an arbitrary number of keyword arguments.
//     for (const option of options) {
//         const keys = Object.keys(option);
//         for (const key of keys) {
//             car[key] = option[key]; 
//         }
//     }

//     return car;
// }

// // Call the function with the required information and two other name-value pairs.
// const myCar = createCar("Toyota", "Camry", color:"Silver", hasNavigation: true);

// // Print the object that’s returned to make sure all the information was stored correctly.
// console.log(myCar);
