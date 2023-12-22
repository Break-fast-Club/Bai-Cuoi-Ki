 const toggleMusicCheckbox = document.getElementById('toggleMusic');
 const musicPlayer = document.getElementById('music');
       
     toggleMusicCheckbox.addEventListener('change', function() {
       
           if (toggleMusicCheckbox.checked) {
             musicPlayer.play();
           } else {
             musicPlayer.pause();
           }
         });

document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form

     // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    // Kiểm tra xem giá trị tìm kiếm có phải là "giải trí" hay không
    if (searchValue === 'giải trí') {
        // Chuyển hướng trang đến URL
        window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/game.html';
    } else {
        // Xử lý logic khác
        alert('Không tìm thấy kết quả cho từ khóa này!');
    }
});

document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form

     // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    if (searchValue === 'trang chủ') {
        // Chuyển hướng trang đến URL
        window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/index.html';
    } else {
        // Xử lý logic khác
        alert('Không tìm thấy kết quả cho từ khóa này!');
    }
});

document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form

     // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    if (searchValue === 'giới thiệu') {
        // Chuyển hướng trang đến URL
        window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/about.html';
    } else {
        // Xử lý logic khác
        alert('Không tìm thấy kết quả cho từ khóa này!');
    }
});

document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form

     // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    if (searchValue === 'thực đơn') {
        // Chuyển hướng trang đến URL
        window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/menu.html';
    } else {
        // Xử lý logic khác
        alert('Không tìm thấy kết quả cho từ khóa này!');
    }
});

document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form

     // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    if (searchValue === 'dịch vụ') {
        // Chuyển hướng trang đến URL
        window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/services.html';
    } else {
        // Xử lý logic khác
        alert('Không tìm thấy kết quả cho từ khóa này!');
    }
});

document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form

     // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    if (searchValue === 'liên hệ') {
        // Chuyển hướng trang đến URL
        window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/contact.html';
    } else {
        // Xử lý logic khác
        alert('Không tìm thấy kết quả cho từ khóa này!');
    }
});

