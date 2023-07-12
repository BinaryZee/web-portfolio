var p1,p2;
p1=prompt("enter player 1 name",p1);
p2=prompt("enter player 2 name",p2);

document.querySelector(".p1").innerHTML=p1;
document.querySelector(".p2").innerHTML=p2;

function rolldice(){
var n=Math.floor(Math.random()*6+1);
var m=Math.floor(Math.random()*6+1);

if(n>m){
    document.querySelector(".container h1").innerHTML=p1+" wins";
    document.querySelector(".img1").setAttribute("src","./images/dice"+n+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+m+".png");
    
}
if(n<m){
    document.querySelector(".container h1").innerHTML=p2+" wins";
    document.querySelector(".img1").setAttribute("src","./images/dice"+n+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+m+".png");
}
if(n==m){
    document.querySelector(".container h1").innerHTML="DRAW!!!!";
    document.querySelector(".img1").setAttribute("src","./images/dice"+n+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+m+".png");
}
}