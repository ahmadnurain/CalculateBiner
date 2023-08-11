function konversi() {
  const inputangka = document.getElementById("inputangka").value;
  const selection = document.getElementById("selection");
  const userSelect = selection.options.selectedIndex;
  if (userSelect == 1) {
    const angka = parseInt(inputangka);
    const desimal = angka;
    const biner = angka.toString(2);
    const oktal = angka.toString(8);
    const hex = angka.toString(16).toUpperCase();

    document.getElementById("inputdec").value = desimal;
    document.getElementById("inputbin").value = biner;
    document.getElementById("inputokt").value = oktal;
    document.getElementById("inputhex").value = hex;
  } else if (userSelect == 2) {
    const angka = parseInt(inputangka, 2);
    const desimal = angka.toString(10);
    const biner = angka.toString(2);
    const oktal = angka.toString(8);
    const hex = angka.toString(16).toUpperCase();

    document.getElementById("inputdec").value = desimal;
    document.getElementById("inputbin").value = biner;
    document.getElementById("inputokt").value = oktal;
    document.getElementById("inputhex").value = hex;
  } else if (userSelect == 3) {
    const angka = parseInt(inputangka, 8);
    const desimal = angka.toString(10);
    const biner = angka.toString(2);
    const oktal = angka.toString(8);
    const hex = angka.toString(16).toUpperCase();

    document.getElementById("inputdec").value = desimal;
    document.getElementById("inputbin").value = biner;
    document.getElementById("inputokt").value = oktal;
    document.getElementById("inputhex").value = hex;
  } else if (userSelect == 4) {
    const angka = parseInt(inputangka, 16);
    const desimal = angka.toString(10);
    const biner = angka.toString(2);
    const oktal = angka.toString(8);
    const hex = angka.toString(16).toUpperCase();

    document.getElementById("inputdec").value = desimal;
    document.getElementById("inputbin").value = biner;
    document.getElementById("inputokt").value = oktal;
    document.getElementById("inputhex").value = hex;
  } else {
  }
}
