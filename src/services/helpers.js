const getQuantity = (array, id) => {
  let count = 0;
  array.forEach((product) => {
    if (product.id === id) {
      count += 1;
    }
  });
  return count;
};

export default getQuantity;
