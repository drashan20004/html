function submitForm(e) {
  e.preventDefault();

  const fn= document.getElementById("fn").value.trim();
  const ln = document.getElementById("ln").value.trim();
  const ph= document.getElementById("ph").value.trim();
  const email = document.getElementById("email").value.trim();
  const cu = document.getElementById("cu").value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!regex.test(email)) {
    alert('Type required email');
  } else if (email == "") {
    alert('email is required ');
  }else if (ph =="") {
    alert('phone number required');
  }
  else if (fn== "") {
    alert('First name required');
    
  }else if (ln== "") {
    alert('Last name required');
    
  } else if (cu== "") {
    alert('Type your comapny or user name');
    
  } else {
    alert("Account created");
  }
}  
