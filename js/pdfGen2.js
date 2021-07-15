$('#gerar-boleto').on('click', function (e) {
    e.preventDefault();

    var gip = window.location.href.split('=')[1]
    var data_expedicao = $('#data_expedicao').val()
    var nota_fiscal = $('#nota_fiscal').val()
    var destinatario = $('#destinatario').val()
    var cidade = $('#cidade').val()
    var uf = $('#uf').val()
    var transportadora = $('#transportadora').val()
    var motorista = $('#motorista').val()
    var quantidade_pallets_expedidos = $('#quantidade_pallets_expedidos').val()
    var data_retorno_pallet_fisico = $('#data_retorno_pallet_fisico').val()
    var quantidade_pallet_devolvidos_fisico = $('#quantidade_pallet_devolvidos_fisico').val()


    var pdfGen = {
        defaultStyle: {
            fonSize: 12
        },
        watermark: {
            text: 'PERFETTI VAN MELLE DO BRASIL LTDA',
            color: 'yellow',
            opacity: 0.1,
            bold: true,
            italics: false,
        },
        content: [{
            text: 'MOVIMENTAÇÃO DE PALLET',
            style: 'header',
        },
        {
            text: '                                         TRANSPORTADORA                                         ',
            style: 'title',
        },
        {
            text: '______________________________________________________________________________________________',
            style: 'division'
        },
        {
            text: 'Confirmo que recebi de PERFETTI VAN MELLE a quantidade de pallets mencionada abaixo, responsabilizando-me pela devolução dos mesmos em um prazo de 15 dias contando à partir da data de assinatura deste.',
            style: 'text1'
        },
        {
            text: 'Comprometo-me também no retorno deste comprovante devidamente assinado pelo cliente recebedor bem como qualquer documentação por ele emitido (Vale Pallet), quando aplicável.',
            style: 'text1'
        },
        {
            columns: [{
                width: 'auto',
                text: `GIP: ${gip}`,
                style: 'info_line1'
            },
            {
                width: 'auto',
                text: `Nota Fiscal: ${nota_fiscal}`,
                style: 'info_line1'
            },
            {
                width: 'auto',
                text: `Data da Expedição: ${data_expedicao}`,
                margin: [50, 20, 0, 0],
                // alignment: 'center'
            }
            ],
            columnGap: 10,
        },
        {
            table: {
                headerRows: 1,
                widths: ['*', 'auto', 'auto', '*'],

                body: [
                    [{ text: 'CLIENTE', style: 'tb_head' }, { text: 'CIDADE', style: 'tb_head' }, { text: 'UF', style: 'tb_head' }, { text: 'QTDE PBR EXPEDIDO', style: 'tb_head' }],
                    [{ text: `${destinatario}`, style: 'tb_info' }, { text: `${cidade}`, style: 'tb_info' }, { text: `${uf}`, style: 'tb_info' }, { text: `${quantidade_pallets_expedidos}`, style: 'tb_info' }],
                ],
            }
        },
        {
            text: `Transportadora: ${transportadora}`,
            style: 'info_line2'
        },
        {
            columns: [{
                text: `Nome do Motorista: ${motorista}`,
                style: 'info_line2'
            },
            {
                text: 'CPF/RG: __________________________________',
                margin: [0, 20, 0, 25]
            }]
        },
        {
            columns: [{
                text: 'Assinatura Motorista: ___________________________',
                width: 'auto',
                margin: [0, 10, 0, 20]
            }, {
                text: 'Data:  ____ / ____ / _______',
                margin: [0, 10, 0, 20],
                width: 'auto'
            }],
            columnGap: 10
        },
        {
            text: '______________________________________________________________________________________________',
            style: 'division'
        },
        {
            text: '                                         DESTINATÁRIO                                         ',
            style: 'title',
        },
        {
            columns: [{
                width: 'auto',
                text: 'Destinatário Reteve os Pallets? ( )SIM NÃO( )',
                style: 'signature1'
            },
            {
                width: 'auto',
                text: '__________________________________________',
                style: 'signature1'
            }
            ],
            columnGap: 10,
        },
        {
            columns: [{

            },
            {
                text: 'Carimbo e Assinatura do Destinatário',
                style: 'signature2'
            }
            ],
            columnGap: 10
        },
        {
            text: '______________________________________________________________________________________________',
            style: 'division'
        },
        {
            text: '                                 DEVOLUÇÃO PALLET FÍSICO                                  ',
            style: 'title',
        },
        {
            text: 'Obrigatório o preenchimento dos campos abaixo, por parte do recebedor,  no ato da devolução de pallet físico na operação PERFETTI VAN MELLE.',
            style: 'return'
        },
        {
            columns: [{
                text: `Data de Retorno do Pallet Físico: ${data_retorno_pallet_fisico}`,
                style: 'area'
            },
            {
                text: `Quantidade Pallet Físico: ${quantidade_pallet_devolvidos_fisico}`,
                style: 'area'
            }],
            columnGap: 10
        },
        {
            columns: [{
                text: 'Nome do Recebedor: ',
                style: 'last'
            },
            {
                text: 'Função: ',
                style: 'last'
            },
            {
                text: 'Assinatura do Recebedor: ',
                style: 'last'
            }],
            columnGap: 10
        },
        {
            columns: [{
                text: '_______________________________',
                style: 'last2'
            },
            {
                text: '_______________________________',
                style: 'last2'
            },
            {
                text: '_______________________________',
                style: 'last2'
            },
            ],
            columnGap: 10
        }

        ],

        styles: {
            header: {
                alignment: 'center',
                fontSize: 14,
                bold: true,
            },
            title: {
                alignment: 'center',
                fontSize: 11,
                bold: true,
                margin: [0, 10, 0, 0],
                background: 'black',
                color: 'white',
            },
            text1: {
                fontSize: 10,
                alignment: 'justify',
                margin: [0, 10, 0, 0],
            },
            division: {
                alignment: 'center',
                bold: false,
            },
            info_line1: {
                bold: true,
                decoration: 'underline',
                alignment: 'center',
                margin: [50, 20, 0, 15],
                fontSize: 11,
            },
            tb_head: {
                alignment: 'center',
            },
            tb_info: {
                alignment: 'center',
            },
            info_line2: {
                decoration: 'underline',
                margin: [0, 20, 0, 25],
                fonSize: 11,
                alignment: 'left'
            },
            signature1: {
                margin: [0, 50, 0, 0],
            },
            signature2: {
                fontSize: 9,
                margin: [30, 0, 0, 20]
            },
            return: {
                alignment: 'center',
                bold: true,
                fontSize: 10,
                margin: [0, 10, 0, 0]
            },
            area: {
                margin: [0, 20]
            },
            last: {
                margin: [0, 20, 0, 30]
            },
            last2: {
                margin: [0, 20, 0, 30]
            }
        }
    }

    pdfMake.createPdf(pdfGen).open()
})