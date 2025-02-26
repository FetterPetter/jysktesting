export interface Item {
  id: number;
  name: string;
  kategori: string;
  url: string;
  details: Record<string, string | number>; // Flexible details
}

export const categories: Record<string, Item[]> = {
  /* Madrass: [
     {
       id: 1,
       name: "Glomma",
       kategori: "Gold",
       url: "/Jyskh-ndbok/images/Glomma.jpg",
       details: {
         type: "Air Memoryskum",
         hardness: "Fast",
         height: "18cm",
         core: "30+30 kg/m³",
       },
     },
     {
       id: 2,
       name: "Kvita",
       kategori: "Gold",
       url: "/Jyskh-ndbok/images/Kvita.jpg",
       details: {
         type: "Air Memoryskum",
         hardness: "Fast",
         height: "22cm",
         core: "30+40+30 kg/m³",
       },
     },
     {
       id: 3,
       name: "Firm Madrass",
       kategori: "Gold",
       url: "/Jyskh-ndbok/images/Kvita.jpg",
       details: { hardness: "myk", height: "122cm" },
     },
     {
       id: 4,
       name: "Firm Madrass",
       kategori: "Gold",
       url: "/Jyskh-ndbok/images/Kvita.jpg",
       details: { hardness: "Firm", height: "22cm" },
     },
   ],
    Dyne: [
     {
       id: 3,
       name: "Winter Dyne",
       kategori: "Gold",
       url: "/images/dyne1.jpg",
       details: { warmth: "Warm", weight: "2kg" },
     },
     {
       id: 4,
       name: "Summer Dyne",
       kategori: "Gold",
       url: "/images/dyne2.jpg",
       details: { warmth: "Cool", weight: "1.2kg" },
     },
   ],
   Pute: [
     {
       id: 5,
       name: "Memory Foam Pute",
       kategori: "Gold",
       url: "/images/pute1.jpg",
       details: { support: "High", material: "Memory Foam" },
     },
     {
       id: 6,
       name: "Feather Pute",
       kategori: "Gold",
       url: "/images/pute2.jpg",
       details: { softness: "Medium", material: "Feathers" },
     },
   ],*/
  Overmadrass: [
    {
      id: 7,
      name: "Marren",
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Marren.jpg",
      details: { height: "2.5cm", material: "Memoryskum", core: "30 kg/m³" },
    },
    {
      id: 8,
      name: "Vingan",
      kategori: "Basic",
      url: "/Jyskh-ndbok/images/Vingan.jpg",
      details: { height: "4cm", material: "Polyeterskum", core: "25 kg/m³" },
    },
    {
      id: 9,
      name: "Kjella",
      kategori: "Plus",
      url: "/Jyskh-ndbok/images/Kjella.jpg",
      details: { height: "6cm", material: "Kaldskum", core: "48 kg/m³" },
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
        Komfortsoner: "7",
      },
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
    },
  ],
};
