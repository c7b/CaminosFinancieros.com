// Dashboard 1 Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2020',
            Modulo_1: 86000,
            Modulo_2: 0,
            Modulo_3: 0
        }, {
            period: '2021',
            Modulo_1: 103200,
            Modulo_2: 77400,
            Modulo_3: 0
        }, {
            period: '2022',
            Modulo_1: 136224,
            Modulo_2: 92880,
            Modulo_3: 73100
        }, {
            period: '2023',
            Modulo_1: 245203,
            Modulo_2: 122601,
            Modulo_3: 87720
        }, {
            period: '2024',
            Modulo_1: 519831,
            Modulo_2: 220682,
            Modulo_3: 115790
        }, {
            period: '2025',
            Modulo_1: 675780,
            Modulo_2: 467847,
            Modulo_3: 208422
        },
         {
            period: '2026',
            Modulo_1: 878514,
            Modulo_2: 608202,
            Modulo_3: 441856
        }],
        xkey: 'period',
        ykeys: ['Modulo_1', 'Modulo_2', 'Modulo_3'],
        labels: ['Modulo_1', 'Modulo_2', 'Modulo_3'],
        pointSize: 0,
        fillOpacity: 0.99,
        pointStrokeColors:['#00A15A', '#FEF200 ', '#3C4993'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth:0,
        hideHover: 'auto',
        lineColors: ['#00A15A', '#FEF200 ', '#3C4993'],
        resize: true
        
    });
	
Morris.Area({
        element: 'extra-area-chart',
        data: [{
            period: '2019-10',
            CETES: 801,
            AFORE: 1062,
            BMV: 1562
        }, {
            period: '2019-12',
            CETES: 653,
            AFORE: 1326,
            BMV: 1640
        }, {
            period: '2020-02',
            CETES: 713,
            AFORE: 1390,
            BMV: 1869
        }, {
            period: '2020-04',
            CETES: 863,
            AFORE: 1798,
            BMV: 1455
        }, {
            period: '2020-06',
            CETES: 879,
            AFORE: 1521,
            BMV: 2038
        }, {
            period: '2020-08',
            CETES: 1335,
            AFORE: 1188,
            BMV: 1909
        },
         {
            period: '2020-10',
            CETES: 993,
            AFORE: 1655,
            BMV: 2081
        }],
        xkey: 'period',
        ykeys: ['CETES', 'AFORE', 'BMV'],
        labels: ['CETES', 'AFORE', 'BMV'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['#933EC5', '#65B12D', '#D80027'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#933EC5', '#65B12D', '#D80027'],
        resize: true
        
    });