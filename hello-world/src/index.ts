enum Size {Small, Medium, Large};
let mySize: Size = Size.Small;
console.log(mySize)

function calculateTax(income: number): number {
    if (income < 50_000) {
        return income * 1.2
    }
    return income * 1.3;
}