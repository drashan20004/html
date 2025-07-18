function submitForm(e) {
  e.preventDefault();

 const fr= document.getElementById("from").value.trim();
 const to= document.getElementById("to").value.trim();
 const da= document.getElementById("date").value.trim();

 if (fr =="") {
    alert('Enter your Depature location')
    
 } else if(to ==""){
    alert('Enter your Destination')

 }else if(da ==""){
    alert('Enter The Date')

 }else{
    alert('Next Page')
 }

}



document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });


