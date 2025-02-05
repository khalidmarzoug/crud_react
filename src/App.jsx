import { useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import Table from "./components/Table";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Apple iPhone 14",
      color: "Space Gray",
      category: "Smartphones",
      price: 999,
    },
    {
      id: 2,
      productName: "Nike Air Max 270",
      color: "White/Black",
      category: "Shoes",
      price: 150,
    },
    {
      id: 3,
      productName: "Sony WH-1000XM4",
      color: "Black",
      category: "Headphones",
      price: 349,
    },
    {
      id: 4,
      productName: "Samsung Galaxy Tab S8",
      color: "Silver",
      category: "Tablets",
      price: 699,
    },
    {
      id: 5,
      productName: "Adidas Ultraboost 21",
      color: "Core Black",
      category: "Shoes",
      price: 180,
    },
  ]);

  const [productsSelected, setProductsSelected] = useState([]);

  function selectProduct(product) {
    const exists = productsSelected.some((produit) => produit.id === product.id);
    if (exists) {
      setProductsSelected(productsSelected.filter((p) => p.id !== product.id));
    } else {
      const updatedProductsSelected = [...productsSelected, product];
      setProductsSelected(updatedProductsSelected);
    }
  }

  // is create clicked !! :
  const [hideCreateForm, setHideCreateForm] = useState(false);

  // let's know the action of the button :
  function action(content) {
    if (content === "Create") {
      hideCreateForm ? setHideCreateForm(false) : setHideCreateForm(true);
    } else if (content === "Delete") {
      setProducts(products.filter((item) => !productsSelected.some((p) => p.id === item.id)));
    }
  }

  // store new product :
  function store(product) {
    setProducts([...products, product]);
    setHideCreateForm(false);
  }

  return (
    <main className="w-full h-full flex flex-col justify-between items-center py-10">
      <Table
        products={products}
        productsSelected={productsSelected}
        selectProduct={selectProduct}
        hideCreateForm={hideCreateForm}
        action={action}
        store={store}
      />
      <ButtonContainer action={action} />
    </main>
  );
}

export default App;
