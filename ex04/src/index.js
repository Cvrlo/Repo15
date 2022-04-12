function myArr(mili){
    "use strict";
    const milili = [10, 25, 4 ];
    milili[2] = 25;
    milili[1] = 10;
    milili[0] = 4;

    return milili;
}
console.log(myArr());
module.exports = myArr;