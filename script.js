// var date = new Date();
// date.getDay;
// date.getHours;
// let hou = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();

// let ho = document.querySelector(".hour");
// let mi = document.querySelector(".min");
// let se = document.querySelector(".sec");

// ho.textContent = hou;
// mi.textContent = min;
// se.textContent = sec;

// console.log(hou);
// console.log(min);
// console.log(sec);
// let mydate = document.querySelector(".myDate");
// mydate.innerHTML = date;
// console.log(mydate);
// function updateTime() {
//   let currentTime = new Date();
//   let currentTimeMillis = currentTime.getTime();
//   let currentUTCTime = currentTime.toUTCString();

//   console.log("Current time in milliseconds: " + currentTimeMillis);
//   console.log("Current time in UTC: " + currentUTCTime);
// }

// setInterval(updateTime, 1000);
let a = document.getElementById("MyClockDisplay");

function showTime() {
  var date = new Date();
  var hou = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var mili = date.getMilliseconds();
  var session = "AM";

  if (hou == 0) {
    hou = 12;
  }

  if (hou > 12) {
    hou = hou - 12;
    session = "PM";
  }

  hou = hou < 10 ? "0" + hou : hou;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  var time = `${hou}  : ${min} : ${sec} : ${mili} ${session}`;
  a.textContent = time;
  setTimeout(showTime);
}
showTime();

function blue() {
  a.style.color = "darkslateblue";
}
function Green() {
  a.style.color = "forestgreen";
}
function yellow() {
  a.style.color = "darkkhaki";
}
