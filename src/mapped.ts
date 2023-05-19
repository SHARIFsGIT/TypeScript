// Convert number to string
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myString = myNumber.map(n => n.toString());
console.log(myString);

type friendListType = {
    friend1: string;
    friend2: string;
    friend3: string;
    friend4: string;
}
const friendName: friendListType = {
    friend1: "John",
    friend2: "Jane",
    friend3: "Mary",
    friend4: "Mike"
}; 
friendName.friend1 = "Siam";
console.log(friendName);

type friendListTypeReadOnly = {
    readonly[key in keyof friendListType]: friendListType [key];
}
const friendNameWithKey: friendListTypeReadOnly = {
    friend1: "Chancal",
    friend2: "Siam",
    friend3: "Raj",
    friend4: "Shuvo"
}; 
friendNameWithKey.friend1 = "Niloy";
console.log(friendNameWithKey);