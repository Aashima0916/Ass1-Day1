//var nums = [10, 1, 9, 2, 8, 3, 7, 4, 6];
//Print the array in the console.
var ans = prompt('Do you want to input array?');
var constSum = NaN;
var constUp = Nan;
var constDown = Nan;
var constMax = Nan;
var constMin = Nan;
var constMean = Nan;
var constMedian = Nan;
var constStdev = Nan;

function up(nums) {
    if (constUp == false) {
        constUp = nums.sort(function(a, b) { return b - a });
    }
    return constUp;
}

function down(nums) {
    if (constDown == false) {
        constDown = nums.sort(function(a, b) { return a - b });
    }
    return constDown;
}

function maxNo(nums) {
    if (constMax == false) {
        constMax = Math.max(...nums);
    }
    return constMax;
}

function minNo(nums) {
    if (constMin == false) {
        constMin = Math.min(...nums);
    }
    return constMin;
}

function totalSum(nums) {
    if (constSum == false) {
        constSum = nums.reduce(function(a, b) {
            return a + b;
        }, 0);
    }
    return constSum;
}

function median(nums) {
    if (constMedian == false) {
        nums.sort(function(a, b) { return b - a });
        var midLen = Math.floor(nums.length / 2);
        constMedian = nums.length % 2 !== 0 ? nums[midLen] : (nums[midLen - 1] + nums[midLen]) / 2;
    }
    return constMedian;
}

function mean(nums) {
    if (constMean == false) {
        constMean = ((sumFunction(nums) / nums.length).toPrecision(3));
    }
    return constMean;
}

function stdev(nums) {
    if (constStdev == false) {
        let mean = mean(nums);
        let deviation = 0;
        for (let i = 0; i < nums.length; i++) {
            deviation += Math.pow((nums[i] - mean), 2);
        }
        constStdev = (Math.sqrt(deviation / nums.length).toPrecision(3));
    }
    return constStdev;
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