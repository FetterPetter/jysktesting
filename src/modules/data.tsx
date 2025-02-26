export interface Item {
  id: number;
  name: string;
  url: string;
  details: Record<string, string | number>; // Flexible details
}

export const categories: Record<string, Item[]> = {
  Madrass: [
    {
      id: 1,
      name: "Glomma",
      url: "/Jyskh-ndbok/images/Glomma.jpg",
      details: { hardness: "Fast", height: "18cm", core: "30 kg/m³" },
    },
    {
      id: 2,
      name: "Firm Madrass",
      url: "/Jyskh-ndbok/images/Kvita.jpg",
      details: { hardness: "Firm", height: "22cm" },
    },
  ],
  Dyne: [
    {
      id: 3,
      name: "Winter Dyne",
      url: "/images/dyne1.jpg",
      details: { warmth: "Warm", weight: "2kg" },
    },
    {
      id: 4,
      name: "Summer Dyne",
      url: "/images/dyne2.jpg",
      details: { warmth: "Cool", weight: "1.2kg" },
    },
  ],
  Pute: [
    {
      id: 5,
      name: "Memory Foam Pute",
      url: "/images/pute1.jpg",
      details: { support: "High", material: "Memory Foam" },
    },
    {
      id: 6,
      name: "Feather Pute",
      url: "/images/pute2.jpg",
      details: { softness: "Medium", material: "Feathers" },
    },
  ],
  Overmadrass: [
    {
      id: 7,
      name: "Luxury Overmadrass",
      url: "/images/overmadrass1.jpg",
      details: { thickness: "5cm", material: "Latex" },
    },
    {
      id: 8,
      name: "Basic Overmadrass",
      url: "/images/overmadrass2.jpg",
      details: { thickness: "3cm", material: "Foam" },
    },
  ],
};
