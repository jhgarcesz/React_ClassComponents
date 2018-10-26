const ITEMS = [
  {
    title: "Lorem",
    price: 10,
    description: "Lorem ipsum dolor sit amet, has reque abhorreant ex vis."
  },
  {
    title: "Ipsum",
    price: 15,
    description: "Lorem ipsum dolor sit amet, has reque abhorreant ex vis."
  },
  {
    title: "Dolor",
    price: 20,
    description: "Lorem ipsum dolor sit amet, has reque abhorreant ex vis."
  }
];

export const getItems = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(ITEMS), 3000);
  });
