var cources=[];
var cource1=prompt("tell your cource name ?")
var cource2=prompt("tell your cource name ?")
var cource3=prompt("tell your cource name ?")
var cource4=prompt("tell your cource name ?")
var cource5=prompt("tell your cource name ?")

cources.push(cource1,cource2,cource3,cource4,cource5)
alert(cources)
var courceno1=prompt("cource1",cource1);
var courceno2=prompt("cource2",cource2)
var courceno3=prompt("cource3",cource3)
var courceno4=prompt("cource4",cource4)
var courceno5=prompt("cource5",cource5)


if(courceno1 != cource1){
cources.splice(0,1,courceno1 )
} if(courceno2 != cource2){
cources.splice(1,1,courceno2)
}if(courceno3 != cource3){
cources.splice(2,1,courceno3)
}if(courceno4 != cource4){
cources.splice(3,1,courceno4)
} if(courceno5 != cource5){
cources.splice(4,1,courceno5)
}
alert(cources)
