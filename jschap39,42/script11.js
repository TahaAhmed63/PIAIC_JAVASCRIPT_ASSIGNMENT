var totalMarks = 500;
var course1 = parseInt(prompt("Please enter course 1 marks"));
var course2 = parseInt(prompt("Please enter course 2 marks"));
var course3 = parseInt(prompt("Please enter course 3 marks"));
var course4 = parseInt(prompt("Please enter course 4 marks"));
var course5 = parseInt(prompt("Please enter course 5 marks"));
var obtainedMarks = course1+ course2+ course3+ course4+ course5;

var percentage = obtainedMarks * 100/ totalMarks;
console.log(percentage)

switch(true) {
  case (percentage >= 90):
  alert("A+");
  break;
  case percentage >= 75 && percentage <=89:
  alert("A");
  break;
  case percentage < 75 && percentage >=60:
  alert("B");
  break;
  case percentage < 60 && percentage >=45:
  alert("C");
  break;
  case percentage < 45 && percentage >=30 :
  alert("D");
  break;
  case percentage <30 && percentage >=0:
  alert("F");
  break
   default:
   alert("Fail");

}