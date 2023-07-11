const form = document.getElementById('form-contato');
const imgAprovado = '<img src="./imagem/aprovado.png" alt="emoji celebrando" />';
const atividadeUsuario = [];
const agendaContato = [];
const spanAprovado = '<span class="resultado-aprovado">realizado</span>';
const spanSucesso = `<span class="cadastro-realizado ">sucesso</span>`;
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaCadastro();
    cadastroFinal();

});

function adicionaLinha() {
    const inputNomeUsuario = document.getElementById('nome_usuario');
    const inputContatoUsuario = document.getElementById('contato-usuario');

    if (atividadeUsuario.includes(inputNomeUsuario.value)) {
        alert(`O contato : ${inputNomeUsuario.value} já foi inserido`);
    } else {
        atividadeUsuario.push(inputNomeUsuario.value);
        agendaContato.push(parseFloat(inputContatoUsuario.value))
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeUsuario.value}</td>`;
        linha += `<td>${inputContatoUsuario.value}</td>`;
        linha += `<td>${inputContatoUsuario.value = imgAprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha; inputContatoUsuario.value 

    }

    inputNomeUsuario.value = '';
    inputContatoUsuario.value = '';
}

function atualizaCadastro() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function cadastroFinal() {

    document.getElementById('resultado-final-valor').innerHTML = spanAprovado; 
    document.getElementById('resultado-final').innerHTML = spanSucesso;
}

