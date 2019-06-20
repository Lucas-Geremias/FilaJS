//Declarações de variáveis, onde quer que elas ocorram, são processadas antes que qualquer 
//outro código seja executado. O escopo de uma variável declarada com  var é seu contexto atual 
//em execução, o qual é a função a qual pertence ou, para variáveis declaradas fora de qualquer 
//função, o escopo é o global.
var queue = new StaticQueue();
$().ready(function() {

    $('#enqueue').on('click', enqueueElement);
    $('#item').keydown(function(e) {
        //verify if enter was pressed
        if (e.which == 13) enqueueElement();
    });
    $('#dequeue').on('click', dequeueElement);
    $('#clear').on('click', clearQueue);
});
//Uma função criada com uma declaração function é um objeto Function e tem todos as propriedades, 
//métodos e comportamentos dos objetos Function. Veja Function para detalhadas informações sobre as 
//funções.
function enqueueElement() {
    var item = $('#item').val();
    if (item) {
        queue.enqueue(item);
        $('#item').val('');
        showQueue();
    }
}
//Executa a próxima função na fila para o elemento correspondente.
function dequeueElement() {
    if (queue.isEmpty() == false) {
        alert('Foi removido o elemento ' + queue.dequeue());
        showQueue();
    } else {
        alert('Fila Vazia');
    }
}
//Quando o .clearQueue()método é chamado, todas as funções na fila que não foram executadas são 
//removidas da fila. Quando usado sem um argumento, .clearQueue()remove as funções restantes da 
//fxfila de efeitos padrão. Desta forma, é semelhante a .stop(true). No entanto, embora o .stop()método
// deva ser usado apenas com animações, .clearQueue()também pode ser usado para remover qualquer função 
//que tenha sido adicionada a uma fila genérica do jQuery com o .queue()método.
function clearQueue() {
    queue.clear();
    showQueue();
}
//Mostrar ou manipular a fila de funções a serem executadas nos elementos correspondentes.
function showQueue() {
    $('#output').empty();
    $('#output').append('<div class="ui label">' +
        queue.print('</div><div class="ui label">') + '</div></div>');
}