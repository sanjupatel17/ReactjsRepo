import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

// ✅ Move data outside component
const productsData = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 800 },
  { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: 750 },
  { id: 3, name: "OnePlus 12", category: "Mobile", price: 650 },
  { id: 4, name: "Google Pixel 8", category: "Mobile", price: 700 },
  { id: 5, name: "Nothing 3a pro", category: "Mobile", price: 500 },


  { id: 5, name: "MacBook Pro", category: "Laptop", price: 1500 },
  { id: 6, name: "Dell XPS 15", category: "Laptop", price: 1200 },
  { id: 7, name: "HP Spectre", category: "Laptop", price: 1100 },
  { id: 8, name: "Lenovo ThinkPad", category: "Laptop", price: 1000 },

  { id: 9, name: "Sony Headphones", category: "Accessories", price: 200 },
  { id: 10, name: "Apple Watch", category: "Accessories", price: 400 },
  { id: 11, name: "Bluetooth Speaker", category: "Accessories", price: 150 },
  { id: 12, name: "Wireless Mouse", category: "Accessories", price: 50 },

  { id: 13, name: "iPad Pro", category: "Tablet", price: 900 },
  { id: 14, name: "Samsung Tab S9", category: "Tablet", price: 850 },
  { id: 15, name: "Asus ROG Phone", category: "Mobile", price: 950 },
  { id: 16, name: "Acer Predator", category: "Laptop", price: 1400 },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    let result = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, category]);

  return (
    <div className="container">
      <h1 className="title">🛍 Product Search & Filter</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
