var now = new Date();
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var ampm = document.getElementById("ampm");

setInterval(function () {
  var now = new Date();
  hour.innerText = now.getHours();
  minute.innerText = now.getMinutes();

  if (hour.innerText >= 12) {
    ampm.innerText = "PM";
  } else {
    ampm.innerText = "AM";
  }
  if (parseInt(hour.innerText) >= 13) {
    var hourz = parseInt(hour.innerText);
    hourz = +hourz - 12;
    hour.innerText = hourz;
  }
  if (parseInt(hour.innerText) == "0") {
    var hours = parseInt(hour.innerText);
    hours = 12;
    hour = hours;
  }

  if (hour.innerText.length == 1) {
    hour.innerText = 0 + hour.innerText;
  }
  if (minute.innerText.length == 1) {
    minute.innerText = 0 + minute.innerText;
  }
}, 1000);

// ===============================================

var result0 = document.getElementById("result0");
var result1 = document.getElementById("result1");

var temp1 = "";
var temp2 = "";
var expressions = "";
var temp3 = "";
temp3 = +temp3;

function num(firstNumber) {
  border();
  fontsize();
  console.log(firstNumber);
  temp1 = temp1 + firstNumber;
  result1.innerText = temp1;
}
function math(sign) {
  border();
  fontsize();
  expressions = sign;
  console.log(expressions);
  expressions.length = 1;
  result1.innerText = expressions;
  temp2 = temp1;
  temp1 = "";
}
var multiply = "";
var divide = "";
var minus = "";
var plus = "";

function enter() {
  if (temp1 != 0 && temp2 != 0) {
    if (expressions == "*") {
      if (temp3 === 0) {
        multiply = +temp2 * +temp1;
        console.log("1st Statement");
        expressions = "";
        result1.innerText = multiply;
        temp3 = result1.innerText;
      } else {
        console.log("2nd Statement");
        multiply = +temp3 * +temp1;
        expressions = "";
        result1.innerText = multiply;
        temp3 = result1.innerText;
      }
    }
    if (expressions == "/") {
      if (temp3 === 0) {
        divide = +temp2 / +temp1;
        console.log("1st statement");
        expressions = "";
        result1.innerText = divide;
        temp3 = result1.innerText;
      } else {
        console.log("2nd statement");
        divide = +temp3 / +temp1;
        expressions = "";
        result1.innerText = divide;
        temp3 = result1.innerText;
      }
    }
    if (expressions == "-") {
      if (temp3 === 0) {
        minus = +temp2 - +temp1;
        console.log("1st statement");
        expressions = "";
        result1.innerText = minus;
        temp3 = result1.innerText;
        result0.innerText = temp3;
      } else {
        console.log("2nd statement");
        minus = +temp3 - +temp1;
        expressions = "";
        result1.innerText = minus;
        temp3 = result1.innerText;
      }
    }

    if (expressions == "+") {
      if (temp3 === 0) {
        plus = +temp2 + +temp1;
        console.log("1st statement");
        expressions = "";
        result1.innerText = plus;
        temp3 = result1.innerText;

      } else {
        console.log("2nd statement");
        plus = +temp3 + +temp1;
        expressions = "";
        result1.innerText = plus;
        temp3 = result1.innerText;
      }

    }
  } else {
    alert("please enter correct value");
  }
}

function reset() {
  temp1 = "";
  temp2 = "";
  expressions = "";
  temp3 = "";
  temp3 = +temp3;
  result1.innerText = 0;
  result0.innerText = 0;
}

function border() {
  if (result1.innerText.length >= 1) {
    result1.style.border = "1px solid black";
  }
}
function fontsize() {
    if (result1.innerText.length >= 8) {
      result1.style.fontSize = 20; // Change font size to smaller value
      console.log('fontsize 20px')
    } else {
      result1.style.fontSize = 50; // Default font size
      console.log('fontsize 50px')

    }
  }
