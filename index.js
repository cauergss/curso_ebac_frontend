let linhas = '';

$(document).ready(function () {

    $('#form-add').on('submit', function (e) {
        e.preventDefault();

        const toDo = $('#toDoWrite').val();

        let linha = '<li><div class="square"></div>';
        linha += `<h4>${toDo}</h4>`;
        linha += '<div class="deleteButton">X</div></li>';

        linhas += linha;

        $('ul').html(linhas);
        $('#toDoWrite').val('');

    });

    $('ul').on('click', '.deleteButton', function() {
        $(this).closest('li').remove();
    });

    $('ul').on('click', '.square', function() {
        const $li = $(this).closest('li');
        $li.toggleClass('feito');
    });
    
})

