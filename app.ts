//Exercise 2:

let personName: string = 'Tehreem';
console.log(`\nHello ${personName}, would you like to learn some Python today?\n`);


// Exercise 3: 

let personName2: string = "tehreem";

console.log("lowercase:", personName2.toLowerCase());

console.log("Uppercase:", personName2.toUpperCase());

console.log("Titlecase:", personName2.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" "));

// Exercise 4:

console.log("\nNelson Mandela once said,  “Education is the most powerful weapon which you can use to change the world.”");

//Exercise 5:
let famouse_person: string = 'Nelson Mandala'
let messag: string = '“Education is the most powerful weapon which you can use to change the world.”'
console.log(`\n${famouse_person} once said,${messag}`)

// Exercise 6: 

const person_Name: string = '   \n\tShahid Afridi\t\n   ';
console.log(person_Name);

const without_spaces: string = person_Name.trim();
console.log(without_spaces);

//Exercise 7:

let addition: number = 5 + 3;
let subtraction: number = 10 - 2;
let multiplication: number = 2 * 4;
let division: number = 16 / 2;

//console.log(addition,subtraction,multiplication,division);

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

//Exercise 8:

console.log(4 + 4);
console.log(3 + 5);
console.log(6 + 2);
console.log(7 + 1);

//Exercise 9: 

let favorit_number: number = 8;
let Messag = 'Here is your fovrit number' + "\t" + favorit_number;
console.log(Messag);

//Exercise 10:

let Name: string = "Tehreem"; // here i am doing store name in variable.
console.log(Name);//this program will print name. 

// program written by: Tehreem;
// Current Date : 17-feb-2024;

//Exercise 11:

let names: string[] = ['Hajra', 'shaheen', 'Muskan', 'fizza'];
/*
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
*/

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Exercise 12: 
let Names: string[] = ['hajra', 'shaheen', 'muskan', 'fizza'];

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i] + '\tis my good friend');
}

//Exercise 13:

let transportation: string[] = ['Spyder Car', 'Sport Bike', 'electric train', 'cycle'];

for (let i = 0; i < transportation.length; i++) {
    console.log(`I would like to own a` + "\t" + transportation[i]);
};

//Exercise 14:

let Guestlist: string[] = ['Arham', 'Ayesha', 'Taha'];
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`"Dear ${Guestlist[i]}," \t\t\n"you are invited to dinner"\n`);
};

//Exercise 15:  

let absent_guess: string = '\"Arham';
console.log(absent_guess + "," + "\tis not coming.\"\n")


let new_guest: string = 'Sarim';
Guestlist[0] = new_guest;


for (let i = 0; i < Guestlist.length; i++) {
    console.log(`"Dear ${Guestlist[i]}," \t\t\n"you are invited to dinner"\n`)
}

//Exercise 16: 

console.log("Good News! I find big table so I am inviting 3 more guests.\n\n")

Guestlist.unshift('shaheen');
Guestlist.splice(3, 0, "Hajra");
Guestlist.push("Muskan");

Guestlist.map((v) => {
    console.log(`"Dear ${v}," \t\t\n"you are invited to dinner"\n`);
});

//  Exercise 17:  

console.log("sorry, I can not arrange big table. so I can only invite two people for diner\n\n");

while (Guestlist.length > 2) {
    let remove_guest = Guestlist.pop()
    console.log(`"sorry  ${remove_guest}, you are not invited for diner"`)
}

Guestlist.map((v) => {
    console.log(`"Dear: ${v}, you  are still invited to diner."`);
})

Guestlist.splice(0, 2);
console.log(Guestlist);

//Exercise 18:  

let visit_placess: string[] = ['Turky', 'Dubai', 'Soudi', 'Pakistan', 'Uk'];

console.log(`Orignal Order`, visit_placess);

console.log(`Alphabetical Order`, [...visit_placess].sort());

console.log(`Orignal Order`, visit_placess);

console.log(`Reverse alphabatical order:`, [...visit_placess].sort().reverse());

console.log(`Orignal order after revers`, visit_placess)

visit_placess.reverse()
console.log(`Convert to revers order`, visit_placess);

visit_placess.reverse();
console.log(`back to original order`, visit_placess);

visit_placess.sort();
console.log(`sort in alphabetical order`, visit_placess);

visit_placess.sort((a, b) => b.localeCompare(a));
console.log(`sorted in reverse alphabetical order;`, visit_placess);

