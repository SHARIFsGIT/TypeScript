// Getter-setter
class BankAccountForGS {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // Getters
        get balance(): number {
            return this._balance;
        }
// getBalance(): number {
//     return this._balance;
// }
        // Setters
        set deposite(value: number) {
            this._balance = this._balance + value;
        }
}
// addDeposite(amount: number){
//     this._balance += amount;
// }
// }
const myAccountGS = new BankAccountForGS(616, 'Shariful', 856);
console.log(myAccountGS.balance);
myAccountGS.deposite = 500;
console.log(myAccountGS.balance);