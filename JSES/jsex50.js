function TimeConvert(num){
    let hour = Math.round(num/60);
    let minute = num%60;

    console.log("given time in hours: "+hour+":"+minute);
}

TimeConvert(200);