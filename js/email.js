const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validar que los campos no estén vacíos
  const fromName = document.getElementById('from_name').value;
  const toName = document.getElementById('to_name').value;
  const message = document.getElementById('message').value;
  
  if (fromName === '' || toName === '' || message === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_4eyoj5t';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Mensaje enviado!');
      clearInputs();
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

function clearInputs() {
    document.getElementById('from_name').value = '';
    document.getElementById('to_name').value = '';
    document.getElementById('message').value = '';
  }
