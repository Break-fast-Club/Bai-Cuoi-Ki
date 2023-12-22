 const toggleMusicCheckbox = document.getElementById('toggleMusic');
 const musicPlayer = document.getElementById('music');
       
     toggleMusicCheckbox.addEventListener('change', function() {
       
           if (toggleMusicCheckbox.checked) {
             musicPlayer.play();
           } else {
             musicPlayer.pause();
           }
         });

//tìm kiếm
document.querySelector('.search-box').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của form
    const searchValue = document.getElementById('search-input').value.toLowerCase(); // Lấy giá trị nhập liệu và chuyển đổi thành chữ thường
    
    // Kiểm tra xem giá trị tìm kiếm có phải là "giải trí" hay không
    if (searchValue === 'giải trí') {
        // Chuyển hướng trang đến URL
        window.location.href = 'https://break-fast-club.github.io/Bai-Cuoi-Ki/game.html';
    } else {
        // Xử lý logic khác
        alert('Không tìm thấy kết quả cho từ khóa này!');
    }
});
