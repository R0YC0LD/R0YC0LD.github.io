let atomBilgileri = [
    { atomNumarasi: 1, elektronSayisi: 1, protonSayisi: 1, neutronSayisi: 0, sembol: "H", ad: "Hidrojen" },
    { atomNumarasi: 2, elektronSayisi: 2, protonSayisi: 2, neutronSayisi: 2, sembol: "He", ad: "Helyum" },
    { atomNumarasi: 3, elektronSayisi: 3, protonSayisi: 3, neutronSayisi: 4, sembol: "Li", ad: "Lityum" },
    { atomNumarasi: 4, elektronSayisi: 4, protonSayisi: 4, neutronSayisi: 5, sembol: "Be", ad: "Berilyum" },
    { atomNumarasi: 5, elektronSayisi: 5, protonSayisi: 5, neutronSayisi: 6, sembol: "B", ad: "Bor" },
    { atomNumarasi: 6, elektronSayisi: 6, protonSayisi: 6, neutronSayisi: 6, sembol: "C", ad: "Karbon" },
    { atomNumarasi: 7, elektronSayisi: 7, protonSayisi: 7, neutronSayisi: 7, sembol: "N", ad: "Azot" },
    { atomNumarasi: 8, elektronSayisi: 8, protonSayisi: 8, neutronSayisi: 8, sembol: "O", ad: "Oksijen" },
    { atomNumarasi: 9, elektronSayisi: 9, protonSayisi: 9, neutronSayisi: 10, sembol: "F", ad: "Flor" },
    { atomNumarasi: 10, elektronSayisi: 10, protonSayisi: 10, neutronSayisi: 12, sembol: "Ne", ad: "Neon" },
    { atomNumarasi: 11, elektronSayisi: 11, protonSayisi: 11, neutronSayisi: 12, sembol: "Na", ad: "Sodyum" },
    { atomNumarasi: 12, elektronSayisi: 12, protonSayisi: 12, neutronSayisi: 12, sembol: "Mg", ad: "Magnezyum" },
    { atomNumarasi: 13, elektronSayisi: 13, protonSayisi: 13, neutronSayisi: 14, sembol: "Al", ad: "Alüminyum" },
    { atomNumarasi: 14, elektronSayisi: 14, protonSayisi: 14, neutronSayisi: 14, sembol: "Si", ad: "Silisyum" },
    { atomNumarasi: 15, elektronSayisi: 15, protonSayisi: 15, neutronSayisi: 16, sembol: "P", ad: "Fosfor" },
    { atomNumarasi: 16, elektronSayisi: 16, protonSayisi: 16, neutronSayisi: 16, sembol: "S", ad: "Sülfür" },
    { atomNumarasi: 17, elektronSayisi: 17, protonSayisi: 17, neutronSayisi: 18, sembol: "Cl", ad: "Klor" },
    { atomNumarasi: 18, elektronSayisi: 18, protonSayisi: 18, neutronSayisi: 22, sembol: "Ar", ad: "Argon" },
    { atomNumarasi: 19, elektronSayisi: 19, protonSayisi: 19, neutronSayisi: 20, sembol: "K", ad: "Potasyum" },
    { atomNumarasi: 20, elektronSayisi: 20, protonSayisi: 20, neutronSayisi: 20, sembol: "Ca", ad: "Kalsiyum" },
    { atomNumarasi: 21, elektronSayisi: 21, protonSayisi: 21, neutronSayisi: 24, sembol: "Sc", ad: "Skandiyum" },
    { atomNumarasi: 22, elektronSayisi: 22, protonSayisi: 22, neutronSayisi: 26, sembol: "Ti", ad: "Titanyum" },
    { atomNumarasi: 23, elektronSayisi: 23, protonSayisi: 23, neutronSayisi: 28, sembol: "V", ad: "Vanadyum" },
    { atomNumarasi: 24, elektronSayisi: 24, protonSayisi: 24, neutronSayisi: 28, sembol: "Cr", ad: "Krom" },
    { atomNumarasi: 25, elektronSayisi: 25, protonSayisi: 25, neutronSayisi: 30, sembol: "Mn", ad: "Manganez" },
    { atomNumarasi: 26, elektronSayisi: 26, protonSayisi: 26, neutronSayisi: 30, sembol: "Fe", ad: "Demir" },
    { atomNumarasi: 27, elektronSayisi: 27, protonSayisi: 27, neutronSayisi: 32, sembol: "Co", ad: "Kobalt" },
    { atomNumarasi: 28, elektronSayisi: 28, protonSayisi: 28, neutronSayisi: 31, sembol: "Ni", ad: "Nikel" },
    { atomNumarasi: 29, elektronSayisi: 29, protonSayisi: 29, neutronSayisi: 35, sembol: "Cu", ad: "Bakır" },
    { atomNumarasi: 30, elektronSayisi: 30, protonSayisi: 30, neutronSayisi: 35, sembol: "Zn", ad: "Çinko" },
    { atomNumarasi: 31, elektronSayisi: 31, protonSayisi: 31, neutronSayisi: 38, sembol: "Ga", ad: "Galyum" },
    { atomNumarasi: 32, elektronSayisi: 32, protonSayisi: 32, neutronSayisi: 41, sembol: "Ge", ad: "Germaniyum" },
    { atomNumarasi: 33, elektronSayisi: 33, protonSayisi: 33, neutronSayisi: 42, sembol: "As", ad: "Arsenik" },
    { atomNumarasi: 34, elektronSayisi: 34, protonSayisi: 34, neutronSayisi: 45, sembol: "Se", ad: "Selenyum" },
    { atomNumarasi: 35, elektronSayisi: 35, protonSayisi: 35, neutronSayisi: 45, sembol: "Br", ad: "Brom" },
    { atomNumarasi: 36, elektronSayisi: 36, protonSayisi: 36, neutronSayisi: 48, sembol: "Kr", ad: "Kripton" },
    { atomNumarasi: 37, elektronSayisi: 37, protonSayisi: 37, neutronSayisi: 48, sembol: "Rb", ad: "Rubidyum" },
    { atomNumarasi: 38, elektronSayisi: 38, protonSayisi: 38, neutronSayisi: 50, sembol: "Sr", ad: "Stronsiyum" },
    { atomNumarasi: 39, elektronSayisi: 39, protonSayisi: 39, neutronSayisi: 50, sembol: "Y", ad: "Yttrium" },
    { atomNumarasi: 40, elektronSayisi: 40, protonSayisi: 40, neutronSayisi: 50, sembol: "Zr", ad: "Zirkonyum" },
    { atomNumarasi: 41, elektronSayisi: 41, protonSayisi: 41, neutronSayisi: 52, sembol: "Nb", ad: "Niobyum" },
    { atomNumarasi: 42, elektronSayisi: 42, protonSayisi: 42, neutronSayisi: 54, sembol: "Mo", ad: "Molibden" },
    { atomNumarasi: 43, elektronSayisi: 43, protonSayisi: 43, neutronSayisi: 56, sembol: "Tc", ad: "Teknesyum" },
    { atomNumarasi: 44, elektronSayisi: 44, protonSayisi: 44, neutronSayisi: 58, sembol: "Ru", ad: "Ruthenyum" },
    { atomNumarasi: 45, elektronSayisi: 45, protonSayisi: 45, neutronSayisi: 58, sembol: "Rh", ad: "Rodyum" },
    { atomNumarasi: 46, elektronSayisi: 46, protonSayisi: 46, neutronSayisi: 60, sembol: "Pd", ad: "Paladyum" },
    { atomNumarasi: 47, elektronSayisi: 47, protonSayisi: 47, neutronSayisi: 60, sembol: "Ag", ad: "Gümüş" },
    { atomNumarasi: 48, elektronSayisi: 48, protonSayisi: 48, neutronSayisi: 62, sembol: "Cd", ad: "Kadmiyum" },
    { atomNumarasi: 49, elektronSayisi: 49, protonSayisi: 49, neutronSayisi: 64, sembol: "In", ad: "Indiyum" },
    { atomNumarasi: 50, elektronSayisi: 50, protonSayisi: 50, neutronSayisi: 66, sembol: "Sn", ad: "Kalay" }
];

