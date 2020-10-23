let user =[
    {
        email : 'admin123@gmail.com',
        userName : 'admin dep trai',
        password : 'Anh213210',
        role: 'admin'
    },
    {
        userName : 'duyet tran',
        name : 'Trần Quang Duyệt',
        age : 20,
        address : '20 Đồng Me , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969907663`,
        email : 'hieuminhtran050300@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {   
        userName : 'hieuthuba',
        name : 'Đỗ Duy Hiếu',
        age : 21,
        address : '1207C kdt Linh Đàm , Hà Nội',
        phoneNumber : `0123456789`,
        email : 'duyhieu99@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'long bot',
        name : 'Nguyễn bảo Long',
        age : 20,
        address : '14 ngõ 32/47 Đỗ Đức Dục , Mễ Trì , Nam Từ Liêm , Hà Nội',
        phoneNumber : `0969567890`,
        email : 'longbot00@gmail.com',
        password : '123456789',
        role : 'client',
    },
    {
        userName : 'vietbatkhuat',
        name : 'Khuất Quang Việt',
        age : 20,
        address : '79 Lê Trọng Tấn, Hà Đông , Hà Nội',
        phoneNumber : `0382512348`,
        email : 'vietkhuat00@gmail.com',
        password : '123456789',
        role : 'client',
    },
]
let loginForm =  document.getElementById('login_form');
let regiterForm = document.getElementById('register_form');
let btnLogin = document.getElementById("btn_login");
let btnSubmit = document.getElementById("btnSubmit");
let btnLogout = document.getElementById("btn_logout");
let btnRegister =  document.getElementById("btn_register");
let btnSubmitRegister = document.getElementById("btn_submitRegister");
let userName = document.getElementById("userName");
let password = document.getElementById("pass");
let newUserName = document.getElementById("nUName");
let passwordRegister = document.getElementById("pass2");
let confirmPassword = document.getElementById("cfPassword");

//sự kiện của nút login và sign up
btnLogin.addEventListener("click", function(){
    showLoginform();
});

btnSubmit.addEventListener("click", function(){
    for(let i=0; i<user.length;i++){
        if( userName.value === user[i].userName && password.value === user[i].password){
            if (user[i].role == "admin"){
                showadminform();
            } else if (user[i].role == "client"){
                alert("xin chào " + user[i].userName );
                showClientform();
            }
        }
    }
});

btnRegister.addEventListener("click", function(){
    showSignupform();
});

btnSubmitRegister.addEventListener("click", function(){
    if (passwordRegister.value === confirmPassword.value){
        var newClient = {
            email: email.value,
            userName: newUserName.value,
            password: passwordRegister.value,
            role: "client"
        }
            user.push(newClient)
            console.log(user);
            showLoginform();
    }   else {
        alert("Đăng ký thất bại");
    }
});

btnLogout.addEventListener("click",function(){
    showLoginform();
});

// function cho login và sign up
function showLoginform(){
    loginForm.style.display = "block";
    btnLogin.style.display = "block";
    cartForm.style.display = "block";
    regiterForm.style.display = "none";
    userForm.style.display = "none";
}

function showSignupform(){
    regiterForm.style.display = "block";
    loginForm.style.display = "none";
}

function showadminform(){
    adminForm.style.display = "block";
    loginForm.style.display = "none";
    btnLogout.style.display = "block";
    btnLogin.style.display = "none";
}

function showClientform(){
    loginForm.style.display = "none";
    btnLogin.style.display= "none";
    userForm.style.display = "block";
    cartForm.style.display = "block";
    btnLogout.style.display = "block";
}