//var nums = [10, 1, 9, 2, 8, 3, 7, 4, 6];
//Print the array in the console.
var ans = prompt('Do you want to input array?');

function up(nums) {
    let newData = nums.sort(function(a, b) { return b - a });
    return newData;
}

function down(nums) {
    let newData = nums.sort(function(a, b) { return a - b });
    return newData;
}

function maxNo(nums) {
    var maxNum = Math.max(...nums);
    return maxNum;
}

function minNo(nums) {
    var minNum = Math.min(...nums);
    return minNum;
}

function totalSum(nums) {
    var sum = nums.reduce(function(a, b) {
        return a + b;
    }, 0);
    return sum;
}

function median(nums) {
    nums.sort(function(a, b) { return b - a });
    var midLen = Math.floor(nums.length / 2);
    var med = nums.length % 2 !== 0 ? nums[midLen] : (nums[midLen - 1] + nums[midLen]) / 2;
    return med;
}

function mean(nums) {
    return ((sumFunction(nums) / nums.length).toPrecision(3));
}

function stdev(nums) {
    let mean = mean(nums);
    let deviation = 0;
    for (let i = 0; i < nums.length; i++) {
        deviation += Math.pow((nums[i] - mean), 2);
    }
    return (Math.sqrt(deviation / nums.length).toPrecision(3));
}


if (ans !== false) {
    var newNums = prompt('Enter the elements of array').split(' ');
    for (let i = 0; i < newNums.length; i++) {
        newNums[i] = newNums[i] - '0';
    }
    var funcReq = prompt("enter the function to be performed: ");
    if (funcReq == "Up") {
        console.log("Up :" + up(newNums));
    } else if (funcReq == "Down") {
        console.log("Down: " + down(newNums));
    } else if (funcReq == "MaxNo") {
        console.log("Max Number: " + maxNo(newNums));
    } else if (funcReq == "MinNo") {
        console.log("Min Number: " + minNo(newNums));
    } else if (funcReq == "Sum") {
        console.log("Sum: " + totalSum(newNums));
    } else if (funcReq == "Median") {
        console.log("Median: " + median(nums));
    } else if (funcReq == "Stdev") {
        console.log("Stdev: " + stdev(nums));
    }



}