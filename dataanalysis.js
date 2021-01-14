var nums = [];

function Input() {
    var p = document.getElementById("array").value;
    var last = p.split(" ");
    for (var i = 0; i < last.length; i++) {
        nums.push(parseFloat(last[i]));
    }
    console.log(nums);
    return nums;

}
//var choice_str = prompt('Enter your choice from the following operations:\n1.Press 1 for up\n2.Press 2 for down\n3.Press 3 for max\n4.Press 4 for min\n5.Press 5 for sum\n6.Press 6 for mean\n7.Press 7 for median\n8.Press 8 for standard deviation');
/*switch (choice) {
    case 1:
        up(num);
        break;
    case 2:
        down(num);
        break;
    case 3:
        max(num);
        break;
    case 4:
        min(num);
        break;
    case 5:
        sum(num);
        break;
    case 6:
        mean(num);
        break;
    case 7:
        median(num);
        break;
    case 8:
        stdev(num)
        break;
    
}*/
function perform() {
    var clicked = document.getElementById("options").value;
    console.log(clicked);
    var op = null;
    switch (clicked) {
        case "up":
            op = up(nums);
            break;
        case "down":
            op = down(nums);
            break;
        case "max":
            op = max(nums);
            break;
        case "min":
            op = min(nums);
            break;
        case "mean":
            op = mean(nums);
            break;
        case "sum":
            op = sum(nums);
            break;
        case "median":
            op = median(nums);
            break;
        case "stdev":
            op = stdev(nums);
            break;
    }
    document.getElementById("result").innerHTML = op;



}

function up(nums) {
    nums.sort(function(a, b) { return a - b; });
    console.log(nums);
    return nums;
}

function down(nums) {
    nums.sort(function(a, b) { return b - a; });
    return nums
}

function max(nums) {
    var constMax = Math.max(...nums);
    return constMax;
}

function min(nums) {
    var constMin = Math.min(...nums);
    return constMin;
}

function sum(nums) {
    var add = 0;
    for (var i = 0; i < nums.length; i++) {
        add = add + nums[i];
    }

    return add;
}

function mean(nums) {
    var res = sum(nums);
    let mid = res / nums.length;
    res = mid.toFixed(3);

    return res;
}

function median(nums) {
    num = up(nums)
    let mid = Math.floor(nums.length / 2);
    if (nums.length % 2) {

        return nums[mid];
    } else {

        return ((nums[mid - 1] + nums[mid]) / 2.0);
    }
}

function stdev(nums) {
    let std = 0;
    const m = mean(nums)
    for (i = 0; i < nums.length; i++)
        std = std + Math.pow(nums[i] - m, 2);
    const val = Math.sqrt(std / nums.length);
    return val.toFixed(3);
}