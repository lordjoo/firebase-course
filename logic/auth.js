// observer to detect when user login 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // console.log(user.providerData[0])
        window.location = "/"
    }
});


$(document).ready(function () {
    $("#register").submit(function (e) {
        e.preventDefault()

        $("#register_btn").attr("disabled", true);
        let email = $("#register_email").val();
        let password = $("#register_password").val();
        let name = $("#register_name").val();
        if (password.length < 8) {
            $("#error-box").text("Password must bo longer than 8 Chars").show();
            $("#register_btn").attr("disabled", false);
            return;
        }
        $("#error-box").hide();

        firebase.auth().createUserWithEmailAndPassword(email, password).then(async res => {
            // TODO: Let user know that the request has been sent by any method 
            let user = res.user;
            // console.log(user.providerData[0])
            await user.updateProfile({displayName: name});
            // TODO: complete
            $("#register_btn").attr("disabled", false);
            toastr["success"]("Your account has ben created..")
            // NEW 

        }).catch(function (error) {
            // Handle Errors here.
            $("#register_btn").attr("disabled", false);

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            $("#error-box").text(errorMessage).show()
        });

    })

    $("#login").submit(function (e) {
        e.preventDefault()

        $("#login_btn").attr("disabled", true);
        let email = $("#login_email").val();
        let password = $("#login_password").val();
        if (password.length < 8) {
            $("#error-box").text("Password must bo longer than 8 Chars").show();
            $("#login_btn").attr("disabled", false);
            return;
        }
        $("#error-box").hide();

        firebase.auth().signInWithEmailAndPassword(email, password).then(async res => {
            let user = res.user;
            $("#login_btn").attr("disabled", false);
            toastr["success"]("Welcome Back .")
        }).catch(function (error) {
            $("#login_btn").attr("disabled", false);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            $("#error-box").text(errorMessage).show()
        });

    })    
})