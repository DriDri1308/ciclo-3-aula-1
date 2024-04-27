document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showDiscountQuestion();
});

function showDiscountQuestion() {
    const discountQuestion = document.getElementById('discount-question');
    discountQuestion.classList.remove('hidden');
}

function applyDiscount(applyDiscount) {
    const totalWithDiscount = calculateBill(applyDiscount);
    displayResults(totalWithDiscount);
}

function calculateBill(applyDiscount) {
    const numPeople = parseInt(document.getElementById('num-people').value);
    const totalBill = parseFloat(document.getElementById('total-bill').value);
    const paymentMethod = document.getElementById('payment-method').value;

    let discountRate = 0;
    if (applyDiscount && (paymentMethod === 'pix' || paymentMethod === 'cash')) {
        discountRate = 0.1; // 10% de desconto para PIX ou dinheiro
    }

    return (1 - discountRate) * totalBill;
}

function displayResults(totalWithDiscount) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';

    document.getElementById('total-with-discount').textContent = 'R$ ' + totalWithDiscount.toFixed(2);
}