
$(document).ready(function() {
    // Inicializar DataTable
    var table = $('#dataTable').DataTable();

    // Función para agregar una fila
    $('#addButton').on('click', function() {
        var name = $('#inputName').val();
        var age = $('#inputAge').val();

        if (name && age) {
            table.row.add([
                name,
                age,
                '<button class="btn btn-warning btn-sm editBtn">Editar</button>' +
                ' <button class="btn btn-danger btn-sm deleteBtn">Eliminar</button>'
            ]).draw(false);

            $('#inputName').val('');
            $('#inputAge').val('');
        } else {
            alert('Por favor, completa todos los campos');
        }
    });

    // Función para eliminar una fila
    $('#dataTable tbody').on('click', '.deleteBtn', function() {
        table.row($(this).parents('tr')).remove().draw();
    });

    // Función para editar una fila
    $('#dataTable tbody').on('click', '.editBtn', function() {
        var row = table.row($(this).parents('tr'));
        var data = row.data();

        $('#inputName').val(data[0]);
        $('#inputAge').val(data[1]);

        $('#addButton').text('Actualizar').off('click').on('click', function() {
            data[0] = $('#inputName').val();
            data[1] = $('#inputAge').val();

            row.data(data).draw();

            $('#inputName').val('');
            $('#inputAge').val('');
            $('#addButton').text('Agregar').off('click').on('click', function() {
                var name = $('#inputName').val();
                var age = $('#inputAge').val();

                if (name && age) {
                    table.row.add([
                        name,
                        age,
                        '<button class="btn btn-warning btn-sm editBtn">Editar</button>' +
                        ' <button class="btn btn-danger btn-sm deleteBtn">Eliminar</button>'
                    ]).draw(false);

                    $('#inputName').val('');
                    $('#inputAge').val('');
                } else {
                    alert('Por favor, completa todos los campos');
                }
            });
        });
    });
});
