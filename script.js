function login(){

    let username=document.getElementById("username").value.trim();

    let password=document.getElementById("password").value.trim();

    if(username!=="" && password!==""){

        window.location.href="welcome.html";

    }

    else{

        document.getElementById("message").innerHTML="Please enter Email and Password.";

    }

}
