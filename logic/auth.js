$(document).ready(function () {
    $("#register").submit(function (e) {
        e.preventDefault()
        let email = $("#register_email").val();
        let password = $("#register_password").val();
        let name = $("#register_name").val();
        if(password.length < 8){
            $("#error-box").text("Password must bo longer than 8 Chars").show();
            return;
        }
        $("#error-box").hide();

        firebase.auth().createUserWithEmailAndPassword(email, password).then(async res => {
            // TODO: Let user know that the request has been sent by any method 
            
            let user = res.user;
            // console.log(user.providerData[0])
            await user.updateProfile({displayName:name});
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            $("#error-box").text(errorMessage).show()
          });

    })
})