// Başlangıçta gösterilecek atom indeksi
let suankiAtomIndex = 0;

// Atom modelini güncelle
function atomModeliniGuncelle() {
    const suankiAtom = atomBilgileri[suankiAtomIndex];
    document.getElementById("atomNumber").innerText = suankiAtom.atomNumarasi;
    document.getElementById("electronNumber").innerText = suankiAtom.elektronSayisi;
    document.getElementById("protonNumber").innerText = suankiAtom.protonSayisi;
    document.getElementById("neutronNumber").innerText = suankiAtom.neutronSayisi;
    document.querySelector(".nucleus").innerText = suankiAtom.sembol;
}

// Atom numarasını arttır
function atomNumarasiniArttir() {
    if (suankiAtomIndex < atomBilgileri.length - 1) {
        suankiAtomIndex++;
        atomModeliniGuncelle();
    }
}

// Atom numarasını azalt
function atomNumarasiniAzalt() {
    if (suankiAtomIndex > 0) {
        suankiAtomIndex--;
        atomModeliniGuncelle();
    }
}

// Sayfa yüklendiğinde atom modelini oluştur
window.onload = function() {
    atomModeliniGuncelle();
};

// Klavye olaylarını dinle
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        atomNumarasiniArttir();
    } else if (event.key === "ArrowDown") {
        atomNumarasiniAzalt();
    }
});