//Spread operator
const heroSpreadArray1: string[] = ['Amir', 'Sakib', 'Salman'];
const heroSpreadArray2: string[] = ['Sharukh', 'Siam', 'Chanchal'];
heroSpreadArray1.push("Arifin")

console.log(heroSpreadArray1);

heroSpreadArray1.push(...heroSpreadArray2);
console.log(heroSpreadArray1);

//Rest operator
const hero1Argu = (age: number): number => {
    return age;
}
console.log(hero1Argu(40));

const hero2Argu = (movies: number, income: number): number => {
    return movies * income;
}
console.log(hero2Argu(10, 500000));

const heroMultArgu = (...score: number[]): number => {
    let sum: number = 0;
    score.map(n=>{
        sum += n;
    })
    return sum;
};
console.log(heroMultArgu(1, 4, 5, 10));

const heroString = (...character: string[]): void => {
    character.map(c=>console.log(c));
}

heroString('Amir', 'Sakib', 'Salman');

// Array distructure
const heroArray1: string[] = ['Amir', 'Sakib', 'Salmann']
const heroArray2: string[] = ['Sharukh', 'Siam', 'Chanchal']
const [hero1, hero2] = heroArray1;

console.log(hero1, hero2);

// Object distructure
const heroObj1: { 
    heroname: string, 
    readonly age: number,
    proffesion: string,
    isMarried?: boolean
 } = { 
    heroname: 'Salman',
    age: 40,
    proffesion: 'Actor',
    isMarried: false
 }
 const {heroname} = heroObj1;
 console.log(heroname);