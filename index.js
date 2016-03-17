/**
 * Created by yangyusenhit on 2016/3/17.
 */
function repaint() {
    var sec = document.getElementById("second-div");
    var min = document.getElementById("min-div");
    var hou = document.getElementById("hour-div");
    var second = new Date().getSeconds();
    var minute = new Date().getMinutes();
    var hour = new Date().getHours();
    var sec_angle = (second + 1) * 6 - 90;
    var min_angle = ( minute + 1) * 6 - 90;
    var hou_angle = hour % 12 * 30 + Math.floor(minute / 12) * 6 - 90;
    sec.style.transform = "rotate(" + sec_angle + "deg)";
    min.style.transform = "rotate(" + min_angle + "deg)";
    hou.style.transform = "rotate(" + hou_angle + "deg)";
}
function nextMin() {
    console.log('next min');
    var min = document.getElementById("min-div");
    var minute = new Date().getMinutes();
    var angle = ( minute + 1) * 6 - 90;
    min.style.transform = "rotate(" + angle + "deg)";
}
function nextHour() {
    var hou = document.getElementById("hour-div");
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var angle = hour % 12 * 30 + Math.floor(minute / 12) * 6 - 90;
    hou.style.transform = "rotate(" + angle + "deg)";
}
window.onload = function () {
    //var hour = new Date().getHours();
    //var minute = new Date().getMinutes();
    //var second = new Date().getSeconds();
    repaint();
    //console.log((minute + 1) % 12 * 60000);
    //setTimeout(function () {
    //    setInterval(nextMin, 60000);
    //}, (59 - second) * 1000);
    //setTimeout(function () {
    //    setInterval(nextHour, 720000)
    //}, ((minute + 1) % 12 * 60000));
    //nextSec(second);
    setInterval(repaint, 1000);
    //nextMin(minute);
    //nextHour(hour);
};