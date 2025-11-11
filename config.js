var config = {
    
   style: 'mapbox://styles/jojoalguazas/cmhmlq2ju003h01quehuh3reh',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoiam9qb2FsZ3VhemFzIiwiYSI6ImNtaG1mZXpoMjF2M2cyaXF0em1tZWloa2MifQ.A25n72-ieRAgovPrSeSoHg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Conoce algunas zonas de baño de Euskadi',
    subtitle: 'Navega por la página para ver algunas de las zonas de baño más espectaculares de España.',
    byline: 'Por María José Baños Moreno',
    footer: 'Fuentes: <br> Consulta esta narrativa para averiguar más sobre estas zonas <a href="https://public.flourish.studio/story/3430736/" target="_blank">presentación en Flourish</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'EMBALSE ULLIBARRI GAMBOA ARRAZUA-UBARRUNDIA 02 - ISLA DE ZUAZUA',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Zuhatza_uhartea_San_Juan_Puntatik.jpg',
            description: 'Ubicada en la provincia de Álava, en el municipio de Arratzua-Ubarrundia. El punto de muestreo es PM1-ISLA DE ZUAZUA-EMBALSE ULLIBARRI GAMBOA ARRAZUA-UBARRUNDIA 02',
            location: {
                center: [-2.5929174315967876, 42.93054176611842],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'EMBALSE ULLIBARRI GAMBOA BARRUNDIA 02 - GARAIO 1',
            image: 'https://ullibarri-gamboa.araba.eus/documents/2361857/2362056/mendiixur1.jpg/0c19e76d-09a2-1deb-84c1-ec8e5db2391a?t=1560426077896',
            description: 'Ubicada en la provincia de Álava, en el municipio de Barrundia. El punto de muestreo es PM1-GARAIO 1-EMBALSE ULLIBARRI GAMBOA BARRUNDIA 02',
            location: {
                center: [-2.5427020229329123, 42.90832547194674],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE BAKIO',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Playa_de_Baquio%2C_Pa%C3%ADs_Vasco%2C_Espa%C3%B1a%2C_2019-08-13%2C_DD_25-34_PAN.jpg',
            description: 'Ubicada en la provincia de Vizcaya, en el municipio de Bakio. El punto de muestreo es PLAYA DE BAKIO PM1-CENTRO',
            location: {
                center: [-2.8074046613369896, 43.430852024389615],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'PLAYA DE AZKORRI (GORRONDATXE)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Gorrondatxe.jpg',
            description: 'Ubicada en la provincia de Vizcaya, en el municipio de Getxo. El punto de muestreo es PLAYA DE AZKORRI PM1-CENTRO',
            location: {
                center: [-3.0164190992662645, 43.380777203543566],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

                {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'PLAYA DE LA CONCHA (KONTXA)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/San_Sebastian_La_Concha.jpg',
            description: 'Ubicada en la provincia de Guipúzcoa, en el municipio de Donostia / San Sebastián. El punto de muestreo es PLAYA DE  LA CONCHA PM1-CENTRO',
            location: {
                center: [-1.9903816069810352, 43.31646014775311],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

                        {
            id: 'six-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'PLAYA DE ZARAUTZ',
            image: 'https://media.traveler.es/photos/667a92e1d27afd9b6fec65aa/master/w_1600,c_limit/1.jpg',
            description: 'Ubicada en la provincia de Guipúzcoa, en el municipio de Zarautz. El punto de muestreo es PLAYA DE ZARAUTZ PM1-250 m REGATA SAN PELAIO',
            location: {
                center: [-2.1551475815408216, 43.29083632075183],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
