var inputValue=prompt("write the value string");
var words=inputValue.toLowerCase();
var words2=words.split(" ");

var string=" ";
for(var i=0;i<words2.length;i++){
 words2[i]=words2[i][0].toUpperCase()+words2[i].substring(1)
}
string+=words2
console.log(string)



function factorial(num)
{
    var fact=1;
    for(var i= num;i>0;i--){
       fact*= i;
     

    }
    return fact
}
console.log(factorial(5))