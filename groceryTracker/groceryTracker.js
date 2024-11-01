function calculateTotal() {
    const grocery1 = parseFloat(document.getElementById("grocery1").value) || 0;
    const grocery2 = parseFloat(document.getElementById("grocery2").value) || 0;
    const grocery3 = parseFloat(document.getElementById("grocery3").value) || 0;

    const total = grocery1 + grocery2 + grocery3;
    document.getElementById("totalAmount").textContent = "The total amount is: $ " + total.toFixed(2);
}