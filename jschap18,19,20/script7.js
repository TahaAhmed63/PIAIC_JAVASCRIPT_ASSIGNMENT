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

var newcources=[];
newcources.push(courceno1,courceno2,courceno3,courceno4,courceno4,courceno5)
for(var i=0;i<cources.length;i++){
if(cources[i]!=newcources[i]){
    cources.splice(i,1,newcources[i])
}
}
alert(cources)
