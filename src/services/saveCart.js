const savedProducts = 'saved-products';

if (!JSON.parse(localStorage.getItem(savedProducts))) {
  localStorage.setItem(savedProducts, JSON.stringify([]));
}

export const getSavedItens = () => JSON.parse(localStorage.getItem(savedProducts));

const saveItens = (savedItens) => localStorage
  .setItem(savedProducts, JSON.stringify(savedItens));

export const addItemLocal = (item) => {
  const savedItens = getSavedItens();
  saveItens([...savedItens, item]);
};

export const removeItem = (item) => {
  const savedItens = getSavedItens();
  saveItens(savedItens.filter((p) => p.id !== item.id));
};
