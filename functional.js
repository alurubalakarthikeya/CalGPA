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

window.addEventListener('load', function() {
  applyDarkModePreference();
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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
  }
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  
    let refreshCount = localStorage.getItem('refreshCount') || 0;
    refreshCount = parseInt(refreshCount, 10) + 1;
  
    localStorage.setItem('refreshCount', refreshCount);
  
    if (refreshCount % 3 === 0) {
        const installPrompt = document.getElementById('installPrompt');
        installPrompt.style.display = 'block';
  
        const installButton = document.getElementById('installButton');
        const dismissButton = document.getElementById('dismissButton');
  
        installButton.addEventListener('click', () => {
            installPrompt.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                deferredPrompt = null;
            });
        });
  
        dismissButton.addEventListener('click', () => {
            installPrompt.style.display = 'none';
        });
    }
  });
  
  function downloadFile() {
    const link = document.createElement('a');
    link.href = 'manifest.json';
    link.download = 'CalGPA.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
  if (progress > 50) {
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

function showInfo(gpa) {
  const infoText1 = document.getElementById('info-text1');
  const infoText2 = document.getElementById('info-text2');
  const infoText3 = document.getElementById('info-text3');

  if (gpa === 'gpa9') {
      infoText1.innerHTML = `
    <strong>Tip 1 for GPA > 9:</strong> Focus on understanding the core concepts deeply. 
    Use resources like textbooks, online courses, and tutorials to strengthen your understanding. 
    Participate in study groups and discussions to clarify doubts and gain new perspectives.
  `;
      infoText2.innerHTML = `
    <strong>Roadmap for GPA > 9:</strong><br>
    1. <strong>Set Clear Goals:</strong> Define your academic goals and create a detailed study plan.<br>
    2. <strong>Deep Understanding:</strong> Focus on understanding the core concepts deeply. Use resources like textbooks, online courses, and tutorials to strengthen your understanding.<br>
    3. <strong>Regular Practice:</strong> Practice regularly and solve previous year papers. Consistent practice helps in retaining information and improving problem-solving skills.<br>
    4. <strong>Time Management:</strong> Manage your time effectively. Create a study schedule that allocates sufficient time for each subject. Avoid last-minute cramming by reviewing your notes regularly and staying on top of your assignments.<br>
    5. <strong>Seek Help:</strong> Seek help from professors and peers when needed. Don't hesitate to ask questions and seek clarification on topics you find challenging.<br>
    6. <strong>Use Resources:</strong> Utilize online resources like Coursera, Khan Academy, and edX for additional practice and learning.<br>
    7. <strong>Stay Healthy:</strong> Maintain a healthy lifestyle with proper sleep, diet, and exercise. A healthy body supports a healthy mind.<br>
  `;
      infoText3.innerHTML = `
    <strong>Additional Tips for GPA > 9:</strong><br>
    - <strong>Active Learning:</strong> Engage in active learning techniques such as summarizing information in your own words, teaching concepts to others, and applying knowledge to practical problems.<br>
    - <strong>Consistent Review:</strong> Regularly review your notes and materials to reinforce your understanding and retention of the subject matter.<br>
    - <strong>Mock Tests:</strong> Take mock tests to simulate exam conditions and identify areas where you need improvement.<br>
  `;
  } else if (gpa === 'gpa8') {
      infoText1.innerHTML = `
    <strong>Tip 1 for GPA > 8:</strong> Manage your time effectively and prioritize your studies. 
    Use tools like planners and to-do lists to keep track of your tasks and deadlines. 
    Break down your study sessions into manageable chunks to avoid burnout.
  `;
      infoText2.innerHTML = `
    <strong>Roadmap for GPA > 8:</strong><br>
    1. <strong>Set Priorities:</strong> Identify your priorities and focus on important tasks. Use tools like planners and to-do lists to keep track of your tasks and deadlines.<br>
    2. <strong>Effective Study:</strong> Use effective study techniques like active learning and spaced repetition. Break down your study sessions into manageable chunks to avoid burnout.<br>
    3. <strong>Regular Breaks:</strong> Take regular breaks to avoid burnout and maintain productivity. Incorporate short breaks into your study sessions to rest and recharge.<br>
    4. <strong>Seek Clarification:</strong> Seek help from professors and peers when needed. Don't hesitate to ask questions and seek clarification on topics you find challenging.<br>
    5. <strong>Use Resources:</strong> Utilize online resources like Coursera, Khan Academy, and edX for additional practice and learning.<br>
    6. <strong>Stay Organized:</strong> Keep your study materials and notes organized. Use tools like binders, folders, and digital note-taking apps to stay organized.<br>
    7. <strong>Stay Healthy:</strong> Maintain a healthy lifestyle with proper sleep, diet, and exercise. A healthy body supports a healthy mind.<br>
  `;
      infoText3.innerHTML = `
    <strong>Additional Tips for GPA > 8:</strong><br>
    - <strong>Group Study:</strong> Form study groups with classmates to discuss and review course materials. Group study can provide different perspectives and help clarify doubts.<br>
    - <strong>Practice Problems:</strong> Solve practice problems and exercises to reinforce your understanding. Use textbooks, online resources, and past exam papers for practice.<br>
    - <strong>Feedback:</strong> Seek feedback on your assignments and exams to identify areas for improvement. Use the feedback to improve your understanding and performance.<br>
  `;
  } else if (gpa === 'gpa65') {
      infoText1.innerHTML = `
    <strong>Tip 1 for GPA > 6.5:</strong> Attend all classes and take good notes. 
    Regular attendance helps you stay updated with the course material and understand the concepts better. 
    Review your notes regularly to reinforce your learning and identify areas that need improvement.
  `;
      infoText2.innerHTML = `
    <strong>Roadmap for GPA > 6.5:</strong><br>
    1. <strong>Attend Classes:</strong> Attend all classes and take detailed notes. Regular attendance helps you stay updated with the course material and understand the concepts better.<br>
    2. <strong>Review Regularly:</strong> Review your notes regularly and clarify doubts immediately. Don't let doubts accumulate; seek help from your professors or classmates as soon as possible.<br>
    3. <strong>Focus on Assignments:</strong> Complete assignments and projects to the best of your ability. Use them as opportunities to apply what you've learned and demonstrate your understanding of the subject.<br>
    4. <strong>Seek Help:</strong> Seek help from professors and peers when needed. Don't hesitate to ask questions and seek clarification on topics you find challenging.<br>
    5. <strong>Use Resources:</strong> Utilize online resources like Coursera, Khan Academy, and edX for additional practice and learning.<br>
    6. <strong>Stay Organized:</strong> Keep your study materials and notes organized. Use tools like binders, folders, and digital note-taking apps to stay organized.<br>
    7. <strong>Stay Healthy:</strong> Maintain a healthy lifestyle with proper sleep, diet, and exercise. A healthy body supports a healthy mind.<br>
  `;
      infoText3.innerHTML = `
    <strong>Additional Tips for GPA > 6.5:</strong><br>
    - <strong>Active Participation:</strong> Participate actively in class discussions and activities. Active participation helps reinforce your understanding and retention of the subject matter.<br>
    - <strong>Study Schedule:</strong> Create a study schedule and stick to it to ensure consistent study habits. Use tools like planners and to-do lists to keep track of your tasks and deadlines.<br>
    - <strong>Practice Tests:</strong> Take practice tests to assess your understanding and prepare for exams. Use past exam papers and online resources for practice.<br>
  `;
  }
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
  if (!isNaN(obtainedMarks) && !isNaN(totalMarks) && totalMarks > 0 && obtainedMarks >= 0 && obtainedMarks <= totalMarks) {
      const percentage = (obtainedMarks / totalMarks) * 100;
      console.log("Percentage:", percentage);
      if (percentage <= 100) {
          percentageInput.value = percentage.toFixed(2) + '%';
      } else {
          alert('Invalid input. Please enter valid marks.');
          percentageInput.value = 'Invalid input.';
      }
      let infoText = '';
      let suggestionsText = '';
      let salaryInsights = '';
      let jobRoles = '';

      switch (subjectName.toLowerCase()) {
          case 'linear-algebra' || 'lade':
              infoText = 'Linear Algebra and Differential Equations form the mathematical foundation for engineering and computer science. This subject covers key topics such as matrices, vector spaces, eigenvalues, and differential equations, which are crucial in fields like machine learning, control systems, and scientific computing.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹24 LPA';
                  jobRoles = 'Key roles: Machine Learning Engineer, Data Scientist, Control Systems Engineer';
                  suggestionsText = 'Focus on advanced topics such as Singular Value Decomposition (SVD) and Partial Differential Equations. Apply these concepts in AI/ML models and engineering simulations. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.edx.org/course/linear-algebra" class="link" target="_blank">Linear Algebra by MIT <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/linear-algebra" class="link" target="_blank">Linear Algebra by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://ocw.mit.edu/courses/mathematics/18-03-differential-equations-spring-2010/" class="link" target="_blank">Differential Equations by MIT OpenCourseWare <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Data Analyst, Signal Processing Engineer, Research Associate';
                  suggestionsText = 'Strengthen your knowledge of eigenvalues, eigenvectors, and Fourier series. Work on applied problems related to physics and engineering. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/matrix-algebra-engineers" class="link" target="_blank">Matrix Algebra for Engineers by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://brilliant.org/courses/linear-algebra/" class="link" target="_blank">Linear Algebra by Brilliant <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹13 LPA';
                  jobRoles = 'Key roles: Mathematician, Quantitative Analyst, Junior Engineer';
                  suggestionsText = 'Improve your understanding of determinant properties and Laplace transforms. Solve real-world problems using mathematical models. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/linear-algebra-theory-and-applications/" class="link" target="_blank">Linear Algebra: Theory and Applications on Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/differential-equations" class="link" target="_blank">Differential Equations by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹9 LPA';
                  jobRoles = 'Key roles: Teaching Assistant, Research Intern, Graduate Trainee';
                  suggestionsText = 'Master basic concepts such as Gaussian elimination and first-order ODEs. Work on small projects involving matrix computations. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/linear-algebra-machine-learning" class="link" target="_blank">Linear Algebra for Machine Learning by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/linear-algebra-refresher-course--ud953" class="link" target="_blank">Linear Algebra Refresher by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'smc' || 'single and multivariable calculus':
              infoText = 'Single and Multivariable Calculus is a foundational subject in mathematics that deals with the study of functions, limits, derivatives, and integrals. This subject is essential for understanding mathematical modeling, optimization, and physics.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹23 LPA';
                  jobRoles = 'Key roles: Quantitative Analyst, Research Scientist, Data Scientist';
                  suggestionsText = 'Focus on advanced topics such as multivariable optimization and differential equations. Apply these concepts in fields like finance, engineering, and data science. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.edx.org/course/multivariable-calculus" class="link" target="_blank">Multivariable Calculus by MIT <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/multivariable-calculus" class="link" target="_blank">Multivariable Calculus by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/" class="link" target="_blank">Multivariable Calculus by MIT OpenCourseWare <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹17 LPA';
                  jobRoles = 'Key roles: Data Analyst, Financial Analyst, Research Associate';
                  suggestionsText = 'Strengthen your knowledge of partial derivatives, multiple integrals, and vector calculus. Work on applied problems related to economics and engineering. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/multivariable-calculus" class="link" target="_blank">Multivariable Calculus by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://brilliant.org/courses/multivariable-calculus/" class="link" target="_blank">Multivariable Calculus by Brilliant <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Mathematician, Junior Engineer, Technical Analyst';
                  suggestionsText = 'Improve your understanding of limits, continuity, and series. Solve real-world problems using calculus-based models. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/multivariable-calculus/" class="link" target="_blank">Multivariable Calculus on Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/calculus-1" class="link" target="_blank">Calculus 1 by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹8 LPA';
                  jobRoles = 'Key roles: Teaching Assistant, Research Intern, Graduate Trainee';
                  suggestionsText = 'Master basic concepts such as derivatives and integrals. Work on small projects involving calculus computations. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/calculus1" class="link" target="_blank">Calculus 1 by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/calculus-refresher-course--ud953" class="link" target="_blank">Calculus Refresher by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'c-programming' || 'c':
              infoText = 'C Programming is a fundamental language for system-level programming and problem-solving. This subject covers topics such as data types, control structures, functions, pointers, and file handling, which are essential for embedded systems, operating systems, and high-performance computing.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹22 LPA';
                  jobRoles = 'Key roles: Embedded Systems Engineer, Software Engineer, Compiler Developer';
                  suggestionsText = 'Focus on advanced topics such as memory management, multi-threading, and low-level optimizations. Contribute to open-source C projects and work on embedded programming. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udacity.com/course/c-for-programmers--ud210" class="link" target="_blank">C for Programmers by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/c-programming" class="link" target="_blank">C Programming by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://nptel.ac.in/courses/106105171" class="link" target="_blank">Programming in C by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹16 LPA';
                  jobRoles = 'Key roles: System Programmer, Game Developer, Firmware Engineer';
                  suggestionsText = 'Master data structures using C, work on debugging techniques, and explore system programming concepts. Build small projects using C for hands-on experience. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/c-programming-for-beginners/" class="link" target="_blank">C Programming for Beginners on Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/computing/computer-programming" class="link" target="_blank">Computer Programming by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Junior Software Developer, Technical Support Engineer';
                  suggestionsText = 'Enhance your knowledge of pointers, arrays, and file handling. Solve real-world problems using C programs and understand debugging techniques. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/low-level-programming-c-assembly-and-programming-fundamentals/" class="link" target="_blank">Low-Level Programming with C by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/c-programming" class="link" target="_blank">C Programming by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹8 LPA';
                  jobRoles = 'Key roles: Intern, QA Tester, IT Support Specialist';
                  suggestionsText = 'Strengthen basic concepts like loops, functions, and arrays. Practice coding problems on platforms like LeetCode and CodeChef. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/106104128" class="link" target="_blank">C Programming and Data Structures by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/intro-to-programming-nanodegree--nd000" class="link" target="_blank">Intro to Programming Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;

          case 'oops' || 'object oriented programming':
              infoText = 'Object-Oriented Programming (OOPs) is a paradigm that focuses on objects and classes for building scalable software. This subject covers core concepts like inheritance, polymorphism, encapsulation, and abstraction, which are essential for modern software development.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹24 LPA';
                  jobRoles = 'Key roles: Software Engineer, Backend Developer, Solution Architect';
                  suggestionsText = 'Master advanced OOP principles, design patterns, and SOLID principles. Work on projects using OOP-based languages like Java, C++, or Python. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/object-oriented-programming" class="link" target="_blank">Object-Oriented Programming by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/object-oriented-programming-in-java--ud282" class="link" target="_blank">OOP in Java by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://nptel.ac.in/courses/106105153" class="link" target="_blank">OOPs by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Java Developer, Software Analyst, Application Engineer';
                  suggestionsText = 'Work on real-world applications using OOP principles. Learn about design patterns and best practices. Contribute to open-source OOP-based projects. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/object-oriented-programming-in-python/" class="link" target="_blank">OOP in Python by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/computing/computer-programming" class="link" target="_blank">Programming Concepts by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹14 LPA';
                  jobRoles = 'Key roles: Junior Software Developer, Backend Support Engineer';
                  suggestionsText = 'Enhance your understanding of inheritance, polymorphism, and encapsulation. Solve OOP-based coding challenges and work on mini-projects. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/java-programming-for-complete-beginners/" class="link" target="_blank">Java OOP for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/object-oriented-programming" class="link" target="_blank">OOP Concepts by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Intern, Support Engineer, QA Tester';
                  suggestionsText = 'Strengthen basic OOP concepts by practicing simple projects and debugging object-oriented code. Explore online coding platforms. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/106106162" class="link" target="_blank">OOPs in Java by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/intro-to-object-oriented-programming--ud283" class="link" target="_blank">Intro to OOP by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'cn' || 'computer networks':
              infoText = 'Computer Networks (CN) focuses on how computers communicate with each other over networks, including protocols, architectures, and security aspects. This subject is crucial for understanding networking fundamentals and designing robust systems.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹25 LPA';
                  jobRoles = 'Key roles: Network Engineer, Security Analyst, Cloud Architect';
                  suggestionsText = 'Deep dive into advanced networking concepts, including network security, cloud networking, and SDN (Software-Defined Networking). Gain hands-on experience with tools like Wireshark, Cisco Packet Tracer, and network simulators. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/specializations/computer-networking" class="link" target="_blank">Computer Networking by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/the-complete-networking-fundamentals-course/" class="link" target="_blank">Networking Fundamentals by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://nptel.ac.in/courses/106105183" class="link" target="_blank">Computer Networks by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹19 LPA';
                  jobRoles = 'Key roles: Network Administrator, System Engineer, Cloud Engineer';
                  suggestionsText = 'Strengthen your understanding of OSI and TCP/IP models, subnetting, and routing protocols. Work on setting up and managing networks using tools like Cisco Packet Tracer and GNS3. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udacity.com/course/computer-networking--ud199" class="link" target="_blank">Computer Networking by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/introduction-to-networking" class="link" target="_blank">Networking Basics by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹15 LPA';
                  jobRoles = 'Key roles: Junior Network Engineer, IT Support, NOC Engineer';
                  suggestionsText = 'Practice configuring networks and troubleshooting connectivity issues. Learn about VLANs, firewalls, and VPNs. Experiment with virtual networking tools. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/networking-for-beginners/" class="link" target="_blank">Networking for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/networking-basics" class="link" target="_blank">Networking Basics by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹11 LPA';
                  jobRoles = 'Key roles: IT Technician, Network Support, Helpdesk Engineer';
                  suggestionsText = 'Focus on fundamental networking concepts, learn IP addressing, and practice setting up small networks. Explore free networking simulators for hands-on learning. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/106102113" class="link" target="_blank">Basics of Networking by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/computing/computer-science/internet-intro" class="link" target="_blank">Internet & Networking by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'os' || 'operating systems':
              infoText = 'Operating Systems (OS) covers the core principles of how operating systems manage hardware, processes, memory, and file systems. Understanding OS is essential for roles in system development, cybersecurity, and cloud computing.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹27 LPA';
                  jobRoles = 'Key roles: OS Developer, Kernel Engineer, Cloud Architect';
                  suggestionsText = 'Master OS internals, process scheduling, memory management, and file systems. Learn Linux kernel development and virtualization. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://cs75.net/" class="link" target="_blank">Operating Systems by Harvard <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/advanced-operating-systems--ud189" class="link" target="_blank">Advanced OS by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://nptel.ac.in/courses/106102132" class="link" target="_blank">Operating Systems by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: System Engineer, DevOps Engineer, Security Analyst';
                  suggestionsText = 'Strengthen your OS concepts, work with Linux commands, and learn process synchronization. Explore Docker, Kubernetes, and shell scripting. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/os-pku" class="link" target="_blank">Operating Systems by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/operating-system-fundamentals/" class="link" target="_blank">OS Fundamentals by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹16 LPA';
                  jobRoles = 'Key roles: Linux Administrator, System Support Engineer';
                  suggestionsText = 'Learn OS basics like process management, deadlocks, and memory allocation. Get hands-on with Linux, command-line tools, and system monitoring. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/linux-for-beginners/" class="link" target="_blank">Linux for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/introduction-to-linux" class="link" target="_blank">Intro to Linux by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: IT Support, Desktop Engineer';
                  suggestionsText = 'Focus on OS fundamentals like file systems, process scheduling, and basic Linux commands. Try small projects on OS functionalities. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/106105214" class="link" target="_blank">Basics of OS by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/computing/computer-science/algorithms" class="link" target="_blank">OS Basics by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'ee' || 'electrical' || 'electrical engineering':
              infoText = 'Introduction to Electrical Engineering (EE) covers fundamental concepts of electricity, circuits, and electronic components. It is crucial for fields like embedded systems, IoT, and power engineering.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹26 LPA';
                  jobRoles = 'Key roles: Embedded Systems Engineer, Power Systems Engineer, IoT Specialist';
                  suggestionsText = 'Master circuit analysis, AC/DC concepts, and power systems. Learn about microcontrollers, PCB designing, and industrial automation. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/" class="link" target="_blank">Circuits & Electronics by MIT <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/electrical-engineering-fundamentals--ud188" class="link" target="_blank">Electrical Engineering Fundamentals by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Circuit Design Engineer, Control Systems Engineer';
                  suggestionsText = 'Understand circuit behavior, study transformers, and explore signal processing. Gain hands-on experience with Arduino & Raspberry Pi. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/108102042" class="link" target="_blank">Basic Electrical Circuits by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/electrical-engineering-for-beginners/" class="link" target="_blank">Electrical Engineering for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹15 LPA';
                  jobRoles = 'Key roles: Electrical Technician, Maintenance Engineer';
                  suggestionsText = 'Develop a strong understanding of Ohm’s Law, circuit components, and power systems. Practice solving real-world electrical problems. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/basic-electrical-engineering" class="link" target="_blank">Basic Electrical Engineering by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Electrician, Field Service Engineer';
                  suggestionsText = 'Focus on circuit diagrams, electrical safety, and basic troubleshooting techniques. Gain practical knowledge of wiring and power distribution. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/108105053" class="link" target="_blank">Electrical Engineering Basics by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'chemistry' || 'ec':
              infoText = 'Engineering Chemistry (EC) focuses on the chemical principles applicable in engineering fields, covering energy sources, electrochemistry, corrosion, polymers, nanotechnology, and water treatment.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹25 LPA';
                  jobRoles = 'Key roles: Materials Scientist, Electrochemical Engineer, Fuel Cell Engineer';
                  suggestionsText = 'Master concepts of chemical energy, fuel cells, nanomaterials, and corrosion protection. Explore advanced battery technology and semiconductor doping.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://ocw.mit.edu/courses/chemistry/5-111sc-principles-of-chemical-science-fall-2011/" class="link" target="_blank">Principles of Chemical Science by MIT <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/specializations/nanotechnology" class="link" target="_blank">Nanotechnology Specialization by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Corrosion Engineer, Battery R&D Specialist, Polymer Scientist';
                  suggestionsText = 'Develop expertise in corrosion control, electrochemical analysis, and battery chemistry. Understand polymer applications in engineering.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/103102013" class="link" target="_blank">Chemical Engineering Thermodynamics by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹15 LPA';
                  jobRoles = 'Key roles: Chemical Analyst, Water Treatment Engineer';
                  suggestionsText = 'Focus on water purification techniques, spectroscopic analysis, and electrochemical processes. Work on fuel cell technology and polymer chemistry.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.edx.org/course/fundamentals-of-chemistry" class="link" target="_blank">Fundamentals of Chemistry by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Lab Technician, Chemical Process Engineer';
                  suggestionsText = 'Strengthen basics in chemical energy, corrosion prevention, and electroplating. Learn about spectrophotometry and polymer science.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/104106122" class="link" target="_blank">Introduction to Chemistry by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'me' || 'mechanical' || 'mechanical engineering':
              infoText = 'Introduction to Mechanical Engineering (ME) covers energy sources, thermodynamics, materials, manufacturing, thermal systems, and advanced technologies like robotics and hybrid vehicles.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹25 LPA';
                  jobRoles = 'Key roles: Mechanical Design Engineer, Robotics Engineer, Thermal Systems Expert';
                  suggestionsText = 'Master energy systems, thermodynamics, CNC machining, and robotics. Gain expertise in electric vehicles, industrial automation, and additive manufacturing.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://ocw.mit.edu/courses/mechanical-engineering/2-003sc-engineering-dynamics-fall-2011/" class="link" target="_blank">Engineering Dynamics by MIT <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/specializations/modern-mechanical-engineering" class="link" target="_blank">Modern Mechanical Engineering by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Manufacturing Engineer, Thermal Engineer, Automotive Engineer';
                  suggestionsText = 'Focus on thermodynamics, CNC machining, and smart manufacturing. Learn about robotics, automation, and 3D printing for mechanical applications.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/112105123" class="link" target="_blank">Fundamentals of Manufacturing by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹15 LPA';
                  jobRoles = 'Key roles: HVAC Engineer, Tooling Engineer, Industrial Designer';
                  suggestionsText = 'Develop skills in thermal systems, CAD/CAM, and refrigeration. Understand mechatronics and automation for mechanical systems.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.edx.org/course/mechanical-behavior-of-materials" class="link" target="_blank">Mechanical Behavior of Materials by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Mechanical Technician, Production Supervisor';
                  suggestionsText = 'Strengthen basics in energy sources, welding, and manufacturing techniques. Gain hands-on experience with CNC and thermal systems.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/112103174" class="link" target="_blank">Basics of Mechanical Engineering by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;

          case 'be' || 'biology' || 'biology for engineers':
              infoText = 'Biology for Engineers (BE) applies biological principles to engineering fields, covering biomimetics, bioenergy, biomechanics, bioelectronics, and biopharma.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹22 LPA';
                  jobRoles = 'Key roles: Biomedical Engineer, Bioinformatics Scientist, Biotech Researcher';
                  suggestionsText = 'Focus on biomechanics, bioelectronics, and biosensors. Learn about bio-inspired robotics, drug discovery, and biological computing.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.edx.org/course/introduction-to-bioengineering" class="link" target="_blank">Introduction to Bioengineering by edX <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://ocw.mit.edu/courses/biological-engineering/20-020-introduction-to-biological-engineering-design-spring-2009/" class="link" target="_blank">Biological Engineering Design by MIT <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Biomechanics Engineer, Clinical Research Associate, Bionics Developer';
                  suggestionsText = 'Gain expertise in bio-catalysts, bioenergy, and bionic systems. Explore medical IoT applications and biosensors.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/biomedical-visualization" class="link" target="_blank">Biomedical Visualization by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹14 LPA';
                  jobRoles = 'Key roles: Bioinformatics Analyst, Lab Technician, Medical Device Developer';
                  suggestionsText = 'Understand biomechanics, circadian rhythms, and bio-inspired systems. Learn about biosensors and lab-on-a-chip technology.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://nptel.ac.in/courses/102103086" class="link" target="_blank">Biomedical Signal Processing by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Biology Lab Assistant, Biotech Technician';
                  suggestionsText = 'Strengthen basics in biomechanics, biomimetics, and biosensors. Focus on practical applications in healthcare and drug discovery.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/biotechnology-basics/" class="link" target="_blank">Biotechnology Basics by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
          case 'cipe':
              infoText = 'Constitution of India and Professional Ethics (CIPE) covers the making of the Constitution, fundamental rights, governance structures, and ethical responsibilities of professionals.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Policy Analyst, Legal Consultant, Civil Services Officer';
                  suggestionsText = 'Focus on constitutional amendments, governance policies, and public administration ethics. Understand legal frameworks and socio-political structures.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/indian-constitution" class="link" target="_blank">Indian Constitution by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://nptel.ac.in/courses/129106154" class="link" target="_blank">Indian Judiciary by NPTEL <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹16 LPA';
                  jobRoles = 'Key roles: Legal Advisor, Ethics Consultant, Public Policy Researcher';
                  suggestionsText = 'Deepen knowledge on professional ethics, governance structures, and emergency provisions. Explore amendments and their impact.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.edx.org/course/the-rule-of-law-and-democratic-constitution" class="link" target="_blank">Rule of Law and Democratic Constitution by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Compliance Officer, HR Policy Manager';
                  suggestionsText = 'Understand the roles of the President, Prime Minister, and Judiciary. Learn about constitutional amendments and special provisions for marginalized communities.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.classcentral.com/course/swayam-constitutional-studies-144934" class="link" target="_blank">Constitutional Studies by Swayam <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹8 LPA';
                  jobRoles = 'Key roles: Government Clerk, Administrative Assistant';
                  suggestionsText = 'Strengthen basics in the Constitution, governance, and ethical principles. Focus on professional conduct and public policy.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/ethics-and-governance/" class="link" target="_blank">Ethics and Governance by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;

          case 'fsd' || 'full stack development':
              infoText = 'Full Stack Development involves both front-end and back-end web development. Developers in this field are responsible for designing, developing, and maintaining complete web applications. The role demands expertise in both client-side and server-side technologies, making it a versatile and highly sought-after skill.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Full Stack Developer, Software Architect';
                  suggestionsText = 'Study advanced topics like React, Node.js, Express, and MongoDB. Build complex projects, contribute to open-source repositories, and focus on optimizing application performance. Consider learning about containerization and cloud platforms like Docker and AWS. <br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.udemy.com/course/mern-stack-front-to-back/" class="link" target="_blank">MERN Stack Front To Back by Brad Traversy <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.coursera.org/specializations/full-stack-react" class="link" target="_blank">Full-Stack Web Development with React by Hong Kong University <i class="fa-solid fa-up-right-from-square"></i></a>, <br>' +
                      '<a href="https://www.udemy.com/course/aws-certified-developer-associate/" class="link" target="_blank">AWS Certified Developer - Associate <i class="fa-solid fa-up-right-from-square"></i></a>, <br>' +
                      '<a href="https://www.udemy.com/course/docker-mastery/" class="link" target="_blank">Docker Mastery: With Kubernetes and Swarm <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹15 LPA';
                  jobRoles = 'Key roles: Full Stack Developer, Backend Developer';
                  suggestionsText = 'Learn intermediate concepts like Node.js, Express, and MongoDB. Work on API integrations and enhance debugging skills for real-world applications. Begin exploring advanced topics such as authentication (JWT, OAuth) and performance optimization. <br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.udemy.com/course/nodejs-the-complete-guide/" class="link" target="_blank">Node.js - The Complete Guide by Maximilian Schwarzmüller <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.mongodb.com/learn/mongodb-university" class="link" target="_blank">MongoDB University Free Courses <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/building-restful-apis-nodejs/" class="link" target="_blank">Building RESTful APIs with Node.js <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.coursera.org/learn/applied-data-structures/" class="link" target="_blank">Applied Data Structures and Algorithms by Duke University <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Frontend Developer, UI/UX Designer';
                  suggestionsText = 'Focus on building strong skills in HTML, CSS, and JavaScript. Gain experience with frontend frameworks like Bootstrap and basic React. Experiment with UI/UX design tools like Figma to improve the aesthetics of your projects. <br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/" class="link" target="_blank">Bootstrap 4 From Scratch with 5 Projects <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/" class="link" target="_blank">JavaScript - The Complete Guide by Maximilian Schwarzmüller <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" class="link" target="_blank">React - The Complete Guide (incl. Hooks, React Router, Redux) <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/figma-ux-design/" class="link" target="_blank">Figma for UX/UI Design <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹8 LPA';
                  jobRoles = 'Key roles: Junior Frontend Developer';
                  suggestionsText = 'Start with foundational topics like HTML, CSS, and basic JavaScript. Practice creating small, functional websites. Learn version control using Git to work efficiently in collaborative environments. <br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.coursera.org/learn/html-css-javascript-for-web-developers" class="link" target="_blank">HTML, CSS, and JavaScript for Web Developers by Johns Hopkins University <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/web-development-bootcamp/" class="link" target="_blank">The Web Developer Bootcamp by Colt Steele <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/web-development-basics/" class="link" target="_blank">Web Development Basics <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/git-and-github-bootcamp/" class="link" target="_blank">Git & GitHub Bootcamp <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              break;
            case 'dbms':
              infoText = 'Database Management Systems (DBMS) are essential for storing, retrieving, and managing data in various applications. This subject covers relational databases, SQL, normalization, transactions, and database design, which are crucial for roles in data management, software development, and business intelligence.';
            
              if (percentage > 90) {
                salaryInsights = 'Expected salary: ₹22 LPA';
                jobRoles = 'Key roles: Database Administrator, Data Architect, Database Developer';
                suggestionsText = 'Focus on advanced topics like database optimization, distributed databases, and NoSQL databases. Gain expertise in database security, backup, and recovery. Work on large-scale database projects and explore cloud database solutions. <br>' +
                  '<strong>Useful Courses:</strong><br>' +
                  '<a href="https://www.coursera.org/learn/database-management" class="link" target="_blank">Database Management Essentials by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.udemy.com/course/the-complete-sql-bootcamp/" class="link" target="_blank">The Complete SQL Bootcamp by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.edx.org/course/databases-5-sql" class="link" target="_blank">Databases: Advanced Topics in SQL by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 80 && percentage <= 90) {
                salaryInsights = 'Expected salary: ₹18 LPA';
                jobRoles = 'Key roles: Data Analyst, SQL Developer, Business Intelligence Analyst';
                suggestionsText = 'Deepen your knowledge of SQL, database design, and normalization. Work on real-world projects involving data modeling and query optimization. Explore database management tools and techniques. <br>' +
                  '<strong>Useful Courses:</strong><br>' +
                  '<a href="https://www.coursera.org/learn/relational-database" class="link" target="_blank">Relational Database Management by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.udemy.com/course/sql-for-data-science/" class="link" target="_blank">SQL for Data Science by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.edx.org/course/databases-4-nosql" class="link" target="_blank">Databases: NoSQL by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage > 70 && percentage <= 80) {
                salaryInsights = 'Expected salary: ₹14 LPA';
                jobRoles = 'Key roles: Junior Database Developer, Data Analyst, IT Support';
                suggestionsText = 'Build a strong understanding of basic SQL queries, database design, and normalization. Practice creating and managing databases using SQL. Participate in database-related projects and challenges. <br>' +
                  '<strong>Useful Courses:</strong><br>' +
                  '<a href="https://www.coursera.org/learn/sql-for-data-science" class="link" target="_blank">SQL for Data Science by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.udemy.com/course/sql-and-database-management/" class="link" target="_blank">SQL and Database Management by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.edx.org/course/databases-3-sql" class="link" target="_blank">Databases: Introduction to SQL by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              if (percentage <= 70) {
                salaryInsights = 'Expected salary: ₹10 LPA';
                jobRoles = 'Key roles: Database Support, IT Technician';
                suggestionsText = 'Strengthen basics in SQL, database design, and data management. Focus on understanding relational databases and practicing SQL queries. Work on small database projects to gain practical experience. <br>' +
                  '<strong>Useful Courses:</strong><br>' +
                  '<a href="https://www.coursera.org/learn/sql-basics" class="link" target="_blank">SQL Basics by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.udemy.com/course/sql-for-beginners/" class="link" target="_blank">SQL for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                  '<a href="https://www.edx.org/course/databases-1-introduction" class="link" target="_blank">Databases: Introduction by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
              }
              break;
           case 'probability and statistics' || 'ps':
               infoText = 'Probability and Statistics are essential for analyzing data and making informed decisions based on statistical methods. This subject covers topics such as probability theory, statistical inference, hypothesis testing, and regression analysis, which are crucial for roles in data science, finance, and research.';
             
               if (percentage > 90) {
                 salaryInsights = 'Expected salary: ₹22 LPA';
                 jobRoles = 'Key roles: Data Scientist, Statistician, Quantitative Analyst';
                 suggestionsText = 'Focus on advanced topics like Bayesian statistics, machine learning algorithms, and time series analysis. Gain expertise in statistical software like R and Python. Work on real-world data projects to enhance your practical skills. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/specializations/statistics" class="link" target="_blank">Statistics with R Specialization by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/" class="link" target="_blank">Statistics for Data Science and Business Analysis by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/introduction-to-probability" class="link" target="_blank">Introduction to Probability by MIT <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               if (percentage > 80 && percentage <= 90) {
                 salaryInsights = 'Expected salary: ₹18 LPA';
                 jobRoles = 'Key roles: Data Analyst, Research Scientist, Biostatistician';
                 suggestionsText = 'Deepen your knowledge of hypothesis testing, regression analysis, and ANOVA. Work on projects involving data visualization and statistical modeling. Explore statistical tools and techniques for data analysis. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/learn/statistical-inference" class="link" target="_blank">Statistical Inference by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/statistics-for-business-analytics-and-data-science-a-z/" class="link" target="_blank">Statistics for Business Analytics and Data Science A-Z by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/statistics-and-data-science" class="link" target="_blank">Statistics and Data Science by MIT <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               if (percentage > 70 && percentage <= 80) {
                 salaryInsights = 'Expected salary: ₹14 LPA';
                 jobRoles = 'Key roles: Junior Data Analyst, Statistical Assistant, Research Assistant';
                 suggestionsText = 'Build a strong understanding of basic probability, descriptive statistics, and inferential statistics. Practice solving statistical problems and work on small data analysis projects. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/learn/probability-statistics" class="link" target="_blank">Probability and Statistics by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/" class="link" target="_blank">Statistics for Data Science and Business Analysis by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/introduction-to-statistics" class="link" target="_blank">Introduction to Statistics by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               if (percentage <= 70) {
                 salaryInsights = 'Expected salary: ₹10 LPA';
                 jobRoles = 'Key roles: Data Entry Clerk, Statistical Intern';
                 suggestionsText = 'Strengthen basics in probability, mean, median, mode, and standard deviation. Focus on understanding the fundamental concepts and practicing statistical problems. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/learn/statistics" class="link" target="_blank">Statistics by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/statistics-for-beginners/" class="link" target="_blank">Statistics for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/statistics-for-data-analysis" class="link" target="_blank">Statistics for Data Analysis by University of California, Berkeley <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               break;
           case 'coa' || 'computer organization and architecture':
               infoText = 'Computer Organization and Architecture (COA) covers the fundamental principles of computer hardware and low-level programming. This subject includes topics such as registers, memory hierarchy, instruction sets, and assembly language programming, which are essential for understanding how computers execute programs and manage resources.';
             
               if (percentage > 90) {
                 salaryInsights = 'Expected salary: ₹24 LPA';
                 jobRoles = 'Key roles: Hardware Engineer, System Architect, Embedded Systems Developer';
                 suggestionsText = 'Focus on advanced topics like pipelining, parallel processing, and hardware-software co-design. Gain expertise in assembly language programming and work on projects involving microcontroller programming and hardware simulations. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/learn/computer-architecture" class="link" target="_blank">Computer Architecture by Princeton University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/computer-organization-and-architecture/" class="link" target="_blank">Computer Organization and Architecture by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/computer-architecture" class="link" target="_blank">Computer Architecture by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               if (percentage > 80 && percentage <= 90) {
                 salaryInsights = 'Expected salary: ₹18 LPA';
                 jobRoles = 'Key roles: System Engineer, Firmware Developer, Hardware Designer';
                 suggestionsText = 'Deepen your knowledge of instruction sets, memory hierarchy, and CPU design. Work on real-world projects involving assembly language programming and hardware interfacing. Explore tools and techniques for hardware debugging and optimization. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/learn/computer-architecture" class="link" target="_blank">Computer Architecture by Princeton University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/computer-organization-and-architecture/" class="link" target="_blank">Computer Organization and Architecture by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/computer-architecture" class="link" target="_blank">Computer Architecture by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               if (percentage > 70 && percentage <= 80) {
                 salaryInsights = 'Expected salary: ₹14 LPA';
                 jobRoles = 'Key roles: Junior Hardware Engineer, Embedded Systems Developer';
                 suggestionsText = 'Build a strong understanding of basic computer organization concepts, including registers, ALU, and control units. Practice writing assembly language programs and work on small hardware projects. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/learn/computer-architecture" class="link" target="_blank">Computer Architecture by Princeton University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/computer-organization-and-architecture/" class="link" target="_blank">Computer Organization and Architecture by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/computer-architecture" class="link" target="_blank">Computer Architecture by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               if (percentage <= 70) {
                 salaryInsights = 'Expected salary: ₹10 LPA';
                 jobRoles = 'Key roles: Hardware Support, IT Technician';
                 suggestionsText = 'Strengthen basics in computer organization, including understanding registers, memory, and basic assembly language programming. Work on small projects to gain practical experience. <br>' +
                   '<strong>Useful Courses:</strong><br>' +
                   '<a href="https://www.coursera.org/learn/computer-architecture" class="link" target="_blank">Computer Architecture by Princeton University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.udemy.com/course/computer-organization-and-architecture/" class="link" target="_blank">Computer Organization and Architecture by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                   '<a href="https://www.edx.org/course/computer-architecture" class="link" target="_blank">Computer Architecture by edX <i class="fa-solid fa-up-right-from-square"></i></a>.';
               }
               break;
          case 'dld' || 'digital logic design':
              infoText = 'Digital Logic Design is the foundation of modern electronics and computing systems. It deals with the theoretical and practical aspects of designing and analyzing digital circuits, essential in hardware development. Topics include logic gates, Boolean algebra, flip-flops, multiplexers, counters, and microcontrollers. These concepts are pivotal in industries like consumer electronics, telecommunications, and automotive systems. With DLD skills, you can work on projects like developing embedded systems, optimizing digital signal processing, and creating innovative IoT devices.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Hardware Engineer, Embedded Systems Developer';
                  suggestionsText = 'Master advanced topics like FPGA design, Verilog, and hardware description languages. Collaborate on projects involving microcontroller programming and real-world hardware simulations. Explore digital design optimization for performance-critical applications like robotics and IoT.<br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.udemy.com/course/verilog-programming/" class="link" target="_blank">Verilog Programming for Beginners <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.coursera.org/learn/digital-design" class="link" target="_blank">Digital Design by University of California <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/fpga-design-for-beginners/" class="link" target="_blank">FPGA Design for Beginners <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.coursera.org/specializations/embedded-systems" class="link" target="_blank">Embedded Systems Specialization by University of Colorado <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹14 LPA';
                  jobRoles = 'Key roles: Hardware Engineer, Digital Design Specialist';
                  suggestionsText = 'Dive into intermediate concepts such as combinational and sequential circuit design. Learn VHDL for hardware description and experiment with creating real-time digital systems. Apply your knowledge in projects like signal processing and robotics.<br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.udemy.com/course/vhdl-programming/" class="link" target="_blank">VHDL Programming for Digital Design <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.coursera.org/learn/combinational-sequential-design" class="link" target="_blank">Combinational and Sequential Logic Design <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/digital-design-logic-circuits/" class="link" target="_blank">Digital Logic Design and Circuits <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.edx.org/course/digital-systems-design" class="link" target="_blank">Digital Systems Design by UT Austin <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Circuit Designer, Test Engineer';
                  suggestionsText = 'Focus on building strong fundamentals in logic gates, Boolean algebra, and Karnaugh maps. Work on projects like designing basic circuits and understanding the practical implementation of truth tables and state diagrams.<br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.udemy.com/course/logic-design-fundamentals/" class="link" target="_blank">Logic Design Fundamentals <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.coursera.org/learn/boolean-algebra" class="link" target="_blank">Boolean Algebra and Logic Gates <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/digital-logic-beginners/" class="link" target="_blank">Digital Logic for Beginners <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.khanacademy.org/computing/computer-science/cryptography" class="link" target="_blank">Basics of Logic Gates by Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹7 LPA';
                  jobRoles = 'Key roles: Junior Hardware Engineer';
                  suggestionsText = 'Begin with the basics like truth tables, logic gates, and simple circuit design. Practice constructing basic circuits using breadboards or simulation software. Develop a foundation in analyzing how different components interact.<br>' +
                      '<br><strong>Useful Courses:</strong><br> ' +
                      '<a href="https://www.coursera.org/learn/digital-circuits-basics" class="link" target="_blank">Digital Circuits Basics by University of Michigan <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/introduction-to-digital-design/" class="link" target="_blank">Introduction to Digital Design <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.udemy.com/course/basics-of-digital-logic/" class="link" target="_blank">Basics of Digital Logic <i class="fa-solid fa-up-right-from-square"></i></a>,<br> ' +
                      '<a href="https://www.coursera.org/learn/electronic-circuits" class="link" target="_blank">Electronic Circuits by Georgia Tech <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              break;
              case 'daa' || 'design and analysis of algorithms':
                infoText = 'Design and Analysis of Algorithms is fundamental to creating efficient, scalable, and optimized solutions. It helps in evaluating the performance of algorithms, ensuring they operate within optimal time and space complexity constraints. Mastering this subject enables developers to enhance their problem-solving skills and apply algorithmic techniques in real-world scenarios, making it a critical skill for competitive programming and technical interviews.';
                
                if (percentage > 90) {
                    salaryInsights = 'Expected salary: ₹24 LPA';
                    jobRoles = 'Key roles: Algorithm Engineer, Research Scientist, AI Engineer';
                    suggestionsText = 'Deep dive into advanced topics like NP-completeness, randomized algorithms, and approximation algorithms. Work on optimizing algorithms for large-scale applications and participate in research-oriented projects. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udemy.com/course/advanced-algorithms/" class="link" target="_blank">Advanced Algorithms by Andrei Neagoie <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/advanced-algorithms-and-complexity" class="link" target="_blank">Advanced Algorithms and Complexity by UC San Diego <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.edx.org/course/algorithm-design-and-analysis" class="link" target="_blank">Algorithm Design and Analysis by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage > 80 && percentage <= 90) {
                    salaryInsights = 'Expected salary: ₹18 LPA';
                    jobRoles = 'Key roles: Software Engineer, Data Scientist, Optimization Engineer';
                    suggestionsText = 'Focus on mastering dynamic programming, greedy algorithms, and divide & conquer techniques. Apply these concepts to solve real-world problems and enhance coding efficiency. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udemy.com/course/algorithms-course/" class="link" target="_blank">The Algorithms Course by William Fiset <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/algorithmic-thinking" class="link" target="_blank">Algorithmic Thinking by Rice University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" class="link" target="_blank">GeeksforGeeks: Fundamentals of Algorithms <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage > 70 && percentage <= 80) {
                    salaryInsights = 'Expected salary: ₹13 LPA';
                    jobRoles = 'Key roles: Junior Developer, System Analyst, Software Tester';
                    suggestionsText = 'Develop strong fundamentals in sorting, searching, and recursion. Solve coding problems that require different algorithmic approaches and participate in coding challenges. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udacity.com/course/intro-to-algorithms--cs215" class="link" target="_blank">Intro to Algorithms by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/algorithms-and-data-structures" class="link" target="_blank">Algorithms and Data Structures by Holczer Balazs <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/algorithmic-toolbox" class="link" target="_blank">Algorithmic Toolbox by UC San Diego <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage <= 70) {
                    salaryInsights = 'Expected salary: ₹9 LPA';
                    jobRoles = 'Key roles: Intern, Junior Programmer, Software Trainee';
                    suggestionsText = 'Start with the basics: time complexity, recursion, and simple sorting techniques. Practice implementing fundamental algorithms and work on improving problem-solving speed. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.coursera.org/learn/algorithmic-toolbox" class="link" target="_blank">Algorithmic Toolbox by UC San Diego <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/algorithms-in-python/" class="link" target="_blank">Algorithms in Python by Jose Portilla <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.edx.org/course/algorithm-design-and-analysis" class="link" target="_blank">Algorithm Design and Analysis by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                break;            
          case 'ds' || 'data structures':
              infoText = 'Data Structures are essential for efficient algorithm implementation and serve as the backbone of computer science. A strong foundation in this area allows developers to write optimized and scalable code, enabling the creation of powerful applications. This subject covers various data structures like arrays, linked lists, trees, and graphs, each critical for organizing and managing data effectively. Proficiency in data structures is vital for problem-solving and is a key skill sought by employers.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹22 LPA';
                  jobRoles = 'Key roles: Algorithm Developer, Software Engineer, Data Scientist';
                  suggestionsText = 'Master advanced data structures like AVL trees and graph algorithms. Engage in competitive programming to solve complex problems and improve your coding skills. Consider exploring algorithm optimization techniques and their applications. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/data-structures-and-algorithms-bootcamp/" class="link" target="_blank">Data Structures and Algorithms Bootcamp by Colt Steele <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/specializations/data-structures-algorithms" class="link" target="_blank">Data Structures and Algorithms Specialization by University of California, San Diego <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256" class="link" target="_blank">Data Structures and Algorithms Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/data-structures-fundamentals" class="link" target="_blank">Data Structures Fundamentals by University of California, Santa Cruz <i class="fa-solid fa-up-right-from-square"></i></a>';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹17 LPA';
                  jobRoles = 'Key roles: Software Engineer, Data Analyst, System Designer';
                  suggestionsText = 'Focus on intermediate structures like heaps and hash tables. Apply data structures in real-world projects to enhance your practical knowledge. Start working on algorithmic challenges that utilize these structures. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/data-structures-and-algorithms-in-python/" class="link" target="_blank">Data Structures and Algorithms in Python by Jose Portilla <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/data-structures-optimizing-performance" class="link" target="_blank">Data Structures: Optimizing Performance by University of California, San Diego <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.geeksforgeeks.org/data-structures/" class="link" target="_blank">GeeksforGeeks Data Structures Tutorials <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.freecodecamp.org/news/data-structures-and-algorithms-in-javascript/" class="link" target="_blank">Data Structures and Algorithms in JavaScript by FreeCodeCamp <i class="fa-solid fa-up-right-from-square"></i></a>';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Junior Developer, Programmer Analyst, Software Tester';
                  suggestionsText = 'Practice implementing linked lists and binary trees. Work on solving basic problems that involve recursion to build your problem-solving skills. Collaborate on projects to strengthen your understanding. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256" class="link" target="_blank">Data Structures and Algorithms Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/algorithms-and-data-structures-bootcamp/" class="link" target="_blank">Algorithms and Data Structures Bootcamp by Andrei Neagoie <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.codecademy.com/learn/learn-data-structures" class="link" target="_blank">Learn Data Structures by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/data-structures" class="link" target="_blank">Data Structures by University of California, San Diego <i class="fa-solid fa-up-right-from-square"></i></a>';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹9 LPA';
                  jobRoles = 'Key roles: Trainee Developer, Junior Programmer, Intern';
                  suggestionsText = 'Start with foundational topics like arrays and stacks. Focus on understanding their operations and common use cases to build a solid base. Engage in small projects to practice your skills. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/data-structures-optimizing-performance" class="link" target="_blank">Data Structures: Optimizing Performance by University of California, San Diego <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/data-structures-in-java/" class="link" target="_blank">Data Structures in Java by Robert Seacord <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/data-structures-fundamentals" class="link" target="_blank">Data Structures Fundamentals by University of California, Santa Cruz <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.freecodecamp.org/news/data-structures-and-algorithms-in-javascript/" class="link" target="_blank">Data Structures and Algorithms in JavaScript by FreeCodeCamp <i class="fa-solid fa-up-right-from-square"></i></a>';
              }
              break;
              case 'ai' || 'artificial intelligence' || 'introduction to ai':
                infoText = 'Artificial Intelligence is at the core of modern technological advancements, enabling machines to learn, reason, and make decisions. Mastering AI opens doors to cutting-edge innovations in machine learning, robotics, natural language processing, and more. Understanding AI concepts is crucial for staying ahead in the rapidly evolving tech landscape.';
                
                if (percentage > 90) {
                    salaryInsights = 'Expected salary: ₹26 LPA';
                    jobRoles = 'Key roles: AI Engineer, Machine Learning Scientist, Research Scientist';
                    suggestionsText = 'Advance your AI knowledge with deep learning, reinforcement learning, and AI ethics. Work on AI-driven projects and contribute to open-source AI initiatives. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.coursera.org/learn/machine-learning" class="link" target="_blank">Machine Learning by Andrew Ng <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udacity.com/course/deep-learning-nanodegree--nd101" class="link" target="_blank">Deep Learning Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://cs50.ai/" class="link" target="_blank">CS50’s Introduction to AI with Python <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage > 80 && percentage <= 90) {
                    salaryInsights = 'Expected salary: ₹20 LPA';
                    jobRoles = 'Key roles: Data Scientist, AI Developer, NLP Engineer';
                    suggestionsText = 'Deepen your understanding of neural networks, optimization techniques, and AI applications in real-world scenarios. Participate in AI hackathons and Kaggle competitions. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udemy.com/course/artificial-intelligence-reinforcement-learning-in-python/" class="link" target="_blank">AI & Reinforcement Learning in Python <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/specializations/deep-learning" class="link" target="_blank">Deep Learning Specialization by Andrew Ng <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.edx.org/course/artificial-intelligence-ai" class="link" target="_blank">Artificial Intelligence by Columbia University <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage > 70 && percentage <= 80) {
                    salaryInsights = 'Expected salary: ₹14 LPA';
                    jobRoles = 'Key roles: AI Analyst, Junior AI Engineer, Computer Vision Engineer';
                    suggestionsText = 'Strengthen your AI fundamentals with supervised and unsupervised learning. Work on small AI projects and implement basic machine learning models. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" class="link" target="_blank">Python for Data Science & Machine Learning <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/ai-for-everyone" class="link" target="_blank">AI for Everyone by Andrew Ng <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.kaggle.com/learn/intro-to-machine-learning" class="link" target="_blank">Intro to Machine Learning by Kaggle <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage <= 70) {
                    salaryInsights = 'Expected salary: ₹10 LPA';
                    jobRoles = 'Key roles: AI Intern, Junior Data Analyst, AI Assistant';
                    suggestionsText = 'Start with basic AI concepts, learn Python, and explore beginner-friendly AI tools like TensorFlow and scikit-learn. Work on simple projects like chatbots and recommendation systems. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.coursera.org/learn/introduction-to-ai" class="link" target="_blank">Introduction to AI by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udacity.com/course/ai-programming-with-python-nanodegree--nd089" class="link" target="_blank">AI Programming with Python by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.edx.org/course/machine-learning-with-python" class="link" target="_blank">Machine Learning with Python by IBM <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                break;            
          case 'dmgt':
              infoText = 'Discrete Mathematics and Graph Theory are fundamental to algorithm development and theoretical computer science. These topics are widely used in cryptography, network theory, and database systems. A strong understanding of these subjects can significantly enhance your problem-solving skills and open doors to various tech careers.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Algorithm Analyst, Software Developer';
                  suggestionsText = 'Dive deep into graph algorithms and combinatorics. Practice problem-solving for competitive programming. Consider exploring advanced topics like game theory and optimization techniques. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256" class="link" target="_blank">Data Structures and Algorithms Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/graph-theory" class="link" target="_blank">Graph Theory by UC San Diego <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/discrete-mathematics-1" class="link" target="_blank">Discrete Mathematics by UC San Diego <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹14 LPA';
                  jobRoles = 'Key roles: Data Scientist, Software Engineer';
                  suggestionsText = 'Focus on intermediate topics like trees and set theory. Learn the applications of graph theory in real-world problems. Enhance your skills with real-world projects and case studies. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/algorithm-design-analysis" class="link" target="_blank">Algorithm Design and Analysis by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/discrete-mathematics-for-computer-science/" class="link" target="_blank">Discrete Mathematics for Computer Science <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/graph-theory" class="link" target="_blank">Graph Theory by University of California, Santa Cruz <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/discrete-math" class="link" target="_blank">Khan Academy Discrete Mathematics <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Junior Analyst, Developer';
                  suggestionsText = 'Build a good understanding of basic graph theory. Practice problems involving shortest paths and network flows. Participate in coding challenges to solidify your knowledge.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/algorithm-design-analysis" class="link" target="_blank">Algorithm Design and Analysis by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/discrete-mathematics-for-computer-science/" class="link" target="_blank">Discrete Mathematics for Computer Science <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/graph-theory" class="link" target="_blank">Graph Theory by University of California, Santa Cruz <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/discrete-math" class="link" target="_blank">Khan Academy Discrete Mathematics <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹7 LPA';
                  jobRoles = 'Key roles: Trainee Analyst';
                  suggestionsText = 'Start with basic set theory and logical reasoning. Work on understanding the foundational concepts of graphs. Engage in basic problem-solving to build confidence in these topics.<br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/discrete-mathematics" class="link" target="_blank">Discrete Mathematics by UC San Diego <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/discrete-mathematics-101/" class="link" target="_blank">Discrete Mathematics 101 <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/discrete-math" class="link" target="_blank">Khan Academy Discrete Mathematics <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/graph-theory-theory-and-practice/" class="link" target="_blank">Graph Theory: Theory and Practice <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              break;
            case 'tnt':
              infoText = 'Transforms and Numerical Techniques are vital for solving complex equations in engineering and applied mathematics. These methods are used extensively in signal processing, scientific computing, and data analysis. A strong grasp of these concepts enables professionals to tackle real-world problems effectively, making it a crucial area of study for aspiring engineers and data scientists.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Data Scientist, Simulation Engineer';
                  suggestionsText = 'Master advanced numerical methods and transform techniques. Work on projects involving real-world scientific data analysis. Explore machine learning applications that utilize numerical techniques for predictive modeling. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/specializations/data-science" class="link" target="_blank">Data Science Specialization by Johns Hopkins University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/introduction-to-numerical-analysis" class="link" target="_blank">Introduction to Numerical Analysis by MIT <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/intro-to-matlab--ud131" class="link" target="_blank">Intro to MATLAB <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/machine-learning" class="link" target="_blank">Machine Learning by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹16 LPA';
                  jobRoles = 'Key roles: Numerical Analyst, Software Engineer';
                  suggestionsText = 'Focus on solving differential equations and Fourier transforms. Gain expertise in numerical computation tools like MATLAB. Work on developing simulations and models for various engineering applications. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/matlab" class="link" target="_blank">MATLAB Onramp by MathWorks <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/linear-algebra" class="link" target="_blank">Linear Algebra by MIT <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/intro-to-numerical-analysis--ud953" class="link" target="_blank">Intro to Numerical Analysis by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/numerical-methods" class="link" target="_blank">Numerical Methods for Engineers by University of London <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Junior Simulation Engineer';
                  suggestionsText = 'Practice basic numerical methods like Newton-Raphson and interpolation. Work on understanding their application in engineering problems. Start building small projects to implement these techniques. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/numerical-methods-in-engineering-with-python/" class="link" target="_blank">Numerical Methods in Engineering with Python <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/solving-differential-equations" class="link" target="_blank">Solving Differential Equations by University of London <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/differential-equations" class="link" target="_blank">Differential Equations on Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/matlab-numerical-methods-for-engineering/" class="link" target="_blank">MATLAB Numerical Methods for Engineering <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹8 LPA';
                  jobRoles = 'Key roles: Trainee Analyst';
                  suggestionsText = 'Start with fundamental techniques like interpolation and basic numerical concepts. Focus on understanding their relevance in real-world scenarios. Engage in practical exercises to reinforce your learning. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/introduction-to-numerical-analysis" class="link" target="_blank">Introduction to Numerical Analysis by UC Santa Cruz <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/numerical-methods-introduction-to-matlab/" class="link" target="_blank">Numerical Methods: Introduction to MATLAB <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/math/linear-algebra" class="link" target="_blank">Linear Algebra on Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/engineering-statistics" class="link" target="_blank">Engineering Statistics by MIT <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              break;
              case 'iot':
                infoText = 'IoT (Internet of Things) App Development focuses on building applications that connect and interact with smart devices. It involves working with embedded systems, cloud platforms, and real-time data processing. Mastering IoT development can lead to exciting opportunities in smart home technology, industrial automation, and healthcare innovations.';
            
                if (percentage > 90) {
                    salaryInsights = 'Expected salary: ₹22 LPA';
                    jobRoles = 'Key roles: IoT Architect, Embedded Systems Engineer';
                    suggestionsText = 'Deepen your knowledge of IoT security, edge computing, and AI integration in IoT applications. Work on real-world projects involving smart devices and sensor networks. Collaborate on open-source IoT platforms to enhance your expertise. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.coursera.org/learn/iot" class="link" target="_blank">Internet of Things (IoT) Specialization by University of California, Irvine <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.edx.org/professional-certificate/iot-system-design" class="link" target="_blank">IoT System Design by Curtin University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udacity.com/course/iot-software-development--ud2003" class="link" target="_blank">IoT Software Development Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/the-complete-iot-course/" class="link" target="_blank">The Complete IoT Course by Udemy <i class="fa-solid fa-up-right-from-square"></i></a><br>';
                }
            
                if (percentage > 80 && percentage <= 90) {
                    salaryInsights = 'Expected salary: ₹18 LPA';
                    jobRoles = 'Key roles: IoT Developer, Cloud IoT Engineer';
                    suggestionsText = 'Learn about cloud IoT platforms like AWS IoT, Google Cloud IoT, and Azure IoT. Build applications that process real-time data from sensors and actuators. Participate in IoT hackathons to showcase your skills. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.coursera.org/learn/iot-azure" class="link" target="_blank">IoT on Azure by Microsoft <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/iot-using-raspberry-pi/" class="link" target="_blank">IoT Using Raspberry Pi by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.pluralsight.com/courses/aws-iot-fundamentals" class="link" target="_blank">AWS IoT Fundamentals by Pluralsight <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udacity.com/course/cloud-iot-edge-development--ud1501" class="link" target="_blank">Cloud IoT Edge Development by Udacity <i class="fa-solid fa-up-right-from-square"></i></a><br>';
                }
            
                if (percentage > 70 && percentage <= 80) {
                    salaryInsights = 'Expected salary: ₹12 LPA';
                    jobRoles = 'Key roles: IoT Analyst, Junior IoT Engineer';
                    suggestionsText = 'Gain experience with IoT communication protocols like MQTT and CoAP. Work on small projects integrating microcontrollers with sensors. Explore IoT data analytics to understand real-time processing. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.codecademy.com/learn/learn-iot" class="link" target="_blank">Learn IoT by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/iot-for-beginners/" class="link" target="_blank">IoT for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.khanacademy.org/computing/computer-programming" class="link" target="_blank">Khan Academy IoT Basics <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/iot-data-analytics" class="link" target="_blank">IoT Data Analytics by Google Cloud <i class="fa-solid fa-up-right-from-square"></i></a><br>';
                }
            
                if (percentage <= 70) {
                    salaryInsights = 'Expected salary: ₹9 LPA';
                    jobRoles = 'Key roles: IoT Intern, Embedded Developer';
                    suggestionsText = 'Start by understanding basic IoT components like microcontrollers and sensors. Learn how to write simple programs for Arduino and Raspberry Pi. Practice building basic IoT applications like temperature monitoring. <br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udacity.com/course/intro-to-iot--ud721" class="link" target="_blank">Intro to IoT by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.codecademy.com/learn/learn-iot" class="link" target="_blank">Learn IoT by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/iot-essentials-for-beginners/" class="link" target="_blank">IoT Essentials for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.khanacademy.org/computing/computer-programming" class="link" target="_blank">Khan Academy IoT Basics <i class="fa-solid fa-up-right-from-square"></i></a><br>';
                }
                break;            
          case 'java':
              infoText = 'Java Development is widely used for building robust applications across various domains, including enterprise systems, mobile development, and web applications. Its platform independence and vast ecosystem make it a popular choice among developers. Mastering Java can open doors to numerous career opportunities and enhance your problem-solving skills in software development.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹22 LPA';
                  jobRoles = 'Key roles: Senior Java Developer, Backend Engineer';
                  suggestionsText = 'Learn advanced topics like multithreading and JVM internals. Contribute to large-scale Java projects to gain practical experience. Engage in open-source projects to enhance your skills and showcase your expertise. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/java-programming" class="link" target="_blank">Java Programming and Software Engineering Fundamentals by Duke University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/professional-certificate/java-application-development" class="link" target="_blank">Professional Certificate in Java Application Development by Harvard University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/java-developer-nanodegree--nd035" class="link" target="_blank">Java Developer Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/java-the-complete-java-developer-course/" class="link" target="_blank">The Complete Java Developer Course by Udemy <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Java Developer, API Specialist';
                  suggestionsText = 'Focus on frameworks like Spring and Hibernate. Work on backend development projects to understand API design. Participate in hackathons to improve your coding skills and network with other developers. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/spring-framework" class="link" target="_blank">Spring Framework by University of Alberta <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/spring-hibernate-tutorial/ " class="link" target="_blank">Spring & Hibernate for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/intro-to-java-programming-nanodegree--nd079" class="link" target="_blank">Intro to Java Programming Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.pluralsight.com/courses/spring-boot-2-fundamentals" class="link" target="_blank">Spring Boot 2 Fundamentals by Pluralsight <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Junior Developer, API Developer';
                  suggestionsText = 'Practice object-oriented programming and basic Java APIs. Build small projects to solidify your understanding of Java concepts. Collaborate with peers on coding exercises to enhance your skills. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.codecademy.com/learn/learn-java" class="link" target="_blank">Learn Java by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/java-complete-course/" class="link" target="_blank">Java Complete Course by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/computing/computer-programming/programming/java" class="link" target="_blank">Java on Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/java-data-structures-algorithms" class="link" target="_blank">Data Structures and Algorithms in Java by University of California, San Diego <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹9 LPA';
                  jobRoles = 'Key roles: Trainee Java Developer';
                  suggestionsText = 'Start with core Java basics like loops and arrays. Focus on writing clean, error-free code. Explore online coding platforms to practice and improve your skills. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udacity.com/course/intro-to-java--ud855" class="link" target="_blank">Intro to Java by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.codecademy.com/learn/learn-java" class="link" target="_blank">Learn Java by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/java-for-complete-beginners/" class="link" target="_blank">Java for Complete Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/computing/computer-programming/programming/java" class="link" target="_blank">Java on Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              break;
              case 'matlab' || 'MATLAB Programming':
                infoText = 'MATLAB is a high-level programming language and environment used for numerical computing, data visualization, and algorithm development. It is widely used in engineering, scientific research, and academia for tasks such as signal processing, machine learning, and simulation. A solid understanding of MATLAB enables efficient prototyping and problem-solving in various technical fields.';
                if (percentage > 90) {
                    salaryInsights = 'Expected salary: ₹20 LPA';
                    jobRoles = 'Key roles: Research Scientist, Simulation Engineer, Data Analyst';
                    suggestionsText = 'Focus on advanced topics such as Simulink modeling, machine learning integration, and real-time data analysis. Work on optimizing MATLAB code for performance improvements and explore parallel computing.<br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.coursera.org/specializations/matlab-programming" class="link" target="_blank">MATLAB Programming for Engineers by Vanderbilt University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/matlab-for-beginners/" class="link" target="_blank">MATLAB for Beginners by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.edx.org/course/matlab-and-octave-for-beginners" class="link" target="_blank">MATLAB and Octave for Beginners by EdX <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.mathworks.com/learn/tutorials/matlab-onramp.html" class="link" target="_blank">MATLAB Onramp by MathWorks <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage > 80 && percentage <= 90) {
                    salaryInsights = 'Expected salary: ₹15 LPA';
                    jobRoles = 'Key roles: Data Analyst, Control Systems Engineer, Software Engineer';
                    suggestionsText = 'Develop expertise in numerical computing and data visualization. Explore MATLAB’s built-in functions and toolboxes for various applications such as AI, signal processing, and system modeling.<br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udemy.com/course/matlab-programming-basics/" class="link" target="_blank">MATLAB Programming Basics by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/matlab" class="link" target="_blank">Introduction to MATLAB by Vanderbilt University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.mathworks.com/learn/tutorials/signal-processing-onramp.html" class="link" target="_blank">Signal Processing Onramp by MathWorks <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage > 70 && percentage <= 80) {
                    salaryInsights = 'Expected salary: ₹12 LPA';
                    jobRoles = 'Key roles: Junior Engineer, Research Assistant, Software Developer';
                    suggestionsText = 'Work on projects involving data analysis and visualization. Learn about MATLAB scripting, loops, and functions to enhance automation in computations.<br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.udemy.com/course/matlab-for-beginners/" class="link" target="_blank">MATLAB for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/matlab-programming" class="link" target="_blank">MATLAB Programming for Engineers by Vanderbilt University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.edx.org/course/matlab-and-octave-for-beginners" class="link" target="_blank">MATLAB and Octave for Beginners by EdX <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                if (percentage <= 70) {
                    salaryInsights = 'Expected salary: ₹9 LPA';
                    jobRoles = 'Key roles: Intern, Junior Researcher, Assistant Developer';
                    suggestionsText = 'Start with fundamental concepts such as matrix operations, plotting, and basic programming in MATLAB. Work on small projects to apply concepts in practical scenarios.<br>' +
                        '<strong>Useful Courses:</strong><br>' +
                        '<a href="https://www.mathworks.com/learn/tutorials/matlab-onramp.html" class="link" target="_blank">MATLAB Onramp by MathWorks <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.udemy.com/course/matlab-for-beginners/" class="link" target="_blank">MATLAB for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                        '<a href="https://www.coursera.org/learn/matlab" class="link" target="_blank">Introduction to MATLAB by Vanderbilt University <i class="fa-solid fa-up-right-from-square"></i></a>';
                }
                break;  
                case 'deep learning' || 'Deep Learning':
                    infoText = 'Deep Learning is a subset of machine learning focused on neural networks and their applications in artificial intelligence. It is used in various domains, including computer vision, natural language processing, and autonomous systems. Mastering Deep Learning opens opportunities in AI-driven industries.';
                    if (percentage > 90) {
                        salaryInsights = 'Expected salary: ₹30 LPA';
                        jobRoles = 'Key roles: AI Research Scientist, Deep Learning Engineer, Computer Vision Engineer';
                        suggestionsText = 'Focus on advanced topics such as transformer models, generative adversarial networks (GANs), and reinforcement learning. Gain expertise in deep learning frameworks like TensorFlow and PyTorch.<br>' +
                            '<strong>Useful Courses:</strong><br>' +
                            '<a href="https://www.coursera.org/specializations/deep-learning" class="link" target="_blank">Deep Learning Specialization by Andrew Ng <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                            '<a href="https://www.udacity.com/course/deep-learning-nanodegree--nd101" class="link" target="_blank">Deep Learning Nanodegree by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                            '<a href="https://www.fast.ai/" class="link" target="_blank">Fast.ai Deep Learning Course <i class="fa-solid fa-up-right-from-square"></i></a>';
                    }
                    if (percentage > 80 && percentage <= 90) {
                        salaryInsights = 'Expected salary: ₹25 LPA';
                        jobRoles = 'Key roles: Machine Learning Engineer, AI Developer, NLP Engineer';
                        suggestionsText = 'Develop expertise in convolutional and recurrent neural networks. Work on projects involving image classification, speech recognition, and text generation.<br>' +
                            '<strong>Useful Courses:</strong><br>' +
                            '<a href="https://cs50.ai/" class="link" target="_blank">CS50’s Introduction to AI with Python <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                            '<a href="https://www.udemy.com/course/deeplearning/" class="link" target="_blank">Deep Learning A-Z by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                            '<a href="https://www.coursera.org/learn/convolutional-neural-networks" class="link" target="_blank">Convolutional Neural Networks by Andrew Ng <i class="fa-solid fa-up-right-from-square"></i></a>';
                    }
                    if (percentage > 70 && percentage <= 80) {
                        salaryInsights = 'Expected salary: ₹18 LPA';
                        jobRoles = 'Key roles: AI Analyst, Data Scientist, Junior ML Engineer';
                        suggestionsText = 'Learn about deep learning fundamentals, activation functions, and optimization techniques. Implement neural networks using TensorFlow and Keras.<br>' +
                            '<strong>Useful Courses:</strong><br>' +
                            '<a href="https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187" class="link" target="_blank">Intro to TensorFlow for Deep Learning by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                            '<a href="https://www.deeplearning.ai/" class="link" target="_blank">DeepLearning.AI Courses <i class="fa-solid fa-up-right-from-square"></i></a>';
                    }
                    if (percentage <= 70) {
                        salaryInsights = 'Expected salary: ₹12 LPA';
                        jobRoles = 'Key roles: Intern, AI Enthusiast, Research Assistant';
                        suggestionsText = 'Start with fundamental concepts like perceptrons, backpropagation, and simple feedforward networks. Work on small projects such as digit recognition using MNIST.<br>' +
                            '<strong>Useful Courses:</strong><br>' +
                            '<a href="https://www.coursera.org/learn/neural-networks-deep-learning" class="link" target="_blank">Neural Networks and Deep Learning by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                            '<a href="https://www.udemy.com/course/machinelearning/" class="link" target="_blank">Machine Learning by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>';
                    }
                    break;  
                    case 'compiler design and system software' || 'CDSS':
                        infoText = 'Compiler Design and System Software deals with the principles of compiler construction and system-level programming. It includes topics like lexical analysis, parsing, code generation, and optimization techniques.';
                        if (percentage > 90) {
                            salaryInsights = 'Expected salary: ₹28 LPA';
                            jobRoles = 'Key roles: Compiler Engineer, System Software Developer, Embedded Systems Engineer';
                            suggestionsText = 'Master advanced compiler optimization techniques and system-level programming languages like C and Assembly.<br>' +
                                '<strong>Useful Courses:</strong><br>' +
                                '<a href="https://www.coursera.org/learn/compilers" class="link" target="_blank">Compilers by Stanford University <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                                '<a href="https://www.udacity.com/course/advanced-operating-systems--ud189" class="link" target="_blank">Advanced Operating Systems by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>';
                        }
                        if (percentage > 80 && percentage <= 90) {
                            salaryInsights = 'Expected salary: ₹22 LPA';
                            jobRoles = 'Key roles: Compiler Developer, System Programmer, Software Engineer';
                            suggestionsText = 'Gain experience with tools like LLVM, GCC, and Flex/Bison.<br>' +
                                '<strong>Useful Courses:</strong><br>' +
                                '<a href="https://www.edx.org/course/compilers" class="link" target="_blank">Compilers by edX <i class="fa-solid fa-up-right-from-square"></i></a>';
                        }
                        if (percentage > 70 && percentage <= 80) {
                            salaryInsights = 'Expected salary: ₹15 LPA';
                            jobRoles = 'Key roles: Junior System Programmer, Compiler Analyst';
                            suggestionsText = 'Learn about parsing techniques and intermediate code generation.<br>' +
                                '<strong>Useful Courses:</strong><br>' +
                                '<a href="https://www.udemy.com/course/compiler-design/" class="link" target="_blank">Compiler Design by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>';
                        }
                        if (percentage <= 70) {
                            salaryInsights = 'Expected salary: ₹10 LPA';
                            jobRoles = 'Key roles: Intern, Software Developer';
                            suggestionsText = 'Understand the basics of compiler phases and try building a simple compiler.<br>' +
                                '<strong>Useful Courses:</strong><br>' +
                                '<a href="https://www.coursera.org/learn/compiler-design" class="link" target="_blank">Compiler Design Basics by Coursera <i class="fa-solid fa-up-right-from-square"></i></a>';
                        }
                        break;                                            
          case 'linux':
              infoText = 'Linux is a powerful, open-source operating system widely used in server environments, cloud computing, and embedded systems. Understanding Linux is essential for system administration, software development, and cybersecurity. Its flexibility and robustness make it a popular choice for developers and IT professionals alike. Mastery of Linux can significantly enhance your troubleshooting and scripting skills.';

              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹25 LPA';
                  jobRoles = 'Key roles: Linux System Administrator, DevOps Engineer';
                  suggestionsText = 'Delve into advanced system administration and kernel programming. Work on open-source projects to enhance your practical experience. Consider obtaining certifications like RHCE (Red Hat Certified Engineer) to validate your skills. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/linux" class="link" target="_blank">Linux Server Management and Security by University of California, Davis <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/professional-certificate/linuxfoundationx-linuxfoundation-certification" class="link" target="_blank">Professional Certificate in Linux by The Linux Foundation <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udacity.com/course/linux-server-configuration-nd099" class="link" target="_blank">Linux Server Configuration by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.pluralsight.com/courses/linux-fundamentals" class="link" target="_blank">Linux Fundamentals by Pluralsight <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage > 80 && percentage <= 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Systems Engineer, Cloud Engineer';
                  suggestionsText = 'Focus on mastering shell scripting and system automation. Work on cloud infrastructure projects to understand Linux in a cloud context. Participate in community forums to enhance your networking and problem-solving skills. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.coursera.org/learn/linux-command-line" class="link" target="_blank">Linux Command Line Basics by Google <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/linux-master-class/" class="link" target="_blank">Linux Master Class: Beginner to Advance by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.edx.org/course/linux-essentials" class="link" target="_blank">Linux Essentials by Linux Professional Institute <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.codecademy.com/learn/learn-the-command-line" class="link" target="_blank">Learn the Command Line by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage > 70 && percentage <= 80) {
                  salaryInsights = 'Expected salary: ₹15 LPA';
                  jobRoles = 'Key roles: Junior System Administrator, IT Support Specialist';
                  suggestionsText = 'Practice basic commands and file system management. Work on setting up Linux environments for various applications. Collaborate on projects with peers to gain practical experience. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udemy.com/course/linux-for-beginners/ " class="link" target="_blank">Linux for Beginners by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.codecademy.com/learn/learn-linux" class="link" target="_blank">Learn Linux by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/linux-server" class="link" target="_blank">Linux Server Management by University of California, Davis <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.khanacademy.org/computing/computer-science/operating-systems/linux" class="link" target="_blank">Linux on Khan Academy <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }

              if (percentage <= 70) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Trainee System Administrator, Help Desk Technician';
                  suggestionsText = 'Start with basic Linux commands and understand the file system structure. Focus on practical exercises to enhance your learning. Join Linux user groups or forums to seek guidance and support. <br>' +
                      '<strong>Useful Courses:</strong><br>' +
                      '<a href="https://www.udacity.com/course/linux-introduction--ud599" class="link" target="_blank">Introduction to Linux by Udacity <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.udemy.com/course/linux-bash-shell-scripting-bootcamp/ " class="link" target="_blank">Linux Bash Shell Scripting Bootcamp by Udemy <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.coursera.org/learn/linux-for-developers" class="link" target="_blank">Linux for Developers by Linux Foundation <i class="fa-solid fa-up-right-from-square"></i></a>,<br>' +
                      '<a href="https://www.codecademy.com/learn/learn-the-command-line" class="link" target="_blank">Learn the Command Line by Codecademy <i class="fa-solid fa-up-right-from-square"></i></a><br>';
              }
              break;


          default:
              infoText = 'This subject has various applications in the real world. Understanding it well can open up multiple career opportunities in diverse fields.';
              salaryInsights = 'Expected salary: ₹8 LPA';
              jobRoles = 'Key roles: Entry-Level Analyst';
              suggestionsText = 'Focus on improving foundational knowledge in this area. Practice problems and gain hands-on experience.';
      }

      infoBox.innerHTML = `<p><strong>Why ${subjectName} :</strong><br><br> ${infoText}</p><br>`;
      infoBox.innerHTML += `<p>${salaryInsights}<br>${jobRoles}</p>`;
      if (percentage > 80 && percentage <= 100) {
          infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, Excellent! Keep up the work!</p>`;
      } else if (percentage > 70 && percentage <= 80) {
          infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, You are doing good!</p>`;
      } else {
          infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, You need to work harder!</p>`;
      }
      infoBox.style.display = 'block';
      suggestionsBox.innerHTML = `<p><strong>How to do well in ${subjectName}:</strong><br><br> ${suggestionsText}</p>`;
      suggestionsBox.style.display = 'block';
  } else {
      alert('Invalid input. Please enter valid marks.');
      percentageInput.value = 'Invalid input';
  }
}

document.getElementById('marksForm').addEventListener('submit', calculatePercentage);

document.getElementById('noOfSubjects').addEventListener('input', function() {
  const formy = document.getElementsByClassName('formy');
  if (value == '') {
      formy.style.display = 'none';
  } else {
      formy.style.display = 'block';
  }
});

function createInputs(event) {
  event.preventDefault();
  const noOfSubjectsInput = document.getElementById('noOfSubjects');
  const noOfSubjects = parseInt(noOfSubjectsInput.value);
  const dynamicForms = document.getElementById('dynamicForms');
  dynamicForms.innerHTML = '';

  if (noOfSubjects < 1 || noOfSubjects >= 10) {
      alert("Please enter a valid number of subjects (max 10)");
      return;
  }

  for (let i = 1; i <= noOfSubjects; i++) {
      const formBox = document.createElement('div');
      formBox.className = 'form-box';
      formBox.innerHTML = `
    <form class="subject-form" id="subjectForm${i}">
      <fieldset>
        <p class="hmm">Subject ${i}</p><br>
        <input type="text" id="subjectName${i}" placeholder="Subject Name" required>
        <input type="number" id="creds${i}" placeholder="No.of Credits" required>
        <input type="number" id="internal${i}" placeholder="CIA Marks" required><br><br>
        <label for="seePred${i}" class="hmm">How much you think you can score in SEE?</label><br><br>
        <input type="number" id="predSEE${i}" placeholder="Predicted SEE" required>
        <input type="text" id="grade${i}" placeholder="Grade" readonly>
        <button type="button" class="button3" onclick="processForm(${i})">Calculate</button>
      </fieldset>
    </form>
  `;
      dynamicForms.appendChild(formBox);
  }
  addInputListeners();
}

function addInputListeners() {
  const forms = document.querySelectorAll('.subject-form');
  forms.forEach(form => {
      const inputs = form.querySelectorAll('input[required]');
      inputs.forEach(input => {
          input.addEventListener('input', () => {
              if (input.value) {
                  if (darkModePreference === 'enabled') {
                      input.style.backgroundColor = 'var(--dark-bg-color)';
                  } else {
                      input.style.backgroundColor = 'var(--dark-main-color)';
                  }
              } else {
                  input.style.backgroundColor = '';
              }
          });
      });
  });
}

function calculateGrade(internal, see) {
  const totalMarks = internal + see;
  const percentage = (totalMarks / 100) * 100;

  let grade;
  switch (true) {
      case (percentage >= 90 && percentage <= 100):
          grade = 10;
          break;
      case (percentage >= 80 && percentage < 90):
          grade = 9;
          break;
      case (percentage >= 70 && percentage < 80):
          grade = 8;
          break;
      case (percentage >= 60 && percentage < 70):
          grade = 7;
          break;
      case (percentage >= 50 && percentage < 60):
          grade = 6;
          break;
      default:
          grade = 0;
  }
  return grade;
}

function processForm(i) {
  const internal = parseInt(document.getElementById(`internal${i}`).value);
  const see = parseInt(document.getElementById(`predSEE${i}`).value);
  const gradeInput = document.getElementById(`grade${i}`);

  if (!isNaN(internal) && !isNaN(see)) {
      const grade = calculateGrade(internal, see);
      gradeInput.value = grade;
  } else {
      gradeInput.value = 'Invalid input';
  }
}

function displayFinalGPA() {
  const noOfSubjects = parseInt(document.getElementById('noOfSubjects').value);
  let totalCredits = 0;
  let totalGradePoints = 0;

  for (let i = 1; i <= noOfSubjects; i++) {
      const credits = parseInt(document.getElementById(`creds${i}`).value);
      const grade = parseInt(document.getElementById(`grade${i}`).value);

      if (!isNaN(credits) && !isNaN(grade)) {
          const gradePoints = grade * credits;
          totalCredits += credits;
          totalGradePoints += gradePoints;
      } else {
          alert(`Please calculate the grade for Subject ${i} before submitting.`);
          return;
      }
  }

  const gpa = totalGradePoints / totalCredits;
  const dynamicGPA = document.createElement('div');
  dynamicGPA.className = 'dynamicGPA';
  dynamicGPA.innerHTML = `
<div class="infobox">
  <center class="form">
    <h3>SGPA & CGPA:</h3><br>
    <fieldset class="boxy">
      <input type="text" id="finalGPA" placeholder="Predicted GPA" value="${gpa.toFixed(2)}" readonly>
      <input type="text" id="CGPA" placeholder="Current CGPA">
      <input type="text" id="finalCGPA" placeholder="Predicted CGPA" readonly>
    </fieldset>
  </center>
</div>`;

  document.getElementById('gpa-container').appendChild(dynamicGPA);

  document.getElementById('CGPA').addEventListener('input', function() {
      const currentCGPA = parseFloat(this.value);
      if (currentCGPA < 0 || currentCGPA > 10) {
          alert("Invalid CGPA, please enter a valid value.");
          return;
      }
      if (!isNaN(currentCGPA)) {
          const predictedCGPA = (currentCGPA + gpa) / 2;
          document.getElementById('finalCGPA').value = predictedCGPA.toFixed(2);
      }
  });
}

document.getElementById('submitButton').addEventListener('click', (event) => {
  event.preventDefault();
  displayFinalGPA();
});

function attendanceCal() {
  const form = document.getElementById('attendance-form');
  form.innerHTML = `
  <form id="attendanceForm">
    <fieldset>
      <p class="dark-text">Enter the details:</p><br>
      <input type="number" id="noOfAttended" placeholder="No. of Attended classes" required>
      <input type="number" id="totalNoOfClasses" placeholder="Total No. of classes" required>
      <input type="number" id="attendancePercentage" placeholder="Current percentage" readonly>
      <button type="submit" class="button3">Submit</button>
    </fieldset>
  </form>
  <div id="attendanceChart" class="chart-container info-box"></div>
`;

  document.getElementById('attendanceForm').addEventListener('submit', function(event) {
      event.preventDefault();
      perCal();
  });
}

function perCal() {
  const numberOfAttended = parseInt(document.getElementById('noOfAttended').value);
  const totalNumberOfClasses = parseInt(document.getElementById('totalNoOfClasses').value);
  if (numberOfAttended > totalNumberOfClasses || numberOfAttended < 0 || totalNumberOfClasses < 0 || numberOfAttended > 500 || totalNumberOfClasses > 500) {
      alert("Invalid Input, please enter valid values.");
      return;
  } else {
      const percentage = (numberOfAttended / totalNumberOfClasses) * 100;
      document.getElementById('attendancePercentage').value = percentage.toFixed(2);
      updateChart(numberOfAttended, totalNumberOfClasses);
  }
}

function updateChart(numberOfAttended, totalNumberOfClasses) {
  const data = [{
          label: 'Attended Classes',
          value: numberOfAttended
      },
      {
          label: 'Classes Absent',
          value: totalNumberOfClasses - numberOfAttended
      }
  ];

  const container = d3.select('#attendanceChart');
  const containerWidth = container.node().getBoundingClientRect().width;
  const width = containerWidth;
  const height = 300;
  const margin = {
      top: 20,
      right: 30,
      bottom: 40,
      left: 40
  };
  container.select('svg').remove();

  const svg = container
      .append('svg')
      .attr('width', '100%')
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, width - margin.left - margin.right])
      .padding(0.3);

  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height - margin.top - margin.bottom, 0]);

  svg.append('g')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.label))
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => y(0) - y(d.value))
      .attr('fill', d => d.label === 'Attended Classes' ? '#03dac6' : '#f4f4f4');

  svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x));

  svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y).ticks(5));
}

document.addEventListener('DOMContentLoaded', attendanceCal);

function attendanceGuider() {
  const form = document.getElementById('attendance-form');
  form.innerHTML = `
<div class="form-section">
  <form id="requiredPercentageForm" >
    <fieldset class="boxy">
      <p class="dark-text">Enter the details:</p><br>
      <input type="number" id="requiredPercentage" placeholder="Required Percentage" required>
      <p class="hmm">Choose the days you will be absent: </p> <br>
      <div class="days">
        <input type="checkbox" name="monday" id="monday">
        <label for="monday">Monday</label><br><br>
        <input type="checkbox" name="tuesday" id="tuesday">
        <label for="tuesday">Tuesday</label><br><br>
        <input type="checkbox" name="wednesday" id="wednesday">
        <label for="wednesday">Wednesday</label><br><br>
        <input type="checkbox" name="thursday" id="thursday">
        <label for="thursday">Thursday</label><br><br>
        <input type="checkbox" name="friday" id="friday">
        <label for="friday">Friday</label><br><br>
      </div>
    </fieldset>
  </form>
</div>
<div class="form-section">
  <form id="attendanceForm">
    <fieldset class="boxy">
      <p class="dark-text">Enter the details:</p><br>
      <input type="number" id="noOfAttended" placeholder="No.of Attended classes" required>
      <input type="number" id="totalNoOfClasses" placeholder="Total No.of classes" required>
      <input type="number" id="attendancePercentage" placeholder="Current percentage" readonly>
      <input type="number" id="futurePercentage" placeholder="Future Percentage" readonly>
      <button type="submit" class="button3">Submit</button>
    </fieldset>
  </form>
</div>
<div id="results" class="info-box results">The Results will appear here once you enter all the required data into the form</div> 
`;

  document.getElementById('requiredPercentageForm').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault();
          document.getElementById('noOfAttended').focus();
      }
  });

  document.getElementById('attendanceForm').addEventListener('submit', calculateClass);
}

function saveToLocalStorage() {
  const requiredPercentage = document.getElementById('requiredPercentage').value;
  const attendedClasses = document.getElementById('noOfAttended').value;
  const totalClasses = document.getElementById('totalNoOfClasses').value;
  localStorage.setItem('requiredPercentage', requiredPercentage);
  localStorage.setItem('attendedClasses', attendedClasses);
  localStorage.setItem('totalClasses', totalClasses);
}

function retrieveFromLocalStorage() {
  const requiredPercentage = localStorage.getItem('requiredPercentage');
  const attendedClasses = localStorage.getItem('attendedClasses');
  const totalClasses = localStorage.getItem('totalClasses');
  if (requiredPercentage) document.getElementById('requiredPercentage').value = requiredPercentage;
  if (attendedClasses) document.getElementById('attendedClasses').value = attendedClasses;
  if (totalClasses) document.getElementById('totalClasses').value = totalClasses;
}
document.getElementById('requiredPercentage').addEventListener('input', saveToLocalStorage);
document.getElementById('noOfAttended').addEventListener('input', saveToLocalStorage);
document.getElementById('totalNoOfClasses').addEventListener('input', saveToLocalStorage);

window.onload = retrieveFromLocalStorage;

function calculateClass(event) {
  event.preventDefault();
  const requiredPercentage = parseFloat(document.getElementById('requiredPercentage').value);
  const noOfAttended = parseInt(document.getElementById('noOfAttended').value);
  const totalNoOfClasses = parseInt(document.getElementById('totalNoOfClasses').value);
  const days = {
      monday: 5,
      tuesday: 5,
      wednesday: 5,
      thursday: 5,
      friday: 5
  };
  let totalClassesToMiss = 0;
  let anyCheckboxChecked = false;
  for (const day in days) {
      if (document.getElementById(day).checked) {
          totalClassesToMiss += days[day];
          anyCheckboxChecked = true;
      }
  }
  if (requiredPercentage > 92 || isNaN(requiredPercentage) || isNaN(noOfAttended) || isNaN(totalNoOfClasses) || noOfAttended > totalNoOfClasses || noOfAttended < 0 || totalNoOfClasses < 0 || noOfAttended > 500 || totalNoOfClasses > 500 || requiredPercentage < 0) {
      alert('Invalid input. Please enter valid details.');
      return;
  } else {
      const futureTotalClasses = totalNoOfClasses + totalClassesToMiss;
      const futureAttendedClasses = noOfAttended;
      const futurePercentage = (futureAttendedClasses / futureTotalClasses) * 100;
      document.getElementById('attendancePercentage').value = ((noOfAttended / totalNoOfClasses) * 100).toFixed(2);
      document.getElementById('futurePercentage').value = futurePercentage.toFixed(2);
      let requiredClassesToAttend;
      if (anyCheckboxChecked) {
          requiredClassesToAttend = Math.ceil((requiredPercentage * futureTotalClasses / 100 - futureAttendedClasses) / (1 - requiredPercentage / 100));
      } else {
          requiredClassesToAttend = Math.ceil((requiredPercentage * totalNoOfClasses / 100 - noOfAttended) / (1 - requiredPercentage / 100));
      }
      let hardnessLevel = '';
      let hardnessColor = '';
      let additionalInfo = '';
      if (requiredClassesToAttend > totalClassesToMiss) {
          const additionalDays = Math.ceil(requiredClassesToAttend / 5);
          if (additionalDays > 0) {
              hardnessLevel = `Kinda Hard. You need to attend approximately ${additionalDays} more days.`;
              hardnessColor = 'red';
          }
      } else if (requiredClassesToAttend > totalClassesToMiss / 2) {
          const additionalDays = Math.ceil(requiredClassesToAttend / 5);
          if (additionalDays > 0) {
              hardnessLevel = `Try to attend most classes possible. You need to attend approximately ${additionalDays} more days.`;
              hardnessColor = 'orange';
          }
      } else {
          const additionalDays = Math.ceil(requiredClassesToAttend / 5);
          if (additionalDays > 0) {
              hardnessLevel = `You can easily get that percentage. You need to attend approximately ${additionalDays} more days.`;
              hardnessColor = 'green';
          }
      }
      additionalInfo = `
  <p>Total number of classes after vacation: ${futureTotalClasses}</p>
  <p>Current number of classes attended: ${noOfAttended}</p>
  <p>After attending 
`;

      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = `
    <p>Current Attendance Percentage: ${((noOfAttended / totalNoOfClasses) * 100).toFixed(2)}%</p><br>
    <p>Future Attendance Percentage: ${futurePercentage.toFixed(2)}%</p><br>
    ${requiredClassesToAttend > 0 ? `<p>To meet the required percentage, you need to attend ${requiredClassesToAttend} more classes after the vacation.</p><br>` : ''}
    <p>Possibility to attain required percentage:<br><br> <span id="hardnessLevel">${hardnessLevel}</span></p><br>
    <p>More information :<br><br>  ${additionalInfo}</p>
  `;

      document.getElementById('hardnessLevel').style.color = hardnessColor;
  }
}

document.getElementById('requiredPercentageForm').addEventListener('submit', calculateClass);

document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const loaderText = document.getElementById('loader-text');
  const grades = ['O', 'A+', 'A', 'B'];
  let gradeIndex = 0;

  loader.classList.add('show');

  const changeGrade = () => {
      loaderText.textContent = grades[gradeIndex];
      gradeIndex = (gradeIndex + 1) % grades.length;
  };

  const gradeInterval = setInterval(changeGrade, 500);

  const images = document.images;
  let loadedImagesCount = 0;

  function imageLoaded() {
      loadedImagesCount++;
      if (loadedImagesCount === images.length) {
          clearInterval(gradeInterval);
          loader.classList.remove('show');
      }
  }

  if (images.length === 0) {
      clearInterval(gradeInterval);
      loader.classList.remove('show');
  } else {
      for (let i = 0; i < images.length; i++) {
          if (images[i].complete) {
              imageLoaded();
          } else {
              images[i].addEventListener('load', imageLoaded);
              images[i].addEventListener('error', imageLoaded);
          }
      }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const progressCircle = document.getElementById('progress-circle');

  function updateProgressCircle() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      const angle = (scrollPercentage / 100) * 360;

      if (scrollPercentage <= 25) {
          progressCircle.style.borderTopColor = 'var(--main-color)';
          progressCircle.style.borderRightColor = 'transparent';
          progressCircle.style.borderBottomColor = 'transparent';
          progressCircle.style.borderLeftColor = 'transparent';
      } else if (scrollPercentage <= 50) {
          progressCircle.style.borderTopColor = 'var(--main-color)';
          progressCircle.style.borderRightColor = 'var(--main-color)';
          progressCircle.style.borderBottomColor = 'transparent';
          progressCircle.style.borderLeftColor = 'transparent';
      } else if (scrollPercentage <= 75) {
          progressCircle.style.borderTopColor = 'var(--main-color)';
          progressCircle.style.borderRightColor = 'var(--main-color)';
          progressCircle.style.borderBottomColor = 'var(--main-color)';
          progressCircle.style.borderLeftColor = 'transparent';
      } else {
          progressCircle.style.borderTopColor = 'var(--main-color)';
          progressCircle.style.borderRightColor = 'var(--main-color)';
          progressCircle.style.borderBottomColor = 'var(--main-color)';
          progressCircle.style.borderLeftColor = 'var(--main-color)';
      }
  }

  window.addEventListener('scroll', updateProgressCircle);
  updateProgressCircle();
});


document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top a');

  backToTopButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img.lazy');

  function lazyLoad() {
      lazyImages.forEach(function(img) {
          if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom > 0 && getComputedStyle(img).display !== 'none') {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
          }
      });
  }

  window.addEventListener('scroll', lazyLoad);
  lazyLoad();
});


document.addEventListener('DOMContentLoaded', function() {
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

  collapsibleHeaders.forEach(header => {
      header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          content.classList.toggle('collapsed');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.falling-pngs');
  const pngCount = 10;
  const pngSource = './imgs/gradea.png';
  const fallInterval = 500;

  function createFallingPng() {
      const png = document.createElement('img');
      png.classList.add('falling-png');
      png.src = pngSource;
      png.style.left = `${Math.random() * 100}vw`;
      png.style.animationDuration = `${5 + Math.random() * 5}s`;
      png.style.animationDelay = `${Math.random() * 3}s`;

      container.appendChild(png);

      setTimeout(() => {
          png.remove();
      }, (5 + Math.random() * 5) * 1000);
  }
  setInterval(() => {
      if (document.querySelectorAll('.falling-png').length < pngCount) {
          createFallingPng();
      }
  }, fallInterval);
});

function generateCalendar() {
  const streakBox = document.getElementById("streakBox");
  const weeks = 7;
  const columns = 53; 
  const activeDays = new Set([3, 10, 20, 45, 50, 80, 100, 150, 180, 200, 250, 300]); // Example contributions

  for (let i = 0; i < columns; i++) {
      const week = document.createElement("div");
      week.classList.add("week");

      for (let j = 0; j < weeks; j++) {
          const dayIndex = i * weeks + j;
          const day = document.createElement("div");
          day.classList.add("day");
          if (activeDays.has(dayIndex)) {
              day.classList.add("active");
          }
          week.appendChild(day);
      }
      streakBox.appendChild(week);
  }
}

generateCalendar();

/*My First ever project with 2000+ lines JavaScript yayyyy!!!*/