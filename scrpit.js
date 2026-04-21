function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function goToRegister(){
  window.location.href = "register.html";
}

function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("active");
}

function closeMenu(){
  document.querySelector(".nav-links").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", e=>{
      e.preventDefault();
      alert("Message Sent!");
    });
  }
});
