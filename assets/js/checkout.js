document.addEventListener('DOMContentLoaded', function() {
  // Mostrar/ocultar campos do cartão quando selecionado
  const creditRadio = document.getElementById('credit');
  const creditFields = document.querySelector('.credit-card-fields');
  
  creditRadio.addEventListener('change', function() {
    if(this.checked) {
      creditFields.style.display = 'block';
    } else {
      creditFields.style.display = 'none';
    }
  });

  // Máscaras para os campos
  const cpfInput = document.querySelector('input[type="text"][placeholder="000.000.000-00"]');
  const cepInput = document.querySelector('input[type="text"][placeholder="00000-000"]');
  const cardInput = document.querySelector('input[placeholder="0000 0000 0000 0000"]');
  const dateInput = document.querySelector('input[placeholder="MM/AA"]');
  const cvvInput = document.querySelector('input[placeholder="000"]');

  if(cpfInput) {
    cpfInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = value;
    });
  }

  if(cepInput) {
    cepInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');
      e.target.value = value;
    });
  }

  if(cardInput) {
    cardInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
      e.target.value = value.trim();
    });
  }

  if(dateInput) {
    dateInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/^(\d{2})(\d)/, '$1/$2');
      e.target.value = value;
    });
  }

  if(cvvInput) {
    cvvInput.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  }
});