//Exercise 19: 

Guestlist.map((v) => {
    console.log(`"Dear ${v}," \t\t\n"you are invited to dinner"\t and\n "I am inviting three people to dinner"`);
});

//Exercise 20:

let placess_names: string[] = ['pakistan', 'karachi', 'lahore', 'dubai', 'larkana'];
console.log(`country and city:`, placess_names);


//Exercise 21:

let person: { name: string, country: string, age: number } = { name: "Tehreem", country: "pakistan", age: 18 };

console.log(`TypeScript Object:`, person);

//Exercise 22:

const days: string[] = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday'];
//console.log(days{7});
console.log(days[6]);

// Exercise 23:

let n_ame = "Arham";
console.log("is n_ame == 'Arham'? I predict True.");
console.log(n_ame == "Arham");
console.log("is n_ame === 'Arham'? I predict True.");
console.log(n_ame === "Arham");
console.log("is n_ame !== 'arham'? I predict True.");
console.log(n_ame !== "arham");
console.log("is n_ame != 'tehreem'? I predict True.");
console.log(n_ame != "tehreem");
console.log("is n_ame.lenght !== 45? I predict True.");
console.log(n_ame.length !== 45);
console.log("five test complet in true.\nNow start is false\n");
console.log(`is n_ame =="arham"? I predict false.`);
console.log(n_ame == "arham");
console.log(`is n_ame !=="Arham"? I predict false.`);
console.log(n_ame !== "Arham");
console.log(`is n_ame ==="arham"? I predict false.`);
console.log(n_ame === "arham");
console.log(`is n_ame !="Arham"? I predict false.`);
console.log(n_ame != "Arham");
console.log(`is n_ame.lenght == 20 ? I predict false.`);
console.log(n_ame.length == 20);


//Exercise 24: 


let num1: string = "10";
let num2: string = "12";

console.log('"Inequality:"', num1 != num2);
console.log('"equality:"', num1 == num2);


let place: string = "new karachi";
let place1: string = "karachi"

console.log(`" loweCase In true:"`, place.toLowerCase() != place1.toLowerCase());
console.log(`"loweCase In false:"`, place.toLowerCase() == place1.toLowerCase());


let number: number = 30;
let number1: number = 25;

console.log(`"inequality:"`, number != number1);
console.log(`"equality:"`, number == number1);

console.log(`"Greater than:" `, number > number1);
console.log(`"Less than:"`, number < number1);

console.log(`"Greater than and equal to:"`, number >= number1);
console.log(`"Less than and equal to:"`, number <= number1);

console.log(`"And Operator:"`, number > number1 && number >= number1);
console.log(`"Or Operator:"`, number < number1 || number <= number1);


let countrys: string[] = ['pakistan', 'india', 'jarmani', 'paris', 'uk'];
if (countrys.includes("paris")) {
    console.log("paris, is in a array");
}


if (!countrys.includes("france")) {
    console.log("france is not in a array");
}

//Exercise 25:

let alien_color: string = "green";

if (alien_color == "green") {
    console.log("congratulations! you are earn 5 points.");
}
// let alien_color = "red";
// if (alien_color == "green") {
//   console.log("No Output");
// }

// Exercise 26:

if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
};

let color_alien: string = "red"
if (color_alien == "red") {
    console.log("the player just earned 10 points.");
};

// Exercise 27: 

let alien_color1: string = "green";

if (alien_color1 == "green") {
    console.log("the player earned 5 points.");
};

let color_alien2: string = "yellow"
if (color_alien2 == "yellow") {
    console.log("the player earned 10 points.");
};

let al_co_red: string = "red";
if (al_co_red == "red") {
    console.log("the player earned 15 points.");
};

// Exercise 28:

let age: number = 18


if (age < 2) {
    console.log("you are a baby");
}

else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are elder");
}

// Exercise 29: 

let favorite_fruits: string[] = ['apple', 'mango', 'orang'];

if (favorite_fruits.includes("apple")) {
    console.log("you really like apple!")
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like mango!")
}
if (favorite_fruits.includes("orang")) {
    console.log("you realy like orang!")
}
if (favorite_fruits.includes("bnana")) {
    console.log(" bnana is not in array.")
}
if (favorite_fruits.includes("strawberry")) {
    console.log("strawberry is not in array.")
}

// Exercise 30:

