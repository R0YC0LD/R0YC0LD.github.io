let atomNumarası = 6; // Karbon atom numarası

function atomuGüncelle() {
    // Atom numarasına uygun proton ve nötron sayısını hesapla
    let protonSayısı = atomNumarası;
    let nötronSayısı = atomNumarası;

    // Protonları ve nötronları HTML'e ekle
    let protonHTML = '';
    let nötronHTML = '';
    for (let i = 0; i < protonSayısı; i++) {
        protonHTML += '<div class="top"></div>';
    }
    for (let i = 0; i < nötronSayısı; i++) {
        nötronHTML += '<div class="bottom"></div>';
    }
    document.getElementById('protonlar').innerHTML = protonHTML;
    document.getElementById('nötronlar').innerHTML = nötronHTML;

    // Elektronları HTML'e ekle
    let elektronHTML = '';
    for (let i = 0; i < 6; i++) { // Karbon atomunda 6 elektron
        let angle = (i / 6) * Math.PI * 2;
        let x = Math.cos(angle) * 100;
        let y = Math.sin(angle) * 100;
        elektronHTML += '<div class="electron" style="top: ' + (50 + y) + 'px; left: ' + (50 + x) + 'px;"></div>';
    }
    document.getElementById('elektronlar').innerHTML = elektronHTML;

    // Atomun simbol ve adını güncelle
    document.getElementById('atom-simbol').innerText = 'C'; // Karbon simbolü
    document.getElementById('atom-ad').innerText = 'Karbon';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        atomNumarası++; // Atom numarasını arttır
        atomuGüncelle(); // Atomu güncelle
    } else if (event.key === 'ArrowDown') {
        atomNumarası = Math.max(1, atomNumarası - 1); // Atom numarasını azalt, en az 1 olmalı
        atomuGüncelle(); // Atomu güncelle
    }
});

// Sayfa yüklendiğinde atomu oluştur
window.onload = atomuGüncelle;
