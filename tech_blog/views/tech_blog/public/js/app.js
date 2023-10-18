$(document).ready(function() {
    // Sign up form handler
    $("#signup-form").on("submit", function(event) {
        event.preventDefault();

        var userData = {
            username: $("#username-signup").val().trim(),
            password: $("#password-signup").val().trim()
        };

        if (!userData.username || !userData.password) {
            return;
        }

        // If we have all the needed details, run the signUpUser function
        signUpUser(userData.username, userData.password);
    });

    // Function to sign up a user
    function signUpUser(username, password) {
        $.post("/api/signup", {
            username: username,
            password: password
        })
        .then(function(data) {
            window.location.replace(data);
        })
        .catch(function(err) {
           console.log(err);
        });
    }

});
