//起步价（元）
var basicFee = 6;
//停车费（元/min）
var parkPrice = 0.25;
//2公里至8公里的收费（元/每公里）
var priceBetweent2To8 = 0.8;
// 8公里以后的加价倍率
var rate = 0.5;
// 8公里以外的收费（元/公里）
var priceMoreThan8 = priceBetweent2To8 * (1+rate);

function getParkFee(parkTime) {
    return parkTime * parkPrice;
}

function getFeeBetween2To8(distance) {
    return distance * priceBetweent2To8;
}

function getFeeMoreThan8(distance){
    return distance*priceMoreThan8;
}

function caculateFee(inputs) {
    let fee = basicFee + getParkFee(inputs.parkTime);
    if (inputs.distance >= 2 & inputs.distance <= 8) {
        fee += getFeeBetween2To8(inputs.distance - 2);
    } else if (inputs.distance > 8) {
        fee += (getFeeBetween2To8(6) + getFeeMoreThan8(inputs.distance - 8));
    }
    return fee;
}

module.exports = function main(inputs) {
    return Math.round(caculateFee(inputs));
};


