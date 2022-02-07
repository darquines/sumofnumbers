const test = [1,2,3,4];

function sumFor(numbers) {
  let total = 0;
  for (let nums of numbers) {
    total += nums;
  }
  return total;
}

function sumWhile(numbers) {
  let total = 0;
  let i = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++
  }
  return total;
}

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  else {
    return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
  }
}

function sumTheSimpleWay(numbers) {
 return _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));