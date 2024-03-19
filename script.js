var atoms = [
    { name: "Hidrojen", symbol: "H", number: 1, electronCount: 1, neutronCount: 0, protonCount: 1 },
    { name: "Helyum", symbol: "He", number: 2, electronCount: 2, neutronCount: 2, protonCount: 2 },
    { name: "Lityum", symbol: "Li", number: 3, electronCount: 3, neutronCount: 4, protonCount: 3 },
    { name: "Berilyum", symbol: "Be", number: 4, electronCount: 4, neutronCount: 5, protonCount: 4 },
    { name: "Bor", symbol: "B", number: 5, electronCount: 5, neutronCount: 6, protonCount: 5 },
    { name: "Karbon", symbol: "C", number: 6, electronCount: 6, neutronCount: 6, protonCount: 6 },
    { name: "Azot", symbol: "N", number: 7, electronCount: 7, neutronCount: 7, protonCount: 7 },
    { name: "Oksijen", symbol: "O", number: 8, electronCount: 8, neutronCount: 8, protonCount: 8 },
    { name: "Flor", symbol: "F", number: 9, electronCount: 9, neutronCount: 10, protonCount: 9 },
    { name: "Neon", symbol: "Ne", number: 10, electronCount: 10, neutronCount: 10, protonCount: 10 },
    { name: "Sodyum", symbol: "Na", number: 11, electronCount: 11, neutronCount: 12, protonCount: 11 },
    { name: "Magnezyum", symbol: "Mg", number: 12, electronCount: 12, neutronCount: 12, protonCount: 12 },
    { name: "Alüminyum", symbol: "Al", number: 13, electronCount: 13, neutronCount: 14, protonCount: 13 },
    { name: "Silikon", symbol: "Si", number: 14, electronCount: 14, neutronCount: 14, protonCount: 14 },
    { name: "Fosfor", symbol: "P", number: 15, electronCount: 15, neutronCount: 16, protonCount: 15 },
    { name: "Kükürt", symbol: "S", number: 16, electronCount: 16, neutronCount: 16, protonCount: 16 },
    { name: "Klor", symbol: "Cl", number: 17, electronCount: 17, neutronCount: 18, protonCount: 17 },
    { name: "Argon", symbol: "Ar", number: 18, electronCount: 18, neutronCount: 22, protonCount: 18 },
    { name: "Potasyum", symbol: "K", number: 19, electronCount: 19, neutronCount: 20, protonCount: 19 },
    { name: "Kalsiyum", symbol: "Ca", number: 20, electronCount: 20, neutronCount: 20, protonCount: 20 },
    { name: "Skandiyum", symbol: "Sc", number: 21, electronCount: 21, neutronCount: 24, protonCount: 21 },
    { name: "Titanyum", symbol: "Ti", number: 22, electronCount: 22, neutronCount: 26, protonCount: 22 },
    { name: "Vanadyum", symbol: "V", number: 23, electronCount: 23, neutronCount: 28, protonCount: 23 },
    { name: "Krom", symbol: "Cr", number: 24, electronCount: 24, neutronCount: 28, protonCount: 24 },
    { name: "Mangan", symbol: "Mn", number: 25, electronCount: 25, neutronCount: 30, protonCount: 25 },
    { name: "Demir", symbol: "Fe", number: 26, electronCount: 26, neutronCount: 30, protonCount: 26 },
    { name: "Kobalt", symbol: "Co", number: 27, electronCount: 27, neutronCount: 32, protonCount: 27 },
    { name: "Nikel", symbol: "Ni", number: 28, electronCount: 28, neutronCount: 31, protonCount: 28 },
    { name: "Bakır", symbol: "Cu", number: 29, electronCount: 29, neutronCount: 35, protonCount: 29 },
    { name: "Çinko", symbol: "Zn", number: 30, electronCount: 30, neutronCount: 35, protonCount: 30 },
    { name: "Galyum", symbol: "Ga", number: 31, electronCount: 31, neutronCount: 39, protonCount: 31 },
    { name: "Germanyum", symbol: "Ge", number: 32, electronCount: 32, neutronCount: 41, protonCount: 32 },
    { name: "Arsenik", symbol: "As", number: 33, electronCount: 33, neutronCount: 42, protonCount: 33 },
    { name: "Selenyum", symbol: "Se", number: 34, electronCount: 34, neutronCount: 45, protonCount: 34 },
    { name: "Brom", symbol: "Br", number: 35, electronCount: 35, neutronCount: 45, protonCount: 35 },
    { name: "Kripton", symbol: "Kr", number: 36, electronCount: 36, neutronCount: 48, protonCount: 36 },
    { name: "Rubidyum", symbol: "Rb", number: 37, electronCount: 37, neutronCount: 48, protonCount: 37 },
    { name: "Stronsiyum", symbol: "Sr", number: 38, electronCount: 38, neutronCount: 50, protonCount: 38 },
    { name: "İtriyum", symbol: "Y", number: 39, electronCount: 39, neutronCount: 50, protonCount: 39 },
    { name: "Zirkonyum", symbol: "Zr", number: 40, electronCount: 40, neutronCount: 51, protonCount: 40 },
    { name: "Niobyum", symbol: "Nb", number: 41, electronCount: 41, neutronCount: 52, protonCount: 41 },
    { name: "Molibden", symbol: "Mo", number: 42, electronCount: 42, neutronCount: 54, protonCount: 42 },
    { name: "Teknesyum", symbol: "Tc", number: 43, electronCount: 43, neutronCount: 55, protonCount: 43 },
    { name: "Rutenyum", symbol: "Ru", number: 44, electronCount: 44, neutronCount: 57, protonCount: 44 },
    { name: "Rodiyum", symbol: "Rh", number: 45, electronCount: 45, neutronCount: 58, protonCount: 45 },
    { name: "Paladyum", symbol: "Pd", number: 46, electronCount: 46, neutronCount: 60, protonCount: 46 },
    { name: "Gümüş", symbol: "Ag", number: 47, electronCount: 47, neutronCount: 61, protonCount: 47 },
    { name: "Kadmiyum", symbol: "Cd", number: 48, electronCount: 48, neutronCount: 64, protonCount: 48 },
    { name: "İnç", symbol: "In", number: 49, electronCount: 49, neutronCount: 66, protonCount: 49 },
    { name: "Kalay", symbol: "Sn", number: 50, electronCount: 50, neutronCount: 69, protonCount: 50 },
    { name: "Antimon", symbol: "Sb", number: 51, electronCount: 51, neutronCount: 71, protonCount: 51 },
    { name: "Telur", symbol: "Te", number: 52, electronCount: 52, neutronCount: 76, protonCount: 52 },
    { name: "İyot", symbol: "I", number: 53, electronCount: 53, neutronCount: 74, protonCount: 53 },
    { name: "Ksenon", symbol: "Xe", number: 54, electronCount: 54, neutronCount: 77, protonCount: 54 },
    { name: "Seryum", symbol: "Cs", number: 55, electronCount: 55, neutronCount: 78, protonCount: 55 },
    { name: "Barium", symbol: "Ba", number: 56, electronCount: 56, neutronCount: 81, protonCount: 56 },
    { name: "Lantan", symbol: "La", number: 57, electronCount: 57, neutronCount: 82, protonCount: 57 },
    { name: "Hafniyum", symbol: "Hf", number: 72, electronCount: 72, neutronCount: 106, protonCount: 72 },
    { name: "Tantal", symbol: "Ta", number: 73, electronCount: 73, neutronCount: 108, protonCount: 73 },
    { name: "Tungsten", symbol: "W", number: 74, electronCount: 74, neutronCount: 110, protonCount: 74 },
    { name: "Rhenium", symbol: "Re", number: 75, electronCount: 75, neutronCount: 111, protonCount: 75 },
    { name: "Osmium", symbol: "Os", number: 76, electronCount: 76, neutronCount: 114, protonCount: 76 },
    { name: "Iridium", symbol: "Ir", number: 77, electronCount: 77, neutronCount: 115, protonCount: 77 },
    { name: "Platinum", symbol: "Pt", number: 78, electronCount: 78, neutronCount: 117, protonCount: 78 },
    { name: "Gold", symbol: "Au", number: 79, electronCount: 79, neutronCount: 118, protonCount: 79 },
    { name: "Mercury", symbol: "Hg", number: 80, electronCount: 80, neutronCount: 121, protonCount: 80 },
    { name: "Thallium", symbol: "Tl", number: 81, electronCount: 81, neutronCount: 123, protonCount: 81 },
    { name: "Lead", symbol: "Pb", number: 82, electronCount: 82, neutronCount: 125, protonCount: 82 },
    { name: "Bismuth", symbol: "Bi", number: 83, electronCount: 83, neutronCount: 126, protonCount: 83 },
    { name: "Polonium", symbol: "Po", number: 84, electronCount: 84, neutronCount: 125, protonCount: 84 },
    { name: "Astatine", symbol: "At", number: 85, electronCount: 85, neutronCount: 127, protonCount: 85 },
    { name: "Radon", symbol: "Rn", number: 86, electronCount: 86, neutronCount: 136, protonCount: 86 },
    { name: "Francium", symbol: "Fr", number: 87, electronCount: 87, neutronCount: 136, protonCount: 87 },
    { name: "Radium", symbol: "Ra", number: 88, electronCount: 88, neutronCount: 138, protonCount: 88 },
    { name: "Actinium", symbol: "Ac", number: 89, electronCount: 89, neutronCount: 138, protonCount: 89 },
    { name: "Thorium", symbol: "Th", number: 90, electronCount: 90, neutronCount: 142, protonCount: 90 },
    { name: "Protactinium", symbol: "Pa", number: 91, electronCount: 91, neutronCount: 140, protonCount: 91 },
    { name: "Uranium", symbol: "U", number: 92, electronCount: 92, neutronCount: 146, protonCount: 92 },
    { name: "Neptunium", symbol: "Np", number: 93, electronCount: 93, neutronCount: 144, protonCount: 93 },
    { name: "Plutonium", symbol: "Pu", number: 94, electronCount: 94, neutronCount: 150, protonCount: 94 },
    { name: "Americium", symbol: "Am", number: 95, electronCount: 95, neutronCount: 148, protonCount: 95 },
    { name: "Curium", symbol: "Cm", number: 96, electronCount: 96, neutronCount: 151, protonCount: 96 },
    { name: "Berkelium", symbol: "Bk", number: 97, electronCount: 97, neutronCount: 150, protonCount: 97 },
    { name: "Californium", symbol: "Cf", number: 98, electronCount: 98, neutronCount: 153, protonCount: 98 },
    { name: "Einsteinium", symbol: "Es", number: 99, electronCount: 99, neutronCount: 153, protonCount: 99 },
    { name: "Fermium", symbol: "Fm", number: 100, electronCount: 100, neutronCount: 157, protonCount: 100 }
    // Diğer atomları buraya ekleyebilirsiniz
];

