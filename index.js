document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.closeModal');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById("PersonalMessage");
      const courseNameInput = document.getElementById("CourseName"); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h2>Certificate of Achievement</h2>
      <p>This is to certify that</p>
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h4>${courseName} Course</h4>
      <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
      <img src="./logo.png" alt="Seal" style="margin-top: 20px; max-height: 100px;"> <!-- Adjust the max-height as needed -->
      <p>${personalMessage}</p>

      `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.("", function () {
    modal.style.display = "none";  
    });
  });
  