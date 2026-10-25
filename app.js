const TRIP_DATA = {
  people: 9,
  fixed: {
    flightOut: { total: 456, pp: 50.70, label: 'Vuelo MAD→AMS' },
    flightBack: { total: 577, pp: 64.10, label: 'Vuelo DBV→MAD' },
    interrail: { total: 2151, pp: 239, label: 'Interrail Pass' },
    reservations: { total: 225, pp: 25, label: 'Reservas asiento' },
    bus: { total: 162, pp: 18, label: 'Bus Split→Dubrovnik' }
  },
  days: [
    {
      date: '2027-07-07', dow: 'Lun', city: 'Madrid → Amsterdam',
      type: 'travel',
      transport: {
        mode: 'flight',
        icon: '✈️',
        from: 'Madrid (MAD)', to: 'Amsterdam (AMS)',
        options: [
          { id: 'fly-mad-ams-1', label: 'Iberia (Air Nostrum)', departure: '15:55', arrival: '18:35', duration: '2h 40min', type: 'Directo', totalCost: 456, ppCost: 50.70, luggage: 'Equipaje de mano incluido', recommended: true, note: '' },
          { id: 'fly-mad-ams-2', label: 'Air Europa', departure: '07:00', arrival: '09:45', duration: '2h 45min', type: 'Directo', totalCost: 618, ppCost: 68.70, luggage: 'Equipaje de mano incluido', note: '+162€ más caro' },
          { id: 'fly-mad-ams-3', label: 'KLM', departure: '10:30', arrival: '13:05', duration: '2h 35min', type: 'Directo', totalCost: 654, ppCost: 72.70, luggage: 'Equipaje de mano incluido', note: '+198€ más caro' }
        ]
      },
      accommodation: null, cityKey: 'amsterdam', nightIndex: 0
    },
    {
      date: '2027-07-08', dow: 'Mar', city: 'Amsterdam',
      type: 'stay', cityKey: 'amsterdam', nightIndex: 1
    },
    {
      date: '2027-07-09', dow: 'Mié', city: 'Amsterdam',
      type: 'stay', cityKey: 'amsterdam', nightIndex: 2
    },
    {
      date: '2027-07-10', dow: 'Jue', city: 'Amsterdam → Berlín',
      type: 'travel',
      transport: {
        mode: 'train',
        icon: '🚄',
        interrailDay: 1,
        from: 'Amsterdam Centraal', to: 'Berlin Hbf',
        options: [
          { id: 'ams-ber-1', label: 'ICE 143', departure: '08:00', arrival: '13:45', duration: '5h 45min', type: 'Directo', reservation: true, resCost: 5.50, note: '' },
          { id: 'ams-ber-2', label: 'ICE 145', departure: '10:00', arrival: '15:45', duration: '5h 45min', type: 'Directo', reservation: true, resCost: 5.50, recommended: true, note: 'Llegan con toda la tarde' },
          { id: 'ams-ber-3', label: 'ICE 147', departure: '12:00', arrival: '17:46', duration: '5h 46min', type: 'Directo', reservation: true, resCost: 5.50, note: '' }
        ]
      },
      cityKey: 'berlin', nightIndex: 0
    },
    {
      date: '2027-07-11', dow: 'Vie', city: 'Berlín',
      type: 'stay', cityKey: 'berlin', nightIndex: 1
    },
    {
      date: '2027-07-12', dow: 'Sáb', city: 'Berlín',
      type: 'stay', cityKey: 'berlin', nightIndex: 2
    },
    {
      date: '2027-07-13', dow: 'Dom', city: 'Berlín → Praga',
      type: 'travel',
      transport: {
        mode: 'train',
        icon: '🚄',
        interrailDay: 2,
        from: 'Berlin Hbf', to: 'Praha hl.n.',
        options: [
          { id: 'ber-pra-1', label: 'ComfortJet', departure: '09:28', arrival: '13:15', duration: '3h 47min', type: 'Directo', reservation: true, resCost: 5.50, note: '' },
          { id: 'ber-pra-2', label: 'ComfortJet', departure: '11:28', arrival: '15:15', duration: '3h 47min', type: 'Directo', reservation: true, resCost: 5.50, recommended: true, note: 'Mañana libre en Berlín' },
          { id: 'ber-pra-3', label: 'ComfortJet', departure: '13:28', arrival: '17:15', duration: '3h 47min', type: 'Directo', reservation: true, resCost: 5.50, note: '' }
        ]
      },
      cityKey: 'prague', nightIndex: 0
    },
    {
      date: '2027-07-14', dow: 'Lun', city: 'Praga',
      type: 'stay', cityKey: 'prague', nightIndex: 1
    },
    {
      date: '2027-07-15', dow: 'Mar', city: 'Praga',
      type: 'stay', cityKey: 'prague', nightIndex: 2
    },
    {
      date: '2027-07-16', dow: 'Mié', city: 'Praga → Salzburgo',
      type: 'travel',
      transport: {
        mode: 'train',
        icon: '🚄',
        interrailDay: 3,
        from: 'Praha hl.n.', to: 'Salzburg Hbf',
        stops: ['Linz Hbf'],
        options: [
          { id: 'pra-sal-1', label: 'CJ + Railjet', departure: '08:21', arrival: '~13:40', duration: '~5h 19min', type: '1 transbordo (Linz)', reservation: true, resCost: 8.50, note: '' },
          { id: 'pra-sal-2', label: 'CJ + Railjet', departure: '10:21', arrival: '~15:50', duration: '~5h 29min', type: '1 transbordo (Linz)', reservation: true, resCost: 8.50, recommended: true, note: 'Transbordo cómodo en Linz' },
          { id: 'pra-sal-3', label: 'CJ + Railjet', departure: '12:21', arrival: '~17:50', duration: '~5h 29min', type: '1 transbordo (Linz)', reservation: true, resCost: 8.50, note: '' }
        ]
      },
      cityKey: 'salzburg', nightIndex: 0
    },
    {
      date: '2027-07-17', dow: 'Jue', city: 'Salzburgo',
      type: 'stay', cityKey: 'salzburg', nightIndex: 1
    },
    {
      date: '2027-07-18', dow: 'Vie', city: 'Salzburgo → Lago Bled',
      type: 'travel',
      transport: {
        mode: 'train',
        icon: '🚄',
        interrailDay: 4,
        from: 'Salzburg Hbf', to: 'Lesce-Bled',
        stops: ['Villach Hbf'],
        options: [
          { id: 'sal-bled-1', label: 'ÖBB + SŽ Regional', departure: '10:07', arrival: '~13:20', duration: '~3h 13min', type: '1 transbordo (Villach)', reservation: false, resCost: 3, recommended: true, note: 'Estación a 3,8 km del lago' },
          { id: 'sal-bled-2', label: 'ÖBB + SŽ Regional', departure: '12:07', arrival: '~15:20', duration: '~3h 13min', type: '1 transbordo (Villach)', reservation: false, resCost: 3, note: '' }
        ]
      },
      cityKey: 'bled', nightIndex: 0
    },
    {
      date: '2027-07-19', dow: 'Sáb', city: 'Lago Bled',
      type: 'stay', cityKey: 'bled', nightIndex: 1
    },
    {
      date: '2027-07-20', dow: 'Dom', city: 'Lago Bled → Split',
      type: 'travel',
      transport: {
        mode: 'train',
        icon: '🚄',
        interrailDay: 5,
        from: 'Lesce-Bled', to: 'Split',
        stops: ['Ljubljana', 'Zagreb'],
        options: [
          {
            id: 'bled-split-day', label: 'Opción A: Diurno', departure: '06:00', arrival: '21:47', duration: '~15h 47min',
            type: '2 transbordos (Ljubljana, Zagreb)', reservation: true, resCost: 5,
            recommended: false,
            note: 'Madrugón. Día entero en trenes.',
            legs: [
              { from: 'Lesce-Bled', to: 'Ljubljana', dep: '06:00', arr: '06:55', train: 'SŽ Regional' },
              { type: 'wait', duration: '1h 15min', station: 'Ljubljana' },
              { from: 'Ljubljana', to: 'Zagreb', dep: '08:10', arr: '10:19', train: 'SŽ/HŽ' },
              { type: 'wait', duration: '3h 30min', station: 'Zagreb' },
              { from: 'Zagreb', to: 'Split', dep: '13:49', arr: '21:47', train: 'HŽPP ICN 523' }
            ]
          },
          {
            id: 'bled-split-night', label: 'Opción B: Nocturno', departure: '16:00', arrival: '06:53+1', duration: '~14h 53min',
            type: '2 transbordos + nocturno', reservation: true, resCost: 5,
            nightTrain: true, nightTrainCost: { min: 7, max: 25 },
            recommended: true,
            note: '⚠️ Ahorra 1 noche de hotel. Litera ~7-25€/pax extra.',
            legs: [
              { from: 'Lesce-Bled', to: 'Ljubljana', dep: '16:00', arr: '16:55', train: 'SŽ Regional' },
              { type: 'wait', duration: '25min', station: 'Ljubljana' },
              { from: 'Ljubljana', to: 'Zagreb', dep: '17:20', arr: '19:29', train: 'SŽ/HŽ' },
              { type: 'wait', duration: '2h 37min', station: 'Zagreb' },
              { from: 'Zagreb', to: 'Split', dep: '22:06', arr: '06:53', train: 'HŽPP Nocturno', night: true }
            ]
          }
        ]
      },
      cityKey: 'split', nightIndex: 0
    },
    {
      date: '2027-07-21', dow: 'Lun', city: 'Split',
      type: 'stay', cityKey: 'split', nightIndex: 1
    },
    {
      date: '2027-07-22', dow: 'Mar', city: 'Split',
      type: 'stay', cityKey: 'split', nightIndex: 2
    },
    {
      date: '2027-07-23', dow: 'Mié', city: 'Split',
      type: 'stay', cityKey: 'split', nightIndex: 3
    },
    {
      date: '2027-07-24', dow: 'Jue', city: 'Split → Dubrovnik',
      type: 'travel',
      transport: {
        mode: 'bus',
        icon: '🚌',
        from: 'Split', to: 'Dubrovnik',
        options: [
          { id: 'split-dbv', label: 'Flixbus / Autotrans', departure: 'Varios horarios', arrival: '~4,5h después', duration: '~4h 30min', type: 'Directo', cost: 18, note: 'No hay tren. ~15-20€/pax' }
        ]
      },
      cityKey: 'dubrovnik', nightIndex: 0
    },
    {
      date: '2027-07-25', dow: 'Vie', city: 'Dubrovnik',
      type: 'stay', cityKey: 'dubrovnik', nightIndex: 1
    },
    {
      date: '2027-07-26', dow: 'Sáb', city: 'Dubrovnik → Madrid',
      type: 'travel',
      transport: {
        mode: 'flight',
        icon: '✈️',
        from: 'Dubrovnik (DBV)', to: 'Madrid (MAD)',
        options: [
          { id: 'fly-dbv-mad-1', label: 'Iberia', departure: '12:35', arrival: '15:40', duration: '3h 05min', type: 'Directo', totalCost: 577, ppCost: 64.10, luggage: 'Equipaje de mano incluido', recommended: true, note: '' },
          { id: 'fly-dbv-mad-2', label: 'Austrian / Lufthansa', departure: '13:00', arrival: '20:15', duration: '7h 15min', type: '2 escalas (VIE, FRA)', totalCost: 1907, ppCost: 211.90, luggage: 'Equipaje de mano incluido', note: '3,3× más caro' },
          { id: 'fly-dbv-mad-3', label: 'Croatia Airlines', departure: '06:40', arrival: '11:20', duration: '4h 40min', type: '1 escala (ZAG)', totalCost: 2095, ppCost: 232.80, luggage: 'Equipaje de mano incluido', note: '3,6× más caro + madrugón' }
        ]
      },
      accommodation: null, cityKey: null
    }
  ],
  cities: {
    amsterdam: {
      name: 'Amsterdam', country: '🇳🇱', nights: 3, dates: '7-10 jul',
      coords: { lat: 52.3676, lng: 4.9041 },
      warning: null,
      accommodations: [
        {
          id: 'ams-a', name: 'Travel Hotel Amsterdam',
          address: 'Beursstraat 23, Centrum',
          coords: { lat: 52.3740, lng: 4.8972 },
          total: 1320, pp: 146.70, ppn: 48.90,
          rating: 3.1, ratingSource: 'Google', reviews: 994,
          bookingRating: null,
          rooms: '1 habitación privada para 10 (literas)',
          sharedWithStrangers: false,
          bathroomPrivate: true,
          breakfast: false,
          cancellation: '5 jul 2027',
          payAdvance: false,
          genius: false,
          pros: ['Habitación privada para los 9', 'Ubicación inmejorable (Dam Square 4 min)', 'Baño privado'],
          cons: ['Opiniones muy malas en limpieza', 'Puesto 386/418 hoteles'],
          stars: ['9 juntos', 'Ubicación']
        },
        {
          id: 'ams-b', name: 'Stayokay Stadsdoelen',
          address: 'Kloveniersburgwal 97',
          coords: { lat: 52.3690, lng: 4.8990 },
          total: 1314, pp: 146, ppn: 48.70,
          rating: 4.2, ratingSource: 'Google', reviews: 1323,
          bookingRating: null,
          rooms: '9 camas en dormitorio mixto de 10',
          sharedWithStrangers: true,
          bathroomPrivate: false,
          breakfast: false,
          cancellation: '4 jul 2027',
          payAdvance: false,
          genius: true, originalPrice: 1460,
          pros: ['Buenas valoraciones (4.2 Google)', 'Edificio histórico junto a canales', 'Muy céntrico'],
          cons: ['1 desconocido en la habitación', 'Baño compartido', 'Sin A/C'],
          stars: ['Mejor opinión']
        },
        {
          id: 'ams-c', name: 'Hans Brinker Hostel',
          address: 'Kerkstraat 136-138',
          coords: { lat: 52.3630, lng: 4.8890 },
          total: 1214, pp: 134.90, ppn: 44.95,
          rating: 3.9, ratingSource: 'Google', reviews: 5249,
          bookingRating: null,
          rooms: '1× mixta de 6 + 3× cama en mixta de 8',
          sharedWithStrangers: 'partial',
          bathroomPrivate: true,
          breakfast: true,
          cancellation: '5 jul 2027',
          payAdvance: false,
          genius: true, originalPrice: 1349,
          pros: ['El más barato', 'Desayuno incluido', 'Baño privado', 'Cerca de Leidseplein'],
          cons: ['3 duermen separados con desconocidos', 'Reseñas polarizadas'],
          stars: ['Precio', 'Desayuno']
        }
      ]
    },
    berlin: {
      name: 'Berlín', country: '🇩🇪', nights: 3, dates: '10-13 jul',
      coords: { lat: 52.5200, lng: 13.4050 },
      warning: '⚠️ OJO: por ley alemana, los menores de 18 NO pueden dormir en habitaciones compartidas con desconocidos. Tenedlo en cuenta al elegir.',
      accommodations: [
        {
          id: 'ber-d', name: 'Central Inn am Hbf',
          address: 'Alt-Moabit 126, Mitte',
          coords: { lat: 52.5260, lng: 13.3450 },
          total: 1080, pp: 120, ppn: 40,
          rating: 3.0, ratingSource: 'Google (est.)', reviews: 403,
          rooms: '1× Cuádruple + 1× Apto 2 hab (45m²)',
          sharedWithStrangers: false,
          bathroomPrivate: true,
          breakfast: false,
          cancellation: '8 jul 2027',
          payAdvance: false,
          genius: false,
          pros: ['Barato (40€/noche)', 'Sin problema de menores', 'Cerca de Hbf'],
          cons: ['Opiniones mediocres (3.2/5)', 'Hotel 2 estrellas'],
          stars: ['Precio']
        },
        {
          id: 'ber-e', name: 'Ark am Hauptbahnhof',
          address: 'Alt-Moabit 126, Mitte',
          coords: { lat: 52.5260, lng: 13.3450 },
          total: 1080, pp: 120, ppn: 40,
          rating: 3.5, ratingSource: 'Google', reviews: 150,
          rooms: '2× Apto familiar (45+50m² = 95m²)',
          sharedWithStrangers: false,
          bathroomPrivate: true,
          breakfast: false,
          cancellation: '8 jul 2027',
          payAdvance: false,
          genius: false,
          pros: ['Mismo precio que Central Inn', '2 aptos con cocina (95m²)', 'Sin problema de menores'],
          cons: ['Opiniones mediocres', 'Mismo edificio que Central Inn', '⚠️ Solo queda 1 apto de 5 pax'],
          stars: ['Precio', '9 juntos']
        },
        {
          id: 'ber-f', name: 'B&B Hotel Kreuzberg',
          address: 'Dennewitzstraße 44, Kreuzberg',
          coords: { lat: 52.4990, lng: 13.3720 },
          total: 1265, pp: 140.56, ppn: 46.85,
          rating: 4.4, ratingSource: 'Google (est.)', reviews: 791,
          rooms: '3× Triple privada (19m²)',
          sharedWithStrangers: false,
          bathroomPrivate: true,
          breakfast: false, breakfastCost: 18,
          cancellation: '10 jul 2027',
          payAdvance: true,
          genius: true, originalPrice: 1406,
          ac: true,
          pros: ['Mejores valoraciones (4.4/5)', 'Hotel 3★ nuevo (2026)', 'A/C', 'Cancel hasta 10 jul'],
          cons: ['Precio intermedio', 'Desayuno 18€ extra', 'Hay que pagar antes'],
          stars: ['Mejor opinión']
        },
        {
          id: 'ber-b', name: 'Holiday 33 Apartment',
          address: 'Ufnaustraße, Mitte',
          coords: { lat: 52.5310, lng: 13.3360 },
          total: 1657, pp: 184.10, ppn: 61.35,
          rating: 5.0, ratingSource: 'Google', reviews: 8,
          rooms: 'Apto 3 dormitorios, 85m²',
          sharedWithStrangers: false,
          bathroomPrivate: true,
          breakfast: false,
          cancellation: '19 jun 2027',
          payAdvance: false,
          genius: true, originalPrice: 1935,
          pros: ['Apartamento privado', 'Cocina completa', 'Buena nota (4.2/5)'],
          cons: ['El más caro (61€/noche)', 'Cancel solo hasta 19 jun', 'Pocas reseñas (21)'],
          stars: []
        },
        {
          id: 'ber-c', name: 'BIG 7RMS City Central',
          address: 'Kurfürstenstraße 79, Tiergarten',
          coords: { lat: 52.5030, lng: 13.3620 },
          total: 1303, pp: 144.80, ppn: 48.25,
          rating: 4.9, ratingSource: 'Google', reviews: 8,
          rooms: 'Apto 4 dorm, 139m²',
          sharedWithStrangers: false,
          bathroomPrivate: true,
          breakfast: false,
          cancellation: '10 jun 2027',
          payAdvance: false,
          genius: true, originalPrice: 1516,
          pros: ['Enorme (139m²)', '4 dormitorios', 'Vistas a la ciudad'],
          cons: ['No muy céntrico', 'Cancel solo hasta 10 jun', 'Opiniones justas'],
          stars: []
        }
      ]
    },
    prague: {
      name: 'Praga', country: '🇨🇿', nights: 3, dates: '13-16 jul',
      coords: { lat: 50.0755, lng: 14.4378 },
      warning: null,
      accommodations: [
        {
          id: 'pra-a', name: 'Prague Centrum House',
          address: 'Boršov 282, Old Town',
          coords: { lat: 50.0830, lng: 14.4140 },
          total: 757, pp: 84.11, ppn: 28.04,
          rating: 4.1, ratingSource: 'Sin datos Google', reviews: 44,
          rooms: 'Casa 4 dorm, 245m², 3 baños',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false, cancellation: '12 jul 2027', payAdvance: false,
          genius: true, originalPrice: 841,
          pros: ['La más barata (28€/noche)', 'Enorme (245m²)', 'Casa siglo XV', '200m del Puente Carlos'],
          cons: ['Pocas reseñas (44)', 'Limpieza 7.6'],
          stars: ['Precio', '9 juntos']
        },
        {
          id: 'pra-b', name: 'Apartments Old Town Square',
          address: 'Old Town Square, Praga 1',
          coords: { lat: 50.0870, lng: 14.4210 },
          total: 935, pp: 103.90, ppn: 34.60,
          rating: 4.2, ratingSource: 'Sin datos Google', reviews: 346,
          rooms: 'Apto Loft 3 dorm, 90m², 3 baños',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false, cancellation: '8 jul 2027', payAdvance: false,
          genius: false,
          pros: ['Buena ubicación', '3 baños', 'Buenas opiniones'],
          cons: ['⚠️ Solo queda 1', '90m² justo para 9'],
          stars: []
        },
        {
          id: 'pra-e', name: 'EA ApartHotel Melantrich',
          address: 'Václavské nám. 36, Praga 1',
          coords: { lat: 50.0810, lng: 14.4260 },
          total: 1147, pp: 127.44, ppn: 42.48,
          rating: 4.1, ratingSource: 'Google', reviews: 579,
          rooms: 'Apto Superior 106m², hotel 4★',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false, breakfastCost: 15,
          cancellation: '12 jul 2027', payAdvance: false,
          genius: false,
          pros: ['4★, 5.174 reseñas (4.3/5)', 'Plaza Wenceslao', 'Jacuzzi, sauna, terraza'],
          cons: ['No la más barata', 'Desayuno 15€ extra'],
          stars: ['Mejor opinión']
        },
        {
          id: 'pra-h', name: 'Hotel Bologna',
          address: 'Konviktská 5, Praga 1',
          coords: { lat: 50.0820, lng: 14.4170 },
          total: 1304, pp: 144.89, ppn: 48.30,
          rating: 4.1, ratingSource: 'Google', reviews: 2873,
          rooms: '2× Familiar (40m² c/u), hotel 4★',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: true, ac: true,
          cancellation: '11 jul 2027', payAdvance: false,
          genius: false,
          pros: ['Desayuno buffet incluido', '2.873 reseñas Google (4.1/5)', '4★ con A/C'],
          cons: ['La más cara (48€/noche)', 'Sin cocina'],
          stars: ['Desayuno']
        }
      ]
    },
    salzburg: {
      name: 'Salzburgo', country: '🇦🇹', nights: 2, dates: '16-18 jul',
      coords: { lat: 47.8095, lng: 13.0550 },
      warning: '⚠️ OJO: Austria tiene la misma ley que Alemania — menores de 18 no pueden compartir habitación con desconocidos.',
      accommodations: [
        {
          id: 'sal-a', name: 'The Keep Eco Rooms',
          address: 'Schwarzstraße 50',
          coords: { lat: 47.8060, lng: 13.0440 },
          total: 796, pp: 88.44, ppn: 44.22,
          rating: 3.8, ratingSource: 'Google', reviews: 522,
          rooms: '3× Triple (1 con ducha privada, 2 con baño compartido)',
          sharedWithStrangers: false, bathroomPrivate: 'partial',
          breakfast: false, breakfastCost: 18,
          cancellation: '14 jul 2027', payAdvance: true,
          genius: true, originalPrice: 884,
          pros: ['El más barato (44€/noche)', 'Eco-friendly', '15 min al casco antiguo'],
          cons: ['2/3 habs con baño compartido', 'Hay que pagar antes'],
          stars: ['Precio']
        },
        {
          id: 'sal-c', name: 'Limehome Sterneckstr',
          address: 'Sterneckstraße 55',
          coords: { lat: 47.8120, lng: 13.0560 },
          total: 1029, pp: 114.33, ppn: 57.17,
          rating: 4.1, ratingSource: 'Sin datos Google', reviews: 1178,
          rooms: '3× Habitación con sofá cama (34m²)',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false,
          cancellation: '14 jul 2027', payAdvance: false,
          genius: true, originalPrice: 1143,
          pros: ['Mejor valorado (4.1/5)', 'Moderno, limpio', 'Habs amplias (34m²)'],
          cons: ['Sin recepción', 'Sin A/C', 'Poco céntrico (7.8)'],
          stars: ['Mejor opinión']
        },
        {
          id: 'sal-d', name: 'Hotel Turnerwirt',
          address: 'Linzer Bundesstraße 54',
          coords: { lat: 47.8160, lng: 13.0680 },
          total: 1060, pp: 117.78, ppn: 58.89,
          rating: 4.0, ratingSource: 'Google', reviews: 1395,
          rooms: '1× Cuádruple (22m²) + 1× Familiar (24m²)',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false, breakfastCost: 16,
          cancellation: '14 jul 2027', payAdvance: false,
          genius: false,
          pros: ['Hotel desde 1437', 'Staff 8.9', 'Bus justo delante'],
          cons: ['2 km del centro', 'Desayuno 16€ extra'],
          stars: []
        },
        {
          id: 'sal-e', name: 'Haus Wartenberg',
          address: 'Riedenburger Str. 2',
          coords: { lat: 47.7970, lng: 13.0390 },
          total: 1286, pp: 142.89, ppn: 71.44,
          rating: 4.0, ratingSource: 'Google', reviews: 359,
          rooms: '3× Familiar (25m²)',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false, breakfastCost: 10,
          cancellation: '15 jul 2027', payAdvance: false,
          genius: true, originalPrice: 1421,
          pros: ['Vistas a la montaña', 'Parking gratis', 'Edificio de 1654', 'Desayuno barato (10€)'],
          cons: ['La más cara (71€/noche)', 'Nota 4.0/5'],
          stars: []
        }
      ]
    },
    bled: {
      name: 'Lago Bled', country: '🇸🇮', nights: 2, dates: '18-20 jul',
      coords: { lat: 46.3625, lng: 14.0938 },
      warning: '⚠️ OJO: los alojamientos baratos están a 5-7 km del lago. Tened en cuenta los desplazamientos en bus local.',
      accommodations: [
        {
          id: 'bled-b', name: 'Zgornja Dobrava',
          address: 'Zgornja Dobrava 5, Radovljica',
          coords: { lat: 46.3450, lng: 14.1450 },
          total: 738, pp: 82, ppn: 41,
          rating: 4.8, ratingSource: 'Google', reviews: 81,
          distLake: '~5 km',
          rooms: '1× Chalet + 1× Apto 3 dorm (80m²)',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false,
          cancellation: '11 jul 2027', payAdvance: false,
          genius: true, originalPrice: 756,
          pros: ['Chalet + apto privado', 'BBQ casera del anfitrión', 'A/C, cocina, parking', 'Nota 4.6/5'],
          cons: ['5 km del lago', 'WiFi flojo (6.9)', '⚠️ Solo queda 1 apto'],
          stars: ['Precio']
        },
        {
          id: 'bled-c', name: 'Vila Eva Lesce',
          address: 'Letališka ulica 8, Lesce',
          coords: { lat: 46.3600, lng: 14.1540 },
          total: 838, pp: 93.11, ppn: 46.56,
          rating: 4.9, ratingSource: 'Google', reviews: 88,
          distLake: '~5 km',
          rooms: '1× Twin + 1× Triple + 1× Familiar Deluxe',
          sharedWithStrangers: false, bathroomPrivate: 'partial',
          breakfast: false,
          cancellation: '15 jul 2027', payAdvance: false,
          genius: true, originalPrice: 660,
          pros: ['Renovado 2020', 'A/C', '2 restaurantes', 'Parking gratis'],
          cons: ['5 km del lago', '2/3 habs baño compartido'],
          stars: []
        },
        {
          id: 'bled-e', name: "B&B Anž'k",
          address: 'Zatrnik 125, Bled',
          coords: { lat: 46.3860, lng: 14.0560 },
          total: 946, pp: 105.11, ppn: 52.56,
          rating: 4.7, ratingSource: 'Google', reviews: 229,
          distLake: '~5 km',
          rooms: '1× Doble + 2× Familiar',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false, breakfastCost: 15,
          cancellation: '4 jul 2027', payAdvance: false,
          genius: true, originalPrice: 1296,
          pros: ['Granja turística', 'Desayuno excepcional', 'Staff 9.9', 'Vistas montaña'],
          cons: ['5 km del lago', 'Cancel solo hasta 4 jul'],
          stars: ['Mejor opinión', 'Desayuno']
        },
        {
          id: 'bled-g', name: 'ANMARI Apartment',
          address: 'Langusova ulica 18, Radovljica',
          coords: { lat: 46.3430, lng: 14.1720 },
          total: 1053, pp: 117, ppn: 58.50,
          rating: 5.0, ratingSource: 'Sin datos Google', reviews: 78,
          distLake: '~7 km',
          rooms: '1× Suite 2 dorm + 1× Apto vistas (70m²)',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false,
          cancellation: '13 jul 2027', payAdvance: false,
          genius: true, originalPrice: 1165,
          pros: ['Nota 5.0/5 (la más alta del viaje)', 'Todo perfecto: staff, limpieza, confort'],
          cons: ['7 km del lago', 'Solo efectivo', 'La más cara'],
          stars: []
        }
      ]
    },
    split: {
      name: 'Split', country: '🇭🇷', nights: 4, dates: '20-24 jul',
      coords: { lat: 43.5081, lng: 16.4402 },
      warning: '⚠️ OJO: temporada altísima en Split. Los apartamentos céntricos cuestan una burrada (2.500-5.000€/4 noches), así que las opciones son limitadas.',
      accommodations: [
        {
          id: 'spl-a', name: 'Hostel Colors Of Adriatic',
          address: 'Stari Pazar 2',
          coords: { lat: 43.5080, lng: 16.4420 },
          total: 1335, pp: 148.33, ppn: 37.08,
          rating: 3.4, ratingSource: 'Google', reviews: 165,
          rooms: '9× cama en mixta de 10 (30m²)',
          sharedWithStrangers: true,
          bathroomPrivate: false,
          breakfast: false, ac: true,
          cancellation: '13 jul 2027', payAdvance: false,
          genius: true, originalPrice: 1553,
          pros: ['100m del Palacio', 'El más barato viable (37€/noche)', 'A/C', 'Youth Only'],
          cons: ['1 desconocido en hab de 10', 'Baño compartido', 'Única opción en presupuesto'],
          stars: ['Precio', 'Ubicación']
        }
      ]
    },
    dubrovnik: {
      name: 'Dubrovnik', country: '🇭🇷', nights: 2, dates: '24-26 jul',
      coords: { lat: 42.6507, lng: 18.0944 },
      warning: null,
      accommodations: [
        {
          id: 'dbv-a', name: 'Guest House Kono',
          address: 'Dubrovnik, 1.3 km centro',
          coords: { lat: 42.6480, lng: 18.1050 },
          total: 1079, pp: 119.89, ppn: 59.94,
          rating: 4.3, ratingSource: 'Google', reviews: 52,
          rooms: '2× Apto (45+60m²), parking gratis',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false,
          cancellation: 'Gratis', payAdvance: false,
          genius: true, originalPrice: 1620,
          recommended: true,
          pros: ['Mejor nota Google (4.3/5)', '2 aptos con cocina', 'Parking gratis', '-33% Genius'],
          cons: ['7 camas para 9 (faltan 2)'],
          stars: ['Mejor opinión', 'Baño privado']
        },
        {
          id: 'dbv-b', name: 'Villa OdakSe',
          address: 'Ploce, 1.4 km centro',
          coords: { lat: 42.6430, lng: 18.1140 },
          total: 1038, pp: 115.33, ppn: 57.67,
          rating: 4.2, ratingSource: 'Sin datos Google', reviews: 567,
          rooms: '2× Estudio + 1× Apto 2 dorm (113m²)',
          sharedWithStrangers: false, bathroomPrivate: true,
          breakfast: false,
          cancellation: 'Gratis', payAdvance: false,
          genius: true, originalPrice: 1083,
          pros: ['Más barato', '3 unidades (9 camas exactas)', 'Vistas al mar'],
          cons: ['Sin parking', 'Nota 4.2/5', 'Estudio 26m² pequeño'],
          stars: ['Precio', '9 juntos']
        },
        {
          id: 'dbv-c', name: 'Guest House Gugily',
          address: '300 m del centro',
          coords: { lat: 42.6410, lng: 18.1070 },
          total: 1142, pp: 126.89, ppn: 63.44,
          rating: 3.7, ratingSource: 'Sin datos Google', reviews: 141,
          rooms: '1× Triple (baño comp.) + 1× Apto 3 dorm',
          sharedWithStrangers: false, bathroomPrivate: 'partial',
          breakfast: false,
          cancellation: 'Gratis', payAdvance: false,
          genius: true, originalPrice: 1715,
          pros: ['La más céntrica (300m)', 'Ubicación 9.5', '-33% Genius'],
          cons: ['Nota baja (3.7/5)', 'Triple con baño compartido', '7 camas para 9'],
          stars: ['Ubicación']
        },
        {
          id: 'dbv-d', name: 'Dubrovnik Rooms',
          address: '1.7 km del centro',
          coords: { lat: 42.6530, lng: 18.0850 },
          total: 1053, pp: 117, ppn: 58.50,
          rating: 4.1, ratingSource: 'Sin datos Google', reviews: 841,
          rooms: '5× Doble con baño compartido',
          sharedWithStrangers: false, bathroomPrivate: false,
          breakfast: false,
          cancellation: 'Gratis', payAdvance: false,
          genius: true, originalPrice: 1170,
          pros: ['Precio bajo', '841 reseñas', '5 habs separadas'],
          cons: ['Todo baño compartido', '5 habs separadas (menos grupo)'],
          stars: []
        }
      ]
    }
  }
};

