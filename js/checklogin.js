// Kiem tra dang nhap user ton tai hay chua
var currentUser = localStorage.getItem("currentUser");
if(!currentUser){
    window.location.assign('login.html');
}