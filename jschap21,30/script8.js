var uinput=parseInt(prompt("write a num"));
var num=Math.ceil(uinput);
var text="this is some dummy text";
var slice=text.slice(0,4)
var reverse='';
for(var i=slice.length-1;i>=0;i--){
   reverse+=slice[i];
   console.log(reverse)
  
}
alert(reverse)


//second assignment
var inputValue=prompt("write the value string")
var  words=inputValue.split(" ");
var string=" ";
for(var i=0;i<words.length;i++){
words[i]=words[i][0].toUpperCase()+words[i].substring(1)

}
string+=words
console.log(string)
