const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < window.innerHeight - 100){
section.classList.add("show");
}

});

});
particlesJS("particles-js", {
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true},
},
interactivity:{
events:{
onhover:{enable:true,mode:"repulse"}
}
}
});
