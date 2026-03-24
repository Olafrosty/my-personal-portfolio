// typing animation

const text = ["Web Developer","Frontend Designer","Computer science Student"];

let count=0;
let index=0;
let currentText="";
let letter="";

function type(){

 if(count===text.length){
count=0;
}

currentText=text[count];
letter=currentText.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===currentText.length){
count++;
index=0;
}

setTimeout(type,150);
}

type();


// project filter

function filterProject(category){

let projects=document.querySelectorAll(".project");

projects.forEach(project=>{

if(category==="all"){
project.style.display="block";
}

else if(project.classList.contains(category)){
project.style.display="block";
}

else{
project.style.display="none";
}

});

}


// dark mode

document.getElementById("modeToggle").onclick=function(){

document.body.classList.toggle("dark");

}


// mobile menu

function toggleMenu(){

let menu=document.getElementById("menu");

if(menu.style.display==="flex"){
menu.style.display="none";
}else{
menu.style.display="flex";
}

}