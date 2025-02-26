export interface Item {
  id: number;
  name: string;
  image: string;
  details: Record<string, string | number>; // Flexible details
}

export const categories: Record<string, Item[]> = {
  Madrass: [
    {
      id: 1,
      name: "Glomma",
      image: "/images/Glomma.jpg",
      details: { hardness: "Fast", height: "18cm", core: "30 kg/m³" },
    },
    {
      id: 2,
      name: "Firm Madrass",
      image: "/images/madrass2.jpg",
      details: { hardness: "Firm", height: "22cm" },
    },
  ],
  Dyne: [
    {
      id: 3,
      name: "Winter Dyne",
      image: "/images/dyne1.jpg",
      details: { warmth: "Warm", weight: "2kg" },
    },
    {
      id: 4,
      name: "Summer Dyne",
      image: "/images/dyne2.jpg",
      details: { warmth: "Cool", weight: "1.2kg" },
    },
  ],
  Pute: [
    {
      id: 5,
      name: "Memory Foam Pute",
      image: "/images/pute1.jpg",
      details: { support: "High", material: "Memory Foam" },
    },
    {
      id: 6,
      name: "Feather Pute",
      image: "/images/pute2.jpg",
      details: { softness: "Medium", material: "Feathers" },
    },
  ],
  Overmadrass: [
    {
      id: 7,
      name: "Luxury Overmadrass",
      image: "/images/overmadrass1.jpg",
      details: { thickness: "5cm", material: "Latex" },
    },
    {
      id: 8,
      name: "Basic Overmadrass",
      image: "/images/overmadrass2.jpg",
      details: { thickness: "3cm", material: "Foam" },
    },
  ],
};
