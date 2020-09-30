$(document).ready(function () {
    $("#register_btn").click(function () {
        let email = $("#register_email").val();
        let password = $("#register_password").val();
        let name = $("#register_name").val();
        
        // TODO: Validate if the inputs are empty 

        firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
            console.log(data.user);
            // TODO redirect back to home

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
          });

    })
})