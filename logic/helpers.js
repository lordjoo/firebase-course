
firebase.auth().onAuthStateChanged(function (user_object) {
    /*
     * user_object contains Data (user is logged in)
     * user_object == NULL (LogOut, Not Signed in yet)
     */

    if (user_object) {
        // ...
        $('.is-auth').show();
        $(".not-auth").hide();
        $(".auth-name").text(user_object.displayName)
    } else {
        // ...
        $('.not-auth').show();
        $(".is-auth").hide();
    }
})

async function logOut(){
    await firebase.auth().signOut();
    // 
}