var currentIndex = 0;
var atomInfo = document.getElementById("atomInfo");

function displayAtom(index) {
    var atom = atoms[index];
    atomInfo.innerHTML = "<h2>" + atom.name + "</h2>" +
        "<p>Atom Numarası: " + atom.number + "</p>" +
        "<p>Sembol: " + atom.symbol + "</p>" +
        "<p>Proton Sayısı: " + atom.protonCount + "</p>" +
        "<p>Elektron Sayısı: " + atom.electronCount + "</p>" +
        "<p>Neutron Sayısı: " + atom.neutronCount + "</p>";
}

displayAtom(currentIndex);

document.getElementById("nextAtom").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % atoms.length;
    displayAtom(currentIndex);
});

document.getElementById("prevAtom").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + atoms.length) % atoms.length;
    displayAtom(currentIndex);
});

// Üç boyutlu sahne oluştur
var scene = new THREE.Scene();

// Kamera oluştur
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer oluştur
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 100 Atom ekleyin
for (var i = 0; i < 100; i++) {
    var atomMesh = new THREE.Mesh(geometry, material);
    atomMesh.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10);
    scene.add(atomMesh);
}

// Render fonksiyonunu tanımla
function animate() {
    requestAnimationFrame(animate);

    // Atomları döndür
    scene.children.forEach(function (atomMesh) {
        atomMesh.rotation.x += 0.01;
        atomMesh.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

// Render fonksiyonunu çağır
animate();
// Elektronların orijinal pozisyonları
var electronPositions = [];

// Elektronları atom modeline bağlayın
for (var i = 0; i < electrons.length; i++) {
    var electron = electrons[i];
    var angle = (i / electrons.length) * Math.PI * 2; // Elektronun yörüngesindeki açı
    var radius = 2; // Elektronun yörüngesi çapı

    var x = Math.cos(angle) * radius;
    var y = 0; // Elektron yüksekliği (yerden)
    var z = Math.sin(angle) * radius;

    electron.position.set(x, y, z); // Elektronun pozisyonunu ayarlayın
    scene.add(electron);

    electronPositions.push({ angle: angle }); // Elektronun orijinal açısını saklayın
}

// Elektronların yörüngesinde dönme animasyonu
function animateElectrons() {
    requestAnimationFrame(animateElectrons);

    // Her bir elektronun yörüngesinde dönme
    for (var i = 0; i < electrons.length; i++) {
        var electron = electrons[i];
        var position = electronPositions[i];
        position.angle += 0.01; // Elektronun her bir karede dönme miktarı

        // Yeni pozisyonu hesapla
        var x = Math.cos(position.angle) * radius;
        var z = Math.sin(position.angle) * radius;

        // Elektronun yeni pozisyonunu ayarla
        electron.position.x = x;
        electron.position.z = z;
    }

    renderer.render(scene, camera); // Sahneyi yeniden çizin
}

// Animasyonu başlat
animateElectrons();
// Var olan kodlarınız burada

// Yeni kod parçacığını buraya ekleyin
// Atom modelini oluştur
var geometry = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var atom = new THREE.Mesh(geometry, material);
scene.add(atom);

// Elektronları oluştur
var electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
var electronMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var electrons = [];

// ... Diğer kodlar burada devam eder ...
