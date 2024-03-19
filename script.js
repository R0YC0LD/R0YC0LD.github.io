// Atom numarasına göre element bilgisini al
function elementBilgisiAl(atomNumarası) {
    // Atom bilgileri
    const atomlar = [
        {
            numara: 1,
            simbol: 'H',
            ad: 'Hidrojen',
            proton: 1,
            nötron: 0
        },
        {
            numara: 2,
            simbol: 'He',
            ad: 'Helyum',
            proton: 2,
            nötron: 2
        },
        {
            numara: 3,
            simbol: 'Li',
            ad: 'Lityum',
            proton: 3,
            nötron: 4
        },
        {
            numara: 4,
            simbol: 'Be',
            ad: 'Berilyum',
            proton: 4,
            nötron: 5
        },
        {
            numara: 5,
            simbol: 'B',
            ad: 'Bor',
            proton: 5,
            nötron: 6
        },
        {
            numara: 6,
            simbol: 'C',
            ad: 'Karbon',
            proton: 6,
            nötron: 6
        },
        {
            numara: 7,
            simbol: 'N',
            ad: 'Azot',
            proton: 7,
            nötron: 7
        },
        {
            numara: 8,
            simbol: 'O',
            ad: 'Oksijen',
            proton: 8,
            nötron: 8
        },
        {
            numara: 9,
            simbol: 'F',
            ad: 'Flor',
            proton: 9,
            nötron: 10
        },
        {
            numara: 10,
            simbol: 'Ne',
            ad: 'Neon',
            proton: 10,
            nötron: 10
        },
        {
            numara: 11,
            simbol: 'Na',
            ad: 'Sodyum',
            proton: 11,
            nötron: 12
        },
        {
            numara: 12,
            simbol: 'Mg',
            ad: 'Magnezyum',
            proton: 12,
            nötron: 12
        },
        {
            numara: 13,
            simbol: 'Al',
            ad: 'Alüminyum',
            proton: 13,
            nötron: 14
        },
        {
            numara: 14,
            simbol: 'Si',
            ad: 'Silisyum',
            proton: 14,
            nötron: 14
        },
        {
            numara: 15,
            simbol: 'P',
            ad: 'Fosfor',
            proton: 15,
            nötron: 16
        },
        {
            numara: 16,
            simbol: 'S',
            ad: 'Kükürt',
            proton: 16,
            nötron: 16
        },
        {
            numara: 17,
            simbol: 'Cl',
            ad: 'Klor',
            proton: 17,
            nötron: 18
        },
        {
            numara: 18,
            simbol: 'Ar',
            ad: 'Argon',
            proton: 18,
            nötron: 22
        },
        {
            numara: 19,
            simbol: 'K',
            ad: 'Potasyum',
            proton: 19,
            nötron: 20
        },
        {
            numara: 20,
            simbol: 'Ca',
            ad: 'Kalsiyum',
            proton: 20,
            nötron: 20
        },
        {
            numara: 21,
            simbol: 'Sc',
            ad: 'Skandiyum',
            proton: 21,
            nötron: 24
        },
        {
            numara: 22,
            simbol: 'Ti',
            ad: 'Titanyum',
            proton: 22,
            nötron: 26
        },
        {
            numara: 23,
            simbol: 'V',
            ad: 'Vanadyum',
            proton: 23,
            nötron: 28
        },
        {
            numara: 24,
            simbol: 'Cr',
            ad: 'Krom',
            proton: 24,
            nötron: 28
        },
        {
            numara: 25,
            simbol: 'Mn',
            ad: 'Manganez',
            proton: 25,
            nötron: 30
        },
        {
            numara: 26,
            simbol: 'Fe',
            ad: 'Demir',
            proton: 26,
            nötron: 30
        },
        {
            numara: 27,
            simbol: 'Co',
            ad: 'Kobalt',
            proton: 27,
            nötron: 32
        },
        {
            numara: 28,
            simbol: 'Ni',
            ad: 'Nikel',
            proton: 28,
            nötron: 31
        },
        {
            numara: 29,
            simbol: 'Cu',
            ad: 'Bakır',
            proton: 29,
            nötron: 35
        },
        {
            numara: 30,
            simbol: 'Zn',
            ad: 'Çinko',
            proton: 30,
            nötron: 35
        },
        {
            numara: 31,
            simbol: 'Ga',
            ad: 'Galyum',
            proton: 31,
            nötron: 39
        },
        {
            numara: 32,
            simbol: 'Ge',
            ad: 'Germanyum',
            proton: 32,
            nötron: 41
        },
        {
            numara: 33,
            simbol: 'As',
            ad: 'Arsenik',
            proton: 33,
            nötron: 42
        },
        {
            numara: 34,
            simbol: 'Se',
            ad: 'Selenyum',
            proton: 34,
            nötron: 45
        },
        {
            numara: 35,
            simbol: 'Br',
            ad: 'Brom',
            proton: 35,
            nötron: 45
        },
        {
            numara: 36,
            simbol: 'Kr',
            ad: 'Kripton',
            proton: 36,
            nötron: 48
        },
        {
            numara: 37,
            simbol: 'Rb',
            ad: 'Rubidyum',
            proton: 37,
            nötron: 48
        },
        {
            numara: 38,
            simbol: 'Sr',
            ad: 'Stronsiyum',
            proton: 38,
            nötron: 50
        },
        {
            numara: 39,
            simbol: 'Y',
            ad: 'İtriyum',
            proton: 39,
            nötron: 50
        },
        {
            numara: 40,
            simbol: 'Zr',
            ad: 'Zirkonyum',
            proton: 40,
            nötron: 50
        },
        {
            numara: 41,
            simbol: 'Nb',
            ad: 'Niobyum',
            proton: 41,
            nötron: 52
        },
        {
            numara: 42,
            simbol: 'Mo',
            ad: 'Molibden',
            proton: 42,
            nötron: 54
        },
        {
            numara: 43,
            simbol: 'Tc',
            ad: 'Teknesyum',
            proton: 43,
            nötron: 55
        },
        {
            numara: 44,
            simbol: 'Ru',
            ad: 'Rutenyum',
            proton: 44,
            nötron: 57
        },
        {
            numara: 45,
            simbol: 'Rh',
            ad: 'Rodyum',
            proton: 45,
            nötron: 58
        },
        {
            numara: 46,
            simbol: 'Pd',
            ad: 'Paladyum',
            proton: 46,
            nötron: 60
        },
        {
            numara: 47,
            simbol: 'Ag',
            ad: 'Gümüş',
            proton: 47,
            nötron: 61
        },
        {
            numara: 48,
            simbol: 'Cd',
            ad: 'Kadmiyum',
            proton: 48,
            nötron: 64
        },
        {
            numara: 49,
            simbol: 'In',
            ad: 'İndiyum',
            proton: 49,
            nötron: 66
        },
        {
            numara: 50,
            simbol: 'Sn',
            ad: 'Kalay',
            proton: 50,
            nötron: 69
        }
    ];

    // Verilen atom numarasına göre uygun atom bilgisini döndür
    for (let i = 0; i < atomlar.length; i++) {
        if (atomlar[i].numara === atomNumarası) {
            return atomlar[i];
        }
    }

    // Eğer verilen numara listede yoksa, boş bir nesne döndür
    return {
        simbol: '',
        ad: '',
        proton: 0,
        nötron: 0
    };
}
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
