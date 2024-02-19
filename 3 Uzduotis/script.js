let prekesKaina = prompt("Kokia yra prekes kaina");
console.log("Prekės kaina su PVM: " + prekesKaina + "€ ");

let pvm = prekesKaina * 0.21;
console.log("PVM: " + pvm.toFixed(2) + "€");

const bePVM = prekesKaina - pvm;
console.log("Prekes kaina be PVM: " + bePVM.toFixed(2));
