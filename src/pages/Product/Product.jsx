import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { menProducts, womenProducts } from '../../mocks/products';
import styles from './Product.module.css'; 
import { useParams } from 'react-router-dom';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

const Product = () => {
    const { id } = useParams('');
    const [product, setProduct] = useState([null]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const allProducts = [...womenProducts, ...menProducts];
        
        const fetchedProduct = allProducts.find((product) => product.id === parseInt(id, 10));
        setProduct(fetchedProduct);
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }   

    return (
        <div className={styles.productPage}>
            <div className={styles.container}>
                <div className={styles.productGrid}>
                    <ProductThumbnail product={product} />
                    <ProductInfo product={product} />
                </div>
            </div>
        </div>
    );
};

export default Product;