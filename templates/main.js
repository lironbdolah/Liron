//pull the pathname from window location
const activePage = window.location.pathname;
console.log(window);
console.log(window.location);
console.log(activePage);

/*create an arey of the links in nav, 
compare each to pathname and mark the one that is active
*/ 
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
});


  // calculate age
  function birthdayalert() {

    var birthDate= document.getElementById("date-input").value;
    var dob = new Date(birthDate);  
    var prevY= dob.getFullYear();     //extracting year from input date
    var prevM= dob.getMonth();  

    var now =new Date();                            //getting current date
    var currentY= now.getFullYear();                //extracting year from the date
    var currentM= now.getMonth();

    var ageY =currentY - prevY;
    var ageM =Math.abs(currentM- prevM);

    alert(' you are : '+ ageY +' years and ' + ageM +' months old')
}


function setImageVisible(id, visible) {
  var img = document.getElementById(id);
  img.style.visibility = (visible ? 'visible' : 'hidden');
}

