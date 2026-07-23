let par=document.querySelector("#text");
let body=document.querySelector("body");
let str = document.querySelector(".str");
let scree=document.querySelector(".screen");
let btns=document.querySelectorAll(".btn");

let onecut=document.querySelector("#onecut");
onecut.addEventListener("click",()=>{
    let str=par.textContent;
    str= str.slice(0,-1);
    par.textContent=str;
})

let ac=document.querySelector("#allcut");
ac.addEventListener("click",()=>{
    par.textContent="";
})

let per=document.querySelector("#per");
per.addEventListener("click",()=>{
    par.textContent +="%";
})

let div=document.querySelector("#div");
div.addEventListener("click",()=>{
    par.textContent +="/";
})

let seven=document.querySelector("#seven");
seven.addEventListener("click",()=>{
    par.textContent +="7";
})

let eight=document.querySelector("#eight");
eight.addEventListener("click",()=>{
    par.textContent +="8";
})

let nine=document.querySelector("#nine");
nine.addEventListener("click",()=>{
    par.textContent +="9";
})

let mul=document.querySelector("#mul");
mul.addEventListener("click",()=>{
    par.textContent +="*";
})

let four=document.querySelector("#four");
four.addEventListener("click",()=>{
    par.textContent +="4";
})

let five=document.querySelector("#five");
five.addEventListener("click",()=>{
    par.textContent +="5";
})

let six=document.querySelector("#six");
six.addEventListener("click",()=>{
    par.textContent +="6";
})

let sub=document.querySelector("#sub");
sub.addEventListener("click",()=>{
    par.textContent +="-";
})

let one=document.querySelector("#one");
one.addEventListener("click",()=>{
    par.textContent +="1";
})

let two=document.querySelector("#two");
two.addEventListener("click",()=>{
    par.textContent +="2";
})

let three=document.querySelector("#three");
three.addEventListener("click",()=>{
    par.textContent +="3";
})

let add=document.querySelector("#add");
add.addEventListener("click",()=>{
    par.textContent +="+";
})

let col=document.querySelector("#col");
let rem=document.querySelector("#ch");
rem.addEventListener("click",()=>{
    col.checked = !col.checked;

    if(col.checked){
        body.classList.add("body");
        str.classList.add("stre");
        scree.classList.add("screens");
        par.classList.add("texts");
        for(btn of btns){
             btn.classList.add("btns");
        }
    }
    else{
        body.classList.remove("body");
        str.classList.remove("stre");
        scree.classList.remove("screens");
        par.classList.remove("texts");
        for(btn of btns){
             btn.classList.remove("btns");
        }
    }
})

let zero=document.querySelector("#zero");
zero.addEventListener("click",()=>{
    par.textContent +="0";
})

let dec=document.querySelector("#dec");
dec.addEventListener("click",()=>{
    par.textContent +=".";
})

let equal=document.querySelector("#equal");
equal.addEventListener("click",()=>{
    let str= par.textContent;
    str=str.replace("%","/100*");
    let result = eval(str);
    par.textContent="";
    par.textContent=result;
})
