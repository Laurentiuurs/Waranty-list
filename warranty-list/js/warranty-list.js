function getRow(produs) {
    return "<tr>" +
        "<td>" + produs.numeProdus + "</td>" +
        "<td>" + produs.serieProdus + "</td>" +
        "<td>" + produs.dataGarantie + "</td>" +
        "<td>" + produs.durata + "</td>" +
        `<td>` +
            `<a href='tmp/remove-warranty.html?id=${produs.id}'>&#10006;</a> ` +
            `<a href='#' data-id='${produs.id}' class='edit'>&#9998;</a>` +
        `</td>` +
        "</tr>"
}

var produs = [];
console.info("Se incarca produsele");


$.ajax({
    url: 'js/mocks/warranty-list.json',
    method: "GET"
}).done(function (data) {
    console.info('Terminat:', data);
    display(data);
});

function display(produs) {
    var rows = '';

    function createRows (produs) {
        rows += getRow(produs);
    }

    produs.forEach(createRows);

    rows += '<tr>' +
        '<td><input type="text" required  name="numeProdus" placeholder="Numele produsului"></td>' +
        '<td><input type="text" name="serieProdus" placeholder="Seria produsului"></td>' +
        '<td><input type="text" required name="dataGarantie" placeholder="Data garantiei"></td>' +
        '<td><input type="text" required name="durata" placeholder="Durata garantiei"></td>' +
        '<td><button type="submit">Adauga</button></td>' +
        '</tr>';


    $('#phone-book tbody').html(rows);

    $('#phone-book tbody a.edit').click(function () {
        var id = this.attributes['data-id'].value;
        console.info('click on ' , this);

        var editPerson = persons.find(function(produs){
            console.log(produs.numeleProdus);
           return produs.id == id;
        });
        console.warn('edit', editPerson);

        $('input[name=numeProdus]').val(editPerson.numeProdus);
        $('input[name=serieProdus]').val(editPerson.serieProdus);
        $('input[name=dataGarantie]').val(editPerson.dataGarantie);
        $('input[name=durata]').val(editPerson.durata);
    });

};