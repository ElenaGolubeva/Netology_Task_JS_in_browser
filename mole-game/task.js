
const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let wings = Number(dead.textContent);
let losts = Number(lost.textContent);

function checkGame(dead, lost) {
    console.log(dead, lost);
    if (dead === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lost === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wings += 1;
            dead.textContent = wings;
        } else {
            losts += 1;
            lost.textContent = losts;
        };
        checkGame(wings, losts);
    };
};
