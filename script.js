// Form Handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();
    const regno = document.getElementById('regno').value.trim();
    const gender = document.getElementById('gender').value;
  
    if (!name || !email || !profession || !age || !regno || !gender) {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete!',
        text: 'Please fill all fields!'
      });
      return;
    }
  
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile-card');
    profileDiv.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Registration No:</strong> ${regno}</p>
      <p><strong>Gender:</strong> ${gender}</p>
    `;
    document.getElementById('submittedProfiles').appendChild(profileDiv);
  
    Swal.fire({
      icon: 'success',
      title: 'Submitted!',
      text: 'Profile created successfully!'
    });
  
    this.reset();
  });
  
  // To-Do Handling
  let taskIdCounter = 1;
  
  function addTask() {
    const taskNo = document.getElementById('taskNo').value.trim();
    const taskName = document.getElementById('taskName').value.trim();
  
    if (!taskNo || !taskName) {
      Swal.fire({
        icon: 'error',
        title: 'Empty Fields!',
        text: 'Please fill both task fields!'
      });
      return;
    }
  
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-card');
    const taskId = `T${taskIdCounter++}`;
  
    taskDiv.innerHTML = `
      <h4>${taskNo} - ${taskName}</h4>
      <p><strong>ID:</strong> ${taskId}</p>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
  
    document.getElementById('taskCards').appendChild(taskDiv);
  
    document.getElementById('taskNo').value = '';
    document.getElementById('taskName').value = '';
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  
  function editTask(button) {
    const card = button.parentElement;
    const h4 = card.querySelector('h4').innerText.split(' - ');
    const taskNo = h4[0];
    const taskName = h4[1];
  
    document.getElementById('taskNo').value = taskNo;
    document.getElementById('taskName').value = taskName;
  
    deleteTask(button);
  }
  