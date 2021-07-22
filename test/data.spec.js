import { filterGenderSelected, filterStatusSelected, filterSpeciesSelected, sortOrder, calcFilter } from '../src/data.js';
const dataBaseTeste = [
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",

  },
  {
    "id": 26,
    "name": "Arthricia",
    "status": "Alive",
    "species": "Alien",
    "type": "Cat-Person",
    "gender": "Female",

  },
  {
    "id": 381,
    "name": "Woman Rick",
    "status": "Alive",
    "species": "Alien",
    "type": "Chair",
    "gender": "Female",
  },
  {
    "id": 69,
    "name": "Commander Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 252,
    "name": "Noob-Noob",
    "status": "Alive",
    "species": "Poopybutthole",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 475,
    "name": "Dancer Morty",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 492,
    "name": "Varrix",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "unknown",
  },
  {
    "id": 35,
    "name": "Bepisian",
    "status": "Alive",
    "species": "Alien",
    "type": "Bepisian",
    "gender": "unknown",
  },
  {
    "id": 104,
    "name": "Doom-Nomitron",
    "status": "Dead",
    "species": "Alien",
    "type": "Shapeshifter",
    "gender": "unknown",
  },
  {
    "id": 105,
    "name": "Dr. Glip-Glop",
    "status": "Dead",
    "species": "Alien",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 19,
    "name": "Antenna Rick",
    "status": "unknown",
    "species": "Human",
    "type": "Human with antennae",
    "gender": "Male",
  },
  {
    "id": 369,
    "name": "Tusked Assassin",
    "status": "unknown",
    "species": "Alien",
    "type": "Tuskfish",
    "gender": "Male",
  },
  {
    "id": 249,
    "name": "Mrs. Sanchez",
    "status": "unknown",
    "species": "Human",
    "type": "",
    "gender": "Female",
  },
]

describe('Testar filtro Genero', () => {
  it('retornar se é uma função', () => {
    expect(typeof filterGenderSelected).toBe('function');
  });
  it('retornar personagens femininos', () => {
    expect(filterGenderSelected(dataBaseTeste, "Female")).toMatchObject([{ "gender": "Female", "id": 3, "name": "Summer Smith", "species": "Human", "status": "Alive", "type": "" }, { "gender": "Female", "id": 26, "name": "Arthricia", "species": "Alien", "status": "Alive", "type": "Cat-Person" }, { "gender": "Female", "id": 381, "name": "Woman Rick", "species": "Alien", "status": "Alive", "type": "Chair" }, { "gender": "Female", "id": 249, "name": "Mrs. Sanchez", "species": "Human", "status": "unknown", "type": "" }]);
  });
  it('retornar personagens masculinos', () => {
    expect(filterGenderSelected(dataBaseTeste, "Male")).toMatchObject([{ "gender": "Male", "id": 69, "name": "Commander Rick", "species": "Human", "status": "Dead", "type": "" }, { "gender": "Male", "id": 252, "name": "Noob-Noob", "species": "Poopybutthole", "status": "Alive", "type": "" }, { "gender": "Male", "id": 475, "name": "Dancer Morty", "species": "Human", "status": "Alive", "type": "" }, { "gender": "Male", "id": 105, "name": "Dr. Glip-Glop", "species": "Alien", "status": "Dead", "type": "" }, { "gender": "Male", "id": 19, "name": "Antenna Rick", "species": "Human", "status": "unknown", "type": "Human with antennae" }, { "gender": "Male", "id": 369, "name": "Tusked Assassin", "species": "Alien", "status": "unknown", "type": "Tuskfish" }]);
  });
});

describe('Testar Filtro de Status', () => {
  it('retornar se é uma função', () => {
    expect(typeof filterStatusSelected).toBe('function');
  });
  it('retornar personagens unknown', () => {
    expect(filterStatusSelected(dataBaseTeste, "unknown")).toMatchObject([{ "gender": "Male", "id": 19, "name": "Antenna Rick", "species": "Human", "status": "unknown", "type": "Human with antennae" }, { "gender": "Male", "id": 369, "name": "Tusked Assassin", "species": "Alien", "status": "unknown", "type": "Tuskfish" }, { "gender": "Female", "id": 249, "name": "Mrs. Sanchez", "species": "Human", "status": "unknown", "type": "" }]);
  });
  it('retornar personagens mortos', () => {
    expect(filterStatusSelected(dataBaseTeste, "Dead")).toMatchObject([{ "gender": "Male", "id": 69, "name": "Commander Rick", "species": "Human", "status": "Dead", "type": "" }, { "gender": "unknown", "id": 104, "name": "Doom-Nomitron", "species": "Alien", "status": "Dead", "type": "Shapeshifter" }, { "gender": "Male", "id": 105, "name": "Dr. Glip-Glop", "species": "Alien", "status": "Dead", "type": "" }]);
  });
});

describe('Testar Filtro de Espécie', () => {
  it('retornar se é uma função', () => {
    expect(typeof filterSpeciesSelected).toBe('function');
  });
  it('retornar personagens humanos', () => {
    expect(filterSpeciesSelected(dataBaseTeste, "Human")).toMatchObject([{ "gender": "Female", "id": 3, "name": "Summer Smith", "species": "Human", "status": "Alive", "type": "" }, { "gender": "Male", "id": 69, "name": "Commander Rick", "species": "Human", "status": "Dead", "type": "" }, { "gender": "Male", "id": 475, "name": "Dancer Morty", "species": "Human", "status": "Alive", "type": "" }, { "gender": "Male", "id": 19, "name": "Antenna Rick", "species": "Human", "status": "unknown", "type": "Human with antennae" }, { "gender": "Female", "id": 249, "name": "Mrs. Sanchez", "species": "Human", "status": "unknown", "type": "" }]);
  });
  it('retornar personagens Bunda Cagada', () => {
    expect(filterSpeciesSelected(dataBaseTeste, "Poopybutthole")).toMatchObject([{ "gender": "Male", "id": 252, "name": "Noob-Noob", "status": "Alive", "species": "Poopybutthole", "type": "" }]);
  });
});

