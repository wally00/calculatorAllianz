$(function () {

    var euroValue = 4.6332;
    $('#euroValue').html(euroValue);



    function hideShow() {
        if ($('#tipProdus').val() === 'Telefon mobil') {
            $('#EW').addClass('d-none');
            $('#AD24-EW12').addClass('d-none');
            $('#AD-EW-PJ').addClass('d-none');
            $('#EW-PJ').addClass('d-none');

            $('#AD24').removeClass('d-none');
        } else {
            $('#EW').removeClass('d-none');
            $('#AD24-EW12').removeClass('d-none');
            $('#AD-EW-PJ').removeClass('d-none');
            $('#EW-PJ').removeClass('d-none');

            $('#AD24').addClass('d-none');
        }
    };

    hideShow();
    $('#tipProdus').change(hideShow);

    $('#calcBtn').click(function () {
        var tipProdus = $('#tipProdus').val();
        var pretProdus = $('#pretProdus').val();
        var tipServiciu = $('#tipServiciu').val();
        var perioadaServiciu = $('#perioadaServiciu').val();

        //check if any value entered in price else set price to 0
        if ($('#pretProdus').val() !== "") {
            var pretEuro = Math.round((pretProdus / euroValue) * 100) / 100;
        } else {
            var pretEuro = 0;
        };

        var pretPrima = primeAllianz.find(function (obj) {
            return obj.TIP === tipProdus && obj.MIN <= pretEuro && obj.MAX > pretEuro;

        });

        if (pretPrima === undefined) {
            $('#notificationMessage').html('Pretul este prea mare! Nu exista asigurare pentru acest produs.').removeClass('bg-warning bg-info').addClass('bg-danger');
            $('#primaIncasat').html('-');
            $('#fransiza').html('-');
        } else {
            $('#notificationMessage').html('Pretul in euro este: ' + pretEuro + '&#8364; ' + '<br>' + ' Codul din iStyle SHOP este: ' + pretPrima[tipServiciu + '_COD']);
            $('#notificationMessage').removeClass('bg-warning bg-danger').addClass('bg-info');

            $('#primaIncasat').html(pretPrima[tipServiciu]);
            $('#fransiza').html(pretPrima.FRANSIZA);
            console.log('if');

        }

        //$('#notificationMessage').html('Pretul in euro este: ' + pretEuro + '&#8364; ' + '<br><br>' + ' Codul din iStyle SHOP este: ' + pretPrima[tipServiciu + '_COD']);


        $('#notificationMessage').removeClass('d-none');
    });

});