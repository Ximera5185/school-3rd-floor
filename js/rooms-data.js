const roomsData = [
  {
    id: 1,
    name: "Пом. 1",
    type: "Класс",
    area: 54.6,
    socketGroup: "Гр.Р3-1",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "75 м",
    socketProtection: "АД32 С16, 30мА, 1Р+N",
    lightGroup: "Гр.О3-3",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "1,29 кВт (совм. с 2,3,4)",
    lightLength: "120 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (1×30Вт)",
    lightProtection: "ВА47-63 С10",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (6 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Выключатель одноклавишный скрытый 10А EKF EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный скрытый 10А EKF EWV10-023-10 (1 шт.)",
      "Светильник BEST OFFICE CLASS 30 IP40 1×30Вт (15 шт.)",
      "Светильник для доски BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Кабель канал 3м",
      "Распред коробка 19шт",
      "Штроба 20м",
      "Проходные отверстия с гильзами (диаметр до 25 мм) - 2 шт."
    ],
    note: "⚠️ Высота розеток/выключателей: 1,8 м от ч.п.",
    hasSchemes: true,
    schemes: {
      lighting: "images/pom1-lighting.png",
      sockets: "images/pom1-sockets.png"
    }
  },
   {
    id: 2,
    name: "Пом. 2",
    type: "Класс",
    area: 18.1,
    socketGroup: "Гр.Р3-1",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "85 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-3 (совм.)",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (3 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (2 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (3 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (1 шт.)",
      "Штроба 10м",
      "Распред коробка 5шт",
      "Отверстие проходное с гильзами (диаметр до 25 мм) - 2 шт."
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom2-lighting.png",
      sockets: "images/pom2-sockets.png"
    }
  },
  {
    id: 3,
    name: "Пом. 3",
    type: "Класс",
    area: 74.3,
    socketGroup: "Гр.Р3-2",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "71 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-3",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (18 шт.)",
    equipment: [
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 IP40 (18 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (3 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Штроба (27 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom3-lighting.png",
      sockets: "images/pom3-sockets.png"
    }
  },
    {
    id: 4,
    name: "Пом. 4",
    type: "Класс",
    area: 17.2,
    socketGroup: "Гр.Р3-2",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "88 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-3",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (3 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (2 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (3 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (1 шт.)",
      "Распред коробка (5 шт.)",
      "Штроба (8 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom4-lighting.png",
      sockets: "images/pom4-sockets.png"
    }
  },
   {
    id: 5,
    name: "Пом. 5",
    type: "Класс",
    area: 62.3,
    socketGroup: "Гр.Р3-3",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "93 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-4",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "1,02 кВт (совм. с 6)",
    lightLength: "135 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (15 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (4 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (15 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Распред коробка (22 шт.)",
      "Штроба (24 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom5-lighting.png",
      sockets: "images/pom5-sockets.png"
    }
  },
 {
    id: 6,
    name: "Пом. 6",
    type: "Класс",
    area: 56.4,
    socketGroup: "Гр.Р3-4",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "90 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-4",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (15 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (4 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (15 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Распред коробка (23 шт.)",
      "Штроба (26 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom6-lighting.png",
      sockets: "images/pom6-sockets.png"
    }
  },
  {
    id: 7,
    name: "Пом. 7",
    type: "Класс",
    area: 53.3,
    socketGroup: "Гр.Р3-5",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "79 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-5",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "1,20 кВт (совм. с 8,9)",
    lightLength: "154 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (15 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (5 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (15 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Распред коробка (22 шт.)",
      "Штроба (22 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom7-lighting.png",
      sockets: "images/pom7-sockets.png"
    }
  },
  {
    id: 8,
    name: "Пом. 8",
    type: "Класс",
    area: 72.6,
    socketGroup: "Гр.Р3-6",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "77 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-5",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (18 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (3 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (18 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Распред коробка (25 шт.)",
      "Штроба (37 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom8-lighting.png",
      sockets: "images/pom8-sockets.png"
    }
  },
   {
    id: 9,
    name: "Пом. 9",
    type: "Класс",
    area: 17.9,
    socketGroup: "Гр.Р3-6",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "77 м (ответвление)",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-5",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (3 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (2 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (3 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А (1 шт.)",
      "Распред коробка (5 шт.)",
      "Штроба (10 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom9-lighting.png",
      sockets: "images/pom9-sockets.png"
    }
  },
  {
    id: 10,
    name: "Пом. 10",
    type: "Класс",
    area: 73.2,
    socketGroup: "Гр.Р3-7",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "35 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-6",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "0,72 кВт (совм. с 11)",
    lightLength: "85 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (18 шт.) + BEST ССП PL-03 (2 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (3 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (18 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Распред коробка (25 шт.)",
      "Штроба (38 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom10-lighting.png",
      sockets: "images/pom10-sockets.png"
    }
  },
  {
    id: 11,
    name: "Пом. 11",
    type: "Класс",
    area: 17.8,
    socketGroup: "Гр.Р3-7",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "31 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-6",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (4 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (2 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (4 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (1 шт.)",
      "Штроба (12 м)",
      "Распред коробка (6 шт.)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom11-lighting.png",
      sockets: "images/pom11-sockets.png"
    }
  },
   {
    id: 12,
    name: "Пом. 12",
    type: "Лест. клетка",
    area: 16.7,
    lightGroup: "Гр.АО1-1-5",
    lightPower: "0,17 кВт",
    lightCable: "ВВГнг(А)-FRLSLTx 4×1,5",
    lightFixtures: "BEST OFFICE LONG MINI 26 (со встроенным БАП) (2 шт.)",
    lightProtection: "ВА47-63 С10",
    equipment: [
      "Светильник светодиодный, 1х26Вт, IP40, со встроенным БАП BEST OFFICE LONG MINI 26 (2 шт.)",
      "Распред коробка (1 шт.)",
      "Штроба (8 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (1 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom12-lighting.png"
    },
    borderColor: "var(--emr)",
    note: "⚠️ Аварийное освещение. Кабель огнестойкий."
  },
  {
    id: 13,
    name: "Пом. 13",
    type: "Класс",
    area: 20.2,
    socketGroup: "Гр.Р3-8",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,5 кВт (повыш.)",
    socketLength: "45 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-7",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "0,84 кВт (совм. с 14,15)",
    lightLength: "86 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (4 шт.)",
    equipment: [
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (4 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (1 шт.)",
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (2 шт.)",
      "Распред коробка (6 шт.)",
      "Штроба (12 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom13-lighting.png",
      sockets: "images/pom13-sockets.png"
    }
  },
   {
    id: 14,
    name: "Пом. 14",
    type: "Класс",
    area: 72.4,
    socketGroup: "Гр.Р3-8",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,5 кВт",
    socketLength: "61 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-7",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (18 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (3 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (18 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Распред коробка (25 шт.)",
      "Штроба (27 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom14-lighting.png",
      sockets: "images/pom14-sockets.png"
    }
  },
  {
    id: 15,
    name: "Пом. 15",
    type: "Класс",
    area: 17.6,
    socketGroup: "Гр.Р3-8 (резерв/ответвление)",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    lightGroup: "Гр.О3-7",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (4 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (2 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (4 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (1 шт.)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Распред коробка (6 шт.)",
      "Штроба (8 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom15-lighting.png",
      sockets: "images/pom15-sockets.png"
    }
  },
   {
    id: 16,
    name: "Пом. 16",
    type: "Лест. клетка",
    area: 17.0,
    lightGroup: "Гр.АО1-1-4 (совм. с другими вспом.)",
    lightCable: "ВВГнг(А)-FRLSLTx 4×1,5", // Огнестойкий кабель из-за встроенного БАП
    lightFixtures: "BEST OFFICE LONG MINI 26 (со встроенным БАП) (2 шт.)",
    equipment: [
      "Светильник светодиодный, 1х26Вт, IP40, со встроенным БАП BEST OFFICE LONG MINI 26 (2 шт.)",
      "Штроба (10 м)",
      "Распред коробка (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom16-lighting.png"
      // Розеточная схема отсутствует
    },
    borderColor: "var(--emr)",
    note: "⚠️ Аварийное освещение (встроенный БАП)."
  },
  {
    id: 17,
    name: "Пом. 17",
    type: "Класс",
    area: 55.3,
    socketGroup: "Гр.Р3-9",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "35 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-1",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "1,02 кВт (совм. с 18)",
    lightLength: "50 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (15 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (3 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (15 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Распред коробка (21 шт.)",
      "Штроба (27 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom17-lighting.png",
      sockets: "images/pom17-sockets.png"
    }
  },
  {
    id: 18,
    name: "Пом. 18",
    type: "Класс",
    area: 55.3,
    socketGroup: "Гр.Р3-10",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "31 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-1",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (15 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (4 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (15 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Распред коробка (20 шт.)",
      "Штроба (31 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom18-lighting.png",
      sockets: "images/pom18-sockets.png"
    }
  },
 {
    id: 19,
    name: "Пом. 19",
    type: "Класс",
    area: 54.2,
    socketGroup: "Гр.Р3-11",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "45 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-2",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "1,11 кВт (совм. с 20)",
    lightLength: "70 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (15 шт.) + ССП PL-03 (2 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (4 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (15 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Распред коробка (20 шт.)",
      "Штроба (31 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom19-lighting.png",
      sockets: "images/pom19-sockets.png"
    }
  },
  {
    id: 20,
    name: "Пом. 20",
    type: "Класс",
    area: 61.0,
    socketGroup: "Гр.Р3-12",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "61 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О3-2",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (18 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (6 шт.)",
      "Розетка накладная 1-местная с/з 16А (IP20) EKF Минск EGR16-028-10 (1 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (18 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (2 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (2 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Кабель канал (3 м)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)",
      "Распред коробка (23 шт.)",
      "Штроба (25 м)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom20-lighting.png",
      sockets: "images/pom20-sockets.png"
    }
  },
  {
    id: 21,
    name: "Пом. 21,25 (Коридоры)",
    type: "Коридор / Эвакуационный путь",
    area: 394.3,
    lightGroup: "Гр.О3-9, Гр.О3-10",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "1,02 кВт (совм.)",
    lightLength: "162 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (34 шт.)",
    lightProtection: "ВА47-63 С10",
    emergencyLightGroup: "Гр.АО3-1, Гр.АО3-2",
    emergencyLightCable: "ВВГнг(А)-FRLSLTx 4×1,5",
    emergencyLightLength: "155 м",
    emergencyLightProtection: "ВА47-63 С10",
    emergencyNote: "Светильники со встроенным БАП (16 шт.)",
    equipment: [
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (34 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, со встроенным БАП BEST OFFICE CLASS 30 (16 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (4 шт., 2 для аварийного света)",
      "Штроба (8 м)",
      "Распред коробка (54 шт.)"
    ],
    note: "🔋 Между БАП и лампами запрещена установка коммутационных аппаратов. Расстояние рабочего/аварийного кабеля ≥20 мм.",
    hasSchemes: true,
    schemes: {
      lighting: "images/pom21-lighting.png",
      sockets: "images/pom21-sockets.png"
    },
    borderColor: "var(--emr)"
  },
  {
    id: 22,
    name: "Пом. 22",
    type: "Класс",
    area: 23.2,
    socketGroup: "Гр.Р3-13",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "33 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О2-2-8",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightPower: "0,60 кВт (совм. с 23,24)",
    lightLength: "65 м",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (6 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (5 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (6 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Штроба (26 м)",
      "Распред коробка (8 шт.)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom22-lighting.png",
      sockets: "images/pom22-sockets.png"
    }
  },
  {
    id: 23,
    name: "Пом. 23",
    type: "Класс",
    area: 25.4,
    socketGroup: "Гр.Р3-15",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "43 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О2-2-8",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (6 шт.) + BEST ССП PL-03 (1 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (4 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (6 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (1 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Штроба (20 м)",
      "Распред коробка (10 шт.)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom23-lighting.png",
      sockets: "images/pom23-sockets.png"
    }
  },
   {
    id: 24,
    name: "Пом. 24",
    type: "Класс",
    area: 24.3,
    socketGroup: "Гр.Р3-16",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "1,0 кВт",
    socketLength: "45 м",
    socketProtection: "АД32 С16, 30мА",
    lightGroup: "Гр.О2-2-8",
    lightFixtures: "BEST OFFICE CLASS 30 IP40 (6 шт.) + BEST ССП PL-03 (1 шт.)",
    equipment: [
      "Розетка встроенная 2-местная с/з 16А (IP20) EKF Валенсия EWR16-128-10 (4 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40 BEST OFFICE CLASS 30 (6 шт.)",
      "Светильник светодиодный, 1х30Вт, IP40, для освещения досок BEST ССП PL-03 CLASS 30 (1 шт.)",
      "Выключатель двухклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-023-10 (1 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (1 шт.)",
      "Штроба (20 м)",
      "Распред коробка (10 шт.)",
      "Проходные отверстия с гильзами диаметр до 25 мм (2 шт.)"
    ],
    hasSchemes: true,
    schemes: {
      lighting: "images/pom24-lighting.png",
      sockets: "images/pom24-sockets.png"
    }  // ← Добавлена закрывающая скобка
  },
   {
    id: 26,
    name: "Пом. 26-35",
    type: "Сан. узлы / Кладовая",
    area: 70.4,
    socketGroup: "Гр.Р3-16, Гр.Р3-17",
    socketCable: "ВВГнг(А)-LSLTx 3×2,5",
    socketPower: "3,0 кВт (Пом. 27, 34)",
    socketLength: "46 м + 33 м",
    socketProtection: "АД32 С16, 30мА",
    socketType: "1-местная с крышкой и защ. шторками 16А (IP44) EKF Валенсия",
    lightGroup: "Гр.О3-11 (совм. 26-35)",
    lightCable: "ВВГнг(А)-LSLTx 3×1,5",
    lightFixtures: "BEST ЖКХ-С 10 IP65 (26 шт. всего)",
    lightProtection: "ВА47-63 С10",
    equipment: [
      "Розетка встроенная 1-местная с/з с крышкой и защ. шторками 16А (IP44) EKF Валенсия EWV10-124-10 (4 шт.)",
      "Светильник светодиодный, 1х10Вт, накладной, IP65 BEST ЖКХ-С 10 (26 шт.)",
      "Выключатель одноклавишный для скрытой установки, IP20, 10А EKF Валенсия EWV10-021-10 (6 шт.)",
      "Кабель канал (67 м)",
      "Распред коробка (34 шт.)",
      "Проходные отверстия с гильзами диаметр до 25 мм (4 шт.)"
    ],
    note: "⚠️ Влажные помещения. Выключатели вынесены наружу. Розетки IP44 только в Пом. 27 и 34. Прокладка в ПВХ-трубах.",
    hasSchemes: true,
    schemes: {
      lighting: "images/pom26-lighting.png",
      sockets: "images/pom26-sockets.png"
    },
    borderColor: "var(--tech)"
  }

];