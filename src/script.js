function togglePayment() {

  document.getElementById("payment-section").style.display = 'block';


  document.getElementById("payment-amount").innerText = `$${window.selectedPrice}`;


  window.scrollTo(0, document.getElementById("payment-section").offsetTop);
}

function submitPayment() {
  const cardNumber = document.getElementById('card-number').value.trim();
  if (!cardNumber) {
    alert("Please enter your card number.");
    return;
  }
  
  window.location.href = 'confirmation.html';
}

function updatePrice(promoCard) {
  
  const price = promoCard.getAttribute('data-price');


  document.getElementById("total-amount").innerText = `$${price}`;

 
  window.selectedPrice = price;  
}




