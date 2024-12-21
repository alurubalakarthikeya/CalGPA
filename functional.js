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
  if (!isNaN(obtainedMarks) && !isNaN(totalMarks) && totalMarks > 0) {
      const percentage = (obtainedMarks / totalMarks) * 100;
      console.log("Percentage:", percentage);
      if (percentage <= 100) {
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
          case 'linux':
              infoText = 'Linux is a powerful and versatile operating system used in servers, desktops, and embedded systems. Key skills include proficiency in Linux command line, shell scripting, system administration, and networking. Common job roles are Linux System Administrator and DevOps Engineer, offering salaries averaging ₹6–12 LPA in India, with experienced professionals earning up to ₹20 LPA. Global salaries range from $70,000 to $120,000 annually, depending on skills and location.';
              suggestionsText = 'To excel in Linux, practice using the Linux command line and writing shell scripts. Learn about system administration tasks such as user management, file permissions, and network configuration. Useful resources:<br><br>Resources:<br><a href="https://www.codecademy.com/learn/learn-the-command-line" style="text-decoration: none; color: #03dac6">Codecademy Command Line <i class="fa-solid fa-arrow-up-right-from-square"></i></a><br><a href="https://www.udemy.com/course/linux-mastery/" style="text-decoration: none; color: #03dac6">Udemy Linux Mastery <i class="fa-solid fa-arrow-up-right-from-square"></i></a>.';
              break;  
          default:
              infoText = 'This subject has various applications in the real world, contributing to different fields and industries.';
              suggestionsText = 'To improve in this subject, focus on understanding the core concepts and practicing regularly. Utilize online resources and courses to enhance your knowledge.';
      }
      if (percentage > 100) {
          alert("Enter valid marks");
      }
      infoBox.innerHTML = `<p><strong>Why ${subjectName} :</strong><br><br> ${infoText}</p><br>`;
      if (percentage > 80 && percentage <= 100) { 
          infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, Excellent! Keep up the work!</p>`;
      } else if (percentage > 70 && percentage <= 100) {
          infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, You are doing good!</p>`;
      } else {
          if (percentage < 100) {
              infoBox.innerHTML += `<p>You scored ${Math.round(percentage)}%, You need to work harder!</p>`;
          } else if (percentage > 100) {
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
document.getElementById('marksForm').addEventListener('submit', calculatePercentage);

function createInputs(event) {
  event.preventDefault();
  const noOfSubjects = parseInt(document.getElementById('noOfSubjects').value);
  const dynamicForms = document.getElementById('dynamicForms');
  dynamicForms.innerHTML = ''; 
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
  `;

  document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberOfAttended = document.getElementById('noOfAttended').value;
    const totalNumberOfClasses = document.getElementById('totalNoOfClasses').value;
    const percentage = (numberOfAttended / totalNumberOfClasses) * 100;
    document.getElementById('attendancePercentage').value = percentage.toFixed(2);
  });
}

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
    wednesday: 3,
    thursday: 3,
    friday: 3
  };
  let totalClassesToMiss = 0;
  for (const day in days) {
    if (document.getElementById(day).checked) {
      totalClassesToMiss += days[day];
    }
  }
  const futureTotalClasses = totalNoOfClasses + totalClassesToMiss;
  const futureAttendedClasses = noOfAttended;
  const futurePercentage = (futureAttendedClasses / futureTotalClasses) * 100;
  document.getElementById('attendancePercentage').value = ((noOfAttended / totalNoOfClasses) * 100).toFixed(2);
  document.getElementById('futurePercentage').value = futurePercentage.toFixed(2);

  const requiredClassesToAttend = Math.ceil((requiredPercentage * futureTotalClasses / 100) - futureAttendedClasses);
  let hardnessLevel = '';
  let hardnessColor = '';

  if (requiredClassesToAttend > 20) {
    hardnessLevel = 'Kinda Hard to get that percentage';
    hardnessColor = 'red';
  } else if (requiredClassesToAttend > 10) {
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
    <p>To meet the required percentage, you need to attend ${requiredClassesToAttend} more classes.</p><br>
    <p>Possibility to attain required percentage:<br><br> <span id="hardnessLevel">${hardnessLevel}</span></p><br>
  `;
  
  document.getElementById('hardnessLevel').style.color = hardnessColor;
  }
  
  attendanceGuider();