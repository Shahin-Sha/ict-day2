function checkPassword(form) {
   var pass1 = form.pass1.value;
   var pass2 = form.pass2.value;

    if (pass1 != pass2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }

    else{
        alert("Password Match")
        return true;
    }
}