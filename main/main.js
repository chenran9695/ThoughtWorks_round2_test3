function getParkingFee(parkTime) {
    return parkTime * 0.25;
}

module.exports = function main(inputs) {
    if(inputs.distance <= 2){
        return 6+getParkingFee(inputs.parkTime);
    }
    else if(inputs.distance<=8){
        return 6+(inputs.distance-2)*0.8+getParkingFee(inputs.parkTime);
    }
    else{
        return 6+(inputs.distance-8)*0.8*1.5+6*0.8+getParkingFee(inputs.parkTime);
    }
};