describe('Testar filtro de Ordenação', () => {
  it('retornar se é uma função', () => {
    expect(typeof sortOrder).toBe('function');
  });
  it('retornar ordenamento a - z', () => {
    expect(sortOrder(dataBaseTeste, "az")).toMatchObject([{ "gender": "Male", "id": 19, "name": "Antenna Rick", "species": "Human", "status": "unknown", "type": "Human with antennae" }, { "gender": "Female", "id": 26, "name": "Arthricia", "species": "Alien", "status": "Alive", "type": "Cat-Person" }, { "gender": "unknown", "id": 35, "name": "Bepisian", "species": "Alien", "status": "Alive", "type": "Bepisian" }, { "gender": "Male", "id": 69, "name": "Commander Rick", "species": "Human", "status": "Dead", "type": "" }, { "gender": "Male", "id": 475, "name": "Dancer Morty", "species": "Human", "status": "Alive", "type": "" },
    { "gender": "unknown", "id": 104, "name": "Doom-Nomitron", "species": "Alien", "status": "Dead", "type": "Shapeshifter" }, { "gender": "Male", "id": 105, "name": "Dr. Glip-Glop", "species": "Alien", "status": "Dead", "type": "" }, { "gender": "Female", "id": 249, "name": "Mrs. Sanchez", "species": "Human", "status": "unknown", "type": "" }, { "gender": "Male", "id": 252, "name": "Noob-Noob", "species": "Poopybutthole", "status": "Alive", "type": "" }, { "gender": "Female", "id": 3, "name": "Summer Smith", "species": "Human", "status": "Alive", "type": "" },
    { "gender": "Male", "id": 369, "name": "Tusked Assassin", "species": "Alien", "status": "unknown", "type": "Tuskfish" }, { "gender": "unknown", "id": 492, "name": "Varrix", "species": "Alien", "status": "Alive", "type": "" }, { "gender": "Female", "id": 381, "name": "Woman Rick", "species": "Alien", "status": "Alive", "type": "Chair" }]);
  });
  it('retornar ordenamento z - a', () => {
    expect(sortOrder(dataBaseTeste, "za")).toMatchObject([{ "gender": "Female", "id": 381, "name": "Woman Rick", "species": "Alien", "status": "Alive", "type": "Chair" }, { "gender": "unknown", "id": 492, "name": "Varrix", "species": "Alien", "status": "Alive", "type": "" }, { "gender": "Male", "id": 369, "name": "Tusked Assassin", "species": "Alien", "status": "unknown", "type": "Tuskfish" }, { "gender": "Female", "id": 3, "name": "Summer Smith", "species": "Human", "status": "Alive", "type": "" }, { "gender": "Male", "id": 252, "name": "Noob-Noob", "species": "Poopybutthole", "status": "Alive", "type": "" },
    { "gender": "Female", "id": 249, "name": "Mrs. Sanchez", "species": "Human", "status": "unknown", "type": "" }, { "gender": "Male", "id": 105, "name": "Dr. Glip-Glop", "species": "Alien", "status": "Dead", "type": "" }, { "gender": "unknown", "id": 104, "name": "Doom-Nomitron", "species": "Alien", "status": "Dead", "type": "Shapeshifter" }, { "gender": "Male", "id": 475, "name": "Dancer Morty", "species": "Human", "status": "Alive", "type": "" }, { "gender": "Male", "id": 69, "name": "Commander Rick", "species": "Human", "status": "Dead", "type": "" },
    { "gender": "unknown", "id": 35, "name": "Bepisian", "species": "Alien", "status": "Alive", "type": "Bepisian" }, { "gender": "Female", "id": 26, "name": "Arthricia", "species": "Alien", "status": "Alive", "type": "Cat-Person" }, { "gender": "Male", "id": 19, "name": "Antenna Rick", "species": "Human", "status": "unknown", "type": "Human with antennae" }]);
  });
});

describe('Testar cálculo agregado', () => {
  it('retornar porcentagem de personagens femininos', () => {
    const selectedGender = filterGenderSelected(dataBaseTeste, "Female")
    expect(calcFilter(dataBaseTeste, selectedGender)).toBe("30.77");
  });
  it('retornar porcentagem de personagens masculinos', () => {
    const selectedGender = filterGenderSelected(dataBaseTeste, "Male")
    expect(calcFilter(dataBaseTeste, selectedGender)).toBe("46.15");
  });
  it('retornar porcentagem de personagens vivos', () => {
    const selectedStatus = filterStatusSelected(dataBaseTeste, "Alive")
    expect(calcFilter(dataBaseTeste, selectedStatus)).toBe("53.85");
  });
  it('retornar porcentagem de personagens mortos', () => {
    const selectedStatus = filterStatusSelected(dataBaseTeste, "Dead")
    expect(calcFilter(dataBaseTeste, selectedStatus)).toBe("23.08");
  });
  it('retornar porcentagem de personagens Bunda Cagada', () => {
    const selectedSpecies = filterSpeciesSelected(dataBaseTeste, "Poopybutthole")
    expect(calcFilter(dataBaseTeste, selectedSpecies)).toBe("7.69");
  });
  it('retornar porcentagem de personagens Humano', () => {
    const selectedSpecies = filterSpeciesSelected(dataBaseTeste, "Human")
    expect(calcFilter(dataBaseTeste, selectedSpecies)).toBe("38.46");
  });
}); 