const PHASES = [
  { type: 'transport', dayIndex: 0, label: 'Madrid → Amsterdam', icon: '✈️', dateStr: '7/07', shortLabel: 'MAD → AMS' },
  { type: 'hotel', cityKey: 'amsterdam', label: 'Amsterdam', icon: '🏨', dateStr: '7/07', shortLabel: 'Amsterdam' },
  { type: 'transport', dayIndex: 3, label: 'Amsterdam → Berlín', icon: '🚆', dateStr: '10/07', shortLabel: 'AMS → BER' },
  { type: 'hotel', cityKey: 'berlin', label: 'Berlín', icon: '🏨', dateStr: '10/07', shortLabel: 'Berlín' },
  { type: 'transport', dayIndex: 6, label: 'Berlín → Praga', icon: '🚆', dateStr: '13/07', shortLabel: 'BER → PRG' },
  { type: 'hotel', cityKey: 'prague', label: 'Praga', icon: '🏨', dateStr: '13/07', shortLabel: 'Praga' },
  { type: 'transport', dayIndex: 9, label: 'Praga → Salzburgo', icon: '🚆', dateStr: '16/07', shortLabel: 'PRG → SZG' },
  { type: 'hotel', cityKey: 'salzburg', label: 'Salzburgo', icon: '🏨', dateStr: '16/07', shortLabel: 'Salzburgo' },
  { type: 'transport', dayIndex: 11, label: 'Salzburgo → Lago Bled', icon: '🚆', dateStr: '18/07', shortLabel: 'SZG → BLD' },
  { type: 'hotel', cityKey: 'bled', label: 'Lago Bled', icon: '🏨', dateStr: '18/07', shortLabel: 'Lago Bled' },
  { type: 'transport', dayIndex: 13, label: 'Bled → Split', icon: '🚆', dateStr: '20/07', shortLabel: 'BLD → SPU' },
  { type: 'hotel', cityKey: 'split', label: 'Split', icon: '🏨', dateStr: '20/07', shortLabel: 'Split' },
  { type: 'transport', dayIndex: 17, label: 'Split → Dubrovnik', icon: '🚌', dateStr: '24/07', shortLabel: 'SPU → DBV' },
  { type: 'hotel', cityKey: 'dubrovnik', label: 'Dubrovnik', icon: '🏨', dateStr: '24/07', shortLabel: 'Dubrovnik' },
  { type: 'transport', dayIndex: 19, label: 'Dubrovnik → Madrid', icon: '✈️', dateStr: '26/07', shortLabel: 'DBV → MAD' },
];

