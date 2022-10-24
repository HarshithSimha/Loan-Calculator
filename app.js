// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);
    e.preventDefault();
});
// Calculate Results
function calculateResults(e) {
    console.log('Calculating..');
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const montlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
}