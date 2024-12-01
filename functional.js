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

function showLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('show');
  startLoaderAnimation();
}

function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.remove('show');
  stopLoaderAnimation();
}

let loaderInterval;
function startLoaderAnimation() {
  const grades = ['A+', 'A', 'B', 'B+', 'C', 'D', 'F'];
  let gradeIndex = 0;
  loaderInterval = setInterval(() => {
      const loaderText = document.getElementById('loader-text');
      loaderText.textContent = grades[gradeIndex];
      gradeIndex = (gradeIndex + 1) % grades.length;
  }, 1000);
}

function stopLoaderAnimation() {
  clearInterval(loaderInterval);
}

window.addEventListener('beforeunload', function() {
  document.body.classList.add('no-transition');
  showLoader();
});

window.addEventListener('load', function() {
  document.body.classList.remove('no-transition');
  hideLoader();
  applyDarkModePreference();
  updateProgress();
});

// Button hover effects
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

function toggleAnswer(element) {
  const qaItem = element.parentElement.parentElement;
  const answer = qaItem.querySelector('.answer');
  if (qaItem.classList.contains('active')) {
      qaItem.classList.remove('active');
  } else {
      qaItem.classList.add('active');
  }
}

function showInfo(option) {
  const infoBox = document.getElementById('info-box');
  const infoText = document.getElementById('info-text');
  let info = '';
  switch (option) {
      case 'gpa9':
          info = 'To achieve a GPA > 9, focus on understanding core concepts, attend all classes, participate in discussions, complete assignments on time, and prepare thoroughly for exams.';
          break;
      case 'gpa8':
          info = 'To achieve a GPA > 8, maintain consistent study habits, review your notes regularly, seek help when needed, and ensure you perform well in both assignments and exams.';
          break;
      case 'gpa65':
          info = 'To achieve a GPA > 6.5, prioritize your studies, manage your time effectively, focus on key subjects, and make sure to complete all assignments and prepare for exams.';
          break;
      default:
          info = '';
  }
  infoText.textContent = info;
  infoBox.style.display = 'block';
}

function calculatePercentage(event) {
  event.preventDefault(); // Prevent form submission

  const subjectName = document.getElementById('subjectName').value;
  const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);
  const totalMarks = parseFloat(document.getElementById('totalMarks').value);
  const percentageInput = document.getElementById('percentage');
  const infoBox = document.getElementById('infoBox');

  if (!isNaN(obtainedMarks) && !isNaN(totalMarks) && totalMarks > 0) {
      const percentage = (obtainedMarks / totalMarks) * 100;
      percentageInput.value = percentage.toFixed(2) + '%';

      // Display the info box with uses of the subject in the real world
      let infoText = '';
      switch (subjectName.toLowerCase()) {
          case 'math':
              infoText = 'Math is used in various fields such as engineering, finance, and technology. It helps in problem-solving and logical thinking.';
              break;
          case 'science':
              infoText = 'Science is essential for understanding the natural world, developing new technologies, and improving healthcare.';
              break;
          case 'history':
              infoText = 'History helps us understand past events, cultures, and societies, and learn from them to shape a better future.';
              break;
          default:
              infoText = 'This subject has various applications in the real world, contributing to different fields and industries.';
      }

      infoBox.innerHTML = `<p><strong>${subjectName}:</strong> ${infoText}</p>`;
      infoBox.style.display = 'block';
  } else {
      percentageInput.value = 'Invalid input';
      infoBox.style.display = 'none';
  }
}