const state = {
  selectedPhase: 0,
  maxReachedPhase: 0,
  selections: {},
  trainSelections: {}
};

const CITY_COLORS = {
  amsterdam: '#ff6b35', berlin: '#004ecb', prague: '#d4a017',
  salzburg: '#2d8a4e', bled: '#0ea5e9', split: '#e11d48', dubrovnik: '#7c3aed'
};

function isNightTrainSelected() {
  return state.trainSelections['2027-07-20'] === 'bled-split-night';
}

function getEffectiveSplitNights() {
  return isNightTrainSelected() ? 3 : 4;
}

function getNightTrainSaving() {
  if (!isNightTrainSelected()) return { savingPP: 0, savingTotal: 0 };
  const splitSel = state.selections['split'];
  if (!splitSel) return { savingPP: 0, savingTotal: 0 };
  const acc = TRIP_DATA.cities.split.accommodations.find(a => a.id === splitSel);
  const nightCostPP = acc.pp / TRIP_DATA.cities.split.nights;
  const nightCostTotal = acc.total / TRIP_DATA.cities.split.nights;
  return { savingPP: nightCostPP - 15, savingTotal: nightCostTotal - (15 * 9) };
}

function isPhaseComplete(i) {
  const phase = PHASES[i];
  if (phase.type === 'transport') {
    const day = TRIP_DATA.days[phase.dayIndex];
    if (day.transport.options.length <= 1) return true;
    return !!state.trainSelections[day.date];
  }
  return !!state.selections[phase.cityKey];
}

