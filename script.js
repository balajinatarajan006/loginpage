// =========================
// LOGIN FUNCTION
// =========================

function login() {

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("student"));

    if (user == null) {
        document.getElementById("loginMessage").innerHTML =
            "No account found. Please register first.";
        return;
    }

    if (email === user.email && password === user.password) {

        localStorage.setItem("loggedUser", JSON.stringify(user));

        window.location.href = "welcome.html";

    } else {

        document.getElementById("loginMessage").innerHTML =
            "Invalid Email or Password.";

    }

}


// =========================
// SHOW PASSWORD (OPTIONAL)
// =========================

function togglePassword(id) {

    let input = document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

    } else {

        input.type = "password";

    }

}
