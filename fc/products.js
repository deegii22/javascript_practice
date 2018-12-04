'use strict';

exports.primeProducts = function(nums){

    var values = nums.map(() => new Array(nums.length));

    nums.forEach((val,index,row) => {
        for(let i = 0; i <= index; i++) {
            values[index][i] = values[i][index] = val * row[i];
        }
    });

    values.forEach((row, index) => row.unshift(nums[index]));
    nums.unshift('N');
    values.unshift(nums);

    return values;
}

exports.printNumbers = function(values){

    var res = '';
    var lastNum = values.length-1;
    var max = values[lastNum][values[lastNum-1].length-1].toString().length;

    for(let i=0;i<values.length;i++){
        for(let j=0;j<values[i].length;j++){
            var diff = max - values[i][j].toString().length;
            for(let k=0;k<diff;k++){
                res += ' '; 
            }
            res+=values[i][j] + ' '
        }
        res += '\n';
    }
    
    return res;
}