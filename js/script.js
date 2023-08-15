// step-1: add clickn event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: gate the email address inside the email input field
    
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    console.log(email);

    const passwardFild = document.getElementById('user-passward');
    const passward = passwardFild.value;
    console.log(passward);

    // validation

    if(email === 'amin@gmail.com' && passward ==='amin'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }

})

