export const handleFetchProducts = ({
  querySize = 10,
  order = "desc",
  filterType,
  startAfterDoc,
  persistProducts = [],
}) => {
  return new Promise(async (resolve, reject) => {
    const apiResponse = await fetch("http://localhost:5000/api/products");

    if (apiResponse.ok) {
      const productsData = await apiResponse.json();
      resolve(productsData);
    } else {
      reject("Something went wrong, Try again later.");
    }
  });
};

export const handleFetchProduct = (productID) => {
  return new Promise(async (resolve, reject) => {
    const apiResponse = await fetch(
      `http://localhost:5000/api/products/${productID}`
    );

    if (apiResponse.ok) {
      try {
        const productData = await apiResponse.json();
        resolve(productData);
      } catch (error) {
        resolve(false);
      }
    } else {
      reject("Something went wrong, Try again later.");
    }
  });
};
