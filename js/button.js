 const toggleMusicCheckbox = document.getElementById('toggleMusic');
 const musicPlayer = document.getElementById('music');
       
     toggleMusicCheckbox.addEventListener('change', function() {
       
           if (toggleMusicCheckbox.checked) {
             musicPlayer.play();
           } else {
             musicPlayer.pause();
           }
         });
       </script>
