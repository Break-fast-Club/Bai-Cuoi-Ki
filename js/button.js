// Nút bật/tắt nhạc
const toggleMusicCheckbox = document.getElementById('toggleMusic');
const musicPlayer = document.getElementById('music');
       
     toggleMusicCheckbox.addEventListener('change', function() {
       
           if (toggleMusicCheckbox.checked) {
             musicPlayer.play();
           } else {
             musicPlayer.pause();
           }
         });

// Tìm kiếm
document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form

    // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    const searchValue = document.getElementById('search-input').value.toLowerCase();

    // Kiểm tra từ khóa tìm kiếm và chuyển hướng trang
    switch (searchValue) {
        case 'giải trí':
            window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/game.html';
            break;
        case 'trang chủ':
            window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/index.html';
            break;
        case 'giới thiệu':
            window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/about.html';
            break;
        case 'thực đơn':
            window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/menu.html';
            break;
        case 'dịch vụ':
            window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/services.html';
            break;
        case 'liên hệ':
            window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/contact.html';
            break;
        default:
            alert('Không tìm thấy kết quả cho từ khóa này!');
            break;
    }
});