function isPhaseUnlocked(i) {
  if (i <= state.maxReachedPhase) return true;
  for (let j = 0; j < i; j++) {
    if (!isPhaseComplete(j)) return false;
  }
  return true;
}

function getFirstIncompletePhase() {
  for (let i = 0; i < PHASES.length; i++) {
    if (!isPhaseComplete(i)) return i;
  }
  return PHASES.length - 1;
}

function togglePanel(side) {
  const panel = document.getElementById(`panel-${side}`);
  const btn = panel.querySelector('.panel-toggle');
  const app = document.querySelector('.app');
  panel.classList.toggle('collapsed');

  if (side === 'left') {
    btn.textContent = panel.classList.contains('collapsed') ? '›' : '‹';
    app.style.gridTemplateColumns = panel.classList.contains('collapsed')
      ? '28px 1fr ' + (document.getElementById('panel-right').classList.contains('collapsed') ? '28px' : '320px')
      : '220px 1fr ' + (document.getElementById('panel-right').classList.contains('collapsed') ? '28px' : '320px');
  } else {
    btn.textContent = panel.classList.contains('collapsed') ? '‹' : '›';
    app.style.gridTemplateColumns = (document.getElementById('panel-left').classList.contains('collapsed') ? '28px' : '220px')
      + ' 1fr ' + (panel.classList.contains('collapsed') ? '28px' : '320px');
  }
}

