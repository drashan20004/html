function submitForm(e) {
  e.preventDefault();
  const username= document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const passwordc = document.getElementById("cpassword").value.trim();



 if (username == "") {
    alert('Username is Empty');
  }else if (password != passwordc) {
    alert('password should be matched');
  }
  else if (password == "") {
    alert('Password is empty');
  }  else {
    alert("Login Success");
  }
}  