

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// Function to toggle dark mode
function darkMode() {
  document.body.classList.toggle('dark-mode');
  // Save the dark mode preference in local storage
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
  } else {
      localStorage.setItem('darkMode', 'disabled');
  }
}

// Function to apply dark mode based on local storage
function applyDarkModePreference() {
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.remove('dark-mode');
  }
}

// Apply dark mode preference on page load
document.addEventListener('DOMContentLoaded', applyDarkModePreference);

// Disable transitions before page unload
window.addEventListener('beforeunload', function() {
  document.body.classList.add('no-transition');
});

// Enable transitions after page load
window.addEventListener('load', function() {
  document.body.classList.remove('no-transition');
});

// Example of existing code
document.getElementById('button1').addEventListener('mouseover', function() {
  document.getElementById('button2').classList.add('hovered');
});

document.getElementById('button1').addEventListener('mouseout', function() {
  document.getElementById('button2').classList.remove('hovered');
});

document.getElementById('button2').addEventListener('mouseover', function() {
  document.getElementById('button1').classList.add('hovered');
});

window.addEventListener('beforeunload', function() {
  document.body.classList.add('no-transition');
  showLoader();
});

// Enable transitions after page load
window.addEventListener('load', function() {
  document.body.classList.remove('no-transition');
  hideLoader();
});

// Show loader
function showLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('show');
  startLoaderAnimation();
}


// Stop loader animation
function stopLoaderAnimation() {
  clearInterval(loaderInterval);
}

// Hide loader
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.remove('show');
  stopLoaderAnimation();
}

const grades = ['A+', 'A', 'B', 'B+', 'C', 'D', 'F'];
let gradeIndex = 0;
setInterval(() => {
    const loaderText = document.getElementById('loader-text');
    loaderText.textContent = grades[gradeIndex];
    gradeIndex = (gradeIndex + 1) % grades.length;
}, 1000);


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