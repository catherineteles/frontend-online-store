export async function getCategories() {
  const requisition = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await requisition.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const requisition = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const result = await requisition.json();
  return result;
}

export async function getProductsFromQuery(query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const requisition = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const object = await requisition.json();
  const result = await object.results;
  return result;
}
