// Private
class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        
getBalance() {
    console.log(`My current balance is ${this._balance}`);
}
addDeposite(amount: number){
    this._balance += amount;
}
}
// const myAccount = new BankAccount(616, 'Shariful', 1000); //616 gives erroe if I use 0 at first
// myAccount.balance = 0;
// console.log(myAccount);
const myAccount = new BankAccount(616, 'Shariful', 856);

// Protected
class StudentAccount extends BankAccount {
    test(){
        this._balance += 10;
    }
}