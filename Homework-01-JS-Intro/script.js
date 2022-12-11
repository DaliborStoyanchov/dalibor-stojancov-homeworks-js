let phonePrice = 119.95;
let phoneTax = (5 * phonePrice) / 100;
let phonePriceWithTax = phonePrice + phoneTax;

console.log("The phone price without a tax is:", phonePrice);
console.log("The phone tax ", phoneTax);
console.log("The phone price with the tax is:", phonePriceWithTax);

let totalSum = 30 * phonePriceWithTax;

console.log("The total sum of 30 phones with tax is:", totalSum);
