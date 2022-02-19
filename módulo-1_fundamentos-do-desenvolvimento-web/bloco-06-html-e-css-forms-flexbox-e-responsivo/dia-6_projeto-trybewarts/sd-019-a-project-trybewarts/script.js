//  Mostra um alerta caso a senha e o email para login incorretos;
function loginData() {
  const buttonSubmit = document.getElementById('buttonSubmit');
  buttonSubmit.addEventListener('click', () => {
    const inputEmail = document.getElementById('inputEmail');
    const inputSenha = document.getElementById('inputSenha');
    if ((inputEmail.value !== 'tryber@teste.com') && (inputSenha.value !== '123456')) {
      alert('Email ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
    inputEmail.value = '';
    inputSenha.value = '';
  });
}

loginData();

//  Função criada para fazer o botão de submit ficar clicavel;
function enableSubmitButton() {
  const markBox = document.getElementById('agreement');
  markBox.addEventListener('click', () => {
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = false;
  });
}

enableSubmitButton();

// https://codepen.io/borisplotkin/pen/RPwXeK;
const countChar = () => {
  const textArea = document.getElementById('textarea');
  textArea.addEventListener('keyup', () => {
    const counter = document.getElementById('counter');
    const text = textArea.value;
    const charQuantity = text.length;
    counter.innerHTML = 500 - charQuantity;
  });
};

countChar();

const funcConteudo = (conteudo) => {
  let lista = '';
  for (let i = 0; i < conteudo.length; i += 1) {
    if (i === conteudo.length - 1) {
      lista = `${lista} ${conteudo[i].value}`;
    } else {
      lista = `${lista} ${conteudo[i].value},`;
    }
  }
  return lista;
};

// https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button;
// https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
const setFormData = () => {
  const button = document.getElementById('submit-btn');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('evaluation-form');
    form.style.height = 'auto';
    const conteudo = document.querySelectorAll('[name=conteudo]:checked');
    const name = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const house = document.getElementById('house').value;
    const family = document.querySelector('input[name="family"]:checked').value;
    const rate = document.querySelector('input[name="rate"]:checked').value;
    const textArea = document.getElementById('textarea').value;
    const paragrafo = document.getElementById('paragrafoForms');
    paragrafo.innerHTML = `<b>Nome</b>: ${name} ${lastName} <br> <b>Email:</b> ${email} <br>
    <b>Casa:</b> ${house} <br> <b>Família:</b> ${family} <br> <b>Matérias:</b>
    ${funcConteudo(conteudo)} <br> <b>Avaliação:</b> ${rate} <br> <b>Observações:</b> ${textArea}`;
  });
};

setFormData();
