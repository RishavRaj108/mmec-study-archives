//?  Auto Text Effect Start 

const heroHeading = document.querySelector(".hero-heading");

const array = ["(Pyqs)" , "(Syllabus)"];
let arrayIndex = 0;
let character = 0;


 update();

 function update (){
    character++;
  heroHeading.innerHTML=`<h1 class="hero-heading">MMEC ${array[arrayIndex].slice(0,character)}</h1>`
  
  if(character === array[arrayIndex].length){
    arrayIndex++;
    character=0;
  }
  if(arrayIndex === array.length){
    arrayIndex=0;
  }
  setTimeout(update , 400);
}

//?  Auto Text Effect End

//? Navbar Section

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header =document.querySelector(".header")
const nav_links = document.querySelector(".navbar-list");

const toggleNavbar = () =>{
    // alert("You are in the write track");
    nav_header.classList.toggle("active");
}
const toggleNavbarLink = () =>{
    // alert("You are in the write track");
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click" , () => toggleNavbar());
nav_links.addEventListener("click" , () => toggleNavbarLink());


// ? Dark Mode On...

let icon = document.getElementById("icon");
icon.onclick= () =>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="./images/sun.png";
    }else{
      icon.src="./images/moon.png";
    }
}
// ? Dark MOde End


// ? Alert When no Document is present 

let second = document.querySelector(".second-year");
second.addEventListener("click" , ()=>{
  alert("Sorry, The resources are not yet uploaded for Second Year.");
});
let third = document.querySelector(".third-year");
third.addEventListener("click" , ()=>{
  alert("Sorry, The resources are not yet uploaded for Third Year.");
});
let fourth = document.querySelector(".fourth-year");
fourth.addEventListener("click" , ()=>{
  alert("Sorry, The resources are not yet uploaded for Fourth Year.");
});


