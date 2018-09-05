function startTime() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var MM = today.getMonth() + 1;
    var dd = today.getDate();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    var SSS = today.getMilliseconds();
    MM = checkTime(MM);
    dd = checkTime(dd);
    mm = checkTime(mm);
    ss = checkTime(ss);
    SSS = checkSSS(SSS);
    var day;
    if (today.getDay() == 0) day = "星期日";
    if (today.getDay() == 1) day = "星期一";
    if (today.getDay() == 2) day = "星期二";
    if (today.getDay() == 3) day = "星期三";
    if (today.getDay() == 4) day = "星期四";
    if (today.getDay() == 5) day = "星期五";
    if (today.getDay() == 6) day = "星期六";
    document.getElementById('nowTime').innerHTML = yyyy + "年" + MM + "月" + dd + "日 " + hh + ":" + mm + ":" + ss + " " + SSS + " " + day;
    setTimeout('startTime()', 1);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function checkSSS(SSS) {
    if (SSS < 10) {
        SSS = "00" + SSS;
    } else if (SSS < 100) {
        SSS = "0" + SSS;
    }
    return SSS;
}