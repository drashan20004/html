function button() {
  const email= document.getElementById("email").value.trim();
  const password = document.getElementById("Password").value.trim();


  if (email == "") {
    alert('Type required email');
  } else if (password == "") {
    alert('Type required password');
  }  else {
    alert("Login Success");
  }
}