let username: string[] = ['admin', 'arham', 'eric', 'taha', 'sarim'];
for (let i = 0; i < username.length; i++) {
    if (username[i] == "admin") {
        console.log(`HELLO Admin, would you like  to see a stutas report?`);
    } else {
        console.log(`HELLO ${username[i]}, thank you for logging in again`);
    }
};

// Exercise 31:

if (username.length == 0) {
    console.log(`we need to find some users!`)
} else {
    for (let user of username) {
        if (user == "admin") {
            console.log(`HELLO Admin, would you like  to see a stutas report?`);
        } else {
            console.log(`HELLO ${username}, thank you for logging in again`)
        }
    }
}
let user = []
if (user.length == 0) {
    console.log(`we need to find some users!`)
}

//Exercise 32:

let current_users: string[] = ['Eric', 'arham', 'hamza', 'taha', 'daniyal'];

let new_users: string[] = ['zeshan', 'kashan', 'daniyal', 'farhan', 'arham'];

for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(` ${new_users[i]} has been used. pless, enter a new user name`)
    } else {
        console.log(`${new_users[i]} is available.`)
    }
};

//Exercise 33:

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinal = '';
    if (numbers[i] == 1) {
        ordinal = 'st';
    } else if (numbers[i] == 2) {
        ordinal = 'nd';
    } else if (numbers[i] == 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }
    console.log(`${numbers[i]}${ordinal}`);
}

// Exercise 34:

let favorite_pizza: string[] = ['pepperoni', 'margherita', 'vegatarian'];

for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(`I like ${favorite_pizza[i]} pizza.`)
}

console.log(`I really love pizza`);

// Exersise 35:

let animals: string[] = ['dog', 'cat', 'rabbit'];

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`)
}
console.log("Any of these animals would make a great pet!")

//Exercise 36:

function make_shirt(size: string, message: string) {
    console.log(` The shirt size is ${size} and it says ${message}.`)
}

make_shirt('T', 'I love pakistan');

// Exercise 37:

function Make_shirt(size: string = 'T', messag: string = ' I Love typescript') {
    console.log(`The shirt size is ${size} and it says ${messag}`);
}
Make_shirt();
Make_shirt("M");
Make_shirt("l", "best of luck");

// Exercise 38:

function describe_city(city: string, country: string = 'unknown') {
    console.log(`${city} is in ${country}`)
}

describe_city("larkana", "pakistan");
describe_city("london", "united kingdom");
describe_city("paris");

// Exercise 39:

function city_country(city: string, country: string) {
    return `${city},${country}`
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("bambai", "india"));
console.log(city_country("Tokyo", "japan"));

//Exercise 40:


function make_album(artist: string, album: string, tracks?: number): { artist: string, album: string, tracks?: number } {
    const albumObj: { artist: string, album: string, tracks?: number } = {
        artist: artist,
        album: album
    };
    if (tracks) {
        albumObj.tracks = tracks;
    }
    return albumObj;
}
console.log(make_album('Taylor Swift', 'Fearless'));
console.log(make_album('Ed Sheeran', 'Divide', 12));
console.log(make_album('Adele', '25', 10));

//Exercise 41:

let magicians: string[] = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];

function show_magicians(Magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

show_magicians(magicians);

// Exercise 42:

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(` ${magicians[i]} the great`);
    }
}

make_great(magicians);

show_magicians(magicians);

//Exercise 43:

let magicians_names: string[] = ['Harry Houdini', 'David Blaine', 'David Copperfield', 'Ricky Jay'];

function make_great2(magicians: string[]) {
    let great_magicians: string[] = magicians.map(magicians => `The Great ${magicians}`);


    return great_magicians;
}
let great_magicians2: string[] = make_great2(magicians_names);

show_magicians(magicians_names);
show_magicians(great_magicians2);


//Exercise 44:

function make_sandwich(...items: string[]) {
    console.log(`sandwich Order:\n`)
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`)
    }
    console.log(`\nenjoy your sandwiches`)
}

make_sandwich(' cheese', 'biryani', 'coldrink');
make_sandwich('tea', 'pulao');
make_sandwich('ice-cream');

//Exercise 45:

function make_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
    const car: { manufacturer: string, model: string, options: { [key: string]: any } } = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };

    for (const option of options) {
        for (const key in option) {
            car.options[key] = option[key];
        }
    }

    return car;
}

const car = make_car('Toyota', 'Corolla', { color: 'blue' }, { sunroof: true });
console.log(car);
