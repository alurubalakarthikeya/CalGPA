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
          case 'fsd':
              infoText = 'Full Stack Development involves both front-end and back-end web development. Developers in this field are responsible for designing, developing, and maintaining complete web applications. The role demands expertise in both client-side and server-side technologies, making it a versatile and highly sought-after skill.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Full Stack Developer, Software Architect';
                  suggestionsText = 'Study advanced topics like React, Node.js, Express, and MongoDB. Build complex projects, contribute to open-source repositories, and focus on optimizing application performance.';
              } else if (percentage > 80) {
                  salaryInsights = 'Expected salary: ₹15 LPA';
                  jobRoles = 'Key roles: Full Stack Developer, Backend Developer';
                  suggestionsText = 'Learn intermediate concepts like Node.js, Express, and MongoDB. Work on API integrations and enhance debugging skills for real-world applications.';
              } else if (percentage > 70) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Frontend Developer, UI/UX Designer';
                  suggestionsText = 'Focus on building strong skills in HTML, CSS, and JavaScript. Gain experience with frontend frameworks like Bootstrap and basic React.';
              } else {
                  salaryInsights = 'Expected salary: ₹8 LPA';
                  jobRoles = 'Key roles: Junior Frontend Developer';
                  suggestionsText = 'Start with foundational topics like HTML, CSS, and basic JavaScript. Practice creating small, functional websites.';
              }
              break;
          case 'dld':
              infoText = 'Digital Logic Design is crucial for hardware development and forms the backbone of electronic systems. It focuses on the design and analysis of digital circuits used in computers, mobile phones, and other digital devices.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Hardware Engineer, Embedded Systems Developer';
                  suggestionsText = 'Focus on advanced topics like FPGA design and Verilog. Work on hardware simulation projects and experiment with microcontroller programming.';
              } else if (percentage > 80) {
                  salaryInsights = 'Expected salary: ₹14 LPA';
                  jobRoles = 'Key roles: Hardware Engineer, Digital Design Specialist';
                  suggestionsText = 'Learn intermediate concepts like logic circuits and VHDL. Study combinational and sequential logic design in depth.';
              } else if (percentage > 70) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Circuit Designer, Test Engineer';
                  suggestionsText = 'Build strong fundamentals in logic gates and Boolean algebra. Practice designing simple circuits and analyzing their behavior.';
              } else {
                  salaryInsights = 'Expected salary: ₹7 LPA';
                  jobRoles = 'Key roles: Junior Hardware Engineer';
                  suggestionsText = 'Focus on basics like logic gates and truth tables. Learn how basic circuits are constructed and tested.';
              }
              break;
          case 'ds':
              infoText = 'Data Structures are key for efficient algorithm implementation and are foundational to computer science. Proficiency in this area allows developers to write optimized and scalable code.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹22 LPA';
                  jobRoles = 'Key roles: Algorithm Developer, Software Engineer';
                  suggestionsText = 'Master advanced data structures like AVL trees and graph algorithms. Solve complex problems on competitive programming platforms.';
              } else if (percentage > 80) {
                  salaryInsights = 'Expected salary: ₹17 LPA';
                  jobRoles = 'Key roles: Software Engineer, Data Analyst';
                  suggestionsText = 'Focus on intermediate structures like heaps and hash tables. Work on practical applications of data structures in real-world scenarios.';
              } else if (percentage > 70) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Junior Developer, Programmer Analyst';
                  suggestionsText = 'Practice implementing linked lists and binary trees. Focus on solving basic problems involving recursion.';
              } else {
                  salaryInsights = 'Expected salary: ₹9 LPA';
                  jobRoles = 'Key roles: Trainee Developer';
                  suggestionsText = 'Start with arrays and stacks for a strong foundation. Work on understanding their operations and use cases.';
              }
              break;
          case 'dmgt':
              infoText = 'Discrete Mathematics and Graph Theory are fundamental to algorithm development and theoretical computer science. These topics are widely used in cryptography, network theory, and database systems.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Algorithm Analyst, Software Developer';
                  suggestionsText = 'Dive deep into graph algorithms and combinatorics. Practice problem-solving for competitive programming.';
              } else if (percentage > 80) {
                  salaryInsights = 'Expected salary: ₹14 LPA';
                  jobRoles = 'Key roles: Data Scientist, Software Engineer';
                  suggestionsText = 'Focus on intermediate topics like trees and set theory. Learn the applications of graph theory in real-world problems.';
              } else if (percentage > 70) {
                  salaryInsights = 'Expected salary: ₹10 LPA';
                  jobRoles = 'Key roles: Junior Analyst, Developer';
                  suggestionsText = 'Build a good understanding of basic graph theory. Practice problems involving shortest paths and network flows.';
              } else {
                  salaryInsights = 'Expected salary: ₹7 LPA';
                  jobRoles = 'Key roles: Trainee Analyst';
                  suggestionsText = 'Start with basic set theory and logical reasoning. Work on understanding the foundational concepts of graphs.';
              }
              break;
          case 'tnt':
              infoText = 'Transforms and Numerical Techniques are vital for solving complex equations in engineering and applied mathematics. These methods are used extensively in signal processing and scientific computing.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹20 LPA';
                  jobRoles = 'Key roles: Data Scientist, Simulation Engineer';
                  suggestionsText = 'Master advanced numerical methods and transform techniques. Work on projects involving real-world scientific data analysis.';
              } else if (percentage > 80) {
                  salaryInsights = 'Expected salary: ₹16 LPA';
                  jobRoles = 'Key roles: Numerical Analyst, Software Engineer';
                  suggestionsText = 'Focus on solving differential equations and Fourier transforms. Gain expertise in numerical computation tools like MATLAB.';
              } else if (percentage > 70) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Junior Simulation Engineer';
                  suggestionsText = 'Practice basic numerical methods like Newton-Raphson. Work on understanding their application in engineering problems.';
              } else {
                  salaryInsights = 'Expected salary: ₹8 LPA';
                  jobRoles = 'Key roles: Trainee Analyst';
                  suggestionsText = 'Start with fundamental techniques like interpolation. Focus on understanding their relevance in real-world scenarios.';
              }
              break;
          case 'java':
              infoText = 'Java Development is widely used for building robust applications in various domains including enterprise systems, mobile development, and web applications. It is known for its platform independence and vast ecosystem.';
              if (percentage > 90) {
                  salaryInsights = 'Expected salary: ₹22 LPA';
                  jobRoles = 'Key roles: Senior Java Developer, Backend Engineer';
                  suggestionsText = 'Learn advanced topics like multithreading and JVM internals. Contribute to large-scale Java projects to gain practical experience.';
              } else if (percentage > 80) {
                  salaryInsights = 'Expected salary: ₹18 LPA';
                  jobRoles = 'Key roles: Java Developer, API Specialist';
                  suggestionsText = 'Focus on frameworks like Spring and Hibernate. Work on backend development projects to understand API design.';
              } else if (percentage > 70) {
                  salaryInsights = 'Expected salary: ₹12 LPA';
                  jobRoles = 'Key roles: Junior Developer, API Developer';
                  suggestionsText = 'Practice object-oriented programming and basic Java APIs. Build small projects to solidify your understanding.';
              } else {
                  salaryInsights = 'Expected salary: ₹9 LPA';
                  jobRoles = 'Key roles: Trainee Java Developer';
                  suggestionsText = 'Start with core Java basics like loops and arrays. Focus on writing clean, error-free code.';
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


function createInputs(event) {
  event.preventDefault();
  const noOfSubjects = parseInt(document.getElementById('noOfSubjects').value);
  const dynamicForms = document.getElementById('dynamicForms');
  dynamicForms.innerHTML = ''; 
  if(noOfSubjects < 1 || noOfSubjects > 10) {
    alert("Please enter a valid number of subjects (max 10)");
    return;
  }
  else {
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
                    } else{
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
  document.getElementById("dynamicGPA").innerHTML += `<center><h3>Total GPA: ${gpa.toFixed(2)}</h3></center>`;
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
        <input type="number" id="noOfAttended" placeholder="No.of Attended classes" required>
        <input type="number" id="totalNoOfClasses" placeholder="Total No.of classes" required>
        <input type="number" id="attendancePercentage" placeholder="Current percentage" readonly>
        <button type="submit" class="button3">Submit</button>
      </fieldset>
    </form>
    <div class="chart-container form">
      <canvas id="attendanceChart"></canvas>
    </div>
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
    alert("Invalid Input, please enter valid stuff.");
    return;
  } else {
    const percentage = (numberOfAttended / totalNumberOfClasses) * 100;
    document.getElementById('attendancePercentage').value = percentage.toFixed(2);
    updateChart(numberOfAttended, totalNumberOfClasses);
  }
}

function updateChart(numberOfAttended, totalNumberOfClasses) {
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  const data = {
    labels: ['Attended Classes', 'Total Classes'],
    datasets: [{
      label: 'Classes',
      data: [numberOfAttended, totalNumberOfClasses - numberOfAttended],
      backgroundColor: ['#03dac6', '#f4f4f4'],
      borderColor: ['#03dac6', '#ccc'],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  if (window.attendanceChart) {
    window.attendanceChart.data = data;
    window.attendanceChart.update();
  } else {
    window.attendanceChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }
}

document.addEventListener('DOMContentLoaded', attendanceCal);


function attendanceGuider() {
  const form = document.getElementById('attendance-form');
  form.innerHTML = `
  <div class="form-section">
    <form id="requiredPercentageForm">
      <fieldset>
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
      <fieldset>
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

  document.getElementById('attendanceForm').addEventListener('submit', calculateClass);
}

function calculateClass(event) {
  event.preventDefault();
  const requiredPercentage = parseFloat(document.getElementById('requiredPercentage').value);
  const noOfAttended = parseInt(document.getElementById('noOfAttended').value);
  const totalNoOfClasses = parseInt(document.getElementById('totalNoOfClasses').value);
  const days = {
    monday: 5,
    tuesday: 6,
    wednesday: 4,
    thursday: 4,
    friday: 3
  };
  let totalClassesToMiss = 0;
  for (const day in days) {
    if (document.getElementById(day).checked) {
      totalClassesToMiss += days[day];
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
    const requiredClassesToAttend = Math.ceil((requiredPercentage * futureTotalClasses / 100 - futureAttendedClasses) / (1 - requiredPercentage / 100));
    let hardnessLevel = '';
    let hardnessColor = '';

    if (requiredClassesToAttend > totalClassesToMiss) {
      hardnessLevel = 'Kinda Hard to get that percentage';
      hardnessColor = 'red';
    } else if (requiredClassesToAttend > totalClassesToMiss / 2) {
      hardnessLevel = 'Try to attend every single class without fail';
      hardnessColor = 'orange';
    } else {
      hardnessLevel = 'You can easily get that percentage';
      hardnessColor = 'green';
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <p>Current Attendance Percentage: ${((noOfAttended / totalNoOfClasses) * 100).toFixed(2)}%</p><br>
      <p>Future Attendance Percentage: ${futurePercentage.toFixed(2)}%</p><br>
      ${requiredClassesToAttend > 0 ? `<p>To meet the required percentage, you need to attend ${requiredClassesToAttend} more classes.</p><br>` : ''}
      <p>Possibility to attain required percentage:<br><br> <span id="hardnessLevel">${hardnessLevel}</span></p><br>
    `;

    document.getElementById('hardnessLevel').style.color = hardnessColor;
  }
}

document.getElementById('requiredPercentageForm').addEventListener('submit', calculateClass);