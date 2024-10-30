

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function darkMode(){
    if(document.body.style.backgroundColor == "white" || document.body.style.backgroundColor == "#fff" || document.body.style.backgroundColor == "--bg-color"){ 
      document.body.style.backgroundColor = "#000000";
    }
  }