var atoms = [
    { name: "Hidrojen", symbol: "H", number: 1, electronCount: 1, neutronCount: 0, protonCount: 1 },
    // Diğer atomları buraya ekleyebilirsiniz
];

var currentIndex = 0;
var atomModel = document.getElementById("atomModel");
var atomName = document.getElementById("atomName");
var atomNumber = document.getElementById("atomNumber");
var electronCount = document.getElementById("electronCount");
var neutronCount = document.getElementById("neutronCount");
var protonCount = document.getElementById("protonCount");

function updateAtomInfo(index) {
    var atom = atoms[index];
    atomModel.textContent = atom.symbol;
    atomName.textContent = atom.name;
    atomNumber.textContent = atom.number;
    electronCount.textContent = atom.electronCount;
    neutronCount.textContent = atom.neutronCount;
    protonCount.textContent = atom.protonCount;
}

updateAtomInfo(currentIndex);

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        currentIndex = (currentIndex + 1) % atoms.length;
        updateAtomInfo(currentIndex);
    } else if (event.key === "ArrowDown") {
        currentIndex = (currentIndex - 1 + atoms.length) % atoms.length;
        updateAtomInfo(currentIndex);
    }
});
