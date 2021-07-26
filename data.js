export const filterGenderSelected = (dataBase, valueGenderSelected) =>
  dataBase.filter((dataBase) => dataBase.gender === valueGenderSelected);

export const filterSpeciesSelected = (dataBase, valueSpeciesSelected) =>
  dataBase.filter((dataBase) => dataBase.species === valueSpeciesSelected);

export const filterStatusSelected = (dataBase, valueStatusSelected) =>
  dataBase.filter((dataBase) => dataBase.status === valueStatusSelected);

export const sortOrder = (dataBase, valueSpeciesSelected) => {
  const order = dataBase.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  switch (valueSpeciesSelected) {
    case "az":
      return order
    case "za":
      return order.reverse()
  }
};
export const calcFilter = (dataBase, selectedFilter) =>
  parseFloat((selectedFilter.length * 100) / dataBase.length).toFixed(2);
