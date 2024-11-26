function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function darkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
  } else {
      localStorage.setItem('darkMode', 'disabled');
  }
}
function applyDarkModePreference() {
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.remove('dark-mode');
  }
}
document.addEventListener('DOMContentLoaded', applyDarkModePreference);
window.addEventListener('beforeunload', function() {
  document.body.classList.add('no-transition');
});
window.addEventListener('load', function() {
  document.body.classList.remove('no-transition');
});
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
window.addEventListener('load', function() {
  document.body.classList.remove('no-transition');
  hideLoader();
});
function showLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('show');
  startLoaderAnimation();
}
function stopLoaderAnimation() {
  clearInterval(loaderInterval);
}
document.addEventListener('DOMContentLoaded', () => {
    applyDarkModePreference();
});
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
function addTodo() {
  const todoInput = document.getElementById('todo');
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
      const todosList = document.getElementById('todos');
      const newTodo = document.createElement('li');
      newTodo.innerHTML = `<input type="checkbox" onclick="toggleTask(this)"> ${todoText}`;
      todosList.appendChild(newTodo);
      todoInput.value = '';
      updateProgress();
  }
}
function toggleTask(checkbox) {
  const task = checkbox.parentElement;
  if (checkbox.checked) {
      task.innerHTML = `<input type="checkbox" onclick="toggleTask(this)" checked> <del>${task.textContent.trim()}</del>`;
  } else {
      task.innerHTML = `<input type="checkbox" onclick="toggleTask(this)"> ${task.textContent.trim()}`;
  }
  updateProgress();
}
function updateProgress() {
  const todosList = document.getElementById('todos');
  const tasks = todosList.getElementsByTagName('li');
  const totalTasks = tasks.length;
  let completedTasks = 0;
  for (let task of tasks) {
      if (task.querySelector('input[type="checkbox"]').checked) {
          completedTasks++;
      }
  }
  const progress = (completedTasks / totalTasks) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `${Math.round(progress)}%`;
}
document.addEventListener('DOMContentLoaded', updateProgress);

function toggleAnswer(element) {
  const qaItem = element.parentElement.parentElement;
  const answer = qaItem.querySelector('.answer');
  
  if (qaItem.classList.contains('active')) {
      qaItem.classList.remove('active');
      element.textContent = '+';
  } else {
      qaItem.classList.add('active');
      element.textContent = '-';
  }
}