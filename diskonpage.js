var claimButtons = document.querySelectorAll('.claim-button');

// Loop melalui setiap button dan tambahkan event listener
claimButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Ambil elemen sibling dengan class "claim-message" dari button yang diklik
        var claimMessage = this.nextElementSibling;
        // Tambahkan teks "Selamat Anda mendapatkan diskon" ke dalam elemen tersebut
        claimMessage.textContent = 'Selamat Anda mendapatkan diskon';
    });
});