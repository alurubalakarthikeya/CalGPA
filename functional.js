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
  document.getElementById('temp-progress').innerHTML = `Your current progress is at ${Math.round(progress)}% keep up the pace and make all your tasks in the quick queue. <br><br> <strong>The secret of getting ahead is getting started.</strong> – Mark Twain`;
  if(progress > 50) {
    document.getElementById('temp-progress').innerHTML = `Your current progress is at ${Math.round(progress)}% keep up the pace and make all your tasks in the quick queue. <br><br> <strong>The secret of getting ahead is getting started.</strong> – Mark Twain <br><br> Your current progress is at ${Math.round(progress)}%, Keep up the good work! and reach all your tasks in the queue.`;
  }
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

document.addEventListener('DOMContentLoaded', () => {
  const infoBox = document.getElementById('infoBox');
  const suggestionsBox = document.getElementById('suggestionsBox');
  infoBox.innerHTML = '<p><strong>Info:</strong> Information about the subject will be displayed here.</p>';
  suggestionsBox.innerHTML = '<p><strong>Suggestions:</strong> Suggestions on how to improve will be displayed here.</p>';
  infoBox.style.display = 'block';
  suggestionsBox.style.display = 'block';
});

function calculatePercentage(event) {
  event.preventDefault(); 
  const subjectName = document.getElementById('subjectName').value;
  const obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);
  const totalMarks = parseFloat(document.getElementById('totalMarks').value);
  const percentageInput = document.getElementById('percentage');
  const infoBox = document.getElementById('infoBox');
  const suggestionsBox = document.getElementById('suggestionsBox');
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
          infoText = 'Digital Logic Design is vital for developing circuits used in computers, mobile phones, and modern electronics. Key skills include proficiency in Boolean algebra, circuit simulation, and hardware description languages like Verilog or VHDL. Common job roles are Digital Design Engineer and VLSI Engineer, offering salaries averaging ₹8–12 LPA in India, with experienced professionals earning up to ₹25 LPA. Global salaries range from $80,000 to $120,000 annually, depending on skills and location.';
          suggestionsText = 'To excel in Digital Logic Design, focus on understanding the basics of logic gates, truth tables, and Boolean algebra. Practice designing simple circuits and progress to combinational and sequential circuits. Review past problems and simulate circuits using tools like Logisim.<br><br>Resources:<br><a href="https://www.coursera.org/learn/digital-circuits" style="text-decoration: none; color: #03dac6">Coursera Digital Circuits <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.khanacademy.org/computing/computer-science/algorithms" style="text-decoration: none; color: #03dac6">Khan Academy Algorithms <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.tutorialspoint.com/digital_circuits/index.htm" style="text-decoration: none; color: #03dac6">TutorialsPoint Digital Circuits <i class="fa-solid fa-arrow-up-right-from-square"></i></a>.';
          break;
        case 'fsd':
            infoText = 'Full Stack Development involves both front-end and back-end web development. Key skills include proficiency in HTML, CSS, JavaScript, and back-end technologies like Node.js, Django, or Ruby on Rails. Common job roles are Full Stack Developer, Front-end Developer, Back-end Developer, and UI/UX Designer, offering salaries averaging ₹10–15 LPA in India, with experienced professionals earning up to ₹30 LPA. Global salaries range from $85,000 to $130,000 annually, depending on skills and location.';
            suggestionsText = 'To excel in Full Stack Development, focus on understanding the basics of web development, including HTML, CSS, and JavaScript. Practice building projects that involve both front-end and back-end technologies. Learn popular frameworks like React, Angular, Node.js, and Django.<br><br>Resources:<br><a href="https://www.freecodecamp.org/" style="text-decoration: none; color: #03dac6">FreeCodeCamp <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" style="text-decoration: none; color: #03dac6">Udemy Web Developer Course <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path" style="text-decoration: none; color: #03dac6">Codecademy Full Stack Engineer <i class="fa-solid fa-arrow-up-right-from-square"></i></a> <br><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" style="text-decoration: none; color: #03dac6">Udemy Angela Yu Full Stack Bootcamp <i class="fa-solid fa-arrow-up-right-from-square"></i></a>.';
            break;            
        case 'ds':
            infoText = 'Data Structures are essential for organizing and storing data efficiently. Key skills include proficiency in arrays, linked lists, stacks, queues, trees, and graphs. Common job roles are Software Developer and Systems Analyst, offering salaries averaging ₹6–11 LPA in India, with experienced professionals earning up to ₹50 LPA. Global salaries range from $75,000 to $115,000 annually, depending on skills and location.';
            suggestionsText = 'To excel in Data Structures, focus on understanding the basics of different data structures and their applications. Practice implementing data structures like arrays, linked lists, stacks, queues, trees, and graphs. Solve problems on platforms like LeetCode and HackerRank.<br><br>Resources:<br><a href="https://www.geeksforgeeks.org/data-structures/" style="text-decoration: none; color: #03dac6">GeeksforGeeks Data Structures <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.coursera.org/specializations/data-structures-algorithms" style="text-decoration: none; color: #03dac6">Coursera Data Structures and Algorithms <i class="fa-solid fa-arrow-up-right-from-square"></i></a>.';
            break;
        case 'dmgt':
            infoText = 'Discrete Mathematics and Graph Theory are fundamental in computer science, cryptography, and network analysis. Key skills include proficiency in set theory, combinatorics, graph theory, and algorithms. Common job roles are Algorithm Developer and Network Analyst, offering salaries averaging ₹7–13 LPA in India, with experienced professionals earning up to ₹20 LPA. Global salaries range from $70,000 to $110,000 annually, depending on skills and location.';
            suggestionsText = 'To excel in Discrete Mathematics and Graph Theory, focus on understanding the core concepts and solving related problems. Study topics like set theory, combinatorics, graph theory, and algorithms.<br><br>Resources:<br><a href="https://www.khanacademy.org/math/discrete-math" style="text-decoration: none; color: #03dac6">Khan Academy Discrete Math <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.coursera.org/learn/algorithms-graphs-data-structures" style="text-decoration: none; color: #03dac6">Coursera Graph Algorithms <i class="fa-solid fa-arrow-up-right-from-square"></i></a>.';
            break;
        case 'tnt':
            infoText = 'Transform Numerical Techniques are used in solving mathematical problems in engineering and science. Key skills include proficiency in numerical integration, differentiation, and linear algebra. Common job roles are Numerical Analyst and Computational Scientist, offering salaries averaging ₹9–14 LPA in India, with experienced professionals earning up to ₹25 LPA. Global salaries range from $75,000 to $105,000 annually, depending on skills and location.';
            suggestionsText = 'To excel in Transform Numerical Techniques, practice solving numerical problems and understand the underlying mathematical concepts. Study topics like numerical integration, differentiation, and linear algebra.<br><br>Resources:<br><a href="https://www.coursera.org/learn/numerical-methods-engineers" style="text-decoration: none; color: #03dac6">Coursera Numerical Methods <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://ocw.mit.edu/courses/mathematics/18-335j-introduction-to-numerical-methods-spring-2019/" style="text-decoration: none; color: #03dac6">MIT OpenCourseWare Numerical Methods <i class="fa-solid fa-arrow-up-right-from-square"></i></a>.';
            break;
        case 'java':
            infoText = 'Java Development involves building applications using Java. Key skills include proficiency in Java programming, object-oriented programming (OOP) concepts, and frameworks like Spring and Hibernate. Common job roles are Java Developer and Software Engineer, offering salaries averaging ₹8–15 LPA in India, with experienced professionals earning up to ₹30 LPA. Global salaries range from $70,000 to $120,000 annually, depending on skills and location.';
            suggestionsText = 'To excel in Java Development, practice writing Java programs and understand object-oriented programming concepts. Build projects using Java frameworks like Spring and Hibernate.<br><br>Resources:<br><a href="https://www.codecademy.com/learn/learn-java" style="text-decoration: none; color: #03dac6">Codecademy Java <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.udemy.com/course/java-the-complete-java-developer-course/" style="text-decoration: none; color: #03dac6">Udemy Java Course <i class="fa-solid fa-arrow-up-right-from-square"></i></a>.';
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
          infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, Excellent! Keep up the work!</p>`;
      } else if (percentage > 70 && percentage <= 100) {
        infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, You are doing good!</p>`;
      } else {
        if(percentage < 100){
          infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, You need to work harder!</p>`;
        } else if(percentage > 100){
          infoBox.innerHTML += `<p>Invalid input!</p>`;
        }
      }
      infoBox.style.display = 'block';
      suggestionsBox.innerHTML = `<p><strong>How to do well in ${subjectName}:</strong><br><br> ${suggestionsText}</p>`;
      suggestionsBox.style.display = 'block';
  } else {
      percentageInput.value = 'Invalid input';
      infoBox.style.display = 'none';
      suggestionsBox.style.display = 'none';
  }
}