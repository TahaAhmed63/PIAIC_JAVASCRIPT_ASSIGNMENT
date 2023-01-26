var name=prompt("what is your name?")
var month=prompt("what was the month you born in?")
var year=prompt("what was the year you were born?")
var dob=prompt("what is your DOB date")
console.log(dob);
console.log(month);
console.log(year);  
   const date=new Date();
   var hour=date.getHours();
   if(hour>=6&&hour<=12){
       console.log("Hello "+name+", Good Morning")
   }else if(hour>12&&hour<=16){
       console.log("Hello "+name+", Good Afternoon")
   }else if(hour>=17&&hour<=18){
       console.log("Hello "+name+", Good evening")
   }else if(hour>18&&hour<6){
       console.log("Hello "+name+", Good night")
   }
   
   var yourBirthday = new Date( "\"" + month+ ", "+ dob+ " "+ year + "\"");
   console.log("your date of birth: "+ yourBirthday);

 
var date1=date.getTime()-yourBirthday.getTime()
var timeinday=24*60*60*1000;
var daydiff= parseInt( date1/timeinday);
console.log(daydiff);

var birthday = yourBirthday.getFullYear();
var currentYear = date.getFullYear();
var yourage=currentYear-birthday;
console.log(yourage)


var yourBirthmonth=yourBirthday.getMonth();
var currentMonth=date.getMonth()

var yourageInMonth=currentMonth-yourBirthmonth;
console.log(yourageInMonth)


var yourBDay=yourBirthday.getDate();
var currentDay=date.getDate();

var currentDaydif=currentDay-yourBDay
console.log(currentDaydif)



var ageInMilliseconds=date-yourBirthday;

const ageInSeconds = ageInMilliseconds / 1000;

const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;

const hours = Math.floor(ageInHours % 24);
const minutes = Math.floor(ageInMinutes % 60);
const seconds = Math.floor(ageInSeconds % 60);


console.log("you are "+yourage+' '+yourageInMonth+" Months "+currentDaydif+" Days "+ hours +" hours "+minutes+" Minutes "+seconds+" seconds old")
console.log("your Age in Days is "+daydiff)




yourBirthday.setFullYear(currentYear);



if (date > yourBirthday) {
yourBirthday.setFullYear(currentYear + 1);
const millisecondsUntilNextBirthday = yourBirthday - date;
const days = Math.round(millisecondsUntilNextBirthday / (1000 * 60 * 60 * 24));
const hours2 = Math.floor((millisecondsUntilNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes2 = Math.floor((millisecondsUntilNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
const seconds2 = Math.floor((millisecondsUntilNextBirthday % (1000 * 60)) / 1000);

console.log("How much time left in your next birthday?"+days+" days "+hours2+" hours "+minutes2+" minutes "+seconds2+" seconds are left until your next birthday ")
}
else{
console.log("happy birth Day "+ name)
}