function init() {
  renderTimeline();
  selectPhase(0);
  updateCostPanel();
}

function getPhaseColor(phase) {
  if (phase.cityKey) return CITY_COLORS[phase.cityKey] || '#666';
  const day = TRIP_DATA.days[phase.dayIndex];
  return day.cityKey ? CITY_COLORS[day.cityKey] || '#666' : '#666';
}

function renderTimeline() {
  const el = document.getElementById('timeline');
  let html = '';
  PHASES.forEach((phase, i) => {
    const complete = isPhaseComplete(i);
    const unlocked = isPhaseUnlocked(i);
    const isSelected = state.selectedPhase === i;
    const isPending = !complete && unlocked;
    const color = getPhaseColor(phase);
    html += `<div class="phase-item ${isSelected ? 'selected' : ''} ${complete ? 'done' : ''} ${!unlocked ? 'locked' : ''} ${isPending ? 'pending' : ''}"
      onclick="${unlocked ? `selectPhase(${i})` : ''}" style="--city-color: ${color}">
      <span class="phase-date">${phase.dateStr}</span>
      <span class="phase-icon">${phase.icon}</span>
      <span class="phase-label">${phase.shortLabel}</span>
      ${complete ? '<span class="phase-check">✓</span>' : ''}
      ${!unlocked ? '<span class="phase-lock">🔒</span>' : ''}
      ${isPending ? '<span class="phase-pending">●</span>' : ''}
    </div>`;
  });
  el.innerHTML = html;
}

