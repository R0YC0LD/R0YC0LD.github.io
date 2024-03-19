// Örnek olarak, sunucuya istekte bulunan fonksiyon
function playMusic() {
    fetch('/playMusic') // Sunucuya istek gönder
        .then(response => {
            // Sunucudan gelen cevabı kontrol et ve gerekli işlemleri yap
            if (response.ok) {
                console.log('Music played successfully');
            } else {
                console.error('Failed to play music');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

// Örnek olarak, müziği duraklatan fonksiyon
function pauseMusic() {
    fetch('/pauseMusic')
        .then(response => {
            if (response.ok) {
                console.log('Music paused successfully');
            } else {
                console.error('Failed to pause music');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

// ve benzeri diğer işlevler...
