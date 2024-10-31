

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function darkMode() {
    document.body.classList.toggle('dark-mode');
}

  document.getElementById('button1').addEventListener('mouseover', function() {
    document.getElementById('button2').classList.add('hovered');
});

document.getElementById('button1').addEventListener('mouseout', function() {
    document.getElementById('button2').classList.remove('hovered');
});

document.getElementById('button2').addEventListener('mouseover', function() {
    document.getElementById('button1').classList.add('hovered');
});

document.getElementById('button2').addEventListener('mouseout', function() {
    document.getElementById('button1').classList.remove('hovered');
});