function selectPhase(index) {
  state.selectedPhase = index;
  state.maxReachedPhase = Math.max(state.maxReachedPhase, index);
  renderTimeline();
  renderPhaseDetail(index);
  document.getElementById('day-detail').scrollTop = 0;
}

function transitionToPhase(phaseIndex) {
  const panel = document.getElementById('day-detail');
  panel.classList.add('phase-exit');
  setTimeout(() => {
    selectPhase(phaseIndex);
    panel.classList.remove('phase-exit');
    panel.classList.add('phase-enter');
    setTimeout(() => panel.classList.remove('phase-enter'), 400);
  }, 300);
}

function renderPhaseDetail(phaseIndex) {
  const phase = PHASES[phaseIndex];
  const el = document.getElementById('day-detail');
  let html = '';

  if (!isPhaseUnlocked(phaseIndex)) {
    const firstIncomplete = getFirstIncompletePhase();
    html += `<div class="detail-header">
      <h2>🔒 ${phase.label}</h2>
    </div>
    <div class="locked-message">
      <div class="locked-icon">🔒</div>
      <p>Completa las selecciones anteriores para desbloquear esta fase.</p>
      <button class="go-btn" onclick="selectPhase(${firstIncomplete})">Ir a la fase pendiente →</button>
    </div>`;
    el.innerHTML = html;
    return;
  }

  if (phase.type === 'transport') {
    const day = TRIP_DATA.days[phase.dayIndex];
    const d = new Date(day.date);
    const dateStr = d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    html += `<div class="detail-header">
      <h2>${phase.icon} ${phase.label}</h2>
      <div class="detail-date">${dateStr} — Día ${phase.dayNum} del viaje</div>
    </div>`;
    html += renderTransport(day);

    if (day.date === '2027-07-26') {
      html += `<div class="final-day">
        <div class="final-icon">🏠</div>
        <h3>¡De vuelta a casa!</h3>
        <p>Llegada a Madrid a las 15:40</p>
      </div>`;
    }
  } else {
    const city = TRIP_DATA.cities[phase.cityKey];
    const effectiveNights = phase.cityKey === 'split' ? getEffectiveSplitNights() : city.nights;

    html += `<div class="detail-header">
      <h2>${city.country} ${city.name}</h2>
      <div class="detail-date">${city.dates} — ${effectiveNights} noches</div>
    </div>`;

    if (city.warning) {
      html += `<div class="warning-box">${city.warning}</div>`;
    }

    if (phase.cityKey === 'split' && isNightTrainSelected()) {
      html += `<div class="night-train-saving" style="margin-bottom:16px">🌙 Nocturno seleccionado → se descuenta 1 noche. Precios para ${effectiveNights} noches.</div>`;
    }

    html += `<div class="section-title">
      <span>Alojamiento</span>
      <span class="nights-badge">${effectiveNights} noches</span>
    </div>`;
    html += renderAccommodations(city, phase.cityKey);
  }

  if (PHASES.every((_, i) => isPhaseComplete(i))) {
    html += `<div class="final-day" style="margin-top:32px">
      <div class="final-icon">🎉</div>
      <h3>¡Todo elegido!</h3>
      <p>Revisa el resumen de costes a la derecha. Puedes cambiar cualquier selección haciendo clic en las fases del panel izquierdo.</p>
      <button class="go-btn summary-btn" onclick="openSummary()" style="margin-top:16px;font-size:16px;padding:12px 28px">📋 Ver itinerario completo</button>
    </div>`;
  }

  el.innerHTML = html;
}

function renderTransport(day) {
  const t = day.transport;
  let html = `<div class="transport-section">
    <div class="transport-header">
      <span class="transport-icon">${t.icon}</span>
      <span class="transport-route">${t.from} → ${t.to}</span>
      ${t.interrailDay ? `<span class="ir-day-badge">Día Interrail ${t.interrailDay}/5</span>` : ''}
    </div>`;

  if (t.mode === 'flight') {
    html += `<div class="warning-box">⚠️ OJO: estas tarifas solo incluyen equipaje de mano. Para 19 días de viaje seguramente necesitéis maleta facturada — hay que sumar el recargo de cada aerolínea (~25-50€/pax/trayecto).</div>`;
  }

  const hasTrainSelection = !!state.trainSelections[day.date];
  if (t.options.length > 1) {
    html += `<div class="train-options ${hasTrainSelection ? 'has-selection' : ''}">`;
    t.options.forEach(opt => {
      const isSelected = state.trainSelections[day.date] === opt.id;
      const recClass = opt.recommended ? 'recommended' : '';
      const isFlight = t.mode === 'flight';
      html += `<div class="train-option ${isSelected ? 'selected' : ''} ${recClass}" onclick="selectTrain('${day.date}', '${opt.id}')">
        <div class="train-top">
          <span class="train-name">${opt.label}</span>
          ${opt.recommended ? '<span class="rec-badge">Recomendado</span>' : ''}
          ${isSelected ? '<span class="sel-check">✓</span>' : ''}
        </div>
        <div class="train-times">
          <span class="time-dep">${opt.departure}</span>
          <span class="time-arrow">→</span>
          <span class="time-arr">${opt.arrival}</span>
          <span class="time-dur">${opt.duration}</span>
        </div>
        ${isFlight ? `
        <div class="flight-price-row">
          <span class="flight-price">${opt.ppCost.toFixed(2)}€<small>/pax</small></span>
          <span class="flight-total">${opt.totalCost.toLocaleString('es-ES')}€ total (9 pax)</span>
        </div>
        <div class="train-info">
          <span class="train-type">${opt.type}</span>
        </div>
        <div class="flight-details">
          <span>🧳 ${opt.luggage}</span>
        </div>` : `
        <div class="train-info">
          <span class="train-type">${opt.type}</span>
          ${opt.reservation ? `<span class="res-badge">Reserva: ~${opt.resCost}€/pax</span>` : '<span class="res-badge free">Sin reserva obligatoria</span>'}
        </div>`}
        ${opt.note ? `<div class="train-note">${opt.note}</div>` : ''}
        ${opt.legs ? renderLegs(opt.legs) : ''}
      </div>`;
    });
    html += '</div>';
  } else {
    const opt = t.options[0];
    html += `<div class="transport-single">
      <div class="train-times">
        <span class="time-dep">${opt.departure}</span>
        <span class="time-arrow">→</span>
        <span class="time-arr">${opt.arrival}</span>
        <span class="time-dur">${opt.duration}</span>
      </div>
      <div class="train-info">
        <span class="train-name">${opt.label}</span>
        <span class="train-type">${opt.type}</span>
      </div>
      ${opt.note ? `<div class="train-note">${opt.note}</div>` : ''}
    </div>`;
  }
  html += '</div>';
  return html;
}

function renderLegs(legs) {
  let html = '<div class="legs-detail">';
  legs.forEach(leg => {
    if (leg.type === 'wait') {
      html += `<div class="leg wait"><span class="leg-wait-icon">⏳</span> Espera en ${leg.station} — ${leg.duration}</div>`;
    } else {
      html += `<div class="leg ${leg.night ? 'night-leg' : ''}">
        <span class="leg-time">${leg.dep}</span>
        <span class="leg-route">${leg.from} → ${leg.to}</span>
        <span class="leg-time">${leg.arr}</span>
        <span class="leg-train">${leg.train}</span>
        ${leg.night ? '<span class="night-icon">🌙</span>' : ''}
      </div>`;
    }
  });
  html += '</div>';
  return html;
}

