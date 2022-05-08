// navbar - mark current page
var current = document.getElementById('defult');

  function highlite(el)
  {
     if (current != null)
     {
         current.className = "";
     }
     el.className = "highlite";
     current = el;
  }

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

    alert(' you are : '+ ageY +' years ' + ageM +' months old')
}


function setImageVisible(id, visible) {
  var img = document.getElementById(id);
  img.style.visibility = (visible ? 'visible' : 'hidden');
}

