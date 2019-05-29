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

//计算停车产生的费用
function getParkFee(parkTime) {
    return parkTime * parkPrice;
}
//计算两公里到8公里这段区间所产生的费用
function getFeeBetween2To8(distance) {
    return distance * priceBetweent2To8;
}
//计算超过8公里的部分产生的费用
function getFeeMoreThan8(distance){
    return distance*priceMoreThan8;
}

module.exports = function main(inputs) {
    let fee = 0;
    let distance = inputs.distance;
    //大于8公里的路程产生的费用：
    if (distance >8) {
        fee += getFeeMoreThan8(distance - 8);
        distance = 8;
    }
    //介于2公里和8公里之间产生的费用
    if (distance > 2) {
        fee += getFeeBetween2To8(distance - 2);
    }
    //基本起步费
    fee += basicFee;
    //停车费
    fee += getParkFee(inputs.parkTime);
    //对费用进行四舍五入,并返回
    return Math.round(fee);
};