function renderAccommodations(city, cityKey) {
  const nightTrain = cityKey === 'split' && isNightTrainSelected();
  const effectiveNights = nightTrain ? getEffectiveSplitNights() : city.nights;
  const hasSelection = !!state.selections[cityKey];

  let html = `<div class="accommodations ${hasSelection ? 'has-selection' : ''}">`;
  const sorted = [...city.accommodations].sort((a, b) => {
    if (a.disqualified && !b.disqualified) return 1;
    if (!a.disqualified && b.disqualified) return -1;
    const starDiff = (b.stars?.length || 0) - (a.stars?.length || 0);
    if (starDiff !== 0) return starDiff;
    return a.ppn - b.ppn;
  });

  sorted.forEach(acc => {
    const isSelected = state.selections[cityKey] === acc.id;
    const dq = acc.disqualified;
    const ppn = acc.ppn;
    const effectiveTotal = nightTrain ? (acc.total / city.nights) * effectiveNights : acc.total;

    html += `<div class="acc-card ${isSelected ? 'selected' : ''} ${dq ? 'disqualified' : ''}" onclick="${dq ? '' : `selectAccommodation('${cityKey}', '${acc.id}')`}">
      <div class="acc-header">
        <div class="acc-name-row">
          <h3>${acc.name}</h3>
          ${acc.stars?.length ? `<div class="stars-row-inline">${acc.stars.map(s => `<span class="star-tag">⭐ ${s}</span>`).join('')}</div>` : ''}
          ${acc.recommended ? '<span class="rec-badge">Recomendada</span>' : ''}
          ${dq ? `<span class="dq-badge">❌ ${acc.disqualifiedReason}</span>` : ''}
          ${isSelected ? '<span class="sel-check big">✓</span>' : ''}
        </div>
        <div class="acc-address">
          📍 ${acc.address}
          <a href="https://www.google.com/maps/search/?api=1&query=${acc.coords.lat},${acc.coords.lng}" target="_blank" class="map-link">Ver en Maps</a>
        </div>
      </div>

      <div class="acc-metrics">
        <div class="metric">
          <div class="metric-value">${ppn.toFixed(2)}€</div>
          <div class="metric-label">por pax/noche</div>
        </div>
        <div class="metric">
          <div class="metric-value">${Math.round(effectiveTotal).toLocaleString('es-ES')}€</div>
          <div class="metric-label">total ${effectiveNights}n / 9 pax</div>
        </div>
        <div class="metric">
          <div class="metric-value rating">${acc.rating}</div>
          <div class="metric-label">${acc.ratingSource} (${acc.reviews.toLocaleString('es-ES')})</div>
        </div>
      </div>

      <div class="acc-details">
        <div class="detail-row"><span class="detail-icon">🛏️</span> ${acc.rooms}</div>
        <div class="detail-row"><span class="detail-icon">${acc.bathroomPrivate === true ? '🚿' : acc.bathroomPrivate === 'partial' ? '⚠️' : '🚿'}</span> ${acc.bathroomPrivate === true ? 'Baño privado' : acc.bathroomPrivate === 'partial' ? 'Parcialmente privado' : 'Baño compartido'}</div>
        <div class="detail-row"><span class="detail-icon">${acc.breakfast ? '🥐' : '❌'}</span> ${acc.breakfast ? 'Desayuno incluido' : acc.breakfastCost ? `Desayuno: ${acc.breakfastCost}€/pax` : 'Sin desayuno'}</div>
        <div class="detail-row"><span class="detail-icon">📅</span> Cancel gratis: ${acc.cancellation}</div>
        <div class="detail-row"><span class="detail-icon">💳</span> ${acc.payAdvance ? 'Pago por adelantado' : 'Sin pago adelantado'}</div>
        ${acc.sharedWithStrangers === true ? '<div class="detail-row stranger-warn"><span class="detail-icon">👥</span> Habitación compartida con desconocidos</div>' : acc.sharedWithStrangers === 'partial' ? '<div class="detail-row stranger-warn"><span class="detail-icon">👥</span> Parcialmente compartida con desconocidos</div>' : ''}
      </div>

      <div class="pros-cons">
        <div class="pros"><strong>Pros:</strong> ${acc.pros.join(' · ')}</div>
        <div class="cons"><strong>Contras:</strong> ${acc.cons.join(' · ')}</div>
      </div>
    </div>`;
  });
  html += '</div>';
  return html;
}

function selectAccommodation(cityKey, accId) {
  if (state.selections[cityKey] === accId) {
    delete state.selections[cityKey];
    renderPhaseDetail(state.selectedPhase);
    renderTimeline();
    updateCostPanel();
    return;
  }
  state.selections[cityKey] = accId;
  renderPhaseDetail(state.selectedPhase);
  renderTimeline();
  updateCostPanel();
  animateAndAdvance();
}

function selectTrain(date, trainId) {
  if (state.trainSelections[date] === trainId) {
    delete state.trainSelections[date];
    renderPhaseDetail(state.selectedPhase);
    renderTimeline();
    updateCostPanel();
    return;
  }
  state.trainSelections[date] = trainId;
  renderPhaseDetail(state.selectedPhase);
  renderTimeline();
  updateCostPanel();
  animateAndAdvance();
}

function animateAndAdvance() {
  const chosen = document.querySelector('.train-option.selected, .acc-card.selected');
  if (chosen) {
    chosen.classList.add('chosen-animation');
  }
  setTimeout(() => advanceToNext(), 1300);
}

function advanceToNext() {
  if (isPhaseComplete(state.selectedPhase)) {
    state.maxReachedPhase = Math.max(state.maxReachedPhase, state.selectedPhase + 1);
    const next = getFirstIncompletePhase();
    if (next !== state.selectedPhase) {
      transitionToPhase(next);
    }
  }
}

function updateCostPanel() {
  const el = document.getElementById('cost-panel');
  const nightTrain = isNightTrainSelected();
  const ntSaving = getNightTrainSaving();

  const fixedPP = Object.values(TRIP_DATA.fixed).reduce((sum, f) => sum + f.pp, 0);
  const fixedTotal = Object.values(TRIP_DATA.fixed).reduce((sum, f) => sum + f.total, 0);

  let accTotal = 0;
  let accPP = 0;
  let selectedCount = 0;
  const cityCount = Object.keys(TRIP_DATA.cities).length;

  let html = '<h2>Resumen de costes</h2>';
  html += '<div class="cost-group"><h3>Transporte (fijo)</h3>';
  Object.entries(TRIP_DATA.fixed).forEach(([key, f]) => {
    html += `<div class="cost-row">
      <span>${f.label}</span>
      <span class="cost-val">${f.pp.toFixed(2)}€/pax</span>
    </div>`;
  });
  if (nightTrain) {
    html += `<div class="cost-row">
      <span>🌙 Litera nocturno (est.)</span>
      <span class="cost-val">~15.00€/pax</span>
    </div>`;
  }
  const transportPP = fixedPP + (nightTrain ? 15 : 0);
  html += `<div class="cost-row subtotal"><span>Subtotal transporte</span><span class="cost-val">${transportPP.toFixed(2)}€/pax</span></div>`;
  html += '</div>';

  html += '<div class="cost-group"><h3>Alojamiento</h3>';
  Object.entries(TRIP_DATA.cities).forEach(([key, city]) => {
    const sel = state.selections[key];
    if (sel) {
      const acc = city.accommodations.find(a => a.id === sel);
      let cityAccPP = acc.pp;
      let cityAccTotal = acc.total;
      let nightsLabel = city.nights;
      let savingNote = '';

      if (key === 'split' && nightTrain) {
        const nightCostPP = acc.pp / city.nights;
        const nightCostTotal = acc.total / city.nights;
        cityAccPP -= nightCostPP;
        cityAccTotal -= nightCostTotal;
        nightsLabel = city.nights - 1;
        savingNote = ` <small style="color:var(--green)">(-1 noche por nocturno)</small>`;
      }

      accTotal += cityAccTotal;
      accPP += cityAccPP;
      selectedCount++;
      html += `<div class="cost-row selected">
        <span>${city.country} ${city.name} <small>(${nightsLabel}n${savingNote})</small></span>
        <span class="cost-val">${cityAccPP.toFixed(2)}€/pax</span>
      </div>
      <div class="cost-row-detail">${acc.name}</div>`;
    } else {
      html += `<div class="cost-row pending">
        <span>${city.country} ${city.name} <small>(${city.nights}n)</small></span>
        <span class="cost-val pending-val">— sin elegir —</span>
      </div>`;
    }
  });
  html += `<div class="cost-row subtotal"><span>Subtotal alojamiento</span><span class="cost-val">${accPP.toFixed(2)}€/pax</span></div>`;
  if (nightTrain && state.selections['split']) {
    html += `<div class="night-train-saving">🌙 Nocturno: ahorras ~${ntSaving.savingPP.toFixed(0)}€/pax en alojamiento (descontada 1 noche de Split)</div>`;
  }
  html += '</div>';

  const totalPP = transportPP + accPP;
  const totalGroup = (fixedTotal + (nightTrain ? 15 * 9 : 0)) + accTotal;
  const pct = (selectedCount / cityCount) * 100;

  html += `<div class="cost-total">
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="progress-label">${selectedCount}/${cityCount} ciudades seleccionadas</div>
    <div class="total-row">
      <span>Total por pax</span>
      <span class="total-val">${totalPP.toFixed(2)}€</span>
    </div>
    <div class="total-row group">
      <span>Total grupo (9 pax)</span>
      <span class="total-val">${totalGroup.toLocaleString('es-ES')}€</span>
    </div>
    <div class="total-note">Sin comida, ocio ni transporte local.<br>Comida estimada: ~30€/día → +570€/pax</div>
  </div>`;

  // Budget comparison bar
  const budgetLow = 1170;
  const budgetMid = 1263;
  const budgetHigh = 1408;
  if (selectedCount === cityCount) {
    let budgetClass = 'budget-low';
    if (totalPP > budgetMid) budgetClass = 'budget-mid';
    if (totalPP > budgetHigh) budgetClass = 'budget-high';
    html += `<div class="budget-meter">
      <div class="budget-bar">
        <div class="budget-zone low" style="width:33%"><span>Barato<br>${budgetLow}€</span></div>
        <div class="budget-zone mid" style="width:34%"><span>Medio<br>${budgetMid}€</span></div>
        <div class="budget-zone high" style="width:33%"><span>Caro<br>${budgetHigh}€</span></div>
        <div class="budget-marker ${budgetClass}" style="left:${Math.min(100, ((totalPP - budgetLow) / (budgetHigh - budgetLow)) * 100)}%"></div>
      </div>
      <div class="budget-label ${budgetClass}">Tu selección: ${totalPP.toFixed(0)}€/pax</div>
    </div>`;
  }

  el.innerHTML = html;
}

