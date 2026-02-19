import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

const useProducts = (searchTerm, category, maxPrice) => {

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch all products once
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setAllProducts(data);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // 🔹 Apply Search + Filter
  useEffect(() => {

    let filtered = allProducts;

    // 🔍 Search by title
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 📂 Filter by category
    if (category) {
      filtered = filtered.filter(product =>
        product.category === category
      );
    }

    // 💰 Filter by max price
    if (maxPrice) {
      filtered = filtered.filter(product =>
        product.price <= maxPrice
      );
    }

    setProducts(filtered);

  }, [searchTerm, category, maxPrice, allProducts]);

  return { products, loading, error };
};

export default useProducts;
