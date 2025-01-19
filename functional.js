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
              case 'dld':
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
                case 'ds':
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


function createInputs(event) {
  event.preventDefault();
  const noOfSubjects = parseInt(document.getElementById('noOfSubjects').value);
  const dynamicForms = document.getElementById('dynamicForms');
  dynamicForms.innerHTML = ''; 
  if(noOfSubjects < 1 || noOfSubjects >= 10) {
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
  const data = [
    { label: 'Attended Classes', value: numberOfAttended },
    { label: 'Classes Absent', value: totalNumberOfClasses - numberOfAttended }
  ];

  const container = d3.select('#attendanceChart');
  const containerWidth = container.node().getBoundingClientRect().width;
  const width = containerWidth;
  const height = 300;
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };

  // Remove any existing SVG element
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
    .padding(0.3); // Adjust padding for gap between bars

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