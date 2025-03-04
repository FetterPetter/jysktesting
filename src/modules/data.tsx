export interface Item {
  id: number;
  name: string;
  kategori: string;
  url: string;
  details: Record<string, string | number>;
  message: string;
  salg: string;
}

export const categories: Record<string, Item[]> = {
  Senger: [
    {
      id: 1,
      name: "Tyssa",
      kategori: "Plus",
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
      kategori: "Basic",
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
      kategori: "Gold",
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
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Osaelva.jpg",
      details: {
        overmadrass: "Polyeterskum",
        spring: "Pocket",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 71,
      },
      message: "God seng til en god pris",
      salg: "kode7",
    },
    {
      id: 5,
      name: "Sokna",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Sokna.jpg",
      details: {
        material: "Memoryskum",
        spring: "Pocket",
        core: "37 kg/m³",
        firmness: "Fast",
        firm: 83,
      },
      message: "God og fast seng",
      salg: "kode7",
    },
    {
      id: 6,
      name: "Hemla",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Hemla.jpg",
      details: {
        overmadrass: "Memoryskum eller latex",
        core: "35 kg/m³",
        spring: "Adaptive Pocket",
        firmness: "Medium",
        firm: 45,
      },
      message: "En av de beste sengene vi har",
      salg: "kode 7",
    },
    {
      id: 7,
      name: "Veksa",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Veksa.jpg",
      details: {
        overmadrass: "Polyeterskum",
        core: "30 kg/m³",
        spring: "pocket",
        firmness: "Myk",
        firm: 39,
      },
      message: "--",
      salg: "kode 7",
    },
    {
      id: 8,
      name: "Lygna",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Lygna.jpg",
      details: {
        material: "Memoryskum",
        core: "75 kg/m³",
        firmness: "Medium",
        firm: 75,
      },
      message:
        "Kontinentalseng med memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 9,
      name: "Reipa",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Reipa.jpg",
      details: {
        material: "Kaldskum",
        core: "100 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "En luksuriøs kontinentalseng med kaldskumkjerne for optimal støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 10,
      name: "Temprakon Lya",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/TemprakonLya.jpg",
      details: {
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 95,
      },
      message:
        "Kontinentalseng med 30 cm høyde, laget av lateks som gir fantastisk støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 11,
      name: "Skaupa",
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Skaupa.jpg",
      details: {
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
      id: 12,
      name: "Fjelna",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Fjelna.jpg",
      details: {
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
      name: "Spongi",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Spongi.jpg",
      details: {
        material: "Kaldskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 42,
      },
      message:
        "Kontinentalseng med kaldskumkjerne for optimal støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 14,
      name: "Grimse",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Grimse.jpg",
      details: {
        material: "Polyester",
        core: "20 kg/m³",
        firmness: "Medium",
        firm: 50,
      },
      message:
        "4 cm tykk madrass med polyesterskumkjerne for en myk og komfortabel liggeflate. Vaskbart trekk.",
      salg: "kode 7",
    },
    {
      id: 15,
      name: "Kvenna",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Kvenna.jpg",
      details: {
        material: "Latex",
        core: "60 kg/m³",
        firmness: "Medium",
        firm: 70,
      },
      message:
        "Kontinentalseng med latexkjerne som gir en fantastisk komfort og støtte. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 16,
      name: "Dingla",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Dingla.jpg",
      details: {
        material: "Polyesterskum",
        core: "30 kg/m³",
        firmness: "Myk",
        firm: 60,
      },
      message:
        "3 cm tykk madrass med polyesterskumkjerne som gir en myk og behagelig søvn. Vaskbart trekk.",
      salg: "kode 7",
    },
    {
      id: 17,
      name: "Horsla",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Horsla.jpg",
      details: {
        material: "Polyetherskum",
        core: "25 kg/m³",
        firmness: "Medium",
        firm: 60,
      },
      message:
        "4 cm tykk madrass med polyetherskumkjerne. Vaskbart trekk i myk, 100% polyestermikrofiber.",
      salg: "kode 7",
    },
    {
      id: 18,
      name: "Leirkup",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Leirkup.jpg",
      details: {
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Luksuriøs kontinentalseng med latexkjerne for optimal støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
  ],

  Overmadrass: [
    {
      id: 11,
      name: "Marren",
      kategori: "Basic",
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
      kategori: "Basic",
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
      kategori: "Plus",
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
      kategori: "Plus",
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
      kategori: "Gold",
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
      kategori: "Gold",
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
      kategori: "Gold",
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
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Gursken.jpg",
      details: {
        height: "6cm",
        material: "Gelskum",
        core: "40 kg/m³",
        firmness: "Medium",
        firm: 50,
      },
      message:
        "6 cm tykk overmadrass med gelskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester (54% resirkulert).",
      salg: "kode 7",
    },
    {
      id: 19,
      name: "Haslan",
      kategori: "Plus",
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
      kategori: "Gold",
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
      kategori: "Gold",
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
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Billefjord.jpg",
      details: {
        height: "20 cm",
        material: "Polyetherskum",
        core: "30 kg/m³",
        firmness: "Medium",
        firm: 50,
      },
      message:
        "En komfortabel madrass med polyetherskumkjerne for en god og myk søvnopplevelse. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 2,
      name: "Hasla",
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Hasla.jpg",
      details: {
        height: "20 cm",
        material: "Polyesterskum",
        core: "35 kg/m³",
        firmness: "Medium",
        firm: 55,
      },
      message:
        "Komfortabel madrass med polyesterskumkjerne. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 3,
      name: "Lillelv",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Lillelv.jpg",
      details: {
        height: "28 cm",
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Luksuriøs madrass med naturlig latexkjerne for optimal støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 4,
      name: "Glomma",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Glomma.jpg",
      details: {
        height: "30 cm",
        material: "Memoryskum",
        core: "75 kg/m³",
        firmness: "Fast",
        firm: 85,
      },
      message:
        "En luksuriøs madrass med memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 5,
      name: "Kjosen",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Kjosen.jpg",
      details: {
        height: "28 cm",
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Medium",
        firm: 75,
      },
      message:
        "Komfortabel madrass med latexkjerne for god støtte og avlastning. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 6,
      name: "Hulda",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Hulda.jpg",
      details: {
        height: "28 cm",
        material: "Memoryskum",
        core: "70 kg/m³",
        firmness: "Medium",
        firm: 70,
      },
      message:
        "Madrass med memoryskum for god støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 7,
      name: "Kvita",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Kvita.jpg",
      details: {
        height: "32 cm",
        material: "Latex",
        core: "85 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Luksuriøs madrass med naturlig latexkjerne for fantastisk komfort og støtte. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 8,
      name: "Hovda",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Hovda.jpg",
      details: {
        height: "35 cm",
        material: "Memoryskum",
        core: "85 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "En luksuriøs madrass med memoryskum som gir en myk og støttende liggeflate. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 9,
      name: "Vendo",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Vendo.jpg",
      details: {
        height: "30 cm",
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 95,
      },
      message:
        "Luksuriøs madrass med latexkjerne for fantastisk støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 10,
      name: "Kamelva",
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Kamelva.jpg",
      details: {
        height: "28 cm",
        material: "Memoryskum",
        core: "70 kg/m³",
        firmness: "Medium",
        firm: 75,
      },
      message:
        "Komfortabel madrass med memoryskumkjerne for god støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 11,
      name: "Eima",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Eima.jpg",
      details: {
        height: "32 cm",
        material: "Latex",
        core: "85 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Luksuriøs madrass med latexkjerne for optimal komfort og støtte. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 12,
      name: "Stripa",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Stripa.jpg",
      details: {
        height: "28 cm",
        material: "Latex",
        core: "80 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Madrass med fast latexkjerne for ekstra støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 13,
      name: "Stripa ekstra fast",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/StripaEkstraFast.jpg",
      details: {
        height: "28 cm",
        material: "Latex",
        core: "90 kg/m³",
        firmness: "Fast",
        firm: 100,
      },
      message:
        "Ekstra hard madrass med latexkjerne for maksimal støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 14,
      name: "Lutra",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Lutra.jpg",
      details: {
        height: "28 cm",
        material: "Memoryskum",
        core: "75 kg/m³",
        firmness: "Medium",
        firm: 75,
      },
      message:
        "Madrass med memoryskum som gir optimal støtte og komfort. Vaskbart trekk i 100% polyester.",
      salg: "kode 7",
    },
    {
      id: 15,
      name: "Driva",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Driva.jpg",
      details: {
        height: "35 cm",
        material: "Latex",
        core: "85 kg/m³",
        firmness: "Fast",
        firm: 90,
      },
      message:
        "Luksuriøs madrass med latexkjerne for ekstra støtte og komfort. Vaskbart trekk i 100% polyester." +
        " Salgstriks kode7 ",
      salg: "kode 7",
    },
  ],
};
