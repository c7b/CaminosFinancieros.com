// Dashboard 1 Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2012',
            Python: 0,
            PHP: 0,
            Java: 0
        }, {
            period: '2013',
            Python: 100,
            PHP: 80,
            Java: 65
        }, {
            period: '2014',
            Python: 180,
            PHP: 150,
            Java: 120
        }, {
            period: '2015',
            Python: 100,
            PHP: 70,
            Java: 40
        }, {
            period: '2016',
            Python: 180,
            PHP: 150,
            Java: 120
        }, {
            period: '2017',
            Python: 100,
            PHP: 70,
            Java: 40
        },
         {
            period: '2018',
            Python: 180,
            PHP: 150,
            Java: 120
        }],
        xkey: 'period',
        ykeys: ['Python', 'PHP', 'Java'],
        labels: ['Python', 'PHP', 'Java'],
        pointSize: 0,
        fillOpacity: 0.99,
        pointStrokeColors:['#65b12d', '#933EC5 ', '#006DF0'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth:0,
        hideHover: 'auto',
        lineColors: ['#65b12d', '#933EC5 ', '#006DF0'],
        resize: true
        
    });
	
Morris.Area({
        element: 'extra-area-chart',
        data: [{
            period: '2019-10',
            CETES: 949,
            AFORE: 1538,
            BMV: 20
        }, {
            period: '2019-12',
            CETES: 956,
            AFORE: 1540,
            BMV: 80
        }, {
            period: '2020-02',
            CETES: 965,
            AFORE: 1580,
            BMV: 70
        }, {
            period: '2020-04',
            CETES: 973,
            AFORE: 1587,
            BMV: 140
        }, {
            period: '2020-06',
            CETES: 979,
            AFORE: 1603,
            BMV: 1911
        }, {
            period: '2020-08',
            CETES: 984,
            AFORE: 1610,
            BMV: 1924
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