const form = document.getElementById('form-verificador');
const verify = null;
const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
let formValido = true;

function validarNum(a, b) {
    return a < b
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    document.querySelector('.error-msg').style.display = 'none'; // Isso aqui vai resetar o style aplicado nos botões lá embaixo
    document.querySelector('.success-msg').style.display = 'none';
    numB.style.border = '';
    
    const successMsg = `O valor B é maior que o valor A, sucesso!`
    const errorMsg = `O valor B é MENOR que o valor A, ERRO!`

    let valueA = Number(numA.value)
    let valueB = Number(numB.value)

    formValido = validarNum(valueA, valueB)
    if (formValido === true) {
        const containerMensagemSucesso = document.querySelector('.success-msg');
        containerMensagemSucesso.innerHTML = successMsg;
        numA.value = '';
        numB.value = '';
        containerMensagemSucesso.style.display = 'block';
    } else {
        const containerMensagemErro = document.querySelector('.error-msg');
        containerMensagemErro.innerHTML = errorMsg;
        numB.style.border = '1px solid red';
        document.querySelector('.error-msg').style.display = 'block';
    }
})