function openSummary() {
  const nightTrain = isNightTrainSelected();
  const effectiveSplitN = getEffectiveSplitNights();
  let s = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Itinerario Europa Julio 2027</title>
  <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#0f1117;color:#e4e6ed;padding:32px;max-width:900px;margin:0 auto}
  h1{font-size:28px;margin-bottom:4px}h2{font-size:20px;margin:24px 0 12px;border-bottom:1px solid #2a2e3e;padding-bottom:8px}
  .sub{color:#8b8fa4;font-size:14px;margin-bottom:24px}.day{background:#1a1d27;border:1px solid #2a2e3e;border-radius:12px;padding:16px 20px;margin-bottom:12px}
  .day-head{font-size:16px;font-weight:600;margin-bottom:6px}.day-detail{font-size:13px;color:#8b8fa4;line-height:1.8}
  .cost-box{background:#1a1d27;border:1px solid #34d399;border-radius:12px;padding:20px;margin-top:24px}
  .cost-box h2{border:none;margin:0 0 12px;color:#34d399}.cost-line{display:flex;justify-content:space-between;padding:4px 0;font-size:14px}
  .cost-total{font-size:22px;font-weight:700;color:#34d399;margin-top:12px;text-align:center}
  a{color:#7cacff}</style></head><body>`;
  s += `<h1>🇪🇺 Europa Julio 2027</h1><div class="sub">9 viajeros · 19 noches · 8 ciudades</div>`;

  const itinerary = [];
  TRIP_DATA.days.forEach(day => {
    const entry = { date: day.date, dow: day.dow, city: day.city, type: day.type, transport: null, hotel: null };
    if (day.transport && day.transport.options.length > 1) {
      const selId = state.trainSelections[day.date];
      if (selId) entry.transport = day.transport.options.find(o => o.id === selId);
    } else if (day.transport) {
      entry.transport = day.transport.options[0];
    }
    if (day.cityKey && day.nightIndex === 0 && state.selections[day.cityKey]) {
      const city = TRIP_DATA.cities[day.cityKey];
      entry.hotel = city.accommodations.find(a => a.id === state.selections[day.cityKey]);
      entry.hotelCity = city;
      entry.cityKey = day.cityKey;
    }
    itinerary.push(entry);
  });

  let currentCity = null;
  itinerary.forEach(entry => {
    const d = new Date(entry.date);
    const dateStr = d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    s += `<div class="day"><div class="day-head">${dateStr} — ${entry.city}</div><div class="day-detail">`;
    if (entry.transport) {
      const t = entry.transport;
      s += `🚆 ${t.label}: ${t.departure} → ${t.arrival} (${t.duration})<br>`;
    }
    if (entry.hotel) {
      const h = entry.hotel;
      const cn = entry.hotelCity;
      const nights = entry.cityKey === 'split' ? effectiveSplitN : cn.nights;
      s += `🏨 <strong>${h.name}</strong> — ${h.address}<br>`;
      s += `${nights} noches · ${h.rooms}<br>`;
      s += `<a href="https://www.google.com/maps/search/?api=1&query=${h.coords.lat},${h.coords.lng}" target="_blank">📍 Ver en Maps</a>`;
    }
    s += `</div></div>`;
  });

  const nightTrainCost = nightTrain ? 15 : 0;
  const fixedPP = Object.values(TRIP_DATA.fixed).reduce((sum, f) => sum + f.pp, 0) + nightTrainCost;
  let accPP = 0;
  Object.entries(TRIP_DATA.cities).forEach(([key, city]) => {
    const sel = state.selections[key];
    if (sel) {
      const acc = city.accommodations.find(a => a.id === sel);
      let pp = acc.pp;
      if (key === 'split' && nightTrain) pp = acc.ppn * effectiveSplitN;
      accPP += pp;
    }
  });
  const totalPP = fixedPP + accPP;

  s += `<div class="cost-box"><h2>Resumen de costes</h2>`;
  Object.values(TRIP_DATA.fixed).forEach(f => {
    s += `<div class="cost-line"><span>${f.label}</span><span>${f.pp.toFixed(2)}€/pax</span></div>`;
  });
  if (nightTrain) s += `<div class="cost-line"><span>🌙 Litera nocturno</span><span>~15€/pax</span></div>`;
  s += `<div class="cost-line" style="border-top:1px solid #2a2e3e;margin-top:8px;padding-top:8px"><strong>Transporte</strong><strong>${fixedPP.toFixed(2)}€/pax</strong></div>`;
  Object.entries(TRIP_DATA.cities).forEach(([key, city]) => {
    const sel = state.selections[key];
    if (sel) {
      const acc = city.accommodations.find(a => a.id === sel);
      const nights = key === 'split' && nightTrain ? effectiveSplitN : city.nights;
      let pp = key === 'split' && nightTrain ? acc.ppn * effectiveSplitN : acc.pp;
      s += `<div class="cost-line"><span>${city.country} ${city.name} (${nights}n) — ${acc.name}</span><span>${pp.toFixed(2)}€/pax</span></div>`;
    }
  });
  s += `<div class="cost-line" style="border-top:1px solid #2a2e3e;margin-top:8px;padding-top:8px"><strong>Alojamiento</strong><strong>${accPP.toFixed(2)}€/pax</strong></div>`;
  s += `<div class="cost-total">TOTAL: ${totalPP.toFixed(2)}€ por persona</div>`;
  s += `<div style="text-align:center;color:#8b8fa4;font-size:12px;margin-top:8px">Sin comida, ocio ni transporte local. Comida estimada: ~30€/día → +570€/pax</div>`;
  s += `</div></body></html>`;

  const win = window.open('', '_blank');
  win.document.write(s);
  win.document.close();
}

document.addEventListener('DOMContentLoaded', init);
