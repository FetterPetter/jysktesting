export interface Item {
  id: number;
  name: string;
  kategori: string;
  url: string;
  details: Record<string, string | number>;
  message: string;
}

export const categories: Record<string, Item[]> = {
  Overmadrass: [
    {
      id: 7,
      name: "Marren",
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Marren.jpg",
      details: { height: "2.5cm", material: "Memoryskum", core: "30 kg/m³" },
      message:
        "En 2.5 cm tykk overmadrass laget med memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester (62% resirkulert).",
    },
    {
      id: 8,
      name: "Vingan",
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Vingan.jpg",
      details: { height: "4cm", material: "Polyeterskum", core: "25 kg/m³" },
      message:
        "4 cm tykk madrass med polyeterskumkjerne. Vaskbart trekk i myk, 100% polyestermikrofiber (100% resirkulert).",
    },
    {
      id: 9,
      name: "Kjella",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Kjella.jpg",
      details: { height: "6cm", material: "Kaldskum", core: "48 kg/m³" },
      message:
        "6 cm tykk overmadrass med kaldskumkjerne for komfort og støtte. Vaskbart trekk i 100% polyester (51% resirkulert), behandlet med biocidet GREENFIRST®. ",
    },
    {
      id: 10,
      name: "Kvisten",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Kvisten.jpg",
      details: {
        height: "6cm",
        material: "Memoryskum",
        core: "40 kg/m³",
      },
      message:
        "6 cm tykk overmadrass med memoryskum og 7 komfortsoner for ergonomisk støtte. Vaskbart trekk i 100% polyester (34% resirkulert), behandlet med aloe vera.",
    },
    {
      id: 11,
      name: "Gulen",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Gulen.jpg",
      details: {
        height: "8cm",
        material: "Air Memoryskum",
        core: "30 kg/m³",
      },
      message:
        "8 cm tykk overmadrass med AIR memoryskum som tilpasser seg kroppens konturer, selv i kjøligere omgivelser. Trekket er quiltet med bambuskull og behandlet med biocidet GREENFIRST®.",
    },
    {
      id: 12,
      name: "Frya",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Frya.jpg",
      details: {
        height: "4.5cm",
        material: "Air Memoryskum",
        core: "30 kg/m³",
      },
      message:
        "4.5 cm tykk overmadrass med AIR memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester.",
    },
    {
      id: 13,
      name: "Bokselvi",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Bokselvi.jpg",
      details: {
        height: "3,5+4,5 cm",
        material: "Air Memoryskum med kjølende gel + polyeterskum",
        core: "35 kg/m³",
      },
      message:
        "8 cm tykk overmadrass med AIR memoryskum og polyeterskum. Kjølende gel i overkroppsområdet for ekstra komfort. Vaskbart trekk med polyetylen for umiddelbar kjølende effekt.",
    },
    {
      id: 14,
      name: "Gursken",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Gursken.jpg",
      details: {
        height: "6cm",
        material: "Gelskum",
        core: "40 kg/m³",
      },
      message:
        "6 cm tykk overmadrass med gelskum som tilpasser seg kroppens konturer. Vaskbart trekk i 100% polyester (54% resirkulert).",
    },
    {
      id: 15,
      name: "Haslan",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Haslan.jpg",
      details: {
        height: "3cm",
        material: "Lateks",
        core: "70 kg/m³",
      },
      message:
        "3 cm tykk overmadrass med pustende latekskjerne som effektivt leder bort overskuddsvarme. Vaskbart trekk i 100% polyester (54% resirkulert).",
    },
    {
      id: 16,
      name: "Framvaren",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Framvaren.jpg",
      details: {
        height: "8cm",
        material: "Memoryskum",
        core: "50 kg/m³",
      },
      message:
        "Eksklusiv 8 cm tykk overmadrass med memoryskum som tilpasser seg kroppens konturer. Vaskbart trekk med polyetylen for en kjølende effekt.",
    },
    {
      id: 17,
      name: "Hopen",
      kategori: "Gold",
      url: "/Jyskh-ndbok/images/Hopen.jpg",
      details: {
        height: "6cm",
        material: "Lateks",
        core: "70 kg/m³",
      },
      message:
        "6 cm tykk overmadrass med latekskjerne som effektivt leder bort overskuddsvarme. Vaskbart trekk i 100% polyester (60% resirkulert). Behandlet med biocidet GREENFIRST®.",
    },
  ],
};
