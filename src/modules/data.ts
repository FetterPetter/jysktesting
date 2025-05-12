export interface Item {
  id: number;
  name: string;
  katergori: string;
  type: string;
  url: string;
  details: Record<string, string | number>;
  message: string;
  salg: string;
  oppsalg?: string;
}

export const categories: Record<string, Item[]> = {
  Senger: [
    {
      id: 1,
      name: "Tyssa",
      type: "Plus",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Tyssa.jpg",
      details: {
        overmadrass: "Kaldskum eller Polyeterskum",
        core: "30 kg/m³",
        spring: "Pocket",
        firmness: "Fast",
        firm: 80,
      },
      message:
        "Vendbar madrass med pocket-fjærer 250/m², polstret med polyeterskum. Madrassen er inndelt i 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. 1 overmadrass, 4 cm tykk med polyeterskumkjerne. Vaskbart stretchtrekk med tykk quilting. Nederst 1 polstret ramme. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 2,
      name: "Verma",
      type: "Basic",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Verma.jpg",
      details: {
        overmadrass: "Polyeterskum",
        core: "30 kg/m³",
        spring: "Bonell",
        firmness: "Myk",
        firm: 38,
      },
      message:
        "Vendbar madrass med bonell-fjærer 110/m² polstret med polyeterskum. 1 overmadrass, 4 cm tykk overmadrass med polyeterskumkjerne. Vaskbart trekk med tykk quilting. Nederst en ramme. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "Veldig myk seng, her kan du foreslå å gå over til en som ikke bruker bonell",
    },

    {
      id: 3,
      name: "Nevla",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Nevla.jpg",
      details: {
        overmadrass: "Gelskum",
        core: "25 kg/m³",
        spring: "Pocket",
        firmness: "Medium",
        firm: 70,
      },
      message:
        "Vendbar madrass med pocket-fjærer 225/m², polstret med polyeterskum. Madrassen er inndelt i 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. 1 overmadrass, 6 cm tykk med fleksibel Comfort + skumkjerne som former seg komfortabelt etter kroppens konturer. Vaskbart trekk i 100% polyester (76% resirkulert). Nederst 1 rammemadrass. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "  ",
    },
    {
      id: 4,
      name: "Osaelva",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Osaelva.jpg",
      details: {
        overmadrass: "Polyeterskum",
        spring: "Pocket",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 71,
      },
      message:
        "Vendbar madrass med pocket-fjærer 260/m², polstret med polyeterskum. Madrassen er inndelt i 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. 1 overmadrass, 8 cm tykk med polyeterskumkjerne. Vaskbart trekk med myk, tykk quilting. Nederst 1 polstret ramme. Inkl. ben. Sengegavl kjøpes separat",
      salg: "kode7",
    },
    {
      id: 5,
      name: "Sokna",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Sokna.jpg",
      details: {
        material: "Memoryskum",
        spring: "Pocket",
        core: "37 kg/m³",
        firmness: "Fast",
        firm: 83,
      },
      message:
        "Madrass med pocket-fjærer 260/m², polstret med kaldskum og polyeterskum. Madrassen er inndelt i 5 komfortsoner som gir en presis, optimal støtte. 1 overmadrass, 7 cm tykk med pustende latekskjerne som effektivt leder bort overskuddsvarme. Stretchtrekk med myk, tykk quilting. Nederst 2 rammemadrasser med bonellfjærer 110/m². Inkl. ben. Sengegavl kjøpes separat.",
      salg: "kode7",
    },
    {
      id: 6,
      name: "Hemla",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Hemla.jpg",
      details: {
        overmadrass: "Memoryskum eller latex",
        core: "35 kg/m³",
        spring: "Adaptive Pocket",
        firmness: "Medium",
        firm: 45,
      },
      message:
        "Vendbar madrass med adaptive pocket-fjærer 204/m², polstret med fleksibelt Comfort+ skum. Adaptive pocketfjærer tilpasser gradvis fastheten og støtten til dine skiftende sovestillinger. Madrassen er inndelt i 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. 1 overmadrass, 7 cm tykk med trykkavlastende memoryskumkjerne som former seg presist etter kroppens konturer. Trekk med tykk, myk quilting. Nederst 1 rammemadrass med pocket-fjærer 250/m², inndelt i 5 komfortsoner. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 7,
      name: "Veksa",
      type: "Plus",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Veksa.jpg",
      details: {
        overmadrass: "Polyeterskum",
        core: "30 kg/m³",
        spring: "pocket",
        firmness: "Myk",
        firm: 39,
      },
      message:
        "Vendbar madrass med pocket-fjærer 200/m² polstret med polyeterskum. 1 overmadrass, 7 cm tykk med polyeterskumkjerne. Vaskbart trekk med myk, tykk quilting. Nederst 1 ramme. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 8,
      name: "Lygna",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Lygna.jpg",
      details: {
        material: "Memoryskum",
        core: "75 kg/m³",
        firmness: "Medium",
        firm: 75,
      },
      message:
        "Vendbar madrass med pocket-fjærer 260/m², polstret med polyeterskum. Madrassen er inndelt i 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. 1 overmadrass, 7 cm tykk med polyeterskumkjerne. Vaskbart trekk med myk, tykk quilting. Nederst 1 rammemadrass med pocket-fjærer 205/m², inndelt i 7 komfortsoner. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 9,
      name: "Reipa",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Reipa.jpg",
      details: {
        material: "Kaldskum",
        core: "100 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Vndbar madrass med multipocket-fjærer 500/m², polstret med kaldskum og polyeterskum. Madrassen er inndelt i 5 komfortsoner som gir en presis, optimal støtte. 1 overmadrass, 10 cm tykk med pustende latekskjerne som effektivt leder bort overskuddsvarme. Det vaskbare stretchtrekket er med tykk quilting i polyeterskum. Trekk med fukttransporterende lyocell. Nederst 1 rammemadrass med pocket-fjærer 250/m², inndelt i 7 komfortsoner. Med sensorstyrt undersengslys. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 10,
      name: "Temprakon Lya",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/TemprakonLya.jpg",
      details: {
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 95,
      },
      message:
        "Vendbar madrass med pocket-fjærer 225/m², polstret med pustende Cooltex Breeze. Madrassen er inndelt i 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. 1 overmadrass, 10 cm tykk med pustende latekskjerne som effektivt leder bort overskuddsvarme. Vaskbart stretchtrekk med myk, tykk quilting. Trekket er laget med kjølende og temperaturregulerende TEMPRAKON® space teknologi som skaper et tørt og behagelig sovemiljø. Nederst 1 rammemadrass med pocket-fjærer 225/m², inndelt i 9 komfortsoner. Inkl. ben. Sengegavl kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 11,
      name: "Skaupa",
      type: "Basic",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Skaupa.jpg",
      details: {
        material: "Polyeterskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 40,
      },
      message:
        "Rammemadrass med bonellfjærer 115/m², polstret med polyeterskum. Inkl. 4 cm tykk overmadrass med polyeterskumkjerne. Vaskbart stretchtrekk med tykk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 12,
      name: "Fjelna",
      type: "Plus",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Fjelna.jpg",
      details: {
        material: "Polyeterskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 40,
      },
      message:
        "Dobbeltfjæret rammemadrass med 5 komfortsoner som gir korrekt og optimal støtte. Øverst pocketfjærer 250/m², polstret med polyeterskum. Nederst minibonellfjærer 150/m². Inkl. 4 cm tykk overmadrass med polyeterskumkjerne. Vaskbart stretchtrekk med lett quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 13,
      name: "Spongi",
      type: "Plus",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Spongi.jpg",
      details: {
        material: "Kaldskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 42,
      },
      message:
        "Rammemadrass med pocketfjærer 205/m², polstret med polyeterskum. Inkl. 4 cm tykk overmadrass med polyeterskumkjerne. Vaskbart stretchtrekk med lett quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 14,
      name: "Grimse",
      type: "Plus",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Grimse.jpg",
      details: {
        material: "Polyester",
        core: "20 kg/m³",
        firmness: "Medium",
        firm: 50,
      },
      message:
        "Dobbeltfjæret rammemadrass med 5 komfortsoner som gir optimal støtte. Øverst pocket-fjærer 250/m², polstret med polyeterskum. Nederst minibonell-fjærer 150/m². Inkl. 5 cm tykk overmadrass med trykkavlastende memoryskumkjerne som former seg etter kroppen. Vaskbart stretchtrekk med tykk, myk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 15,
      name: "Kvenna",
      type: "Plus",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Kvenna.jpg",
      details: {
        material: "Latex",
        core: "60 kg/m³",
        firmness: "Medium",
        firm: 70,
      },
      message:
        "Dobbeltfjæret rammemadrass med 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Øverst pocket-fjærer 250/m², polstret med kaldskum og polyeterskum. Nederst minibonell-fjærer 150/m². Inkl. 8 cm tykk overmadrass med trykkavlastende memoryskumkjerne som former seg etter kroppen. Vaskbart stretchtrekk med tykk, myk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 16,
      name: "Dingla",
      type: "Plus",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Dingla.jpg",
      details: {
        material: "Polyesterskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 60,
      },
      message:
        "Rammemadrass med pocket-fjærer 246/m², polstret med Comfort+ skum. Madrassen er inndelt i 5 komfortsoner som gir presis og optimal støtte. Inkl. 6 cm tykk overmadrass med fleksibel Comfort+ skumkjerne, som former seg komfortabelt etter kroppens konturer. Vaskbart trekk. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 17,
      name: "Horsla",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Horsla.jpg",
      details: {
        material: "Polyetherskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 60,
      },
      message:
        "Dobbeltfjæret rammemadrass med 7 komfortsoner som gir en unik, ergonomisk korrekt støtte. Øverst multipocket-fjærer 500/m², polstret med kaldskum og polyeterskum. Nederst minibonell-fjærer 150/m². Inkl. 8 cm tykk overmadrass med pustende latekskjerne som effektivt leder bort overskuddsvarme. Vaskbart stretchtrekk med tykk, myk quilting. Ben/bøyler kjøpes separat.",
      salg: "kode 7",
    },
    {
      id: 18,
      name: "Leirkup",
      type: "Gold",
      katergori: "Seng",
      url: "/Jyskh-ndbok/images/Leirkup.jpg",
      details: {
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Kontinentalseng, vendbar madrass med bonell-fjærer 110/m² polstret med polyeterskum. 1 overmadrass, 4 cm tykk, med polyeterskumkjerne. Nederst 1 ramme. Inkl. ben. Sengegavl kjøpes separat.",
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
      details: {
        height: "2.5cm",
        material: "Memoryskum",
        core: "30 kg/m³",
        firmness: "Myk",
        firm: 10,
      },
      message:
        "En 2.5 cm tykk overmadrass laget med memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester (62% resirkulert).",
      salg: "kode 7",
    },
    {
      id: 12,
      name: "Vingan",
      type: "Basic",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Vingan.jpg",
      details: {
        height: "4cm",
        material: "Polyeterskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 40,
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
      details: {
        height: "6cm",
        material: "Kaldskum",
        core: "48 kg/m³",
        firmness: "Fast",
        firm: 80,
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
      details: {
        height: "6cm",
        material: "Memoryskum",
        core: "40 kg/m³",
        firmness: "Myk",
        firm: 20,
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
      details: {
        height: "4.5cm",
        material: "Air Memoryskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 45,
      },
      message:
        "4.5 cm tykk overmadrass med AIR memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 17,
      name: "Bokselvi",
      type: "Gold",
      katergori: "Overmadrass",
      url: "/Jyskh-ndbok/images/Bokselvi.jpg",
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
      details: {
        height: "6cm",
        material: "Gelskum",
        core: "40 kg/m³",
        firmness: "Myk",
        firm: 50,
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
      details: {
        height: "3cm",
        material: "Lateks",
        core: "70 kg/m³",
        firmness: "Fast",
        firm: 90,
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
      details: {
        height: "8cm",
        material: "Memoryskum",
        core: "50 kg/m³",
        firmness: "Myk",
        firm: 15,
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
      details: {
        height: "6cm",
        material: "Lateks",
        core: "70 kg/m³",
        firmness: "Fast",
        firm: 95,
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
      details: {
        height: "7 cm",
        material: "Polyetherskum",
        size: "70,75,90",
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
      details: {
        height: "10 cm",
        material: "Polyesterskum",
        size: "70,75,90,120",
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
      details: {
        height: "14 cm",
        material: "Kaldskum",
        size: "70,75,90,120",
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
      details: {
        height: "18 cm",
        material: "Memoryskum",
        size: "75,80,90,120,140,180",
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
      details: {
        height: "12 cm",
        material: "Latex",
        size: "70,75,80,90,120",
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
      details: {
        height: "16 cm",
        material: "Polyeterskum, Memoryskum",
        size: "75,80,90,120,140,180",
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
      details: {
        height: "22 cm",
        material: "Polyeterskum, Memoryskum",
        size: "75,80,90,120,140,150,160,180",
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
      details: {
        height: "24 cm",
        material: "Memoryskum",
        size: "75,80,90,140,160,180",
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
      details: {
        height: "28 cm",
        material: "Polyeter, memoryskum",
        size: "80,90,140,160,180",
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
      details: {
        height: "18 cm",
        material: "Bonell-fjærer",
        size: "80,90,120",
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
      details: {
        height: "27 cm",
        material: "Pocket-fjærer",
        size: "75,80,90,140,160",
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
      details: {
        height: "19 cm",
        material: "Pocket-fjærer",
        size: "75,80,90,120,140,160",
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
      details: {
        height: "19 cm",
        material: "Pocket-fjærer",
        size: "70,75,80,90,120,140,160,180",
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
      details: {
        height: "22 cm",
        material: "pocket-fjærer",
        size: "80,90,120,140,160,180",
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
      details: {
        height: "27 cm",
        material: "Pocket-fjær",
        size: "80,90,140,160,180",
        firmness: "Fast",
        firm: 95,
      },
      message:
        "27 cm tykk madrass med pocket-fjærer 505/m² inndelt i 7 komfortsoner som gir en unik og ergonomisk korrekt støtte. Madrassen er polstret med pustende lateks og kaldskum på den ene siden og polyeterskum på den andre siden. Lateks leder effektiv bort overskuddsvarme. Vaskbart trekk med tykk, myk quilting.",
      salg: "Kundetilbakemeldinger: 4.5/5 * Perfekt for en som ønsker en fast og god madrass",
    },
  ],
};
