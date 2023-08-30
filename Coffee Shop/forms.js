const form = document.getElementById('paymentForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Validação dos campos
      const cardNumber = document.getElementById('cardNumber').value;
      const cardHolder = document.getElementById('cardHolder').value;
      const expiryDate = document.getElementById('expiryDate').value;
      const cvv = document.getElementById('cvv').value;

      // Simulação do processamento do pagamento
      if (cardNumber && cardHolder && expiryDate && cvv) {
        alert('Pagamento processado com sucesso!');
        form.reset();
      } else {
        alert('Preencha todos os campos corretamente.');
      }
    });