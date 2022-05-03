const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// Find all pokémon with ids evenly divisible by 3
const idDivisibleByThree = pokémon.filter(p => p.id % 3 === 0);
console.log(idDivisibleByThree);

// Find all pokémon with fire type
const fireTypes = pokémon.filter(p => p.types.includes("fire"));
console.log(fireTypes);

// Find all pokémon with more than one type
const multiTypes = pokémon.filter(p => p.types.length >= 2 );
console.log(multiTypes);

// Find all names of pokémon
const namesOnly = pokémon.map(p => p.name);
console.log(namesOnly);

// Find all names of pokémon with ids over 99
const namesOverNinetyNine = pokémon.filter(p => p.name && p.id > 99).map(p => p.name);
console.log(namesOverNinetyNine);

// Find all names of pokémon with only poison type
const namesOfPoisonOnlyType = pokémon.filter(p => p.types.length === 1 && p.types.includes("poison")).map(p => p.name);
console.log(namesOfPoisonOnlyType);

// Find the first type of pokémon with flying as second type
const secondTypeFlying = pokémon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
console.log(secondTypeFlying);

// Find the count of all pokémon with normal as type
const normalTypeCount = pokémon.filter(p => p.types.includes("normal")).length;
console.log(normalTypeCount);

