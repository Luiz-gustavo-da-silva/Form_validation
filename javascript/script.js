var email =document.forms['form']['email'];
var senha =document.forms['form']['senha'];

var erro_email_login = document.getElementById('erro_email_login');
var erro_senha_login = document.getElementById('erro_senha_login');

email.addEventListener('TextInput', email_Verify);
senha.addEventListener('TextInput', senha_Verify);
function validacao(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        erro_email_login.style.display="block";
        email.focus();
        return false;
    }
    if(senha.value.length < 6){
        senha.style.border = "1px solid red";
        erro_senha_login.style.display="block";
        senha.focus();
        return false;
    }
}
function email_Verify(){
    if(email.value.length >=9){
        email.style.border="1px solid white";
        erro_email_login.style.display="none";
        return true;
    }
}
function senha_Verify(){
    if(senha.value.length >=6){
        senha.style.border="1px solid white";
        erro_senha_login.style.display="none";
        return true;
    }
}