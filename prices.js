/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The value of the 1st, 3rd, and 7th elements should be doubled
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
for (let index = 0;  index < prices.length; index++){
  if (index === 0){
    prices[index] = prices[index] * 2;
  }
  else if (index === 2) {
    prices[index] = prices[index] * 2;
  }
  else if (index === 6 ) {
    prices[index] = prices[index] * 2;
  }
}
console.log(prices);