function speedCheck(speed) {
    const speedLimit = 70;
    if (speed<= speedLimit){
       alert("OK");
    }
    else {
        const demeritPoints = Math.floor((speed-speedLimit)/5);
        if (demeritPoints > 12) {
           alert("Lisence suspended");
        }
        else {
            alert("points:" + demeritPoints);
        }
    }
}
const speed = parseInt(prompt("Enter the speed of the car: "), 10);
speedCheck(speed);
