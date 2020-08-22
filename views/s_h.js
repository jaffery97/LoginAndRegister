function show() {
    var hide = document.getElementById("password");

    //display the password
    if (hide.type === "password") {
        hide.type = "text";
    } else {
        hide.type = "password";
    }

    //display the "SHOW/HIDE" text
    var text = document.getElementById("text1");
    if (text.innerHTML === "Hide") {
        text.innerHTML = "Show";
    } else {
        text.innerHTML = "Hide";
    }
}
