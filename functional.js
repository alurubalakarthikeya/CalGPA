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
  event.preventDefault(); 
  const subjectName = document.getElementById('subjectName').value;
  const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);
  const totalMarks = parseFloat(document.getElementById('totalMarks').value);
  const percentageInput = document.getElementById('percentage');
  const infoBox = document.getElementById('infoBox');
  if (!isNaN(obtainedMarks) && !isNaN(totalMarks) && totalMarks > 0) {
      const percentage = (obtainedMarks / totalMarks) * 100;
      if(percentage <= 100){
        percentageInput.value = percentage.toFixed(2) + '%';
      } else {
        percentageInput.value = 'Invalid input.';
      }

      let infoText = '';
      let suggestionsText = '';
      switch (subjectName.toLowerCase()) {
          case 'dld':
              infoText = 'Digital Logic Design is crucial in creating circuits for computers, mobile phones, and other electronics. Job roles include Digital Design Engineer and VLSI Engineer, with an average salary of ₹6 LPA in India.';
              suggestionsText = 'To improve in Digital Logic Design, focus on understanding the basics of logic gates and circuits. Practice designing simple circuits and gradually move to complex ones. Useful resources: <a href="https://www.coursera.org/learn/digital-circuits">Coursera Digital Circuits</a>, <a href="https://www.khanacademy.org/computing/computer-science/algorithms">Khan Academy Algorithms</a>.';
              break;
          case 'fsd':
              infoText = 'Full Stack Development involves both front-end and back-end web development. Job roles include Full Stack Developer, Front-end Developer, Back-end Developer, UI/UX Designer, and more, with an average salary of ₹8 LPA in India.';
              suggestionsText = 'To improve in Full Stack Development, practice building projects that involve both front-end and back-end technologies. Learn popular frameworks like React, Angular, Node.js, and Django. Useful resources: <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>, <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/">Udemy Web Developer Course</a>.';
              break;
          case 'ds':
              infoText = 'Data Structures are essential for organizing and storing data efficiently. Job roles include Software Developer and Systems Analyst, with an average salary of ₹7 LPA in India.';
              suggestionsText = 'To improve in Data Structures, practice implementing different data structures like arrays, linked lists, stacks, queues, trees, and graphs. Solve problems on platforms like LeetCode and HackerRank. Useful resources: <a href="https://www.geeksforgeeks.org/data-structures/">GeeksforGeeks Data Structures</a>, <a href="https://www.coursera.org/specializations/data-structures-algorithms">Coursera Data Structures and Algorithms</a>.';
              break;
          case 'dmgt':
              infoText = 'Discrete Mathematics and Graph Theory are fundamental in computer science, cryptography, and network analysis. Job roles include Algorithm Developer and Network Analyst, with an average salary of ₹6 LPA in India.';
              suggestionsText = 'To improve in Discrete Mathematics and Graph Theory, focus on understanding the core concepts and solving related problems. Study topics like set theory, combinatorics, graph theory, and algorithms. Useful resources: <a href="https://www.khanacademy.org/math/discrete-math">Khan Academy Discrete Math</a>, <a href="https://www.coursera.org/learn/algorithms-graphs-data-structures">Coursera Graph Algorithms</a>.';
              break;
          case 'tnt':
              infoText = 'Transform Numerical Techniques are used in solving mathematical problems in engineering and science. Job roles include Numerical Analyst and Computational Scientist, with an average salary of ₹6 LPA in India.';
              suggestionsText = 'To improve in Transform Numerical Techniques, practice solving numerical problems and understand the underlying mathematical concepts. Study topics like numerical integration, differentiation, and linear algebra. Useful resources: <a href="https://www.coursera.org/learn/numerical-methods-engineers">Coursera Numerical Methods</a>, <a href="https://ocw.mit.edu/courses/mathematics/18-335j-introduction-to-numerical-methods-spring-2019/">MIT OpenCourseWare Numerical Methods</a>.';
              break;
          case 'java':
              infoText = 'Java Development involves building applications using Java. Job roles include Java Developer, with an average salary of ₹7 LPA in India.';
              suggestionsText = 'To improve in Java Development, practice writing Java programs and understand object-oriented programming concepts. Build projects using Java frameworks like Spring and Hibernate. Useful resources: <a href="https://www.codecademy.com/learn/learn-java">Codecademy Java</a>, <a href="https://www.udemy.com/course/java-the-complete-java-developer-course/">Udemy Java Course</a>.';
              break;
          default:
              infoText = 'This subject has various applications in the real world, contributing to different fields and industries.';
              suggestionsText = 'To improve in this subject, focus on understanding the core concepts and practicing regularly. Utilize online resources and courses to enhance your knowledge.';
        }
      if(percentage > 100){
        alert("Enter valid marks");
      }
      infoBox.innerHTML = `<p><strong>Why ${subjectName} :</strong><br><br> ${infoText}</p><br>`;
      if(percentage > 80 && percentage <= 100){ 
          infoBox.innerHTML += `<p>You scored ${percentage}%, Excellent! Keep up the work!</p>`;
      } else if (percentage > 70 && percentage <= 100) {
        infoBox.innerHTML += `<p>You scored ${percentage}%, You are doing good!</p>`;
      } else {
        if(percentage < 100){
          infoBox.innerHTML += `<p>You scored ${percentage}%, You need to work harder!</p>`;
        } else if(percentage > 100){
          infoBox.innerHTML += `<p>Invalid input!</p>`;
        }
      }
      infoBox.style.display = 'block';
      suggestionsBox.innerHTML = `<p><strong>How to get better in ${subjectName}:</strong><br><br> ${suggestionsText}</p>`;
      suggestionsBox.style.display = 'block';
  } else {
      percentageInput.value = 'Invalid input';
      infoBox.style.display = 'none';
      suggestionsBox.style.display = 'none';
  }
}