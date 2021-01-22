const mockProfiles = [
  {
    link:
      "https://images.unsplash.com/photo-1579201933323-54a59dfd9a0b?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MXwyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Beverly",
    age: [5, 1],
    tags: ["young", "stable"],
    shelter:"seattle animal shelter",
  },
  {
    link:
      "https://images.unsplash.com/photo-1584933126865-7283a002d430?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MnwyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Laurie",
    age: [10, 2],
    tags: ["stable", "meek"],
    shelter:"PAWS cat city",
  },
  {
    link:
      "https://images.unsplash.com/photo-1563460841400-93ea03bbdf47?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258M3wyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Maisie",
    age: [7, 10],
    tags: ["stable", "meek"],
    shelter:"Homeward Pet Adoption Center",
  },
  {
    link:
      "https://images.unsplash.com/photo-1580718834091-d98f74537c27?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258NHwyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Annecorinne",
    age: [1, 3],
    tags: ["stable", "young"],
    shelter:"Seattle Humane",
  },
  {
    link:
      "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258NXwyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Violet",
    age: [0, 5],
    tags: ["meek", "confident"],
    shelter:"Whisker city",
  },
  {
    link:
      "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258NnwyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Kerri",
    age: [1, 1],
    tags: ["friendly", "meek"],
    shelter:"Island shelter",
  },
  {
    link:
      "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258N3wyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Haily",
    age: [1, 3],
    tags: ["protective", "young"],
    shelter:"Seattle animal shelter",
  },
  {
    link:
      "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258OHwyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Aubry",
    age: [5, 2],
    tags: ["confident", "friendly"],
    shelter:"PAWS cat city",
  },
  {
    link:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258OXwyMTk1NTQzNHx8fHx8Mnw&ixlib=rb-1.2.1&w=800",
    name: "Krystyna",
    age: [0, 3],
    tags: ["confident", "protective"],
    shelter:"Homeward pet adoption center",
  },
  {
    link:
      "https://images.unsplash.com/photo-1572590285030-0ae6a4715671?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTB8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Sherill",
    age: [1, 3],
    tags: ["friendly", "meek"],
    shelter:"Seattle animal shelter",
  },
  {
    link:
      "https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTF8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Kriste",
    age: [2, 4],
    tags: ["young", "friendly"],
    shelter:"seattle humane",
  },
  {
    link:
      "https://images.unsplash.com/photo-1568035105640-89538ccccd24?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTJ8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Kirsti",
    age: [7, 1],
    tags: ["protective", "confident"],
    shelter:"Whisker city",
  },
  {
    link:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTN8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Margette",
    age: [2, 11],
    tags: ["stable", "confident"],
    shelter:"PAWS Cat city",
  },
  {
    link:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTR8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Elspeth",
    age: [3, 1],
    tags: ["confident", "meek"],
    shelter:"Seattle animal shelter",
  },
  {
    link:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTV8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Malinde",
    age: [4, 5],
    tags: ["confident", "meek"],
    shelter:"Seattle Humane",
  },
  {
    link:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTZ8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Beryle",
    age: [1, 2],
    tags: ["friendly", "protective"],
    shelter:"Island shelter",
  },
  {
    link:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTd8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Petrina",
    age: [3, 3],
    tags: ["stable", "young"],
    shelter:"Seattle animal shelter",
  },
  {
    link:
      "https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixid=MXwxNjQwODB8MHwxfGNvbGxlY3Rpb258MTh8MjE5NTU0MzR8fHx8fDJ8&ixlib=rb-1.2.1&w=800",
    name: "Hollie",
    age: [0, 4],
    tags: ["meek", "confident"],
    shelter:"Homeward pet adoption center",
  },
];

module.exports = mockProfiles;
