function displayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    document.getElementById("currentDate").innerText = `${day}.${month}.${year}`;
}
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Hien thi hai hinh anh dau tien
function showImages(index) {
    const firstIndex = index % totalImages;
    const secondIndex = (index + 1) % totalImages;

    //An tat ca hinh anh
    images.forEach((img) => img.classList.remove('active'));

    // Hien hai hinh anh
    images[firstIndex].classList.add('active');
    images[secondIndex].classList.add('active');
}

// Hien thi hai hinh anh dau tien khi trang tai xong
showImages(currentIndex);

// Chuyen doi hinh anh tu dong trong 3s
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImages(currentIndex);
}, 3000); // Thay doi anh sau 3s

displayDate(); //Hien thi ngay hom nay khi trang tai xong
