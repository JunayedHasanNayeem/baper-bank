//Baper bank login
document.getElementById('login-button').addEventListener('click', function(){
    //Get User Email
    const emailField = document.getElementById('login-email');
    const loginEmail = emailField.value;
    //Get User Password
    const passwordField = document.getElementById('login-password');
    const loginPassword = passwordField.value;
    //Error Message
    const loginForm = document.getElementById('login-from');
    const errorMessage = document.createElement("p");
    loginForm.prepend(errorMessage);
    errorMessage.className = "py-3 px-4 my-4 rounded bg-red-50";
    
    

    if(loginEmail=='sontan@baap.com' && loginPassword=='eww'){
        location.href="app"
    }else if(loginEmail=='sontan@baap.com' && loginPassword!='eww'){
        errorMessage.innerText = "Please enter a valid password!"
    }else if(loginEmail!='sontan@baap.com' && loginPassword=='eww'){
        errorMessage.innerText = "Please enter a valid email!"
    }else{
        errorMessage.innerText = "Please enter a valid email and password!"
    };
});




