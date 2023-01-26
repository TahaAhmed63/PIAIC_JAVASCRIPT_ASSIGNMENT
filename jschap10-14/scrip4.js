var totalMark=500;
var course1=parseInt(prompt("Give your 1st cource number?"));
var course2=parseInt(prompt("Give your 2nd cource number?"));
var course3=parseInt(prompt("Give your 3rd cource number?"));
var course4=parseInt(prompt("Give your 4th cource number?"));
var course5=parseInt(prompt("Give your 5th cource number?"));

var obtainedMarks=course1+course2+course3+course4+course5;
var totalPercentage=obtainedMarks*100/totalMark;

alert("this is your total percentage, "+totalPercentage+"%")