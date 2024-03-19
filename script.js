// Öncelikle, değiştirilecek metinleri bir diziye yerleştirelim
var texts = ["Metin 1", "Metin 2", "Metin 3"];
var currentIndex = 0; // Başlangıçta ilk metni göstermek için indeks

// Değişecek olan div elementini seçin
var changingText = document.getElementById("changingText");

// Yukarı ok tuşuna basıldığında metni değiştirecek bir olay dinleyici ekleyin
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        // Metin dizisinde bir sonraki metne geçin
        currentIndex = (currentIndex + 1) % texts.length;
        // Değişen metni güncelleyin
        changingText.textContent = texts[currentIndex];
    }
});
