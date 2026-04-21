function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function goToRegister(){
  window.location.href = "register.html";
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