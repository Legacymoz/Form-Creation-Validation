document.addEventListener('DOMContentLoaded', function() {
    const form= document.getElementById('registration-form');
    const feedbackDiv= document.getElementById('form-feedback');


    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const username= document.getElementById('username').value.trim();
        const email= document.getElementById('email').value.trim();
        const password= document.getElementById('password').value.trim();

        let isValid= true;
        let messages=[];

        if(username.length < 3){
            isValid=false;
            messages.push('Username should contain atleast 3 characters');
        }
        if (!email.includes('@') || !email_input.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        
        if(password.length < 8){
            isValid=false;
            messages.push('Password must have at least 8 characters') ;  
        }
        

        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color
          } else {
             // Assuming messages is an array of error messages
            feedbackDiv.innerHTML =  messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red color
          }

    })




});