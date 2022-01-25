const Form = document.querySelector("form");
const Name = Form.querySelector("div #name");
const Email = Form.querySelector("div #email");
const Password = Form.querySelector("div #password");

Form.addEventListener("submit",formEvent);
function formEvent(e){
    e.preventDefault();
    // console.log(Name.value);
    // console.log(Email.value);
    // console.log(Password.value);
    const userInfo ={
        Name :Name.value,
        Email :Email.value,
        Password:Password.value,
    };
    console.log(userInfo);
    Name.value = "";
    Password.value = "";
    Email.value = "";
}