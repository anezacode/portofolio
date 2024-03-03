function code()
{
    var pw = prompt("Enter Code ");
    if (pw == 5500) {
        window.location.href = "main.html";
        window.alert("Password Benar!");
    } else {
        window.close();
        window.alert("Password Salah!");
    }
}