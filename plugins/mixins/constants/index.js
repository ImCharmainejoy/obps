export default {
  data: () => ({
    filter: {
      first: 10,
      skip: 0,
      title: ''
    },
    districtItems: [
      {
        id: 1,
        name: 'District A'
      },
      {
        id: 2,
        name: 'District B'
      },
      {
        id: 3,
        name: 'District C'
      },
      {
        id: 4,
        name: 'District D'
      },
      {
        id: 5,
        name: 'Agdao District'
      },
      {
        id: 6,
        name: 'Baguio District'
      },
      {
        id: 7,
        name: 'Buhangin District'
      },
      {
        id: 8,
        name: 'Bunawan District'
      },
      {
        id: 9,
        name: 'Calinan District'
      },
      {
        id: 10,
        name: 'Marilog District'
      },
      {
        id: 11,
        name: 'Paquibato District'
      },
      {
        id: 12,
        name: 'Sasa District'
      },
      {
        id: 13,
        name: 'Talomo Central District'
      },
      {
        id: 14,
        name: 'Talomo North District'
      },
      {
        id: 15,
        name: 'Talomo South District'
      },
      {
        id: 16,
        name: 'Tugbok District'
      },
      {
        id: 17,
        name: 'Toril A District'
      },
      {
        id: 18,
        name: 'Toril B District'
      }
    ],
    brgyItems: [
    {
      name: 'Acacia',
      district_id: 7,
      lat: '7.107700',
      long: '125.626480'
    },
    {
      name: 'Agdao',
      district_id: 5,
      lat: '7.086930',
      long: '125.628330'
    },
    {
      name: 'Alambre',
      district_id: 17,
      lat: '6.997250',
      long: '125.485550'
    },
    {
      name: 'Alejandra Navarro (Lasang)',
      district_id: 8,
      lat: '6.997250',
      long: '125.485550'
    },
    {
      name: 'Alfonso Angliongto Sr.',
      district_id: 12,
      lat: '7.103929173391569',
      long: '125.63281950818177'
    },
    {
      name: 'Angalan',
      district_id: 16,
      lat: '6.997250',
      long: '125.485550'
    },
    {
      name: 'Atan-Awe',
      district_id: 18,
      lat: '6.997250',
      long: '125.485550'
    },
    {
      name: 'Baganihan',
      district_id: 10,
      lat: '7.4606028',
      long: '125.2581083'
    },
    {
      name: 'Bago Aplaya',
      district_id: 15,
      lat: '7.05133580609444',
      long: '125.53965854644774'
    },
    {
      name: 'Bago Gallera',
      district_id: 15,
      lat: '7.05439567565918',
      long: '125.53395080566406'
    },
    {
      name: 'Bago Oshiro',
      district_id: 16,
      lat: '7.0774367',
      long: '125.4963894'
    },
    {
      name: 'Baguio (Pob.)',
      district_id: 6,
      lat: '7.172612699686353',
      long: '125.40149402618407'
    },
    {
      name: 'Balengaeng',
      district_id: 16,
      lat: '7.133702',
      long: '125.4659383'
    },
    {
      name: 'Baliok',
      district_id: 15,
      lat: '7.050515775305897',
      long: '125.50418616329348'
    },
    {
      name: 'Bangkas Heights',
      district_id: 17,
      lat: '7.0579362',
      long: '125.4907409'
    },
    {
      name: 'Bantol',
      district_id: 10,
      lat: '7.3015838',
      long: '125.3434514'
    },
    {
      name: 'Baracatan',
      district_id: 18,
      lat: '6.9718137',
      long: '125.4276108'
    },
    {
      name: 'Barangay 1-A (Pob.)',
      district_id: 1,
      lat: '7.0491529',
      long: '125.5478672'
    },
    {
      name: 'Barangay 10-A (Pob.)',
      district_id: 1,
      lat: '7.077327174005026',
      long: '125.60796275260925'
    },
    {
      name: 'Barangay 11-B (Pob.)',
      district_id: 2,
      lat: '7.078816100679447',
      long: '125.61067714813232'
    },
    {
      name: 'Barangay 12-B (Pob.)',
      district_id: 2,
      lat: '7.082008542904991',
      long: '125.61100974205017'
    },
    {
      name: 'Barangay 13-B (Pob.)',
      district_id: 2,
      lat: '7.078725933413032',
      long: '125.61347737434387'
    },
    {
      name: 'Barangay 14-B (Pob.)',
      district_id: 2,
      lat: '7.080433368682861',
      long: '125.61412048339844'
    },
    {
      name: 'Barangay 15-B (Pob.)',
      district_id: 2,
      lat: '7.0805733',
      long: '125.6195265'
    },
    {
      name: 'Barangay 16-B (Pob.)',
      district_id: 2,
      lat: '7.084405105908392',
      long: '125.61732902648926'
    },
    {
      name: 'Barangay 17-B (Pob.)',
      district_id: 2,
      lat: '7.084126622134061',
      long: '125.61549439552307'
    },
    {
      name: 'Barangay 18-B (Pob.)',
      district_id: 2,
      lat: '7.085743289631694',
      long: '125.61432495239258'
    },
    {
      name: 'Barangay 19-B (Pob.)',
      district_id: 2,
      lat: '7.090983',
      long: '125.6064337'
    },
    {
      name: 'Barangay 2-A (Pob.)',
      district_id: 1,
      lat: '7.0664412',
      long: '125.6049246'
    },
    {
      name: 'Barangay 20-B (Pob.)',
      district_id: 2,
      lat: '7.0869615',
      long: '125.6129906'
    },
    {
      name: 'Barangay 21-C (Pob.)',
      district_id: 3,
      lat: '7.0674911538459195',
      long: '125.62015071037293'
    },
    {
      name: 'Barangay 22-C (Pob.)',
      district_id: 3,
      lat: '7.0697884',
      long: '125.6210493'
    },
    {
      name: 'Barangay 23-C (Pob.)',
      district_id: 3,
      lat: '7.0399376',
      long: '125.5356452'
    },
    {
      name: 'Barangay 24-C (Pob.)',
      district_id: 3,
      lat: '7.0686796',
      long: '125.6173887'
    },
    {
      name: 'Barangay 25-C (Pob.)',
      district_id: 3,
      lat: '7.0704915',
      long: '125.6200745'
    },
    {
      name: 'Barangay 26-C (Pob.)',
      district_id: 3,
      lat: '7.0727587',
      long: '125.6212453'
    },
    {
      name: 'Barangay 27-C (Pob.)',
      district_id: 3,
      lat: '7.07697382355037',
      long: '125.61871304634094'
    },
    {
      name: 'Barangay 28-C (Pob.)',
      district_id: 3,
      lat: '7.0717598',
      long: '125.6170632'
    },
    {
      name: 'Barangay 29-C (Pob.)',
      district_id: 3,
      lat: '7.0717598',
      long: '125.6170632'
    },
    {
      name: 'Barangay 3-A (Pob.)',
      district_id: 1,
      lat: '7.067145448630573',
      long: '125.60771598937988'
    },
    {
      name: 'Barangay 30-C (Pob.)',
      district_id: 3,
      lat: '7.0759299',
      long: '125.6170225'
    },
    {
      name: 'Barangay 31-D (Pob.)',
      district_id: 4,
      lat: '7.0673876',
      long: '125.6178502'
    },
    {
      name: 'Barangay 32-D (Pob.)',
      district_id: 4,
      lat: '7.072521651191243',
      long: '125.61380996826172'
    },
    {
      name: 'Barangay 33-D (Pob.)',
      district_id: 4,
      lat: '7.0664863',
      long: '125.6147832'
    },
    {
      name: 'Barangay 34-D (Pob.)',
      district_id: 4,
      lat: '7.070005983671558',
      long: '125.61396891880189'
    },
    {
      name: 'Barangay 35-D (Pob.)',
      district_id: 4,
      lat: '7.066661',
      long: '125.611607'
    },
    {
      name: 'Barangay 36-D (Pob.)',
      district_id: 4,
      lat: '7.0645213',
      long: '125.6113522'
    },
    {
      name: 'Barangay 37-D (Pob.)',
      district_id: 4,
      lat: '7.062975005573466',
      long: '125.61280145767212'
    },
    {
      name: 'Barangay 38-D (Pob.)',
      district_id: 4,
      lat: '7.064868579044361',
      long: '125.60882105949402'
    },
    {
      name: 'Barangay 39-D (Pob.)',
      district_id: 4,
      lat: '7.0638513',
      long: '125.6086201'
    },
    {
      name: 'Barangay 4-A (Pob.)',
      district_id: 1,
      lat: '7.071722112216377',
      long: '125.60708298805237'
    },
    {
      name: 'Barangay 40-D (Pob.)',
      district_id: 4,
      lat: '7.0615859',
      long: '125.6100966'
    },
    {
      name: 'Barangay 5-A (Pob.)',
      district_id: 1,
      lat: '7.067970948336085',
      long: '125.60098900917053'
    },
    {
      name: 'Barangay 6-A (Pob.)',
      district_id: 1,
      lat: '7.072292070853239',
      long: '125.60042038085938'
    },
    {
      name: 'Barangay 7-A (Pob.)',
      district_id: 1,
      lat: '7.0716447',
      long: '125.6053072'
    },
    {
      name: 'Barangay 8-A (Pob.)',
      district_id: 1,
      lat: '7.076740918206344',
      long: '125.59802785041809'
    },
    {
      name: 'Barangay 9-A (Pob.)',
      district_id: 1,
      lat: '7.077563073545912',
      long: '125.60587062957764'
    },
    {
      name: 'Bato',
      district_id: 17,
      lat: '7.0312388',
      long: '125.4788156'
    },
    {
      name: 'Bayabas',
      district_id: 17,
      lat: '7.0249245',
      long: '125.4388031'
    },
    {
      name: 'Biao Escuela',
      district_id: 16,
      lat: '7.1638456',
      long: '125.5216136'
    },
    {
      name: 'Biao Guianga',
      district_id: 16,
      lat: '7.1487651',
      long: '125.4977665'
    },
    {
      name: 'Biao Joaquin',
      district_id: 9,
      lat: '7.1833694',
      long: '125.4907965'
    },
    {
      name: 'Binugao',
      district_id: 18,
      lat: '6.9760013',
      long: '125.4780215'
    },
    {
      name: 'Bucana',
      district_id: 14,
      lat: '7.0539426',
      long: '125.5989103'
    },
    {
      name: 'Buda',
      district_id: 10,
      lat: '7.5113467',
      long: '125.2626324'
    },
    {
      name: 'Buhangin (Pob.)',
      district_id: 7,
      lat: '7.111941110574368',
      long: '125.62330395615844'
    },
    {
      name: 'Bunawan (Pob.)',
      district_id: 8,
      lat: '7.2374675',
      long: '125.6427088'
    },
    {
      name: 'Cabantian',
      district_id: 7,
      lat: '7.1156065',
      long: '125.6244098'
    },
    {
      name: 'Cadalian',
      district_id: 6,
      lat: '7.1485225',
      long: '125.374181'
    },
    {
      name: 'Calinan (Pob.)',
      district_id: 9,
      lat: '7.190762',
      long: '125.4526984'
    },
    {
      name: 'Callawa',
      district_id: 7,
      lat: '7.2104151',
      long: '125.5450295'
    },
    {
      name: 'Camansi',
      district_id: 17,
      lat: '7.0867127',
      long: '125.4379671'
    },
    {
      name: 'Carmen',
      district_id: 6,
      lat: '7.1136449',
      long: '125.3454842'
    },
    {
      name: 'Catalunan Grande',
      district_id: 13,
      lat: '7.0801636',
      long: '125.5437938'
    },
    {
      name: 'Catalunan Pequeño',
      district_id: 15,
      lat: '7.074072',
      long: '125.5188398'
    },
    {
      name: 'Catigan',
      district_id: 18,
      lat: '7.001268918403278',
      long: '125.44240945513913'
    },
    {
      name: 'Cawayan',
      district_id: 9,
      lat: '7.162141448410965',
      long: '125.42509856041873'
    },
    {
      name: 'Centro (San Juan)',
      district_id: 5,
      lat: '7.0926455',
      long: '125.6378138'
    },
    {
      name: 'Colosas',
      district_id: 11,
      lat: '7.248915582669989',
      long: '125.51539517147216'
    },
    {
      name: 'Communal',
      district_id: 7,
      lat: '7.1413022',
      long: '125.6226189'
    },
    {
      name: 'Crossing Bayabas',
      district_id: 17,
      lat: '7.0207853',
      long: '125.4963038'
    },
    {
      name: 'Dacudao',
      district_id: 9,
      lat: '7.210217261170984',
      long: '125.46447499515381'
    },
    {
      name: 'Dalag',
      district_id: 10,
      lat: '7.2299545452972875',
      long: '125.25956056038817'
    },
    {
      name: 'Dalagdag',
      district_id: 9,
      lat: '7.2374994',
      long: '125.5096016'
    },
    {
      name: 'Daliao',
      district_id: 17,
      lat: '7.005737583756447',
      long: '125.50446040740965'
    },
    {
      name: 'Daliaon Plantation',
      district_id: 17,
      lat: '7.083832329391707',
      long: '125.4170786857361'
    },
    {
      name: 'Datu Salumay',
      district_id: 10,
      lat: '7.48409431741232',
      long: '125.25216446659547'
    },
    {
      name: 'Dominga',
      district_id: 9,
      lat: '7.2374249',
      long: '125.4831845'
    },
    {
      name: 'Dumoy',
      district_id: 15,
      lat: '7.034271658600207',
      long: '125.51104957780149'
    },
    {
      name: 'Eden',
      district_id: 17,
      lat: '7.03189002754237',
      long: '125.40624176514284'
    },
    {
      name: 'Fatima (Benowang)',
      district_id: 11,
      lat: '7.289011',
      long: '125.5329355'
    },
    {
      name: 'Gatungan',
      district_id: 8,
      lat: '7.21416',
      long: '125.596866'
    },
    {
      name: 'Gov. Paciano Bangoy',
      district_id: 5,
      lat: '7.0923259',
      long: '125.6179254'
    },
    {
      name: 'Gov. Vicente Duterte',
      district_id: 5,
      lat: '7.087342',
      long: '125.6293165'
    },
    {
      name: 'Gumalang',
      district_id: 6,
      lat: '7.2086785',
      long: '125.4035995'
    },
    {
      name: 'Gumitan',
      district_id: 10,
      lat: '7.439766452034272',
      long: '125.34648554007569'
    },
    {
      name: 'Ilang',
      district_id: 8,
      lat: '7.1806749',
      long: '125.6520282'
    },
    {
      name: 'Inayangan',
      district_id: 9,
      lat: '7.273853668252935',
      long: '125.43495563328247'
    },
    {
      name: 'Indangan',
      district_id: 7,
      lat: '7.166735486125751',
      long: '125.60555115510863'
    },
    {
      name: 'Kap. Tomas Monteverde, Sr.',
      district_id: 5,
      lat: '7.078723344690432',
      long: '125.62272417335508'
    },
    {
      name: 'Kilate',
      district_id: 17,
      lat: '7.0459311867543715',
      long: '125.44861140271607'
    },
    {
      name: 'Lacson',
      district_id: 9,
      lat: '7.210937467167861',
      long: '125.4429790449829'
    },
    {
      name: 'Lamanan',
      district_id: 9,
      lat: '7.242002271031983',
      long: '125.45136014766844'
    },
    {
      name: 'Lampianao',
      district_id: 9,
      lat: '7.2292008339295295',
      long: '125.51013804180297'
    },
    {
      name: 'Langub',
      district_id: 14,
      lat: '7.10038632022746',
      long: '125.56150066295164'
    },
    {
      name: 'Lapu-lapu',
      district_id: 5,
      lat: '7.096741126048822',
      long: '125.63795595341185'
    },
    {
      name: 'Leon Garcia, Sr.',
      district_id: 5,
      lat: '7.080286858788952',
      long: '125.62596260608218'
    },
    {
      name: 'Lizada',
      district_id: 18,
      lat: '7.013332805583361',
      long: '125.4906669867859'
    },
    {
      name: 'Los Amigos',
      district_id: 16,
      lat: '7.145790369261057',
      long: '125.4783688550171'
    },
    {
      name: 'Lubogan',
      district_id: 17,
      lat: '7.0347878',
      long: '125.4935953'
    },
    {
      name: 'Lumiad',
      district_id: 11,
      lat: '7.3892692',
      long: '125.4696232'
    },
    {
      name: 'Ma-a',
      district_id: 14,
      lat: '7.0807144',
      long: '125.5827159'
    },
    {
      name: 'Mabuhay',
      district_id: 11,
      lat: '7.314051857821173',
      long: '125.53600517042236'
    },
    {
      name: 'Magsaysay',
      district_id: 10,
      lat: '7.3156709038498695',
      long: '125.27815422383424'
    },
    {
      name: 'Magtuod',
      district_id: 14,
      lat: '7.1822623',
      long: '125.5001414'
    },
    {
      name: 'Mahayag',
      district_id: 8,
      lat: '7.211403011156544',
      long: '125.62278711219481'
    },
    {
      name: 'Malabog',
      district_id: 11,
      lat: '7.3236517',
      long: '125.4635094'
    },
    {
      name: 'Malagos',
      district_id: 6,
      lat: '7.190604042741013',
      long: '125.43658088045655'
    },
    {
      name: 'Malamba',
      district_id: 10,
      lat: '7.5185115',
      long: '125.3397345'
    },
    {
      name: 'Manambulan',
      district_id: 16,
      lat: '7.1028207',
      long: '125.4534713'
    },
    {
      name: 'Mandug',
      district_id: 7,
      lat: '7.159383435899959',
      long: '125.57834831562192'
    },
    {
      name: 'Manuel Guianga',
      district_id: 16,
      lat: '7.1033628',
      long: '125.4105091'
    },
    {
      name: 'Mapula',
      district_id: 11,
      lat: '7.4281929',
      long: '125.4486'
    },
    {
      name: 'Marapangi',
      district_id: 18,
      lat: '7.0159946',
      long: '125.4871702'
    },
    {
      name: 'Marilog',
      district_id: 10,
      lat: '7.2963492',
      long: '125.3025219'
    },
    {
      name: 'Matina Aplaya',
      district_id: 13,
      lat: '7.0444702',
      long: '125.5687297'
    },
    {
      name: 'Matina Biao',
      district_id: 16,
      lat: '7.127095153712292',
      long: '125.52415689935302'
    },
    {
      name: 'Matina Crossing',
      district_id: 13,
      lat: '7.0617824',
      long: '125.5929889'
    },
    {
      name: 'Matina Pangi',
      district_id: 13,
      lat: '7.076174940534882',
      long: '125.57116333235474'
    },
    {
      name: 'Megkawayan',
      district_id: 9,
      lat: '7.303667531371861',
      long: '125.43818234711304'
    },
    {
      name: 'Mintal',
      district_id: 16,
      lat: '7.0927267',
      long: '125.5012786'
    },
    {
      name: 'Mudiang',
      district_id: 8,
      lat: '7.180710580817115',
      long: '125.61978310818175'
    },
    {
      name: 'Mulig',
      district_id: 17,
      lat: '7.0807599',
      long: '125.4588412'
    },
    {
      name: 'New Carmen',
      district_id: 16,
      lat: '7.153774299916116',
      long: '125.55311351741334'
    },
    {
      name: 'New Valencia',
      district_id: 16,
      lat: '7.183316336429819',
      long: '125.5523462937622'
    },
    {
      name: 'Pampanga',
      district_id: 12,
      lat: '7.109269314448071',
      long: '125.64915076878663'
    },
    {
      name: 'Panacan',
      district_id: 8,
      lat: '7.144669238538168',
      long: '125.6612566783264'
    },
    {
      name: 'Panalum',
      district_id: 11,
      lat: '7.3551583',
      long: '125.5026674'
    },
    {
      name: 'Pandaitan',
      district_id: 11,
      lat: '',
      long: ''
    },
    {
      name: 'Pangyan',
      district_id: 9,
      lat: '7.3859748',
      long: '125.539833'
    },
    {
      name: 'Paquibato (Pob.)',
      district_id: 11,
      lat: '7.343199338153322',
      long: '125.44946909753419'
    },
    {
      name: 'Paradise Embak',
      district_id: 11,
      lat: '7.3491981',
      long: '125.5295867'
    },
    {
      name: 'Rafael Castillo',
      district_id: 5,
      lat: '7.1006632',
      long: '125.6355882'
    },
    {
      name: 'Riverside',
      district_id: 9,
      lat: '7.1645181',
      long: '125.4729266'
    },
    {
      name: 'Salapawan',
      district_id: 11,
      lat: '7.4617305',
      long: '125.4624134'
    },
    {
      name: 'Salaysay',
      district_id: 10,
      lat: '7.243095182477347',
      long: '125.30997057702638'
    },
    {
      name: 'Saloy',
      district_id: 9,
      lat: '7.298291802653522',
      long: '125.41403171562192'
    },
    {
      name: 'San Antonio',
      district_id: 5,
      lat: '7.0913247',
      long: '125.6287331'
    },
    {
      name: 'San Isidro (Licanan)',
      district_id: 8,
      lat: '7.2586906',
      long: '125.6365479'
    },
    {
      name: 'Santo Niño',
      district_id: 16,
      lat: '7.084078095119155',
      long: '125.50684538014832'
    },
    {
      name: 'Sasa',
      district_id: 12,
      lat: '7.116718928855235',
      long: '125.65483151370849'
    },
    {
      name: 'Sibulan',
      district_id: 18,
      lat: '6.968168450889802',
      long: '125.41858338221435'
    },
    {
      name: 'Sirawan',
      district_id: 18,
      lat: '7.000130298311822',
      long: '125.46882214699095'
    },
    {
      name: 'Sirib',
      district_id: 9,
      lat: '7.13324196484455',
      long: '125.40701679320681'
    },
    {
      name: 'Suawan (Tuli)',
      district_id: 10,
      lat: '7.2463001',
      long: '125.34923'
    },
    {
      name: 'Subasta',
      district_id: 9,
      lat: '7.1493919',
      long: '125.4381299'
    },
    {
      name: 'Sumimao',
      district_id: 11,
      lat: '7.2878176',
      long: '125.4712506'
    },
    {
      name: 'Tacunan',
      district_id: 16,
      lat: '7.112033220991671',
      long: '125.5041950427612'
    },
    {
      name: 'Tagakpan',
      district_id: 16,
      lat: '7.113014745611823',
      long: '125.42917741744382'
    },
    {
      name: 'Tagluno',
      district_id: 17,
      lat: '7.0679234',
      long: '125.4412799'
    },
    {
      name: 'Tagurano',
      district_id: 17,
      lat: '7.046337',
      long: '125.4142552'
    },
    {
      name: 'Talandang',
      district_id: 16,
      lat: '7.182046940249148',
      long: '125.51772712327882'
    },
    {
      name: 'Talomo (Pob.)',
      district_id: 15,
      lat: '7.07306',
      long: '125.61278'
    },
    {
      name: 'Talomo River',
      district_id: 9,
      lat: '7.1856284710956695',
      long: '125.46853210043338'
    },
    {
      name: 'Tamayong',
      district_id: 9,
      lat: '7.145470945817654',
      long: '125.39254438792726'
    },
    {
      name: 'Tambobong',
      district_id: 6,
      lat: '7.1879545',
      long: '125.3457669'
    },
    {
      name: 'Tamugan',
      district_id: 10,
      lat: '7.2958185',
      long: '125.3807785'
    },
    {
      name: 'Tapak',
      district_id: 11,
      lat: '7.4951210516382005',
      long: '125.46055694714353'
    },
    {
      name: 'Tawan-tawan',
      district_id: 6,
      lat: '7.169531389502548',
      long: '125.3871129593689'
    },
    {
      name: 'Tibuloy',
      district_id: 18,
      lat: '6.9829395',
      long: '125.4375201'
    },
    {
      name: 'Tibungco',
      district_id: 8,
      lat: '7.188420907711449',
      long: '125.64813901216431'
    },
    {
      name: 'Tigatto',
      district_id: 7,
      lat: '7.1067719839402095',
      long: '125.60104123275758'
    },
    {
      name: 'Toril (Pob.)',
      district_id: 17,
      lat: '7.015142324187957',
      long: '125.49780979278565'
    },
    {
      name: 'Tugbok (Pob.)',
      district_id: 16,
      lat: '7.1176161726645315',
      long: '125.47595315971071'
    },
    {
      name: 'Tungakalan',
      district_id: 17,
      lat: '7.015227512332288',
      long: '125.4979814541626'
    },
    {
      name: 'Ubalde',
      district_id: 5,
      lat: '7.0954004',
      long: '125.634681'
    },
    {
      name: 'Ula',
      district_id: 16,
      lat: '7.121324347743894',
      long: '125.49610191383059'
    },
    {
      name: 'Vicente Hizon Sr.',
      district_id: 12,
      lat: '7.1053629812422985',
      long: '125.64549257298586'
    },
    {
      name: 'Waan',
      district_id: 7,
      lat: '7.112202365660301',
      long: '125.58330110006106'
    },
    {
      name: 'Wangan',
      district_id: 9,
      lat: '7.1824071321410425',
      long: '125.44849223868407'
    },
    {
      name: 'Wilfredo Aquino',
      district_id: 5,
      lat: '7.097601921651984',
      long: '125.62063562405093'
    },
    {
      name: 'Wines',
      district_id: 6,
      lat: '7.1967078091298715',
      long: '125.40221332232056'
    }
  ],
  items: [
    {
      title: 'Name'
    },
    {
      title: 'Email'
    },
    {
      title: 'Date of birth'
    },
    {
      title: 'Phone/mobile number'
    },
    {
      title: 'Home/mailing address'
    },
    {
      title: 'Land Title'
    },
    {
      title: 'Building Plans'
    },
    {
      title: 'Name of Representative'
    }
  ],
  personalInfos: [
    {
      title: 'Apply for Permits - Building, Occupancy, Mechanical Electrical, Signage and Miscellaneous/Ancillary.'
    }
  ],
  suffixes: [
    'Sr.',
    'Jr.',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
    ]
  })
}
