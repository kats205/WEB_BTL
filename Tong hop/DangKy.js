function CheckSignUp() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    var email = document.getElementById('signup-email').value;
    var phone = document.getElementById('signup-phone').value;

    // Biểu thức kiểm tra định dạng email
    var TestEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;;
    // Biểu thức kiểm tra định dạng số điện thoại (chỉ chứa số, 10-11 chữ số)
    var TestPhone = /^[0-9]{10,11}$/;

    // Kiểm tra tên đăng nhập không để trống
    if (username === ""||!username.includes(" ")) 
        alert("Tên đăng nhập không được để trống và phải chứa dấu cách!");

    // Kiểm tra mật khẩu không để trống và độ dài tối thiểu 6 ký tự
    else if (password === "")
        alert("Mật khẩu không được để trống!");
    else if (password.length < 6) 
        alert("Mật khẩu phải có ít nhất 6 ký tự!");

    // Kiểm tra định dạng email
    else if (email === "")
        alert("Email không được để trống!");
    else if (!TestEmail.test(email)) 
        alert("Định dạng email không hợp lệ!");

    // Kiểm tra số điện thoại không để trống và đúng định dạng
    else if (phone === "")
        alert("Số điện thoại không được để trống!");
    else if (!TestPhone.test(phone)) 
        alert("Số điện thoại không hợp lệ! Số điện thoại phải chứa 10 đến 11 số!" );
    //Đăng Ký
    else{
        alert("Đăng ký thành công!");
    }
}
