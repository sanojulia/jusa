import React, { useState, useEffect } from 'react';
import styles from './NewIn.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import { menProducts, womenProducts } from '../../mocks/products';
import { changeFiltering } from '../../utils/changeFiltering';
import { changeSorting } from '../../utils/changeSorting';
import { useNavigate } from 'react-router-dom';

const NewIn = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedProducts = [...womenProducts.filter(product => product.isNew), ...menProducts.filter(product => product.isNew)];
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
    setLoading(false);
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = changeFiltering(filters, products);
    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortBy) => {
    const sorted = changeSorting(sortBy, filteredProducts);
    setFilteredProducts(sorted);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.newInPage}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1>New Arrivals</h1>
          <p>{filteredProducts.length} new styles added this week</p>
        </header>

        <ProductFilters 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />

        <div className={styles.productGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} onClick={() => handleProductClick(product.id)}>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className={styles.noResults}>
            <h2>No products found</h2>
            <p>Try adjusting your filters or browse our full collection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewIn;
