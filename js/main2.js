// Class Notes
// console.log("Hamster Stuff", hamster["name"]);

// console.log(`The hamster children are ${hamster.children[0]}, ${hamster.children[1]}, and ${hamster.children[2]}`);

// for (let i = 0; i < hamster.children.length; i++){
//     console.log(`Hamster child: ${i} - ${hamster.children[i]}`);
// }

// hamster.children.forEach(item => {
//     console.log(`Hamster child: ${item}`);

// }); 
// -------------Lightning Exercise---------------------------------
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

//Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log(`The Empire State Building is ${empireStateBuilding.stories} stories high`)

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const buldingAddress = "address"
console.log(empireStateBuilding[buldingAddress])

// ----------------------------------------------------------------

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

const fullTimeTeacher = nashvilleSoftwareSchool.instructors.fullTime
console.log(fullTimeTeacher);

const partTimeTeacher = 
nashvilleSoftwareSchool.instructors.partTime
console.log(partTimeTeacher);

// Lightning Exercise 2: Output only Andy and Zoe in the console.

console.log(fullTimeTeacher[4] + " " + partTimeTeacher[0]);

//-----------------------------------------------------------------
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
//Output the following value to the console.
//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. HE contributed heavily to the ${beatles.albums[3]} Album.`);
