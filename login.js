document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(user && 
     email === user.email && 
     password === user.password &&
     role === user.role){

    // 👉 Role-based redirect
    if(role === "Admin"){
      window.location.href = "admin-dashboard.html";
    } else {
      window.location.href = "user-dashboard.html";
    }

  } else {
    alert("Invalid credentials or role mismatch!");
  }
});