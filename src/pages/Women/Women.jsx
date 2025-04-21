import React, { useState, useEffect } from 'react';
import styles from './Women.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import { womenProducts } from '../../mocks/products';
import { changeFiltering } from '../../utils/changeFiltering';
import { changeSorting } from '../../utils/changeSorting';

const Women = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedProducts = womenProducts;    
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
    setLoading(false);
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = changeFiltering(filters, filtered);
    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortBy) => {
    const sorted = changeSorting(sortBy, filteredProducts);
    setFilteredProducts(sorted);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.womenPage}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1>Women's Clothing</h1>
          <p>{filteredProducts.length} styles found</p>
        </header>

        <ProductFilters 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />

        <div className={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
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

export default Women;
