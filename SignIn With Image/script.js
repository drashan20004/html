function button() {
  const email= document.getElementById("email").value.trim();
  const password = document.getElementById("pass").value.trim();
  const passwordc = document.getElementById("passco").value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!regex.test(email)) {
    alert('Type required email');
  } else if (email == "") {
    alert('Type required password');
  }else if (password != passwordc) {
    alert('password should be matched');
  }
  else if (password == "") {
    alert('Type required password');
  }  else {
    alert("Account created");
  }
}  
