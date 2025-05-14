export interface Item {
  id: number;
  name: string;
  katergori: string;
  type: string;
  url: string;
  details: Record<string, string | number>;
  sizes?: string[];
  message: string;
  salg: string;
  oppsalg?: string;
}

export const categories: Record<string, Item[]> = {
  Senger: [
    {
      id: 1,
      name: "Tyssa PC60",
      type: "Plus",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Tyssa.jpg",

      sizes: ["90x200", "120x200", "140x200", "150x200", "160x200", "180x200"],
      details: {
        overmadrass: "Kaldskum eller Polyeterskum",
        core: "30 kg/m³",
        firmness: "Fast",
        firm: 80,
      },
      message:
        "Garanti: 15 år. Vendbar-madrass: pocket-fjærer 250/m², polstret med polyeterskum, 7 komfortsoner. Overmadrass: 4 cm tykk med polyeterskumkjerne, vaskbart stretchtrekk med tykk quilting. Nederst:  polstret ramme. Inkludert ben(15 cm), Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 2,
      name: "Verma BC5",
      type: "Basic",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Verma.jpg",
      sizes: ["90x200", "120x200", "140x200", "150x200", "180x200"],

      details: {
        overmadrass: "Polyeterskum",
        core: "30 kg/m³",
        firmness: "Myk",
        firm: 38,
      },
      message:
        "Vendbar-madrass: bonell-fjærer 110/m² polstret med polyeterskum. Overmadrass: 4 cm tykk med polyeterskumkjerne, vaskbart trekk med tykk quilting. Nederst: ramme. Inkludert ben(14 cm), Sengegavl kjøpes separat.",
      salg: "Veldig myk seng, her kan du foreslå å gå over til en som ikke bruker bonell",
    },

    {
      id: 3,
      name: "Nevla GC5",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Nevla.jpg",
      sizes: ["90x200", "120x200", "140x200", "150x200", "160x200", "180x200"],

      details: {
        overmadrass: "Gelskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 70,
      },
      message:
        "Garanti: 25 år. Vendbar-madrass: pocket-fjærer 225/m², polstret med polyeterskum, 7 komfortsoner. Overmadrass: 6 cm tykk med trykkavlastende gelskumkjerne som tilpasser seg kroppen din og leder bort overskuddsvarme, vaskbart trekk i 100% polyester. Nederst: rammemadrass(polyeterskum). Inkludert ben(14 cm) sengegavl kjøpes separat.",
      salg: "  ",
    },
    {
      id: 4,
      name: "Osaelva GC10",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Osaelva.jpg",
      sizes: ["90x200", "120x200", "150x200", "180x200"],

      details: {
        overmadrass: "Polyeterskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 71,
      },
      message:
        "Garanti: 25 år. Vendbar-madrass: pocket-fjærer 260/m², polstret med polyeterskum 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Overmadrass: 8 cm tykk med polyeterskumkjerne vaskbart trekk med myk, tykk quilting. Nederst: polstret ramme(polyeterskum). Inkludert ben(14 cm) sengegavl kjøpes separat",
      salg: "kode7",
    },
    {
      id: 5,
      name: "Sokna GC35",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Sokna.jpg",
      sizes: [
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
        "180x210",
      ],

      details: {
        material: "Memoryskum",
        core: "37 kg/m³",
        firmness: "Fast",
        firm: 83,
      },
      message:
        "Garanti: 25 år. Madrass: pocket-fjærer 260/m², polstret med kaldskum og polyeterskum 5 komfortsoner som gir en presis, optimal støtte. Overmadrass: 7 cm tykk med pustende latekskjerne som effektivt leder bort overskuddsvarme, stretchtrekk med myk, tykk quilting. Nederst: rammemadrass med bonellfjærer 110/m². Inkludert ben(14 cm)  sengegavl kjøpes separat.",
      salg: "kode7",
    },
    {
      id: 6,
      name: "Hemla GC75",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Hemla.jpg",
      sizes: [
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
        "180x210",
      ],

      details: {
        overmadrass: "Memoryskum eller latex",
        core: "35 kg/m³",
        firmness: "Medium",
        firm: 45,
      },
      message:
        "Garanti: 25 år. Vendbar-madrass: adaptive pocket-fjærer 204/m², polstret med fleksibelt Comfort+ skum, Adaptive pocketfjærer tilpasser gradvis fastheten og støtten til dine skiftende sovestillinger, 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Overmadrass: 7 cm tykk med trykkavlastende memoryskumkjerne som former seg presist etter kroppens konturer, Trekk med tykk, myk quilting. Nederst: rammemadrass med pocket-fjærer 250/m², inndelt i 5 komfortsoner. Inkludert ben(14 cm) sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 7,
      name: "Veksa PC75",
      type: "Plus",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Veksa.jpg",
      sizes: ["90x200", "120x200", "140x200", "150x200", "160x200", "180x200"],

      details: {
        overmadrass: "Polyeterskum",
        core: "30 kg/m³",
        firmness: "Myk",
        firm: 39,
      },
      message:
        "Garanti: 15 år. Vendbar-madrass: pocket-fjærer 200/m² polstret med polyeterskum. Overmadrass: 7 cm tykk med polyeterskumkjerne, vaskbart trekk med myk, tykk quilting. Nederst: ramme. Inkludert ben(14,5 cm) Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 8,
      name: "Lygna GC30",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Lygna.jpg",
      sizes: ["90x200", "120x200", "140x200", "150x200", "160x200", "180x200"],

      details: {
        material: "Memoryskum",
        core: "75 kg/m³",
        firmness: "Medium",
        firm: 75,
      },
      message:
        "Garanti: 25 år. Vendbar-madrass: pocket-fjærer 260/m², polstret med polyeterskum 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Overmadrass: 7 cm tykk med polyeterskumkjerne, vaskbart trekk med myk, tykk quilting. Nederst: rammemadrass med pocket-fjærer 205/m², inndelt i 7 komfortsoner. Inkludert ben(19 cm) sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 9,
      name: "Reipa GC110",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Reipa.jpg",
      sizes: ["90x200", "120x200", "140x200", "160x200", "180x200"],

      details: {
        material: "Kaldskum",
        core: "100 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Garanti: 25 år. Vendbar-madrass: multipocket-fjærer 500/m², polstret med kaldskum og polyeterskum 5 komfortsoner som gir en presis, optimal støtte. Overmadrass: 10 cm tykk med pustende latekskjerne som effektivt leder bort overskuddsvarme, vaskbart trekk med tykk quilting i polyeterskum. Nederst: rammemadrass med pocket-fjærer 250/m², inndelt i 7 komfortsoner, med sensorstyrt undersengslys. Inkludert ben(17 cm) sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 10,
      name: "Temprakon Lya",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/TemprakonLya.jpg",
      sizes: ["90x200", "140x200", "150x200", "180x200", "180x210"],

      details: {
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 95,
      },
      message:
        "Garanti: 25 år. Vendbar-madrass: pocket-fjærer 225/m², polstret med pustende Cooltex Breeze 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Overmadrass: 10 cm tykk med pustende latekskjerne som effektivt leder bort overskuddsvarme, Vaskbart kjølende stretchtrekk med myk, tykk quilting. Nederst: rammemadrass med pocket-fjærer 225/m², inndelt i 9 komfortsoner. Inkludert ben(10 cm) sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 11,
      name: "Skaupa BB15",
      type: "Basic",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Skaupa.jpg",
      sizes: ["75x200", "90x200", "120x200", "140x200"],

      details: {
        material: "Polyeterskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 40,
      },
      message:
        "Rammemadrass: bonellfjærer 115/m², polstret med polyeterskum. Overmadrass: 4 cm tykk med polyeterskumkjerne, vaskbart stretchtrekk med tykk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 12,
      name: "Fjelna PB20",
      type: "Plus",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Fjelna.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        material: "Polyeterskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 45,
      },
      message:
        "Garanti: 15 år. Rammemadrass: Dobbeltfjæret, øverst pocketfjærer 250/m², polstret med polyeterskum, nederst minibonellfjærer 150/m². Overmadrass: 4 cm tykk med polyeterskumkjerne vaskbart stretchtrekk med lett quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 13,
      name: "Spongi PB12",
      type: "Plus",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Spongi.jpg",
      sizes: ["75x200", "90x200", "120x200", "150x200", "180x200"],

      details: {
        material: "Kaldskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 42,
      },
      message:
        "Garanti: 15 år. Rammemadrass: pocketfjærer 205/m², polstret med polyeterskum. Overmadrass: 4 cm tykk med polyeterskumkjerne vaskbart stretchtrekk med lett quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 14,
      name: "Grimse PB30",
      type: "Plus",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Grimse.jpg",
      sizes: ["80x200", "90x200", "120x200", "140x200", "160x200", "180x200"],

      details: {
        material: "Polyester",
        core: "20 kg/m³",
        firmness: "Medium",
        firm: 50,
      },
      message:
        "Garanti: 15 år. Rammemadrass: dobbeltfjæret øverst pocket-fjærer 250/m², polstret med polyeterskum, nederst minibonell-fjærer 150/m², 5 komfortsoner som gir optimal støtte. Overmadrass: 5 cm tykk med trykkavlastende memoryskumkjerne som former seg etter kroppen, vaskbart stretchtrekk med tykk, myk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 15,
      name: "Kvenna GB20",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Kvenna.jpg",
      sizes: ["80x200", "90x200", "120x200", "140x200", "160x200", "180x200"],

      details: {
        material: "Latex",
        core: "60 kg/m³",
        firmness: "Medium",
        firm: 70,
      },
      message:
        "Garanti: 25 år. Rammemadrass: dobbeltfjæret øverst pocket-fjærer 250/m², polstret med kaldskum og polyeterskum, nederst minibonell-fjærer 150/m², 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Overmadrass: 8 cm tykk med trykkavlastende memoryskumkjerne som former seg etter kroppen, vaskbart stretchtrekk med tykk, myk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 16,
      name: "Dingla PB75",
      type: "Plus",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Dingla.jpg",
      sizes: ["80x200", "90x200", "120x200", "140x200", "160x200", "180x200"],

      details: {
        material: "Polyesterskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 60,
      },
      message:
        "Garanti: 15 år. Rammemadrass: pocket-fjærer 246/m², polstret med Comfort+ skum, 5 komfortsoner som gir presis og optimal støtte. Overmadrass: 6 cm tykk med fleksibel Comfort+ skumkjerne, som former seg komfortabelt etter kroppens konturer, vaskbart trekk. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 17,
      name: "Horsla GB30",
      type: "Gold",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Horsla.jpg",
      sizes: ["80x200", "90x200", "120x200", "140x200", "160x200", "180x200"],

      details: {
        material: "Polyetherskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 60,
      },
      message:
        "Garanti: 15 år. Rammemadrass: dobbeltfjæret, øverst multipocket-fjærer 500/m², polstret med kaldskum og polyeterskum, nederst minibonell-fjærer 150/m², 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Overmadrass: 8 cm tykk med pustende latekskjerne som effektivt leder bort overskuddsvarme, vaskbart stretchtrekk med tykk, myk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 18,
      name: "Leirkup BC10",
      type: "Basic",
      katergori: "Senger",
      url: "/Jyskh-ndbok/images/Leirkup.jpg",
      sizes: ["90x200", "120x200", "140x200", "150x200", "160x200", "180x200"],

      details: {
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Myk",
        firm: 29,
      },
      message:
        "Vendbar-madrass: bonell-fjærer 110/m² polstret med polyeterskum. Overmadrass: 4 cm tykk, med polyeterskumkjerne. Nederst: ramme. Inkludert ben(14 cm) Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
  ],

  Overmadrass: [
    {
      id: 11,
      name: "Marren",
      type: "Basic",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Marren.jpg",
      sizes: ["80x200", "90x200", "140x200", "160x200", "180x200"],

      details: {
        height: "2.5cm",
        material: "Memoryskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 40,
      },
      message:
        "En 2,5 cm tykk overmadrass laget med memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester (62% resirkulert).",
      salg: "kode 7",
    },
    {
      id: 12,
      name: "Vingan",
      type: "Basic",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Vingan.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "4cm",
        material: "Polyeterskum",
        core: "25 kg/m³",
        firmness: "Myk",
        firm: 25,
      },
      message:
        "4 cm tykk madrass med polyeterskumkjerne. Vaskbart trekk i myk, 100% polyestermikrofiber (100% resirkulert).",
      salg: "kode 7",
    },
    {
      id: 13,
      name: "Kjella",
      type: "Plus",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Kjella.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "6cm",
        material: "Kaldskum",
        core: "48 kg/m³",
        firmness: "Myk",
        firm: 30,
      },
      message:
        "6 cm tykk overmadrass med kaldskumkjerne for komfort og støtte. Vaskbart trekk i 100% polyester (51% resirkulert), behandlet med biocidet GREENFIRST®. ",
      salg: "kode 7",
    },
    {
      id: 14,
      name: "Kvisten",
      type: "Plus",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Kvisten.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "6cm",
        material: "Memoryskum",
        core: "40 kg/m³",
        firmness: "Fast",
        firm: 70,
      },
      message:
        "6 cm tykk overmadrass med memoryskum og 7 komfortsoner for ergonomisk støtte. Vaskbart trekk i 100% polyester (34% resirkulert), behandlet med aloe vera.",
      salg: "kode 7",
    },
    {
      id: 15,
      name: "Gulen",
      type: "Gold",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Gulen.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "90x210",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
        "180x210",
      ],

      details: {
        height: "8cm",
        material: "Air Memoryskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 50,
      },
      message:
        "8 cm tykk overmadrass med AIR memoryskum som tilpasser seg kroppens konturer, selv i kjøligere omgivelser. Trekket er quiltet med bambuskull og behandlet med biocidet GREENFIRST®. ",
      salg: "kode 7",
    },
    {
      id: 16,
      name: "Frya",
      type: "Gold",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Frya.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "4.5cm",
        material: "Air Memoryskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 49,
      },
      message:
        "4,5 cm tykk overmadrass med AIR memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 17,
      name: "Bokselvi",
      type: "Gold",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Bokselvi.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "3,5+4,5 cm",
        material: "Air Memoryskum med kjølende gel + polyeterskum",
        core: "35 kg/m³",
        firmness: "Medium",
        firm: 55,
      },
      message:
        "8 cm tykk overmadrass med AIR memoryskum og polyeterskum. Kjølende gel i overkroppsområdet for ekstra komfort. Vaskbart trekk med polyetylen for umiddelbar kjølende effekt.",
      salg: "kode 7",
    },
    {
      id: 18,
      name: "Gursken",
      type: "Gold",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Gursken.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "6cm",
        material: "Gelskum",
        core: "40 kg/m³",
        firmness: "Myk",
        firm: 20,
      },
      message:
        "6 cm tykk overmadrass med gelskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester (54% resirkulert).",
      salg: "kode 7",
    },
    {
      id: 19,
      name: "Haslan",
      type: "Plus",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Haslan.jpg",
      sizes: ["90x200", "120x200", "140x200", "160x200", "180x200"],

      details: {
        height: "3cm",
        material: "Lateks",
        core: "70 kg/m³",
        firmness: "Fast",
        firm: 80,
      },
      message:
        "3 cm tykk overmadrass med pustende latekskjerne som effektivt leder bort overskuddsvarme. Vaskbart trekk i 100% polyester (54% resirkulert).",
      salg: "kode 7",
    },
    {
      id: 20,
      name: "Framvaren",
      type: "Gold",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Framvaren.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
        "180x210",
      ],

      details: {
        height: "8cm",
        material: "Memoryskum",
        core: "50 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Eksklusiv 8 cm tykk overmadrass med memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk med polyetylen for en kjølende effekt.",
      salg: "kode 7",
    },
    {
      id: 21,
      name: "Hopen",
      type: "Gold",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Hopen.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "6cm",
        material: "Lateks",
        core: "70 kg/m³",
        firmness: "Fast",
        firm: 100,
      },
      message:
        "6 cm tykk overmadrass med latekskjerne som effektivt leder bort overskuddsvarme. Vaskbart trekk i 100% polyester (60% resirkulert). Behandlet med biocidet GREENFIRST®.",
      salg: "kode 7",
    },
  ],
  Madrass: [
    {
      id: 1,
      name: "Billefjord",
      type: "Basic",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Billefjord.jpg",
      sizes: ["70x190", "75x200", "90x200"],

      details: {
        height: "7 cm",
        material: "Polyetherskum",
        firmness: "Myk",
        firm: 63,
      },
      message:
        "7 cm tykk skummadrass med polyeterskumkjerne. Vaskbart trekk i 100% polyester (57% resirkulert).",
      salg: "kode 7",
    },
    {
      id: 2,
      name: "Hasla",
      type: "Basic",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Hasla.jpg",
      sizes: ["70x190", "75x190", "75x200", "90x200", "120x200"],

      details: {
        height: "10 cm",
        material: "Polyesterskum",
        firmness: "Fast",
        firm: 73,
      },
      message:
        "10 cm tykk skummadrass med polyterskumkjerne. Vaskbart trekk med lett quilting.",
      salg: "Kundetilbakemeldinger: 4.8/5*",
    },
    {
      id: 3,
      name: "Lillelv",
      type: "Gold",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Lillelv.jpg",
      sizes: ["70x190", "75x200", "90x200", "120x200"],

      details: {
        height: "14 cm",
        material: "Kaldskum",
        firmness: "Myk",
        firm: 40,
      },
      message:
        "14 cm tykk skummadrass med 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Kjerne av kaldskum. Vaskbart trekk i 100% polyester (51% resirkulert) med tykk quilting.",
      salg: "kode 7",
    },
    {
      id: 4,
      name: "Glomma",
      type: "Gold",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Glomma.jpg",
      sizes: ["75x200", "80x200", "90x200", "120x200", "140x200", "180x200"],

      details: {
        height: "18 cm",
        material: "Memoryskum",
        firmness: "Fast",
        firm: 82,
      },
      message:
        "18 cm tykk skummadrass med kjerne av 14 cm polyeterskum og 4 cm trykkavlastende AIR memoryskum. AIR memoryskum former seg raskt etter kroppen, selv i et kjølig sovemiljø. Vaskbart trekk.",
      salg: "Kundetilbakemeldinger: 4.6/5*",
    },
    {
      id: 5,
      name: "Kjosen",
      type: "Plus",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Kjosen.jpg",
      sizes: ["70x190", "75x200", "80x200", "90x200", "120x200"],

      details: {
        height: "12 cm",
        material: "Latex",
        firmness: "Medium",
        firm: 69,
      },
      message:
        "12 cm tykk skummadrass med 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. 11 cm tykk polyeterskumkjerne. Vaskbart trekk med lett quilting.",
      salg: "kode 7",
    },
    {
      id: 6,
      name: "Hulda",
      type: "Plus",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Hulda.jpg",
      sizes: ["75x200", "80x200", "90x200", "120x200", "140x200", "180x200"],

      details: {
        height: "16 cm",
        material: "Polyeterskum, Memoryskum",
        firmness: "Fast",
        firm: 79,
      },
      message:
        "16 cm tykk skummadrass med 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Kjerne av 12 cm polyeterskum og 4 cm trykkavlastende memoryskum som former seg presist etter kroppens konturer. Vaskbart trekk.",
      salg: "Kundetilbakemeldinger: 4.4/5*",
    },
    {
      id: 7,
      name: "Kvita",
      type: "Gold",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Kvita.jpg",
      sizes: [
        "75x200",
        "80x200",
        "90x200",
        "90x210",
        "120x200",
        "140x200",
        "150x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "22 cm",
        material: "Polyeterskum, Memoryskum",
        firmness: "Fast",
        firm: 83,
      },
      message:
        "22 cm tykk skummadrass med kjerne av 2,5 cm fleksibelt Comfort+ skum, 15,5 cm polyeterskum og 4 cm trykkavlastende AIR memoryskum tilsatt fuktabsorberende bambuskull. AIR memoryskum former seg presist etter kroppens konturer, selv i et kjølig sovemiljø. Vaskbart trekk er behandlet med biocidet GREENFIRST®.\n" +
        "\n" +
        "Dette produktet er behandlet med biocidet GREENFIRST®, som inneholder virkestoffet Geraniol. Behandlingen med Geraniol gir egenskaper som motvirker støvmidd. Geraniol er klassifisert som hudsensibiliserende, og direkte hudkontakt bør unngås. Bruk alltid med sengetøy som dynetrekk, laken og putetrekk.",
      salg: "Kundetilbakemeldinger: 4.2/5*",
    },
    {
      id: 8,
      name: "Hovda",
      type: "Gold",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Hovda.jpg",
      sizes: ["75x200", "80x200", "90x200", "140x200", "160x200", "180x200"],

      details: {
        height: "24 cm",
        material: "Memoryskum",
        firmness: "Fast",
        firm: 89,
      },
      message:
        "24 cm tykk skummadrass med 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Kjerne av 4 cm fleksibelt Comfort+ skum, 16 cm polyeterskum og 4 cm trykkavlastende AIR memoryskum. AIR memoryskum former seg raskt etter kroppen, selv i et kjølig sovemiljø. Madrassen har kjølende gel i overkroppsområdet. Vaskbart trekk med polyetylen på den ene siden, noe som gir en umiddelbar, kjølende effekt.",
      salg: "Kundetilbakemeldinger: 4.1/5*",
    },
    {
      id: 9,
      name: "Vendo",
      type: "Gold",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Vendo.jpg",
      sizes: ["80x200", "90x200", "140x200", "160x200", "180x200"],

      details: {
        height: "28 cm",
        material: "Polyeter, memoryskum",
        firmness: "Fast",
        firm: 88,
      },
      message:
        "28 cm tykk skummadrass med 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Kjerne av 4 cm fleksibelt Comfort+ skum, 19 cm polyeterskum og 3 cm trykkavlastende AIR memoryskum tilført fuktabsorberende bambuskull. AIR memoryskum former seg raskt etter kroppen, selv i et kjølig sovemiljø. Trekk med tykk quilting i ull. Ull er naturlig antibakterielt, temperaturregulerende og fuktabsorberende. Trekket inneholder TENCEL™ Lyocell-fiber som gjennom fuktighetskontroll gir en naturlig tørr følelse.",
      salg: "Kundetilbakemeldinger: 4/5*",
    },
    {
      id: 10,
      name: "Kamelva",
      type: "Basic",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Kamelva.jpg",
      sizes: ["80x200", "90x200", "120x200"],

      details: {
        height: "18 cm",
        material: "Bonell-fjærer",
        firmness: "Fast",
        firm: 85,
      },
      message:
        "18 cm tykk madrass med bonell-fjærer 130/m², polstret med polyeterskum. Vaskbart trekk med tykk quilting.",
      salg: "kode 7",
    },
    {
      id: 11,
      name: "Eima",
      type: "Gold",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Eima.jpg",
      sizes: ["75x200", "80x200", "90x200", "140x200", "160x200"],

      details: {
        height: "27 cm",
        material: "Pocket-fjærer",
        firmness: "Medium",
        firm: 71,
      },
      message:
        "27 cm tykk madrass med pocket-fjærer 289/m² inndelt i 11 komfortsoner. Madrassen er polstret med trykkavlastende AIR memoryskum og gel skum på den ene siden og polyeterskum på den andre. AIR memoryskum former seg raskt og presist etter kroppens konturer, selv i et kjølig sovemiljø. Vaskbart trekk.",
      salg: "Kundetilbakemeldinger: 4.6/5*",
    },
    {
      id: 12,
      name: "Stripa",
      type: "Plus",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Stripa.jpg",
      sizes: ["75x200", "80x200", "90x200", "120x200", "140x200", "160x200"],

      details: {
        height: "19 cm",
        material: "Pocket-fjærer",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "19 cm tykk madrass med pocket-fjærer 324/m², inndelt i 11 komfortsoner. Madrassen er polstret med polyeterskum. Vaskbart trekk med tykk, myk quilting.",
      salg: "Kundetilbakemeldinger: 4.6/5*",
    },
    {
      id: 13,
      name: "Stripa ekstra fast",
      type: "Plus",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/StripaEkstraFast.jpg",
      sizes: [
        "70x200",
        "75x200",
        "80x200",
        "90x200",
        "120x200",
        "140x200",
        "160x200",
        "180x200",
      ],

      details: {
        height: "19 cm",
        material: "Pocket-fjærer",
        firmness: "Fast",
        firm: 100,
      },
      message:
        "19 cm tykk vendbar madrass med pocket-fjærer 324/m², inndelt i 11 komfortsoner. Madrassen er polstret med polyeterskum. Vaskbart trekk med tykk, myk quilting.",
      salg: "Kundetilbakemeldinger: 4.5/5* Dette er et produkt som ønsker en spessielt fast madrass",
    },
    {
      id: 14,
      name: "Lutra",
      type: "Plus",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Lutra.jpg",
      sizes: ["90x200", "120x200", "140x200", "150x200", "160x200", "180x200"],

      details: {
        height: "22 cm",
        material: "pocket-fjærer",
        firmness: "Medium",
        firm: 70,
      },
      message:
        "22 cm tykk vendbar madrass med pocket-fjærer 240/m² inndelt i 11 komfortsoner. Madrassen er polstret med trykkavlastende memoryskum på den ene siden og polyeterskum på den andre. Memoryskum former seg etter kroppen. Vaskbart stretchtrekk i 100% polyester (31% resirkulert) med tykk quilting.",
      salg: "Kundetilbakemeldinger: 4.4/5*",
    },
    {
      id: 15,
      name: "Driva",
      type: "Gold",
      katergori: "Madrass",
      url: "/Jyskh-ndbok/images/Driva.jpg",
      sizes: ["90x200", "120x200", "140x200", "150x200", "160x200", "180x200"],

      details: {
        height: "27 cm",
        material: "Pocket-fjær",
        firmness: "Fast",
        firm: 95,
      },
      message:
        "27 cm tykk madrass med pocket-fjærer 505/m² inndelt i 7 komfortsoner som gir en unik og ergonomisk korrekt støtte. Madrassen er polstret med pustende lateks og kaldskum på den ene siden og polyeterskum på den andre siden. Lateks leder effektiv bort overskuddsvarme. Vaskbart trekk med tykk, myk quilting.",
      salg: "Kundetilbakemeldinger: 4.5/5 * Perfekt for en som ønsker en fast og god madrass",
    },
  ],
};
