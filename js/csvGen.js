$('#gerar-csv').on('click', function (e) {
    e.preventDefault();

    api.get('/csv')
        .then(function (response) {
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(response);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'Relatorio GIP.xlsx';
            hiddenElement.click();

        }).catch(function (error) {
            console.log(error);
        })
})