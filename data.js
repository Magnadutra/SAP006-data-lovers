export const filterSelected = (dataBase, valueGenderSelected, propriedade) =>
  dataBase.filter((dataBase) => dataBase[propriedade] === valueGenderSelected);

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
