var nums = [];
var size = 9; //Maximum Array size

for (var i = 0; i < size; i++) {

    nums[i] = parseInt(prompt('Enter Element ' + (i + 1)));

}


//var nums = [10, 1, 9, 2, 8, 3, 7, 4, 6];
//Print the array in the console.
console.log(nums);
nums.sort(function(a, b) { return b - a });
console.log("Up " + nums);
nums.sort((function(a, b) { return a - b }));
console.log("Down " + nums);
var maxNum = Math.max(...nums);
var minNum = Math.min(...nums);
console.log("Max: " + maxNum);
console.log("Min: " + minNum);
var sum = nums.reduce(function(a, b) {
    return a + b;
}, 0);
console.log("Sum: " + sum);
nums.sort(function(a, b) { return b - a });
const midLen = Math.floor(nums.length / 2);
const median = nums.length % 2 !== 0 ? nums[midLen] : (nums[midLen - 1] + nums[midLen]) / 2;
console.log("Median: " + median);
const mean = sum / (nums.length);
console.log("Mean: " + mean.toPrecision(3));
const stDev = Math.sqrt(nums.reduce(function(sq, n) {
    return sq + Math.pow(n - mean, 2);
}, 0) / (nums.length - 1));
console.log("Stdev: " + stDev.toPrecision(3));