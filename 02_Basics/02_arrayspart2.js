const pak_heroes = ["Bilal","wahaj", "Ali"]
const ind_heroes = ["superman", "flash", "batsman"]

// pak_heroes.push(ind_heroes)

// console.log(pak_heroes)
// console.log(pak_heroes[3])

// const allHeroes = pak_heroes.concat(ind_heroes)
// console.log(allHeroes)

const all_new_heroes = [...pak_heroes, ...ind_heroes]
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Areesha"))
console.log(Array.from("Areesha"))
console.log(Array.from({name:"Areesha"})) // interesting case for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));