$('#gerar-boleto').on('click', function(e) {
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
            text: 'PERFETTI VAM MELLE DO BRASIL LTDA',
            color: 'yellow',
            opacity: 0.2,
            bold: true,
            italics: false,
        },
        content: [{
                text: 'GIP - Gestao Interna de Pallets\n\n',
                style: 'header',
            },
            {
                columns: [{
                        width: 'auto',
                        text: 'CTRC: _________________________'
                    },
                    {
                        width: 'auto',
                        text: `Nota Fiscal: ${nota_fiscal}`
                    },
                    {
                        width: 'auto',
                        text: 'Empresa: ________\n\n'
                    }
                ],
                columnGap: 10,
            },
            {
                text: 'Confirmo que recebi da AGV Logistica, representante de transporte da PERFETTI VAN MELLE, a quantidade de pallets mencionada abaixo. Resposabilizo-me pela devolucao dos mesmos em um prazo de 15 dias, contando a partir da data de assinatura.\n\n',
                style: 'text',
            },
            {
                columns: [{
                        width: 'auto',
                        text: `GIP: ${gip}`,
                        style: 'gip'
                    },
                    {
                        width: 'auto',
                        text: `Data Expedição: ${data_expedicao}`
                    },
                    {
                        width: 'auto',
                        text: 'Coletado em: _________________ \n\n',
                    }
                ],
                columnGap: 10,
            },
            {
                columns: [{
                        width: 'auto',
                        text: 'Expedido por: _____________________________'
                    },
                    {
                        width: 'auto',
                        text: 'Assinatura Responsavel: ________________________________ \n\n'
                    },
                ],
                columnGap: 10,
            },
            {
                columns: [{
                    width: 'auto',
                    text: `Cliente/Razao Social: ${destinatario}\n\n`
                }]
            },
            {
                columns: [{
                        width: 'auto',
                        text: `Cidade: ${cidade}`,
                    },
                    {
                        width: 'auto',
                        text: `Estado: ${uf}\n\n`
                    }
                ],
                columnGap: 10,
            },
            {
                columns: [{
                    width: 'auto',
                    text: `Quantidade de Pallets PBR: ${quantidade_pallets_expedidos}\n\n`
                }]
            },
            {
                columns: [{
                    width: 'auto',
                    text: `Transportadora: ${transportadora}\n\n`
                }]
            },
            {
                columns: [{
                    width: 'auto',
                    text: `Nome do Motorista: ${motorista}\n\n`
                }]
            },
            {
                columns: [{
                        width: 'auto',
                        text: 'RG/CPF Motorista: \n_____________________________________________'
                    },
                    {
                        width: 'auto',
                        text: 'Assinatura Motorista: \n_____________________________________________________\n\n'
                    }
                ],
                columnGap: 10,
            },
            {
                text: '\nDEVOLUCAO\n\n',
                style: 'textReturn'
            },
            {
                text: 'Preencher os campos com os dados da Devolucao do Pallet\n\n',
                style: 'text',
            },
            {
                columns: [{
                        width: 'auto',
                        text: 'Local (Devolucao): ________________'
                    },
                    {
                        width: 'auto',
                        text: `Data Retorno Pallet Fisico: ${data_retorno_pallet_fisico}\n\n`
                    }
                ],
                columnGap: 10,
            },
            {
                columns: [{
                    width: 'auto',
                    text: `Quantidade de Pallets PBR: ${quantidade_pallet_devolvidos_fisico}\n\n`
                }]
            },
            {
                columns: [{
                        width: 'auto',
                        text: 'Recebedor: ______________________________________'
                    },
                    {
                        width: 'auto',
                        text: 'Depto: _______________________\n\n'
                    }
                ],
                columnGap: 10,
            },
            {
                columns: [{
                        width: 'auto',
                        text: 'Assinatura Recebedor: ______________________________________'
                    },
                    {
                        width: 'auto',
                        text: 'Unidade: _______________________________________\n\n'
                    }
                ]
            },
            {
                text: 'Ao receber esses pallets enviar os comprovantes assinados e TODOS os campos preenchidos para a Operação da PERFETTI em CAJAMAR/SP ou via e-mail para: gip.perfetti@agv.com.br\n\n',
                style: 'text',
            },
        ],
        styles: {
            header: {
                alignment: 'center',
                fontSize: 20,
                bold: true
            },
            text: {
                alignment: 'center',
                fontSize: 12,
                bold: false
            },
            textReturn: {
                alignment: 'center',
                fontSize: 15,
                bold: true
            }
        }
    }

    pdfMake.createPdf(pdfGen).open()


})