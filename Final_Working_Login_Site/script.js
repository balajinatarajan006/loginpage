function login(){
const u=document.getElementById('username').value.trim();
const p=document.getElementById('password').value.trim();
if(u!=='' && p!==''){
window.location.href='welcome.html';
}else{
document.getElementById('message').innerText='Please enter username and password.';
}
}