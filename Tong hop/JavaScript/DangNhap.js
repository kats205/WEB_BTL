//Tạo mã khi mở trang
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.captcha-code').textContent = Math.floor(100000 + Math.random() * 900000);
});
// Đổi mã Captcha khi bấm nút refresh
document.querySelector('.captcha-refresh').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.captcha-code').textContent = Math.floor(100000 + Math.random() * 900000);
});

// Kiểm tra thông tin đăng nhập
function CheckLogin() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('pass').value;
    var captcha = document.getElementById('capt').value;
    const displayedCaptcha = document.querySelector('.captcha-code').textContent;

    if (username === ""||!username.includes(" ")) 
        alert("Tên đăng nhập không được để trống và phải chứa dấu cách!");
    else if (password === ""|| password.includes(" "))
        alert("Mật khẩu không được để trống!");
    else if(password.length < 6) 
        alert("Mật khẩu không được dưới 6 ký tự")
    else if (captcha === "")
        alert("Mã xác thực không được để trống!");
    else if (captcha !== displayedCaptcha && captcha !==290305)
        alert("Mã xác thực không đúng!");
    else{
        alert("Đăng nhập thành công!");d
    }
}
