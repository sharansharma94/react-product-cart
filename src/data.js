const data = {
  products: [
    {
      id: "1",
      name: "Princess Diana Inspired Blue Sapphire Ring with Diamond Halo",
      description:
        "At the core of a scintillating floral halo is an oval blue sapphire, held in a prong setting. This oval blue sapphire ring is inspired by Princess Diana's beautiful engagement ring. It is crafted in 14k white gold and bespeaks glamour and elegance.",
      stone: {
        quality: [
          {
            type: "good",
            price: 100,
          },
          {
            type: "better",
            price: 150,
          },
          {
            type: "best",
            price: 200,
          },
        ],

        weight: [
          {
            id: "A",
            carat_weight: 0.8,
            price: 10,
          },
          {
            id: "B",
            carat_weight: 1.1,
            price: 30,
          },
        ],

        type: [
          {
            id: "RG",
            name: "14k Rose Gold",
            price: 100,
          },
          {
            id: "YG",
            name: "14k Yellow Gold",
            price: 150,
          },
        ],

        sizes: [7, 7.5, 8, 8.5, 9, 9.5],
      },
    },
  ],
};

export default data;
