// Intersection: Count only common things

type HeroTypeA = {
    name: string,
    age: number
}

type HeroTypeB = HeroTypeA & {
//  name: string,
//  age: number,
    salary: number,
    position: string
}

const HeroData: HeroTypeB = {
    name: 'John Doe',
        age: 30,
        salary: 10000,
        position: 'Developer'
}

// Union
const myFavoriteHero: HeroTypeA | HeroTypeB = {
    name: "Khan",
    age: 30,
    salary: 10000,
    position: "Developer"
}