// Müzik Yükleme Fonksiyonu
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle

    var formData = new FormData(this); // Form verilerini FormData nesnesine aktar

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to upload music file');
      }
      return response.text();
    })
    .then(message => {
      alert(message); // Yükleme başarılı olduğunda kullanıcıya mesaj göster
    })
    .catch(error => {
      console.error('Upload error:', error);
      alert('Failed to upload music file');
    });
});

// JavaScript ile Arama ve Kişiselleştirme Fonksiyonları
document.addEventListener('DOMContentLoaded', function() {
    // Arama Fonksiyonu
    document.getElementById('searchButton').addEventListener('click', function() {
        search();
    });

    // Kişiselleştirme Fonksiyonları
    var checkboxes = document.querySelectorAll('.personalization-options input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            toggleList(this.id.slice(4));
        });
    });
});

    
  // Giriş Fonksiyonu
  function loginUser() {
      var username = document.getElementById('loginUsername').value;
      var password = document.getElementById('loginPassword').value;
      // Kullanıcı girişi yapılacak işlemleri burada gerçekleştirin
      alert('Login with: ' + username + ', ' + password);
      return false; // Sayfanın yenilenmesini önler
  }
    
  // Kayıt Fonksiyonu
  function registerUser() {
      var username = document.getElementById('registerUsername').value;
      var email = document.getElementById('registerEmail').value;
      var password = document.getElementById('registerPassword').value;
      // Kullanıcı kaydı yapılacak işlemleri burada gerçekleştirin
      alert('Register with: ' + username + ', ' + email + ', ' + password);
      return false; // Sayfanın yenilenmesini önler
  }
    
  // JavaScript ile Arama ve Kişiselleştirme Fonksiyonları
  document.addEventListener('DOMContentLoaded', function() {
      // Arama Fonksiyonu
      document.getElementById('searchButton').addEventListener('click', function() {
        search();
      });
    
      // Kişiselleştirme Fonksiyonları
      var checkboxes = document.querySelectorAll('.personalization-options input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          toggleList(this.id.slice(4));
        });
      });
    
      // Giriş ve Kayıt Formları
      document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Sayfanın yenilenmesini önler
        loginUser();
      });
    
      document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Sayfanın yenilenmesini önler
        registerUser();
      });
  });
  