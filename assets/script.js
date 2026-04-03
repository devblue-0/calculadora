let expressao = '';

function adicionarNumero (num) {
    expressao += num;
    atualizarDisplay();
}

function adicionarOperador (op) {
    
    if (expressao === "") return;
    const ultimo = expressao.slice(-1);
    if ("+-*/".includes(ultimo)) {
        expressao = expressao.slice(0, -1);
    }
    expressao += op;
    atualizarDisplay();
}

function calcular () {
    try {
        expressao = eval(expressao).toString();
        atualizarDisplay()
    } catch {
        alert("expessao ivalida");
    }
}

function limpar(){
    expressao = "";
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById("resultado").value = expressao;
}