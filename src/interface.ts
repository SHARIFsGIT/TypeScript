interface IHeroInterface {
    name: string;
    age: number;
}

const heroWithInterface: IHeroInterface = {
    name: "Siam",
    age: 20
}

type HeroIncomeTypeInterface = number | string;
type ABC = number;

interface XYZ number; // error cause interface can only work in object type data 
