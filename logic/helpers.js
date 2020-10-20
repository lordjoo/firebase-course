firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // logged in 
        $(".is-auth").show();
        $(".not-auth").hide();
        $(".account-name").text(user.displayName)
    } else {
        // logged out 
        $(".not-auth").show();
        $(".is-auth").hide();
    }
});

async function logOut(){
    await firebase.auth().signOut();
}
