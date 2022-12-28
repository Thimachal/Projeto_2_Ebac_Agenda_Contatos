const form = document.getElementById('form-agenda');

let names = [];
let phones = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    const inputName = document.getElementById('name');
    const inputPhone = document.getElementById('phone');


    if (phones.includes(inputPhone.value)) {
        alert(`O Telefone ${inputPhone.value} já foi cadastrado`);

    } else {
        names.push(inputName.value);
        phones.push(inputPhone.value);

        let linha = '<tr>';
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputPhone.value}</td>`;
                linha += '</tr>';

        linhas += linha;
    }
    inputName.value = '';
    inputPhone.value = '';
};


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}